/**
 * Portfolio Main Logic — Spencer Gabor Physics, Curved Carousel & Case Study Engine
 */

import {
  PROFILE,
  COLOR_THEMES,
  FEATURED_CASE_STUDIES,
  MORE_WORK_PROJECTS,
  PRODUCTION_PROCESS
} from './data.js';

// --- Global Application State ---
const state = {
  currentTheme: 'minimal-mono',
  activeCaseStudyIndex: 0,
  carouselOffset: 0,
  carouselIndex: 0,
  activeFilter: 'all',
  searchQuery: '',
  visibleMoreWorkCount: 15,
  isVideoPlaying: false,
  animationFrameId: null,
  mouse: { x: 0, y: 0, targetX: 0, targetY: 0, velocity: 0 }
};

// --- DOM References ---
const DOM = {
  root: document.documentElement,
  heroImages: document.getElementById('heroImages'),
  carouselContainer: document.getElementById('carouselContainer'),
  carouselTrack: document.getElementById('carouselTrack'),
  prevSlideBtn: document.getElementById('prevSlide'),
  nextSlideBtn: document.getElementById('nextSlide'),
  carouselDots: null, /* populated after render */
  processGrid: document.getElementById('processGrid'),
  filterBar: document.getElementById('filterBar'),
  searchInput: document.getElementById('searchInput'),
  moreWorkGrid: document.getElementById('moreWorkGrid'),
  loadMoreBtn: document.getElementById('loadMoreBtn'),
  themePicker: document.getElementById('themePicker'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themePalette: document.getElementById('themePalette'),
  caseStudyModal: document.getElementById('caseStudyModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  modalBreadcrumb: document.getElementById('modalBreadcrumb'),
  modalBodyContent: document.getElementById('modalBodyContent'),
  quickVideoModal: document.getElementById('quickVideoModal'),
  quickVideoCloseBtn: document.getElementById('quickVideoCloseBtn'),
  quickVideoBreadcrumb: document.getElementById('quickVideoBreadcrumb'),
  quickVideoBody: document.getElementById('quickVideoBody')
};

// ==========================================================================
// 1. HERO 4 DYNAMIC IMAGES (SPENCER GABOR INTERACTIVE PHYSICS)
//    - Real-time cursor tracking & horizontal mouse velocity detection.
//    - Dynamic physics offsets (--offsetX, --offsetY) and momentum sway (--velocity).
//    - Pure interactive visual dynamism inspired by Spencer Gabor.
// ==========================================================================
function initHeroPhysics() {
  const hero = document.getElementById('hero');
  const container = DOM.heroImages || document.getElementById('heroImages');
  if (!container) return;

  const images = Array.from(container.querySelectorAll('.hero__image'));
  if (!images.length) return;

  // Track per-card interactive spring state
  const cardsData = images.map((el, idx) => {
    return {
      el,
      idx,
      img: el.querySelector('img'),
      centerX: 0,
      centerY: 0,
      width: 0,
      height: 0,
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
      currentRot: 0,
      targetRot: 0,
      vx: 0,
      vy: 0,
      springVx: 0,
      springVy: 0,
      vRot: 0,
      isDragging: false,
      dragStartX: 0,
      dragStartY: 0
    };
  });

  // Calculate card center coordinates in viewport space
  function updateCardCenters() {
    cardsData.forEach(card => {
      const rect = card.el.getBoundingClientRect();
      card.centerX = rect.left + rect.width * 0.5;
      card.centerY = rect.top + rect.height * 0.5;
      card.width = rect.width;
      card.height = rect.height;
    });
  }

  let isHeroVisible = true;
  let heroRafId = null;

  if ('IntersectionObserver' in window && hero) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isHeroVisible = entry.isIntersecting;
        if (isHeroVisible && !heroRafId) {
          updateCardCenters();
          heroRafId = requestAnimationFrame(updatePhysics);
        }
      });
    }, { threshold: 0.05 });
    heroObserver.observe(hero);
  }

  updateCardCenters();

  let resizeThrottleId = null;
  window.addEventListener('resize', () => {
    if (!resizeThrottleId) {
      resizeThrottleId = requestAnimationFrame(() => {
        updateCardCenters();
        resizeThrottleId = null;
      });
    }
  }, { passive: true });

  let scrollThrottleId = null;
  window.addEventListener('scroll', () => {
    if (!isHeroVisible) return;
    if (!scrollThrottleId) {
      scrollThrottleId = requestAnimationFrame(() => {
        updateCardCenters();
        scrollThrottleId = null;
      });
    }
  }, { passive: true });

  // Pointer state & per-frame movement tracking
  let pointerX = window.innerWidth * 0.5;
  let pointerY = window.innerHeight * 0.5;
  let prevFrameX = pointerX;
  let prevFrameY = pointerY;
  let hasPointerMoved = false;

  function onPointerMove(clientX, clientY) {
    pointerX = clientX;
    pointerY = clientY;
    if (!hasPointerMoved) {
      prevFrameX = clientX;
      prevFrameY = clientY;
      hasPointerMoved = true;
    }
  }

  window.addEventListener('pointermove', (e) => {
    onPointerMove(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    // Reset frame delta smoothly
    prevFrameX = pointerX;
    prevFrameY = pointerY;
  }, { passive: true });

  // Touch support for mobile devices
  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // Direct card grab / drag interaction (with physical momentum)
  cardsData.forEach(card => {
    card.el.addEventListener('pointerdown', (e) => {
      // On touch devices, allow natural vertical page scrolling without locking pointer
      if (e.pointerType === 'touch') {
        card.vx = (Math.random() - 0.5) * 6;
        card.vy = (Math.random() - 0.5) * 4;
        return;
      }
      card.isDragging = true;
      card.dragStartX = e.clientX - card.currentX;
      card.dragStartY = e.clientY - card.currentY;
      card.vx = 0;
      card.vy = 0;
      card.springVx = 0;
      card.springVy = 0;
      card.el.setPointerCapture?.(e.pointerId);
    });

    card.el.addEventListener('pointerup', (e) => {
      if (card.isDragging) {
        card.isDragging = false;
        card.el.releasePointerCapture?.(e.pointerId);
      }
    });

    card.el.addEventListener('pointercancel', () => {
      card.isDragging = false;
    });
  });

  // Spencer Gabor Harmonic Spring Physics constants
  const SPRING_STIFFNESS = 0.048; // Subtle, elegant restoring force
  const SPRING_DAMPING = 0.82;    // Prevents jitter, smooth settling
  const VELOCITY_DECAY = 0.88;    // Heavy physical mass & momentum decay
  const MAX_FRAME_DELTA = 28;     // Clamps fast flicks to maintain weight

  function updatePhysics() {
    // Measure cursor motion since previous frame
    const deltaX = hasPointerMoved ? pointerX - prevFrameX : 0;
    const deltaY = hasPointerMoved ? pointerY - prevFrameY : 0;
    prevFrameX = pointerX;
    prevFrameY = pointerY;

    // Clamp frame motion so swift sweeps remain controlled and weighted
    const clampedDeltaX = Math.max(-MAX_FRAME_DELTA, Math.min(MAX_FRAME_DELTA, deltaX));
    const clampedDeltaY = Math.max(-MAX_FRAME_DELTA, Math.min(MAX_FRAME_DELTA, deltaY));

    cardsData.forEach((card, idx) => {
      if (card.isDragging) {
        card.currentX = pointerX - card.dragStartX;
        card.currentY = pointerY - card.dragStartY;
        card.vx = clampedDeltaX * 0.6;
        card.vy = clampedDeltaY * 0.6;
        card.el.style.setProperty('--offsetX', card.currentX.toFixed(2));
        card.el.style.setProperty('--offsetY', card.currentY.toFixed(2));
        card.el.style.setProperty('--velocity', (card.vx * 0.3).toFixed(2));
        return;
      }

      // Proximity to card center (normalized by viewport radius)
      const u = (pointerX - card.centerX) / (window.innerWidth * 0.45);
      const v = (pointerY - card.centerY) / (window.innerHeight * 0.45);
      const dist = Math.hypot(u, v);

      // Spencer Gabor signature power-of-6 steep proximity falloff:
      // At dist >= 1, k is 0. Within close proximity, gentle impulse is transferred.
      const k = Math.pow(Math.max(0, 1 - dist), 6) * 0.32;

      // Impart movement impulse directly to velocity
      card.vx += clampedDeltaX * k;
      card.vy += clampedDeltaY * k;

      // Heavy physical momentum damping
      card.vx *= VELOCITY_DECAY;
      card.vy *= VELOCITY_DECAY;
      card.currentX += card.vx;
      card.currentY += card.vy;

      // Damped restoring harmonic spring pulling strictly back to origin (0, 0)
      const diffX = 0 - card.currentX;
      const diffY = 0 - card.currentY;
      card.springVx = (card.springVx || 0) * SPRING_DAMPING + diffX * SPRING_STIFFNESS;
      card.springVy = (card.springVy || 0) * SPRING_DAMPING + diffY * SPRING_STIFFNESS;
      card.currentX += card.springVx;
      card.currentY += card.springVy;

      // Gentle organic angular tilt from velocity difference
      const targetTilt = (card.vx - card.vy) * 0.22;
      card.currentRot += (targetTilt - card.currentRot) * 0.2;

      card.el.style.setProperty('--offsetX', card.currentX.toFixed(2));
      card.el.style.setProperty('--offsetY', card.currentY.toFixed(2));
      card.el.style.setProperty('--velocity', card.currentRot.toFixed(2));
    });

    if (!isHeroVisible) {
      heroRafId = null;
      return;
    }
    heroRafId = requestAnimationFrame(updatePhysics);
  }

  // Trigger Spencer Gabor Mount Sequence
  requestAnimationFrame(() => {
    updateCardCenters();
    // Trigger CSS mounting transition
    if (hero) {
      setTimeout(() => {
        hero.setAttribute('mounted', 'true');
      }, 60);
    }
  });

  heroRafId = requestAnimationFrame(updatePhysics);
}

// ==========================================================================
// 1b. HERO ROLE DISPLAY (Interactive subtle highlight)
// ==========================================================================
function initRoleTicker() {
  const lines = document.querySelectorAll('.hero__role-line');
  lines.forEach(line => {
    line.style.transition = 'color 0.3s ease, opacity 0.3s ease, transform 0.3s ease';
    line.addEventListener('pointerenter', () => {
      line.style.color = 'var(--color-onPrimary)';
      line.style.opacity = '1';
    });
    line.addEventListener('pointerleave', () => {
      line.style.color = '';
      line.style.opacity = '';
    });
  });
}

// ==========================================================================
// 1c. HERO DYNAMIC WORD ROTATOR (Scripting, Direction, Scaling)
// ==========================================================================
function initWordRotator() {
  const rotator = document.getElementById('heroWordRotator');
  const track = document.getElementById('heroRotatorTrack');
  if (!rotator || !track) return;

  const words = Array.from(track.querySelectorAll('.hero__rotator-word'));
  const realCount = words.length - 1; // 3 words (Scripting, Direction, Scaling)
  if (realCount <= 0) return;

  let currentIndex = 0;
  let intervalId = null;
  let isTransitioning = false;
  let isPaused = false;

  // Set the container width dynamically to snugly fit current active word
  function updateWidth(index, animate = true) {
    const targetWord = words[index % realCount];
    if (!targetWord) return;
    const wordWidth = targetWord.getBoundingClientRect().width;
    if (wordWidth > 0) {
      if (!animate) {
        const prevTransition = rotator.style.transition;
        rotator.style.transition = 'none';
        rotator.style.width = `${Math.ceil(wordWidth)}px`;
        void rotator.offsetHeight;
        rotator.style.transition = prevTransition;
      } else {
        rotator.style.width = `${Math.ceil(wordWidth)}px`;
      }
    }
  }

  // Smooth scroll to next word
  function stepToNextWord() {
    if (isTransitioning || isPaused) return;
    isTransitioning = true;
    currentIndex++;

    const percentPerWord = 100 / words.length; // 20%
    const targetTranslateY = -(currentIndex * percentPerWord);

    track.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
    track.style.transform = `translateY(${targetTranslateY}%)`;
    updateWidth(currentIndex, true);

    setTimeout(() => {
      // Loop seamlessly from clone back to index 0
      if (currentIndex >= realCount) {
        currentIndex = 0;
        track.style.transition = 'none';
        track.style.transform = 'translateY(0%)';
        void track.offsetHeight;
        track.style.transition = '';
      }
      isTransitioning = false;
    }, 660);
  }

  function startTimer() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(stepToNextWord, 2200);
  }

  function stopTimer() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Initial sizing after mount and fonts ready
  const initializeDimensions = () => {
    updateWidth(0, false);
  };

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(initializeDimensions);
  } else {
    setTimeout(initializeDimensions, 100);
  }

  // Recalculate width on resize
  window.addEventListener('resize', () => {
    updateWidth(currentIndex, false);
  });

  // Pause on hover
  rotator.addEventListener('pointerenter', () => {
    isPaused = true;
  });
  rotator.addEventListener('pointerleave', () => {
    isPaused = false;
  });

  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopTimer();
    } else {
      startTimer();
    }
  });

  // Start rotation
  setTimeout(() => {
    initializeDimensions();
    startTimer();
  }, 1600);
}

// ==========================================================================
// ==========================================================================
// 2. CURVED CIRCULAR ARC CAROUSEL WHEEL (Featured Work)
//    - Cards are placed in a horizontal track with aesthetic packing (gap).
//    - Center card is elevated, upright & active at apex of circle.
//    - Neighbor cards rotate along the circle tangent & droop down smoothly.
//    - Silky smooth spring-lerp animation in requestAnimationFrame with inertia/drag.
// ==========================================================================

const carousel = {
  index: 0,           // target integer index (0..total-1)
  currentPos: 0,      // smooth animated fractional position (lerps to targetPos)
  targetPos: 0,       // target position to interpolate towards
  rafId: null,
  slides: [],
  total: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartPos: 0,
  dragLastX: 0,
  dragVelocity: 0
};

function renderFeaturedCarousel() {
  if (!DOM.carouselTrack) return;
  DOM.carouselTrack.innerHTML = '';

  carousel.slides = [];
  carousel.total  = FEATURED_CASE_STUDIES.length;

  // Default to the Tadaaa! (BZOLVE) campaign in center so users can scroll left and right
  const tadaaIdx = FEATURED_CASE_STUDIES.findIndex(s => s.id === 'bzolve' || s.slug === 'bzolve');
  const defaultIdx = tadaaIdx !== -1 ? tadaaIdx : 1;

  FEATURED_CASE_STUDIES.forEach((study, idx) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.setAttribute('data-index', idx);
    if (idx === defaultIdx) slide.classList.add('is-active');

    slide.innerHTML = `
      <article class="slide-card" data-id="${study.id}">
        <div class="slide-card__media">
          <img src="${study.heroImage}" alt="${study.title}" loading="${idx < 2 ? 'eager' : 'lazy'}">
          <div class="slide-card__gradient"></div>
          <div class="slide-card__badges">
            <span class="slide-card__tag">${study.category || study.brand}</span>
            <div class="slide-play-badge" title="Watch Commercial Breakdown">
              <svg width="15" height="15" viewBox="0 0 24 24">
                <polygon points="6 4 20 12 6 20 6 4"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div class="slide-card__info">
          <div class="slide-card__product">${study.brand} · ${study.product}</div>
          <h4 class="slide-card__title">${study.title}</h4>
          <p class="slide-card__headline">${study.headline || ''}</p>
          <div class="slide-card__cta">
            <span>View Case Study</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </article>
    `;

    // Click handler: if clicking a neighbor, smooth scroll to center it; if active, open modal
    slide.addEventListener('click', () => {
      if (Math.abs(carousel.dragVelocity) > 2) return; // avoid triggering after quick swipe
      const dist = Math.abs(idx - carousel.currentPos);
      if (dist > 0.45) {
        goToSlide(idx);
      } else {
        openCaseStudy(study.id);
      }
    });

    DOM.carouselTrack.appendChild(slide);
    carousel.slides.push(slide);
  });

  // Build dot indicators
  const dotsEl = document.getElementById('carouselDots');
  if (dotsEl) {
    dotsEl.innerHTML = '';
    carousel.slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === defaultIdx ? ' is-active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsEl.appendChild(dot);
    });
  }

  // Reset positions & start continuous smooth animation loop
  carousel.index = defaultIdx;
  carousel.currentPos = defaultIdx;
  carousel.targetPos = defaultIdx;

  if (carousel.rafId) cancelAnimationFrame(carousel.rafId);
  runCarouselLoop();

  // Apply initial placement once DOM has calculated dimensions
  requestAnimationFrame(() => {
    applyCarouselPositions(defaultIdx);
    updateCarouselDots();
    updateCarouselArrows();
  });
}

/* Navigate to a slide index */
function goToSlide(idx) {
  carousel.index = Math.max(0, Math.min(carousel.total - 1, idx));
  carousel.targetPos = carousel.index;
  updateCarouselDots();
  updateCarouselArrows();
}

/* Update dot states */
function updateCarouselDots() {
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((d, i) => d.classList.toggle('is-active', i === carousel.index));
}

/* Update arrow disabled states */
function updateCarouselArrows() {
  if (DOM.prevSlideBtn) DOM.prevSlideBtn.disabled = (carousel.index === 0);
  if (DOM.nextSlideBtn) DOM.nextSlideBtn.disabled = (carousel.index === carousel.total - 1);
}

/* Returns the pixel distance between adjacent card centers */
function getSlideStride() {
  const first = carousel.slides[0];
  if (!first) return 360;
  const gap = DOM.carouselTrack ? (parseFloat(getComputedStyle(DOM.carouselTrack).gap) || 32) : 32;
  return first.offsetWidth + gap;
}

/* Apply curved circular arc transforms based on continuous fractional position */
function applyCarouselPositions(pos) {
  if (!DOM.carouselContainer || !DOM.carouselTrack || !carousel.slides.length) return;
  const containerW = DOM.carouselContainer.offsetWidth;
  const first = carousel.slides[0];
  const slideW = first ? first.offsetWidth : 330;
  const gap = parseFloat(getComputedStyle(DOM.carouselTrack).gap) || 32;
  const stride = slideW + gap;

  // Center the active card in the viewport
  const trackX = (containerW / 2) - (slideW / 2) - (pos * stride);
  DOM.carouselTrack.style.transform = `translateX(${trackX}px)`;

  carousel.slides.forEach((slide, idx) => {
    const dist = idx - pos; // continuous distance: e.g. -2.0 to +2.0
    const absDist = Math.abs(dist);
    const transformPx = dist * stride; // pixel distance matching Spencer Gabor --transform

    // Spencer Gabor exact curve formulas:
    // rotate: calc(var(--transform) * 0.03deg)
    // transform-origin: 50% 70vw
    // translate droop: calc(cos(var(--transform) * (3.14 / 1000)) * -3rem + 3rem)
    const curveRot = transformPx * 0.028;
    const curveCosAngle = Math.min(Math.PI, Math.abs(transformPx) * (Math.PI / 1000));
    const curveY = (1 - Math.cos(curveCosAngle)) * 48; // -3rem + 3rem droop in px

    // Opacity: opacity: cos(var(--transform) * (3.14 / 600))
    const opacityCosAngle = Math.min(Math.PI * 0.46, Math.abs(transformPx) * (Math.PI / 680));
    const opacity = Math.max(0.38, Math.cos(opacityCosAngle));

    // Scale
    const scale = Math.max(0.84, 1 - absDist * 0.05);

    // Stacking order
    const zIndex = Math.round(60 - absDist * 10);

    slide.style.transformOrigin = '50% 70vw';
    slide.style.transform = `translateY(${curveY}px) rotate(${curveRot}deg) scale(${scale})`;
    slide.style.opacity = String(opacity);
    slide.style.zIndex = String(zIndex);
    slide.classList.toggle('is-active', absDist < 0.45);
  });
}

/* Silky smooth RAF animation loop with spring lerp */
function runCarouselLoop() {
  const LERP = 0.11; // smooth spring response
  let lastTs = performance.now();

  function tick(ts) {
    const dt = Math.min((ts - lastTs) / (1000 / 60), 2.5);
    lastTs = ts;
    const speed = 1 - Math.pow(1 - LERP, dt);

    const diff = carousel.targetPos - carousel.currentPos;

    if (Math.abs(diff) > 0.0003 || carousel.isDragging) {
      carousel.currentPos += diff * (carousel.isDragging ? 0.35 : speed);
      applyCarouselPositions(carousel.currentPos);
    } else if (carousel.currentPos !== carousel.targetPos) {
      carousel.currentPos = carousel.targetPos;
      applyCarouselPositions(carousel.currentPos);
    }

    carousel.rafId = requestAnimationFrame(tick);
  }

  carousel.rafId = requestAnimationFrame(tick);
}

function initCarouselControls() {
  /* Arrow buttons */
  if (DOM.prevSlideBtn) {
    DOM.prevSlideBtn.addEventListener('click', () => goToSlide(carousel.index - 1));
  }
  if (DOM.nextSlideBtn) {
    DOM.nextSlideBtn.addEventListener('click', () => goToSlide(carousel.index + 1));
  }

  updateCarouselArrows();

  /* Keyboard arrow nav */
  window.addEventListener('keydown', (e) => {
    const container = DOM.carouselContainer;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goToSlide(carousel.index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goToSlide(carousel.index + 1); }
  });

  /* Mouse drag */
  DOM.carouselContainer.addEventListener('mousedown', (e) => {
    carousel.isDragging = true;
    carousel.dragStartX = e.clientX;
    carousel.dragLastX = e.clientX;
    carousel.dragStartPos = carousel.targetPos;
    carousel.dragVelocity = 0;
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!carousel.isDragging) return;
    const dx = e.clientX - carousel.dragLastX;
    carousel.dragVelocity = dx;
    carousel.dragLastX = e.clientX;

    const totalDelta = carousel.dragStartX - e.clientX;
    const stride = getSlideStride();
    carousel.targetPos = carousel.dragStartPos + (totalDelta / stride);

    // Soft bounds resistance
    carousel.targetPos = Math.max(-0.35, Math.min(carousel.total - 1 + 0.35, carousel.targetPos));
  });

  window.addEventListener('mouseup', () => {
    if (!carousel.isDragging) return;
    commitDrag();
  });

  /* Touch drag */
  DOM.carouselContainer.addEventListener('touchstart', (e) => {
    if (!e.touches.length) return;
    carousel.isDragging = true;
    carousel.dragStartX = e.touches[0].clientX;
    carousel.dragLastX = e.touches[0].clientX;
    carousel.dragStartPos = carousel.targetPos;
    carousel.dragVelocity = 0;
  }, { passive: true });

  DOM.carouselContainer.addEventListener('touchmove', (e) => {
    if (!carousel.isDragging || !e.touches.length) return;
    const clientX = e.touches[0].clientX;
    const dx = clientX - carousel.dragLastX;
    carousel.dragVelocity = dx;
    carousel.dragLastX = clientX;

    const totalDelta = carousel.dragStartX - clientX;
    const stride = getSlideStride();
    carousel.targetPos = carousel.dragStartPos + (totalDelta / stride);
    carousel.targetPos = Math.max(-0.35, Math.min(carousel.total - 1 + 0.35, carousel.targetPos));
  }, { passive: true });

  DOM.carouselContainer.addEventListener('touchend', () => {
    if (!carousel.isDragging) return;
    commitDrag();
  }, { passive: true });

  /* Commit a drag: snap to nearest slide with inertia */
  function commitDrag() {
    carousel.isDragging = false;
    let snapIndex = Math.round(carousel.targetPos - (carousel.dragVelocity / 160));
    snapIndex = Math.max(0, Math.min(carousel.total - 1, snapIndex));
    goToSlide(snapIndex);
    carousel.dragVelocity = 0;
  }

  /* Wheel horizontal scroll to navigate */
  let wheelTimer = null;
  DOM.carouselContainer.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
      e.preventDefault();
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        const dir = (e.deltaX || e.deltaY) > 0 ? 1 : -1;
        goToSlide(carousel.index + dir);
      }, 50);
    }
  }, { passive: false });

  /* Responsive update */
  window.addEventListener('resize', () => {
    applyCarouselPositions(carousel.currentPos);
  });

  if (window.ResizeObserver && DOM.carouselContainer) {
    const ro = new ResizeObserver(() => applyCarouselPositions(carousel.currentPos));
    ro.observe(DOM.carouselContainer);
  }
}

// ==========================================================================
// 3. CASE STUDY DETAIL MODAL ENGINE (ALL 7 TAKES & VIDEO SHOWCASE)
// ==========================================================================
function openCaseStudy(studyId) {
  const study = FEATURED_CASE_STUDIES.find(s => s.id === studyId || s.slug === studyId);
  if (!study) return;

  state.activeCaseStudyIndex = FEATURED_CASE_STUDIES.indexOf(study);

  // Set breadcrumb
  if (DOM.modalBreadcrumb) {
    DOM.modalBreadcrumb.textContent = `Case Study · ${study.brand} ${study.product}`;
  }

  // Render modal content
  DOM.modalBodyContent.innerHTML = generateCaseStudyHTML(study);

  // Activate video canvas / interactive player
  initCustomVideoPlayer(study);

  // Open modal with smooth animation
  DOM.caseStudyModal.classList.add('active');
  DOM.caseStudyModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Attach next/prev handlers inside modal
  const prevModalBtn = document.getElementById('modalPrevStudy');
  const nextModalBtn = document.getElementById('modalNextStudy');

  if (prevModalBtn) {
    prevModalBtn.addEventListener('click', () => {
      const prevIdx = (state.activeCaseStudyIndex - 1 + FEATURED_CASE_STUDIES.length) % FEATURED_CASE_STUDIES.length;
      openCaseStudy(FEATURED_CASE_STUDIES[prevIdx].id);
    });
  }

  if (nextModalBtn) {
    nextModalBtn.addEventListener('click', () => {
      const nextIdx = (state.activeCaseStudyIndex + 1) % FEATURED_CASE_STUDIES.length;
      openCaseStudy(FEATURED_CASE_STUDIES[nextIdx].id);
    });
  }
}

function closeCaseStudy() {
  DOM.caseStudyModal.classList.remove('active');
  DOM.caseStudyModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  // Stop video playback & canvas animation
  state.isVideoPlaying = false;
  if (state.animationFrameId) cancelAnimationFrame(state.animationFrameId);
  // Cleanly unmount active video/iframe to kill background audio and network consumption
  const videoFrame = document.getElementById('videoFrame');
  if (videoFrame) {
    videoFrame.innerHTML = '';
  }
}

// ==========================================================================
// VIDEO SOURCE PARSER & HIGH-PERFORMANCE FACADE ENGINE
// ==========================================================================
let videoConnectionsWarmed = false;
export function warmVideoConnections() {
  if (videoConnectionsWarmed) return;
  videoConnectionsWarmed = true;
  const preconnectDomains = [
    'https://www.youtube-nocookie.com',
    'https://i.ytimg.com',
    'https://player.vimeo.com'
  ];
  preconnectDomains.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

export function parseVideoSource(url) {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  // 1. YouTube Shorts: youtube.com/shorts/{id} or m.youtube.com/shorts/{id}
  const shortsMatch = trimmed.match(/(?:youtube\.com|m\.youtube\.com)\/shorts\/([a-zA-Z0-9_-]{11})/i);
  if (shortsMatch) {
    const id = shortsMatch[1];
    return {
      provider: 'youtube',
      id: id,
      isShort: true,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`,
      thumbnailUrl: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      fallbackThumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      aspectRatio: '9:16',
      badge: '9:16 Vertical Reel · YouTube'
    };
  }

  // 2. Standard YouTube: youtu.be/{id}, youtube.com/watch?v={id}, youtube.com/embed/{id}
  const ytMatch = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([a-zA-Z0-9_-]{11})/i);
  if (ytMatch) {
    const id = ytMatch[1];
    return {
      provider: 'youtube',
      id: id,
      isShort: false,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`,
      thumbnailUrl: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      fallbackThumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      aspectRatio: '16:9',
      badge: '16:9 Commercial · YouTube'
    };
  }

  // 3. Vimeo: vimeo.com/{id}
  const vimeoMatch = trimmed.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)/i);
  if (vimeoMatch) {
    const id = vimeoMatch[1];
    return {
      provider: 'vimeo',
      id: id,
      isShort: false,
      embedUrl: `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1`,
      thumbnailUrl: null,
      fallbackThumbnail: null,
      aspectRatio: '16:9',
      badge: 'Vimeo HD'
    };
  }

  // 4. Direct video files (.mp4, .webm, .ogg, .mov, blob, data)
  if (trimmed.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i) || trimmed.startsWith('blob:') || trimmed.startsWith('data:')) {
    return {
      provider: 'direct',
      id: null,
      isShort: false,
      embedUrl: trimmed,
      thumbnailUrl: null,
      fallbackThumbnail: null,
      aspectRatio: '16:9',
      badge: 'Direct Video MP4'
    };
  }

  // 5. Generic embed URL
  return {
    provider: 'generic',
    id: null,
    isShort: false,
    embedUrl: trimmed,
    thumbnailUrl: null,
    fallbackThumbnail: null,
    aspectRatio: '16:9',
    badge: 'Web Video'
  };
}

function generateCaseStudyHTML(study) {
  const videoInfo = study.videoUrl ? parseVideoSource(study.videoUrl) : null;
  const isVertical = study.aspectRatio === '9:16' || videoInfo?.isShort || study.format?.includes('9:16') || study.format?.includes('Vertical');
  const posterImg = study.demoThumbnail || study.heroImage || videoInfo?.fallbackThumbnail || '';

  return `
    <!-- Modal Hero Headline & Metadata -->
    <div class="case-hero-header">
      <div class="case-brand-tag">${study.brand} · ${study.category}</div>
      <h2 class="case-title">${study.title}</h2>
      <p class="case-headline-quote">${study.headline}</p>

      <div class="case-meta-grid">
        <div class="meta-field">
          <span class="meta-field-label">Creative Role</span>
          <span class="meta-field-val">${study.role}</span>
        </div>
        <div class="meta-field">
          <span class="meta-field-label">Brand & Product</span>
          <span class="meta-field-val">${study.brand} · ${study.product}</span>
        </div>
        <div class="meta-field">
          <span class="meta-field-label">Asset Format</span>
          <span class="meta-field-val">${study.format}</span>
        </div>
      </div>
    </div>

    <!-- Interactive Commercial Video Player Showcase -->
    <div class="video-showcase-box ${isVertical ? 'vertical-theater' : ''}" id="videoShowcaseBox">
      <!-- Ambient blurred glow backdrop -->
      <div class="video-ambient-glow" id="videoAmbientGlow" style="background-image: url('${posterImg}');"></div>

      <div class="video-player-frame ${isVertical ? 'is-vertical' : ''}" id="videoFrame" data-aspect="${isVertical ? '9:16' : '16:9'}">
        ${study.videoUrl ? `
          <!-- Facade: Instant Zero-Overload Poster + Glow Play Trigger -->
          <img src="${posterImg}" class="video-poster-img" id="videoPoster" alt="${study.title}" loading="lazy">
          <div class="video-facade-overlay" id="facadeOverlay" title="Click to Play Commercial">
            <div class="video-play-btn-glow"></div>
            <div class="video-play-btn-big" id="mainPlayBtn">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <span class="video-play-label">▶ Play Commercial (${study.videoDuration || '0:36'})</span>
          </div>
        ` : `
          <canvas id="videoCanvas" width="960" height="540" style="width: 100%; height: 100%; display: block;"></canvas>
          <img src="${study.heroImage}" class="video-poster-img" id="videoPoster" alt="${study.title}">
          <div class="video-play-btn-big" id="mainPlayBtn" title="Play Commercial Preview">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        `}
      </div>

      <!-- Video Control Bar (Active for Canvas simulation or secondary actions) -->
      <div class="video-controls-bar" id="videoControlsBar" style="${study.videoUrl ? 'display: none;' : ''}">
        <div class="video-ctrl-btns">
          <button class="ctrl-btn" id="ctrlPlayToggle" title="Play/Pause">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" id="playIconSvg">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <span class="video-timecode" id="videoTimecode">00:00 / ${study.videoDuration}</span>
        </div>

        <div class="video-timeline" id="videoTimeline">
          <div class="video-timeline-fill" id="timelineFill"></div>
        </div>

        <div class="video-ctrl-btns">
          <button class="ctrl-btn" id="ctrlSoundToggle" title="Toggle Audio FX">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </button>
        </div>
      </div>

    </div>

    <!-- Take 2 (The Brief) & Take 3 (The Idea) -->
    <div class="case-strategy-row">
      <div class="take-card light">
        <span class="take-card-label">${study.brief.take}</span>
        <h4 class="take-card-title">${study.brief.title}</h4>
        <p class="take-card-body">${study.brief.content}</p>
      </div>

      <div class="take-card vibrant" style="--case-accent: ${study.accentColor};">
        <span class="take-card-label">${study.idea.take}</span>
        <h4 class="take-card-title">${study.idea.title}</h4>
        <p class="take-card-body">${study.idea.content}</p>
      </div>
    </div>

    <!-- Take 4: The Annotated Script Breakdown -->
    <div class="script-section">
      <span class="section-tag">TAKE 4 · THE SCRIPT, ANNOTATED</span>
      <h4 style="font-family: var(--font-headline); font-size: 1.8rem; font-weight: 800; text-transform: uppercase;">Beat-by-Beat Narrative Architecture</h4>
      
      <div class="table-responsive">
        <table class="script-table">
          <thead>
            <tr>
              <th style="width: 20%;">Beat & Time</th>
              <th style="width: 45%;">What Happens On Screen</th>
              <th style="width: 35%;">Why It’s There (Retention Logic)</th>
            </tr>
          </thead>
          <tbody>
            ${study.scriptBeats.map(b => `
              <tr>
                <td>
                  <div>${b.time}</div>
                  <span class="beat-badge">${b.beat}</span>
                </td>
                <td class="script-happens">${b.happens}</td>
                <td class="script-why">${b.why}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="claims-note-box">
        <strong>A Note on Health Claims:</strong> ${study.claimsNote}
      </div>
    </div>

    <!-- Take 5: Behind the Production (Set, Camera, Talent, Edit Gallery) -->
    <div class="bts-section">
      <div class="section-header" style="text-align: left; align-items: flex-start; padding: 0;">
        <span class="section-tag">TAKE 5 · BEHIND THE SCENES</span>
        <h4 style="font-family: var(--font-headline); font-size: 1.8rem; font-weight: 800; text-transform: uppercase;">On-Set & Post-Production Execution</h4>
      </div>

      <div class="bts-grid">
        ${study.behindTheScenes.map(bts => `
          <div class="bts-card">
            <div class="bts-img-box">
              <img src="${bts.image}" alt="${bts.label}" loading="lazy"${bts.objectPosition ? ` style="object-position: ${bts.objectPosition}; transform-origin: ${bts.objectPosition};"` : ''}>
            </div>
            <div class="bts-info">
              <span class="bts-label">${bts.label}</span>
              <p class="bts-desc">${bts.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Take 6 & 7: Outcomes, Distribution & Iteration -->
    <div class="outcomes-grid">
      <div class="outcome-card">
        <span class="outcome-title">TAKE 6 · OUT IN THE WORLD</span>
        <p class="outcome-text"><strong>Distribution & Media:</strong> ${study.outcomes.distribution}</p>
      </div>
      <div class="outcome-card">
        <span class="outcome-title">BUILT FOR THE FEED</span>
        <p class="outcome-text"><strong>Retention Engineering:</strong> ${study.outcomes.feedOptimization}</p>
      </div>
      <div class="outcome-card">
        <span class="outcome-title">NEXT ITERATION</span>
        <p class="outcome-text"><strong>Future Scaling:</strong> ${study.outcomes.nextIteration}</p>
      </div>
    </div>

    <!-- Modal Prev / Next Navigation -->
    <div class="modal-nav-footer">
      <button class="pill-btn secondary" id="modalPrevStudy">← Previous Case Study</button>
      <button class="pill-btn" id="modalNextStudy">Next Case Study →</button>
    </div>
  `;
}

// ==========================================================================
// 4. INTERACTIVE MOTION VIDEO PLAYER ENGINE
// ==========================================================================
function initCustomVideoPlayer(study) {
  const showcaseBox = document.getElementById('videoShowcaseBox');
  const frame = document.getElementById('videoFrame');
  const poster = document.getElementById('videoPoster');
  const mainPlayBtn = document.getElementById('mainPlayBtn');
  const facadeOverlay = document.getElementById('facadeOverlay');
  const controlsBar = document.getElementById('videoControlsBar');

  if (!frame) return;

  // Warm DNS & TCP preconnections on user hover or interaction (0ms latency without bandwidth penalty)
  if (showcaseBox) {
    showcaseBox.addEventListener('mouseenter', warmVideoConnections, { once: true });
    showcaseBox.addEventListener('touchstart', warmVideoConnections, { once: true, passive: true });
  }

  // Embed function using parseVideoSource
  function embedDirectVideo(url) {
    if (!frame) return;
    const parsed = parseVideoSource(url);
    if (!parsed) return;

    // Auto-adjust aspect ratio for shorts/vertical video
    if (parsed.isShort || parsed.aspectRatio === '9:16') {
      frame.classList.add('is-vertical');
      if (showcaseBox) showcaseBox.classList.add('vertical-theater');
      frame.setAttribute('data-aspect', '9:16');
    }

    let embedHtml = '';
    if (parsed.provider === 'youtube' || parsed.provider === 'vimeo' || parsed.provider === 'generic') {
      embedHtml = `<iframe class="video-embedded-iframe" src="${parsed.embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    } else if (parsed.provider === 'direct') {
      embedHtml = `<video class="video-embedded-player" src="${parsed.embedUrl}" controls autoplay playsinline></video>`;
    }

    frame.innerHTML = embedHtml;
    state.isVideoPlaying = true;
    if (controlsBar) controlsBar.style.display = 'none';

    // Update ambient glow if thumbnail available
    const ambientGlow = document.getElementById('videoAmbientGlow');
    if (ambientGlow && parsed.thumbnailUrl) {
      ambientGlow.style.backgroundImage = `url('${parsed.thumbnailUrl}')`;
    }
  }

  // Handle Play Click (Facade)
  if (facadeOverlay || mainPlayBtn) {
    const playTrigger = facadeOverlay || mainPlayBtn;
    playTrigger.addEventListener('click', () => {
      warmVideoConnections();
      if (study.videoUrl) {
        embedDirectVideo(study.videoUrl);
      } else {
        togglePlay();
      }
    });
  }

  // Canvas-based simulation for case studies without videoUrl
  const canvas = document.getElementById('videoCanvas');
  if (canvas && !study.videoUrl) {
    const ctx = canvas.getContext('2d');
    let durationSec = 40;
    let currentSec = 0;
    let isPlaying = false;
    const bgImg = new Image();
    bgImg.src = study.heroImage;

    const ctrlPlayToggle = document.getElementById('ctrlPlayToggle');
    const playIconSvg = document.getElementById('playIconSvg');
    const timelineFill = document.getElementById('timelineFill');
    const timecode = document.getElementById('videoTimecode');

    function togglePlay() {
      isPlaying = !isPlaying;
      state.isVideoPlaying = isPlaying;
      if (isPlaying) {
        if (poster) poster.style.opacity = '0';
        if (mainPlayBtn) {
          mainPlayBtn.style.opacity = '0';
          mainPlayBtn.style.pointerEvents = 'none';
        }
        if (playIconSvg) {
          playIconSvg.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
        }
        runCanvasAnimation();
      } else {
        if (mainPlayBtn) {
          mainPlayBtn.style.opacity = '1';
          mainPlayBtn.style.pointerEvents = 'auto';
        }
        if (playIconSvg) {
          playIconSvg.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
        }
      }
    }

    if (ctrlPlayToggle) ctrlPlayToggle.addEventListener('click', togglePlay);

    function runCanvasAnimation() {
      if (!isPlaying) return;
      currentSec += 0.05;
      if (currentSec > durationSec) currentSec = 0;
      const progress = currentSec / durationSec;
      if (timelineFill) timelineFill.style.width = `${progress * 100}%`;
      const minStr = String(Math.floor(currentSec / 60)).padStart(2, '0');
      const secStr = String(Math.floor(currentSec % 60)).padStart(2, '0');
      if (timecode) timecode.textContent = `${minStr}:${secStr} / ${study.videoDuration}`;

      ctx.fillStyle = '#0a0a0c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (bgImg.complete && bgImg.naturalWidth > 0) {
        ctx.save();
        ctx.globalAlpha = 0.85;
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      ctx.save();
      const grad = ctx.createLinearGradient(0, canvas.height - 180, 0, canvas.height);
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.85)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, canvas.height - 180, canvas.width, 180);

      ctx.fillStyle = study.accentColor || '#38bdf8';
      const waveCount = 40;
      const waveWidth = 6;
      const waveSpacing = 8;
      const startWaveX = canvas.width / 2 - (waveCount * (waveWidth + waveSpacing)) / 2;

      for (let i = 0; i < waveCount; i++) {
        const h = Math.abs(Math.sin((currentSec * 6) + i * 0.4)) * 45 + 8;
        ctx.fillRect(startWaveX + i * (waveWidth + waveSpacing), canvas.height - 70 - h / 2, waveWidth, h);
      }

      const currentBeat = study.scriptBeats ? (study.scriptBeats[Math.floor(progress * study.scriptBeats.length)] || study.scriptBeats[0]) : null;
      if (currentBeat) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 28px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(currentBeat.beat.toUpperCase(), canvas.width / 2, canvas.height - 110);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.font = '500 18px Plus Jakarta Sans, sans-serif';
        ctx.fillText(currentBeat.happens.substring(0, 60) + '...', canvas.width / 2, canvas.height - 35);
      }
      ctx.restore();
      state.animationFrameId = requestAnimationFrame(runCanvasAnimation);
    }
  }
}

// ==========================================================================
// 5. CREATIVE DIRECTION PROCESS SECTION
// ==========================================================================
function renderProcessSection() {
  if (!DOM.processGrid) return;

  DOM.processGrid.innerHTML = PRODUCTION_PROCESS.map(p => `
    <div class="process-card">
      <div class="process-step-num">${p.step}</div>
      <div class="process-tagline">${p.tagline}</div>
      <h4 class="process-card-title">${p.title}</h4>
      <p class="process-desc">${p.description}</p>
    </div>
  `).join('');
}

// ==========================================================================
// 6. MORE WORK: FILTERABLE COMMERCIAL CATALOG (40-50+ EXTENSIBLE)
// ==========================================================================
function renderMoreWork() {
  if (!DOM.moreWorkGrid) return;

  const filtered = MORE_WORK_PROJECTS.filter(p => {
    const matchesFilter = state.activeFilter === 'all' || p.category.toLowerCase() === state.activeFilter.toLowerCase();
    const query = state.searchQuery.toLowerCase();
    const matchesSearch = !query ||
      p.title.toLowerCase().includes(query) ||
      (p.tag && p.tag.toLowerCase().includes(query)) ||
      (p.hook && p.hook.toLowerCase().includes(query)) ||
      (p.brand && p.brand.toLowerCase().includes(query)) ||
      (p.description && p.description.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    DOM.moreWorkGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-muted);">
        <p style="font-size: 1.2rem; font-weight: 700;">No commercials found matching "${state.searchQuery}".</p>
      </div>
    `;
    if (DOM.loadMoreBtn) {
      DOM.loadMoreBtn.style.display = 'none';
    }
    return;
  }

  // Determine items to display
  const isFilteredOrSearched = state.activeFilter !== 'all' || !!state.searchQuery;
  const itemsToRender = isFilteredOrSearched ? filtered : filtered.slice(0, state.visibleMoreWorkCount);

  // Subtle playful tilts
  const tilts = [-2, 2.5, -1.5, 2, -2.5, 1.8];

  DOM.moreWorkGrid.innerHTML = itemsToRender.map((proj, idx) => {
    const rot = tilts[idx % tilts.length];

    return `
      <div class="work-card" data-id="${proj.id}" data-index="${idx}" style="--rot: ${rot}deg;" title="Click to view commercial & details">
        <div class="work-card__thumb-wrapper">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
          <span class="work-card__badge-pill">${proj.tag || proj.category}</span>
          <div class="work-card__play-icon">
            <div class="play-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div class="work-card__info">
          <h4 class="work-card__title">${proj.title}</h4>
          <p class="work-card__hook">${proj.hook}</p>
        </div>
      </div>
    `;
  }).join('');

  // Update Load More pill button state
  const loadMoreBtn = DOM.loadMoreBtn || document.getElementById('loadMoreBtn');
  const loadMoreActions = document.getElementById('moreWorkActions');
  if (loadMoreBtn) {
    if (isFilteredOrSearched || itemsToRender.length >= filtered.length) {
      if (loadMoreActions) {
        loadMoreActions.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'none';
      }
    } else {
      if (loadMoreActions) {
        loadMoreActions.style.display = 'flex';
      }
      loadMoreBtn.style.display = 'inline-flex';
      loadMoreBtn.innerHTML = '<span>Load More</span>';
      loadMoreBtn.disabled = false;
      loadMoreBtn.style.opacity = '1';
      loadMoreBtn.style.cursor = 'pointer';
    }
  }

  // Attach click listeners to open quick preview modal
  DOM.moreWorkGrid.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-id');
      const project = MORE_WORK_PROJECTS.find(p => p.id === projId);
      if (project) openQuickVideoModal(project);
    });
  });

  // Observe newly rendered cards for Spencer Gabor spring pop-up reveal
  observeWorkCards();
}

// Spencer Gabor Spring Pop-Up Observer for More Work Cards
let workCardsObserver = null;

function observeWorkCards() {
  if (!DOM.moreWorkGrid) return;
  const cards = DOM.moreWorkGrid.querySelectorAll('.work-card');
  if (!cards.length) return;

  if (!('IntersectionObserver' in window)) {
    cards.forEach(c => {
      c.classList.add('is-revealed');
      c.classList.add('has-settled');
    });
    return;
  }

  if (workCardsObserver) {
    workCardsObserver.disconnect();
  }

  workCardsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const idx = parseInt(card.getAttribute('data-index') || '0', 10);
        const cols = window.innerWidth >= 860 ? 3 : 2;
        const colIndex = idx % cols;
        const delay = (colIndex * 0.08).toFixed(2);
        card.style.setProperty('--pop-delay', `${delay}s`);
        card.classList.add('is-revealed');

        // Once the elastic pop-up settles, enable instantaneous hover responses
        setTimeout(() => {
          card.classList.add('has-settled');
          card.style.removeProperty('--pop-delay');
        }, 850);

        obs.unobserve(card);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.05
  });

  cards.forEach(card => {
    workCardsObserver.observe(card);
  });
}

function initMoreWorkFilters() {
  const filterBar = DOM.filterBar || document.getElementById('filterBar');
  const searchInput = DOM.searchInput || document.getElementById('searchInput');
  const loadMoreBtn = DOM.loadMoreBtn || document.getElementById('loadMoreBtn');

  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;

      filterBar.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      state.activeFilter = chip.getAttribute('data-filter');
      renderMoreWork();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderMoreWork();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      state.visibleMoreWorkCount = MORE_WORK_PROJECTS.length;
      renderMoreWork();
    });
  }
}

// Spencer Gabor In-View Popping Observer
function initInViewObserver() {
  const sections = document.querySelectorAll('#featured, #process, #more-work, #about');
  if (!('IntersectionObserver' in window)) {
    sections.forEach(s => s.setAttribute('inview', 'true'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('inview', 'true');
      }
    });
  }, { 
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.04 
  });

  sections.forEach(s => observer.observe(s));
}

// Quick Video Modal for "More Work" Cards
function openQuickVideoModal(project) {
  if (!DOM.quickVideoModal) return;

  if (DOM.quickVideoBreadcrumb) {
    DOM.quickVideoBreadcrumb.textContent = `Commercial · ${project.brand ? project.brand + ' · ' : ''}${project.title}`;
  }

  const hasYouTube = Boolean(project.youtubeId);

  DOM.quickVideoBody.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <!-- Video / Visual Presentation Container -->
      <div style="width: 100%; border-radius: var(--radius-md); overflow: hidden; background: #080a0f; box-shadow: var(--shadow-card); border: 1px solid var(--color-card-border); position: relative; padding: 1.25rem 0.5rem;">
        ${hasYouTube ? `
          <div style="position: relative; width: 100%; aspect-ratio: 9/16; max-width: 320px; margin: 0 auto; background: #000; overflow: hidden; border-radius: var(--radius-sm); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1" 
              title="${project.title}" 
              style="width: 100%; height: 100%; border: none; display: block;" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
        ` : `
          <div style="position: relative; width: 100%; aspect-ratio: 9/16; max-width: 320px; margin: 0 auto; background: #05070b; overflow: hidden; border-radius: var(--radius-sm); box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;">
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: contain; display: block;">
            <div style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; pointer-events: none;">
              <div style="background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); padding: 0.45rem 1rem; border-radius: var(--radius-pill); font-family: var(--font-headline); font-size: 0.74rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #ffffff; display: inline-flex; align-items: center; gap: 0.45rem; box-shadow: 0 4px 20px rgba(0,0,0,0.6);">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Footage Link Coming Soon
              </div>
            </div>
          </div>
        `}
      </div>

      <!-- Project Metadata & Breakdown -->
      <div style="display: flex; flex-direction: column; gap: 0.85rem;">
        <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; align-items: center;">
          <span class="section-tag" style="margin: 0;">${project.brand || 'Commercial'}</span>
          <span style="font-family: var(--font-headline); font-size: 0.74rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: var(--color-secondary); color: var(--color-onSecondary); padding: 0.25rem 0.75rem; border-radius: var(--radius-pill); border: 1px solid var(--color-card-border);">${project.category}</span>
          <span style="font-family: var(--font-headline); font-size: 0.74rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: var(--color-secondary); color: var(--color-onSecondary); padding: 0.25rem 0.75rem; border-radius: var(--radius-pill); border: 1px solid var(--color-card-border);">${project.tag}</span>
        </div>

        <h3 style="font-family: var(--font-headline); font-size: 1.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: -0.01em; margin: 0.1rem 0; line-height: 1.15;">${project.title}</h3>

        <p style="font-family: var(--font-body); font-size: 0.98rem; color: var(--color-muted); line-height: 1.6; margin: 0;">${project.description || ''}</p>

        <!-- Pattern Interrupt / Hook Delivery -->
        <div style="background: var(--color-secondary); border-left: 4px solid var(--color-accent); padding: 0.9rem 1.25rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; margin-top: 0.2rem;">
          <span style="display: block; font-family: var(--font-headline); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-accent); margin-bottom: 0.3rem;">Hook Delivery & Pattern Interrupt</span>
          <div style="font-family: var(--font-body); font-size: 1rem; font-style: italic; font-weight: 600; color: var(--color-onSecondary); line-height: 1.45;">${project.hook}</div>
        </div>


        <!-- Interactive Link Actions -->
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--color-card-border); margin-top: 0.35rem;">
          ${project.productUrl ? `
            <a href="${project.productUrl}" target="_blank" rel="noopener noreferrer" class="pill-btn primary" style="font-size: 0.85rem; padding: 0.7rem 1.35rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
              <span>View Official Product</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          ` : ''}
          ${project.youtubeUrl ? `
            <a href="${project.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="pill-btn secondary" style="font-size: 0.85rem; padding: 0.7rem 1.35rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
              <span>Watch on YouTube</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  DOM.quickVideoModal.classList.add('active');
  DOM.quickVideoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeQuickVideoModal() {
  if (!DOM.quickVideoModal) return;
  DOM.quickVideoModal.classList.remove('active');
  DOM.quickVideoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  // Cleanly teardown iframe so video audio stops playing
  if (DOM.quickVideoBody) {
    DOM.quickVideoBody.innerHTML = '';
  }
}

// ==========================================================================
// 7. FLOATING SPENCER GABOR COLOR THEME SWITCHER
// ==========================================================================
function initThemePicker() {
  if (!DOM.themePalette || !DOM.themeToggleBtn) return;

  DOM.themePalette.innerHTML = '';

  COLOR_THEMES.forEach((th, idx) => {
    const bubble = document.createElement('button');
    bubble.className = 'theme-bubble';
    bubble.setAttribute('title', th.name);
    bubble.setAttribute('aria-label', `Select ${th.name} theme`);
    bubble.style.backgroundColor = th.primary;
    bubble.style.borderColor = th.onPrimary;

    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      applyTheme(th.id);
      DOM.themePicker.classList.remove('open');
    });

    DOM.themePalette.appendChild(bubble);
  });

  DOM.themeToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.themePicker.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!DOM.themePicker.contains(e.target)) {
      DOM.themePicker.classList.remove('open');
    }
  });

  // Restore saved theme
  const saved = localStorage.getItem('portfolio_theme');
  if (saved && COLOR_THEMES.some(t => t.id === saved)) {
    applyTheme(saved);
  }
}

function applyTheme(themeId) {
  const theme = COLOR_THEMES.find(t => t.id === themeId);
  if (!theme) return;

  state.currentTheme = themeId;
  localStorage.setItem('portfolio_theme', themeId);

  DOM.root.style.setProperty('--color-primary', theme.primary);
  DOM.root.style.setProperty('--color-onPrimary', theme.onPrimary);
  DOM.root.style.setProperty('--color-secondary', theme.secondary);
  DOM.root.style.setProperty('--color-onSecondary', theme.onSecondary);
  DOM.root.style.setProperty('--color-accent', theme.accent);
  DOM.root.style.setProperty('--color-card-bg', theme.cardBg);
  DOM.root.style.setProperty('--color-hero-subtitle', `color-mix(in srgb, ${theme.onPrimary} 28%, transparent)`);
}

// ==========================================================================
// 8. GLOBAL MODAL ESCAPE & ACCESSIBILITY LISTENER
// ==========================================================================
function initGlobalListeners() {
  if (DOM.modalCloseBtn) DOM.modalCloseBtn.addEventListener('click', closeCaseStudy);
  if (DOM.quickVideoCloseBtn) DOM.quickVideoCloseBtn.addEventListener('click', closeQuickVideoModal);

  DOM.caseStudyModal.addEventListener('click', (e) => {
    if (e.target === DOM.caseStudyModal) closeCaseStudy();
  });

  DOM.quickVideoModal.addEventListener('click', (e) => {
    if (e.target === DOM.quickVideoModal) closeQuickVideoModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudy();
      closeQuickVideoModal();
    }
    if (e.key === 'ArrowRight' && DOM.caseStudyModal.classList.contains('active')) {
      const nextIdx = (state.activeCaseStudyIndex + 1) % FEATURED_CASE_STUDIES.length;
      openCaseStudy(FEATURED_CASE_STUDIES[nextIdx].id);
    }
    if (e.key === 'ArrowLeft' && DOM.caseStudyModal.classList.contains('active')) {
      const prevIdx = (state.activeCaseStudyIndex - 1 + FEATURED_CASE_STUDIES.length) % FEATURED_CASE_STUDIES.length;
      openCaseStudy(FEATURED_CASE_STUDIES[prevIdx].id);
    }
  });

  // URL hash check on load
  const hash = window.location.hash.replace('#', '');
  if (hash && hash.startsWith('case-')) {
    const caseId = hash.replace('case-', '');
    openCaseStudy(caseId);
  }
}

// Silky Smooth Anchor Scroll with Fixed Header Clearance
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==========================================================================
// INITIALIZATION ENTRYPOINT
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeroPhysics();
  initRoleTicker();
  initWordRotator();
  renderFeaturedCarousel();
  initCarouselControls();
  renderProcessSection();
  renderMoreWork();
  initMoreWorkFilters();
  initInViewObserver();
  initSmoothScroll();
  initThemePicker();
  initGlobalListeners();
});
