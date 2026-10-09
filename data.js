/**
 * Portfolio Data: Case Studies, Projects & Profile Configuration
 * Extracted directly from Nutrifactor Laboratories case study archives.
 */

export const PROFILE = {
  name: "Abdullah Ashraf",
  roleTitle: "Marketer, Content Strategist, Video Director & Scriptwriter",
  company: "Creative Commercial Direction",
  location: "Bayonne, France",
  email: "abdullahashraf3301@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdullahashraf-18o",
  taglines: [
    "From Product Science to Thumb-Stopping Commercials",
    "Show the loop before you sell the fix.",
    "Concept · Script · Set Direction · Talent Coaching · Edit Mastery"
  ],
  bio: "Senior Marketing Officer and Creative Strategist with deep expertise in transforming health, wellness, and consumer products into high-performing short-form video commercials. Specializing in consumer psychology, pattern interrupts, line-by-line talent coaching, on-set cinematography direction, and retention-engineered editing.",
  stats: [
    { label: "Commercials Produced", value: "200+" },
    { label: "Organic & Paid Views", value: "15M+" },
    { label: "SKUs Optimized", value: "100+" },
    { label: "Health Compliance", value: "100%" }
  ]
};

export const COLOR_THEMES = [
  {
    id: "minimal-mono",
    name: "Clean Slate",
    primary: "#ffffff",
    onPrimary: "#1a1a1a",
    secondary: "#e5e5e5",
    onSecondary: "#1a1a1a",
    accent: "#ff3e3e",
    cardBg: "#f5f5f4"
  },
  {
    id: "cyan-pulse",
    name: "Cobalt Electric",
    primary: "#b7f9ff",
    onPrimary: "#081b2e",
    secondary: "#0779ff",
    onSecondary: "#ffffff",
    accent: "#002180",
    cardBg: "#e0f9ff"
  },
  {
    id: "matcha-lime",
    name: "Matcha & Lime",
    primary: "#c6ff00",
    onPrimary: "#0d2b12",
    secondary: "#238843",
    onSecondary: "#ffffff",
    accent: "#005319",
    cardBg: "#eefd98"
  },
  {
    id: "warm-terracotta",
    name: "Terracotta Sand",
    primary: "#ede6d3",
    onPrimary: "#221e1a",
    secondary: "#ff7906",
    onSecondary: "#ffffff",
    accent: "#c2410c",
    cardBg: "#f8f3e8"
  },
  {
    id: "lilac-orchid",
    name: "Neon Orchid",
    primary: "#fce9ff",
    onPrimary: "#290435",
    secondary: "#db30f5",
    onSecondary: "#ffffff",
    accent: "#3c0350",
    cardBg: "#fae0ff"
  },
  {
    id: "nutrifactor-pharma",
    name: "Nutrifactor Pro",
    primary: "#f0fdf4",
    onPrimary: "#064e3b",
    secondary: "#10b981",
    onSecondary: "#ffffff",
    accent: "#047857",
    cardBg: "#dcfce7"
  }
];

export const FEATURED_CASE_STUDIES = [
  {
    id: "collagatin",
    slug: "collagatin",
    brand: "Nutrifactor",
    product: "Collagatin (Marine Collagen)",
    format: "Instagram Video + Paid Ads (9:16 Vertical)",
    title: "Water vs. Water Pro Max",
    headline: "Two glasses. Two personalities. One clear winner.",
    category: "Product Battle / Face-Off",
    heroImage: "./assets/hero/hero_card_collagatin.png",
    fullSlide: "./assets/case-studies/Collagatin_Case_Study_Portrait_With_Images/slide_full.png",
    accentColor: "#f43f5e",
    themeBg: "#fff1f2",
    videoDuration: "0:42",
    videoUrl: "https://youtube.com/shorts/qSesdX1gzpw?feature=share",
    aspectRatio: "9:16",
    demoThumbnail: "./assets/hero/hero_card_collagatin.png",
    role: "Concept · Script · Set Direction · Talent Direction · Edit Direction",
    
    brief: {
      take: "TAKE 2 · THE BRIEF",
      title: "Upgrading a Universal Habit",
      content: "Collagatin is a marine collagen supplement, and collagen is a crowded, jargon-heavy category. Meanwhile, people already believe in one simple habit for glowing skin: drinking water. My job was to make Collagatin feel like the obvious upgrade to something people already do, in a feed where people see similar information on loop."
    },
    
    idea: {
      take: "TAKE 3 · THE IDEA",
      title: "Give the habit a personality. Let the upgrade win.",
      content: "Instead of explaining collagen with dry clinical jargon, I put plain water and Collagatin in a theatrical face-off. Water gets a deep, dramatic, overly serious voice and a plain white background. Collagatin gets a cheery, modern voice and a bright pink backdrop. The visual contrast tells the story before a single benefit is spoken. A rivalry is inherently entertaining, easy to watch, and memorable."
    },
    
    scriptBeats: [
      {
        beat: "The Setup",
        time: "0:00 - 0:04",
        happens: '“This… is a glass of water.” (deep, dramatic voice) — “And this… is Water Pro Max, with Nutrifactor’s Collagatin.” (cheery voice)',
        why: "Two contrasting voices and moods establish the comedic rivalry in under 4 seconds."
      },
      {
        beat: "The Look",
        time: "0:04 - 0:10",
        happens: "Water on the left against clean clinical white. Collagatin on the right against energetic pink. Distinct title cards.",
        why: "Instant visual contrast. Viewers immediately register pink as the modern upgrade."
      },
      {
        beat: "The Comebacks",
        time: "0:10 - 0:22",
        happens: "Water boasts (“the mountain spring in a cup”). Collagatin counters with proof: 6000mg marine collagen, skin elasticity, hair, joints, gut.",
        why: "Delivers concrete health benefits as snappy debate rebuttals rather than a boring bullet list."
      },
      {
        beat: "The Banter",
        time: "0:22 - 0:30",
        happens: '“I am the OG.” / “And I’m the Upgrade.” — “I’m the legend.” / “And I’m the Science.”',
        why: "Rhythmic call-and-response escalation that is punchy, relatable, and easy to quote."
      },
      {
        beat: "The Wink",
        time: "0:30 - 0:34",
        happens: "Collagatin winks and takes a triumphant sip while Water looks visibly offended.",
        why: "A human character moment that seals the emotional win with charm."
      },
      {
        beat: "The Turn & CTA",
        time: "0:34 - 0:42",
        happens: '“Water is great, but sometimes you need something better.” End Card: “Water + Collagatin = Beauty at its finest.”',
        why: "Respects water so the CTA is an additive upgrade rather than an unrealistic replacement."
      }
    ],
    claimsNote: "Benefits are carefully phrased as 'helps' and 'supports', never claiming a medical cure. Collagatin is positioned as an add-on habit to daily water.",

    behindTheScenes: [
      {
        label: "The Set",
        desc: "A clean white side for Water and a bright pink side for Collagatin, split precisely down the middle of the frame.",
        image: "./assets/case-studies/Collagatin_Case_Study_Portrait_With_Images/image2.png",
        objectPosition: "center top"
      },
      {
        label: "The Camera",
        desc: "Vertical 9:16 mobile framing. Locked split-screen during the face-off, transitioning into a dynamic punch-in for the product finish.",
        image: "./assets/case-studies/Collagatin_Case_Study_Portrait_With_Images/image3.png",
        objectPosition: "center top"
      },
      {
        label: "The Performance",
        desc: "Directed the host through dual personas: a deadpan, slightly offended Water in grey/black, and an effervescent Collagatin in white & stripes.",
        image: "./assets/case-studies/Collagatin_Case_Study_Portrait_With_Images/image4.png",
        objectPosition: "center top"
      },
      {
        label: "The Edit",
        desc: "Kinetic on-screen text anchors key claims (6000mg, Joint Support), sparkling visual accents for Collagatin, and an anger-meter animation for Water.",
        image: "./assets/case-studies/Collagatin_Case_Study_Portrait_With_Images/image5.png",
        objectPosition: "center top"
      }
    ],

    outcomes: {
      distribution: "Posted organically on Nutrifactor's Instagram Reels, then scaled as the primary top-of-funnel creative for Meta Paid Ads.",
      feedOptimization: "A high-contrast visual face-off that communicates value instantly on mute. The closing line leaves zero friction for purchase.",
      nextIteration: "Shoot standalone modular benefit clips for dynamic product retargeting ads."
    }
  },

  {
    id: "extrac-serum",
    slug: "extrac-serum",
    brand: "Cellcense by Nutrifactor",
    product: "Extra-C Serum",
    format: "Short Product Video (9:16 Vertical)",
    title: "Smudge. Wipe. Spotless.",
    headline: "Show “spotless” before you say it.",
    category: "Visual Hook / Pattern Interrupt",
    heroImage: "./assets/hero/hero_card_extrac.png",
    fullSlide: "./assets/case-studies/ExtraC_Case_Study_Portrait/slide_full.png",
    accentColor: "#f97316",
    themeBg: "#fff7ed",
    videoDuration: "0:32",
    videoUrl: "https://youtube.com/shorts/devxN2Xhyl8",
    aspectRatio: "9:16",
    demoThumbnail: "./assets/hero/hero_card_extrac.png",
    role: "Concept · Script · Set Direction · Talent Direction · Edit Direction",

    brief: {
      take: "TAKE 2 · THE BRIEF",
      title: "Letting Visuals Do The Selling",
      content: "Cellcense Extra-C Serum is a Vitamin C brightening serum, and this video has just one line of script. That meant the visual had to do the selling. My job was to make “spotless” something viewers see in the first seconds, and to make a short, simple product video fun enough to watch to the end."
    },

    idea: {
      take: "TAKE 3 · THE IDEA",
      title: "Show “spotless” before you say it.",
      content: "The video opens on a black smudge on the “screen”, the kind everyone has on their phone. A drop of serum wipes it clean, so the benefit is demonstrated before anyone says it. Then the product name flies in and bonks the host on the head, which turns the title into a character and keeps the tone light. I skipped a benefits voiceover. With one line of script, the gag is the message."
    },

    scriptBeats: [
      {
        beat: "The Entrance",
        time: "0:00 - 0:02",
        happens: "The host walks into frame.",
        why: "Movement in the first second."
      },
      {
        beat: "The Smudge",
        time: "0:02 - 0:05",
        happens: "A black smudge sits on the “screen”, like on a phone display.",
        why: "Viewers instinctively check their own screen, creating a perfect pattern interrupt."
      },
      {
        beat: "The Wipe",
        time: "0:05 - 0:12",
        happens: "She puts a drop of serum on the smudge and wipes it away, like cleaning a mirror.",
        why: "“Spotless” is shown, not claimed."
      },
      {
        beat: "The Hit",
        time: "0:12 - 0:18",
        happens: "“Extra-C Serum” flies in from outside the frame and hits her on the head.",
        why: "A slapstick gag that makes the title a character."
      },
      {
        beat: "The Wait",
        time: "0:18 - 0:24",
        happens: "She points at the text to wait a second, sits down, then gestures it back in.",
        why: "She stays in control, resetting the frame for the pitch."
      },
      {
        beat: "The Line",
        time: "0:24 - 0:32",
        happens: "“Cellcense Extra-C Serum, for smooth, spotless and glowing skin.”",
        why: "One short line that echoes the wipe from the opening."
      }
    ],
    claimsNote: "The demo wipes a screen, not skin, so the visual makes no medical skin claim. The benefit is stated once, in the closing line.",

    behindTheScenes: [
      {
        label: "The Set",
        desc: "A bright, warm corner with an arched mirror, palms, a teal armchair and window light. The host’s cream outfit keeps it clean, and the orange titles echo the bottle.",
        image: "./assets/case-studies/ExtraC_Case_Study_Portrait/image2.png",
        objectPosition: "center top"
      },
      {
        label: "The Camera",
        desc: "The wipe is played directly to the lens, turning the camera glass into the smudged screen.",
        image: "./assets/case-studies/ExtraC_Case_Study_Portrait/image3.png",
        objectPosition: "center top"
      },
      {
        label: "The Performance",
        desc: "Comic timing: the hit, the look up at the text, and the playful “wait a second” point.",
        image: "./assets/case-studies/ExtraC_Case_Study_Portrait/image4.png",
        objectPosition: "center top"
      },
      {
        label: "The Edit",
        desc: "The kinetic title text flies in from off-screen and out again, precisely timed to her gestures.",
        image: "./assets/case-studies/ExtraC_Case_Study_Portrait/image5.png",
        objectPosition: "center top"
      }
    ],

    outcomes: {
      distribution: "Posted on Nutrifactor & Cellcense Instagram, then handed to the media buying team to run as high-performing paid ads.",
      feedOptimization: "A visual gag in the first second, a product name on screen that works with sound off, and one short benefit line.",
      nextIteration: "Test interactive poll stickers asking viewers if they wiped their own phone screen."
    }
  },

  {
    id: "bzolve",
    slug: "bzolve",
    brand: "Nutrifactor",
    product: "BZOLVE (Vitamin B12)",
    format: "Instagram Reel + Paid Performance Video (9:16 Vertical)",
    title: "Chai. Energy. Crash.",
    headline: "Show the loop before you sell the fix.",
    category: "Behavioral Loop / Comedy Relatable",
    heroImage: "./assets/hero/hero_card_bzolve.png",
    fullSlide: "./assets/case-studies/BZOLVE_Case_Study_Portrait/slide_full.png",
    accentColor: "#0284c7",
    themeBg: "#f0f9ff",
    videoDuration: "0:36",
    videoUrl: "https://youtube.com/shorts/IVA83l1AHTg?feature=share",
    aspectRatio: "9:16",
    demoThumbnail: "./assets/hero/hero_card_bzolve.png",
    role: "Concept · Script · Set Direction · Talent Direction · Edit Direction",

    brief: {
      take: "TAKE 2 · THE BRIEF",
      title: "Addressing The Afternoon Energy Dip",
      content: "Chai or coffee is a daily routine for millions, yet the inevitable mid-day crash is an experience everyone recognizes. My task was to reflect that frustrating caffeine cycle with humor and authenticity, then seamlessly introduce Nutrifactor BZOLVE (Vit. B12) as a sustained energy supporter."
    },

    idea: {
      take: "TAKE 3 · THE IDEA",
      title: "Show the loop before you sell the fix.",
      content: "Chai. Energy. Crash. Three simple words, three visual icons, and the viewer understands the entire cycle in four seconds. By repeating cuts faster and faster, the loop tightens with visual anxiety. A sudden rewind sound effect acts as a pattern interrupt, resetting attention back to Sarah, who mistakenly thinks another cup of chai will solve exhaustion."
    },

    scriptBeats: [
      {
        beat: "The Hook",
        time: "0:00 - 0:03",
        happens: "Host gets up abruptly from her desk and passionately demands: 'One more chai!'",
        why: "Starts mid-action with high energy and an immediate relatable workplace craving."
      },
      {
        beat: "The Loop",
        time: "0:03 - 0:07",
        happens: "“Chai” (tea cup icon) → “Energy” (electric lightning icon) → “Crash” (hazard warning sign).",
        why: "Communicates the emotional and physical arc in four seconds."
      },
      {
        beat: "The Speed-Up",
        time: "0:07 - 0:12",
        happens: "Rapid-fire repeating montage of Chai, Energy, Crash, accelerating in tempo with frantic sound design.",
        why: "Mimics caffeine anxiety and tightens viewer retention as the habit repeats."
      },
      {
        beat: "The Rewind",
        time: "0:12 - 0:14",
        happens: "VCR rewind visual glitch with tape-rewind sound effect: 'Let’s see how we got here.'",
        why: "A vital pattern interrupt right at the drop-off threshold (12s) to restart viewer curiosity."
      },
      {
        beat: "The Character & Reveal",
        time: "0:14 - 0:26",
        happens: "“This is Sarah. She thinks chai solves everything. Low energy? Chai. Let’s see… Tadaaaa… NOPE!”",
        why: "Builds comic expectation followed by humorous physical deflation as she collapses onto her laptop."
      },
      {
        beat: "The Turn & CTA",
        time: "0:27 - 0:36",
        happens: "“Do not be like Sarah. Support sustained cellular energy with Nutrifactor BZOLVE Vitamin B12.”",
        why: "Friendly conversational peer tone ('Don’t be like Sarah') leading into a clear clinical benefit."
      }
    ],
    claimsNote: "Copy specifically specifies 'supports sustained energy levels' without overstepping medicinal promises.",

    behindTheScenes: [
      {
        label: "The Set",
        desc: "Ultra-minimal white desk with clean background and laptop. Eliminates visual clutter to maximize focus on Sarah's expressions.",
        image: "./assets/case-studies/BZOLVE_Case_Study_Portrait/image1.png",
        objectPosition: "center bottom"
      },
      {
        label: "The Camera",
        desc: "Coached the videographer to mix static tripod framing with a dynamic gimbal 'helicopter' arc shot during the high-energy realization.",
        image: "./assets/case-studies/BZOLVE_Case_Study_Portrait/image3.png",
        objectPosition: "center top"
      },
      {
        label: "The Performance",
        desc: "Guided the host through multiple takes to balance genuine workplace exhaustion with subtle comedic exaggeration.",
        image: "./assets/case-studies/BZOLVE_Case_Study_Portrait/image4.png",
        objectPosition: "center 35%"
      },
      {
        label: "The Edit",
        desc: "Directed the animator on custom motion stickers, electrical sparks on 'ENERGY', and the tempo ramp into the rewind audio effect.",
        image: "./assets/case-studies/BZOLVE_Case_Study_Portrait/image6.png",
        objectPosition: "center top"
      }
    ],

    outcomes: {
      distribution: "Rolled out on Nutrifactor's Instagram and scaled into high-converting Meta prospecting ad sets.",
      feedOptimization: "The question-led opening and bold kinetic text icons ensure the message lands even when viewed on mute.",
      nextIteration: "Test variation with morning coffee vs. evening fatigue to expand target audience segments."
    }
  },

  {
    id: "cellcense",
    slug: "cellcense",
    brand: "Nutrifactor × Cellcense",
    product: "Supplements + Skincare Dual Routine",
    format: "Dual-Brand Commercial (9:16 Vertical)",
    title: "Inside Out, Side by Side",
    headline: "Uniting beauty supplements with topical skincare.",
    category: "Brand Launch / Routine Architecture",
    heroImage: "./assets/hero/hero_card_cellcense.png",
    fullSlide: "./assets/case-studies/Cellcense_Case_Study_Portrait/slide_full.png",
    accentColor: "#0ea5e9",
    themeBg: "#f0fdf4",
    videoDuration: "0:45",
    videoUrl: "https://youtube.com/shorts/q_CKf4BFhlg?feature=share",
    aspectRatio: "9:16",
    demoThumbnail: "./assets/hero/hero_card_cellcense.png",
    role: "Concept · Script · Set Direction · Talent Direction · Edit Direction",

    brief: {
      take: "TAKE 2 · THE BRIEF",
      title: "Bridging Two Sister Brands",
      content: "Cellcense was a brand-new skincare line, while Nutrifactor already commanded deep consumer trust in ingestible beauty vitamins. The challenge was introducing Cellcense as an organic extension of the Nutrifactor family, positioning topical skincare and ingestible vitamins as one cohesive daily regimen."
    },

    idea: {
      take: "TAKE 3 · THE IDEA",
      title: "Inside on one side. Outside on the other.",
      content: "Instead of overwhelming the audience with a laundry list of products, the entire video was built around natural pairings. The script opens with universal matches everyone loves (chai with rain, fries with ketchup), making supplement + serum feel intuitively obvious. The table and screen are color-blocked into two distinct halves so the viewer grasps the concept before a word is spoken."
    },

    scriptBeats: [
      {
        beat: "The Analogy Hook",
        time: "0:00 - 0:06",
        happens: "“Some things just belong together, right? Tea with rain, fries with ketchup.”",
        why: "Grounds the concept in familiar universal duos before introducing any commercial products."
      },
      {
        beat: "The Visual Split",
        time: "0:06 - 0:12",
        happens: "Host gestures left to Nutrifactor ingestibles, then right to Cellcense topicals.",
        why: "Immediately teaches the viewer the visual language: Left = Inside, Right = Outside."
      },
      {
        beat: "The Synergistic Pairs",
        time: "0:12 - 0:32",
        happens: "Showcases Butex supplement paired with Hyaluronic & Collagen Serum. Clean 1-sentence synergistic benefit for each combo.",
        why: "Modular structure: repeat the same predictable pattern so the viewer effortlessly retains each pair."
      },
      {
        beat: "The Sign-Off",
        time: "0:32 - 0:45",
        happens: "“Your inside-out combos that just work. With Nutrifactor and Cellcense.”",
        why: "Unifies both brand identities in a single sticky tagline."
      }
    ],
    claimsNote: "Warm, conversational beauty tone ('match made in glow heaven') rather than sterile medical language.",

    behindTheScenes: [
      {
        label: "The Set",
        desc: "Custom color-blocked table: crisp white on the left, sky blue on the right, matching the graphic split in post-production.",
        image: "./assets/case-studies/Cellcense_Case_Study_Portrait/image2.png",
        objectPosition: "center top"
      },
      {
        label: "The Camera",
        desc: "Locked tripod vertical composition with the host centered precisely on the split dividing line to emphasize duality.",
        image: "./assets/case-studies/Cellcense_Case_Study_Portrait/image3.png",
        objectPosition: "center top"
      },
      {
        label: "The Performance",
        desc: "Trained the host to fluidly handle bottles on both sides without blocking product labels or losing eye contact.",
        image: "./assets/case-studies/Cellcense_Case_Study_Portrait/image4.png",
        objectPosition: "center top"
      },
      {
        label: "The Edit",
        desc: "Crisp animated dividing line with matching brand color palettes and dual logo reveals.",
        image: "./assets/case-studies/Cellcense_Case_Study_Portrait/image5.png",
        objectPosition: "center top"
      }
    ],

    outcomes: {
      distribution: "Co-promoted across Nutrifactor and Cellcense digital channels and cut into 15-second individual pairing ads.",
      feedOptimization: "Modular design allowed the media team to slice every pairing into a standalone conversion asset.",
      nextIteration: "Explore split-screen user generated unboxings following the exact same inside-out formula."
    }
  },

  {
    id: "creatine",
    slug: "creatine",
    brand: "Nutrifactor",
    product: "Creatine Monohydrate",
    format: "Cinematic Gym Film (9:16 Vertical)",
    title: "Get the Best to Be the Best",
    headline: "Cinematic gym commercial with an elite athlete.",
    category: "Sports Nutrition / High Intensity",
    heroImage: "./assets/case-studies/Creatine_Case_Study_Portrait/image1.png",
    fullSlide: "./assets/case-studies/Creatine_Case_Study_Portrait/slide_full.png",
    accentColor: "#dc2626",
    themeBg: "#fef2f2",
    videoDuration: "0:38",
    videoUrl: "https://youtube.com/shorts/RXhZoIrSrSM?feature=share",
    aspectRatio: "9:16",
    demoThumbnail: "./assets/case-studies/Creatine_Case_Study_Portrait/image1.png",
    role: "Concept · Script · Set Direction · Talent Direction · Edit Direction",

    brief: {
      take: "TAKE 2 · THE BRIEF",
      title: "Standing Out In Hardcore Fitness",
      content: "Creatine is one of the most widely used supplements in fitness, and gym-goers are notoriously skeptical of generic influencer ads. My mandate was to introduce Nutrifactor’s Creatine Monohydrate to both serious powerlifters and everyday fitness enthusiasts with undeniable authenticity and grit."
    },

    idea: {
      take: "TAKE 3 · THE IDEA",
      title: "Shoot it like a film. Say it like a coach.",
      content: "We took the production into an authentic warehouse gym with a competitive bodybuilder. The creative intercuts high-energy cinematic lifting sequences with direct, intimate eye-contact delivery. The sweat and intensity provide the emotional credibility, while the direct address lands the science."
    },

    scriptBeats: [
      {
        beat: "The Intro Hook",
        time: "0:00 - 0:04",
        happens: "Bodybuilder pushes the red Creatine tub directly toward the camera as it dolly-zooms in.",
        why: "A confident, aggressive product-first opening that demands attention in the feed."
      },
      {
        beat: "The Authority Stamp",
        time: "0:04 - 0:10",
        happens: "“By Pakistan’s No. 1 Vitamin Brand, Nutrifactor.” Cinematic multi-angle macro B-roll of powder & bottle.",
        why: "Instills institutional brand authority while preserving visual momentum."
      },
      {
        beat: "The Dual Audience",
        time: "0:10 - 0:20",
        happens: "“Whether you’re a high-performance athlete or just hitting the gym after work...”",
        why: "Inclusive positioning: validates serious lifters without intimidating recreational athletes."
      },
      {
        beat: "The Benefit Stack",
        time: "0:20 - 0:30",
        happens: "Power lifting cuts highlighting: Explosive strength, muscle recovery, endurance, and cognitive performance.",
        why: "Stacks tangible physical benefits, finishing with the lesser-known mental focus benefit as a hook."
      },
      {
        beat: "The Closer",
        time: "0:30 - 0:38",
        happens: "“If you are serious about your journey, get the best to be the best.”",
        why: "A punchy motivational closing line that works simultaneously as a CTA and brand mantra."
      }
    ],
    claimsNote: "Benefits framed strictly around certified performance enhancement and cellular ATP synthesis.",

    behindTheScenes: [
      {
        label: "The Set",
        desc: "Moody warehouse gym lit with cinematic teal backlights, neon red rim lights, and atmospheric haze.",
        image: "./assets/case-studies/Creatine_Case_Study_Portrait/image2.png",
        objectPosition: "center top"
      },
      {
        label: "The Camera",
        desc: "Fast handheld tracking shots following heavy dumbbell rows, contrasted with locked push-in dialogue shots.",
        image: "./assets/case-studies/Creatine_Case_Study_Portrait/image3.png",
        objectPosition: "center top"
      },
      {
        label: "The Performance",
        desc: "Cast a real competitive athlete who lifted genuine heavy weight on set to capture raw effort and real sweat.",
        image: "./assets/case-studies/Creatine_Case_Study_Portrait/image4.png",
        objectPosition: "center 70%"
      },
      {
        label: "The Edit",
        desc: "Bold red and white typography ('HIGH PERFORMANCE', 'RECOVERY') paired with bass-heavy sound design.",
        image: "./assets/case-studies/Creatine_Case_Study_Portrait/image5.png",
        objectPosition: "center top"
      }
    ],

    outcomes: {
      distribution: "Targeted fitness campaigns on Instagram and TikTok, driving direct traffic to Nutrifactor’s sports catalog.",
      feedOptimization: "High contrast visuals and bold subtitles make the video impactful with sound on or off.",
      nextIteration: "Introduce quick locker room Q&A clips addressing common creatine misconceptions."
    }
  },

  {
    id: "fero",
    slug: "fero",
    brand: "Nutrifactor",
    product: "Fero (Iron Supplement)",
    format: "Instagram Video + Paid Ads (9:16 Vertical)",
    title: "Stand Up. Spin. Sit Down.",
    headline: "One person. One sofa. One very bad decision to stand up too fast.",
    category: "Consumer Insight / Symptom Immersion",
    heroImage: "./assets/hero/hero_card_fero.png",
    fullSlide: "./assets/case-studies/Fero_Case_Study_Portrait/image1.png",
    accentColor: "#ef4444",
    themeBg: "#fef2f2",
    videoDuration: "0:30",
    videoUrl: "https://youtube.com/shorts/W8keo0yOYQ8?feature=share",
    aspectRatio: "9:16",
    demoThumbnail: "./assets/hero/hero_card_fero.png",
    role: "Concept · Script · Set Direction · Talent Direction · Edit Direction",

    brief: {
      take: "TAKE 2 · THE BRIEF",
      title: "Connecting a Universal Feeling to Low Iron",
      content: "Ramadan is when people become acutely conscious of daily energy dips, and that sudden head rush after standing up too quickly is an experience almost everyone recognizes. My mission was to connect that relatable micro-moment directly to low iron levels and introduce Nutrifactor Fero as the everyday solution."
    },

    idea: {
      take: "TAKE 3 · THE IDEA",
      title: "Don't explain dizziness. Put the viewer inside it.",
      content: "Most supplement commercials explain symptoms with dry clinical graphics. I wanted the audience to physically feel the sensation. Using purposeful gimbal movement, camera shake, and a dynamic vertigo blur, the viewer experiences Sarah's head rush first-hand—ensuring the product message lands after they have already emotionally related to the problem."
    },

    scriptBeats: [
      {
        beat: "The Setup",
        time: "0:00 - 0:04",
        happens: "“This is Sarah, she is fasting.” Sarah sits comfortably on the sofa reading a book.",
        why: "Establishes a relatable character and an immediate, timely context in a single opening line."
      },
      {
        beat: "The Tease",
        time: "0:04 - 0:10",
        happens: "“She doesn't know it yet, but she's about to feel so dizzy due to low iron levels.”",
        why: "A powerful open curiosity loop that keeps viewers hooked, waiting for the imminent physical payoff."
      },
      {
        beat: "The Moment",
        time: "0:10 - 0:18",
        happens: "Sarah stands up abruptly. The camera tilts, shakes, and blurs in an intense vertigo effect with sound design.",
        why: "The symptom is visceral and shown, not told—creating an immediate pattern interrupt on the vertical feed."
      },
      {
        beat: "The Twist",
        time: "0:18 - 0:23",
        happens: "Sarah slumps back onto the sofa holding her head. Voiceover delivers with dry warmth: “Yes... sit down.”",
        why: "The voiceover reacts like an empathetic friend in the room, injecting humor, relief, and personality."
      },
      {
        beat: "The Turn & CTA",
        time: "0:23 - 0:30",
        happens: "“Don't be like her. Support your iron levels this Ramadan with Nutrifactor Fero.” Product bottle reveal.",
        why: "Delivers a clear, actionable Call to Action seamlessly tied to seasonal wellness support."
      }
    ],
    claimsNote: "The video carefully illustrates that low iron can contribute to dizziness and fatigue without diagnosing medical conditions or promising immediate cures.",

    behindTheScenes: [
      {
        label: "The Set",
        desc: "A warm, natural living room sofa setup designed to feel intimately like home so the dizziness feels universally relatable.",
        image: "./assets/case-studies/Fero_Case_Study_Portrait/image2.png",
        objectPosition: "center top"
      },
      {
        label: "The Camera",
        desc: "Pre-planned gimbal movement and handheld whip-pan to trigger the disorienting camera shake the exact split-second Sarah stands.",
        image: "./assets/case-studies/Fero_Case_Study_Portrait/image3.png",
        objectPosition: "center top"
      },
      {
        label: "The Performance",
        desc: "Directed talent to capture a genuine, subtle physical head rush and authentic disorientation without cartoonish overacting.",
        image: "./assets/case-studies/Fero_Case_Study_Portrait/image4.png",
        objectPosition: "center top"
      },
      {
        label: "The Edit",
        desc: "Precision vertigo zoom blur, kinetic subtitle pacing ('do not Be Like Her'), and disorienting muffled audio cues.",
        image: "./assets/case-studies/Fero_Case_Study_Portrait/image5.png",
        objectPosition: "center top"
      }
    ],

    outcomes: {
      distribution: "Published on Nutrifactor's official Instagram and deployed across Meta paid ads targeting wellness and seasonal audiences.",
      feedOptimization: "Built for sound-off viewing: instant physical action, visual vertigo, and bold graphic callouts ensure 100% comprehension.",
      nextIteration: "Modular copy architecture allows swapping the opening line to adapt seamlessly outside Ramadan for late-night study or missed meal fatigue."
    }
  },

  {
    id: "sundion",
    slug: "sundion",
    brand: "Nutrifactor",
    product: "Sundion (Vitamin D3 200,000 IU)",
    format: "Studio Explainer Video (9:16 Vertical)",
    title: "Three Years Slower?",
    headline: "Translating complex Harvard research into a viral story.",
    category: "Science Journalism / High Potency",
    heroImage: "./assets/hero/hero_card_sundion.png",
    fullSlide: "./assets/case-studies/Sundion_Case_Study_Portrait/slide_full.png",
    accentColor: "#eab308",
    themeBg: "#fefce8",
    videoDuration: "0:50",
    videoUrl: "https://youtube.com/shorts/DVuo8JC2K1c?feature=share",
    aspectRatio: "9:16",
    demoThumbnail: "./assets/hero/hero_card_sundion.png",
    role: "Concept · Script · Set Direction · Talent Direction · Edit Direction",

    brief: {
      take: "TAKE 2 · THE BRIEF",
      title: "Revitalizing a Common Supplement",
      content: "Everyone has heard 'take your Vitamin D', and most consumers habitually scroll past it. A recent Harvard study examining cellular aging and telomeres provided a compelling hook. My mission was to leverage this research to command attention, explain it responsibly without hype, and position Sundion 200,000 IU as the high-potency solution."
    },

    idea: {
      take: "TAKE 3 · THE IDEA",
      title: "Start with the headline. Then tell the truth.",
      content: "Rather than an aggressive sales pitch, we designed an intimate podcast-style aesthetic: a host in a comfortable armchair with a broadcast microphone explaining scientific findings in clear language. The script explicitly debunks sensationalism: 'Vitamin D does not magically reverse aging by three years.' That immediate honesty is what earns viewer trust."
    },

    scriptBeats: [
      {
        beat: "The Research Hook",
        time: "0:00 - 0:08",
        happens: "“A recent Harvard study revealed that people taking regular Vitamin D3 showed cellular aging nearly 3 years slower.”",
        why: "Leads with a specific, peer-reviewed statistic and official journal graphics to spark deep curiosity."
      },
      {
        beat: "The Reality Check",
        time: "0:08 - 0:18",
        happens: "“Now, this doesn't mean Vitamin D turns back the clock 3 years. Scientists measured telomeres inside cells.”",
        why: "Dismantles clickbait before the viewer can doubt it, establishing radical brand credibility."
      },
      {
        beat: "The Broader Impact",
        time: "0:18 - 0:28",
        happens: "Highlights broader systemic benefits: bone density, muscular function, immunity, and emotional well-being.",
        why: "Bridges an academic longevity concept to daily health outcomes the viewer already prioritizes."
      },
      {
        beat: "The Hidden Problem",
        time: "0:28 - 0:38",
        happens: "“Over 70% of urban adults are clinically Vitamin D deficient without knowing it.”",
        why: "Shifts the narrative from passive curiosity to active personal urgency."
      },
      {
        beat: "The Solution & CTA",
        time: "0:38 - 0:50",
        happens: "Introduces Nutrifactor Sundion 200,000 IU softgel for rapid restoration of optimal Vitamin D levels.",
        why: "The product arrives as the logical, doctor-approved remedy only after the educational arc is complete."
      }
    ],
    claimsNote: "Grounds all language in published clinical telomere length studies, avoiding any anti-aging hyperbole.",

    behindTheScenes: [
      {
        label: "The Set",
        desc: "Cozy podcast corner: modern cream armchair, Shure broadcast mic, warm ambient lamp, and clean off-white backdrop.",
        image: "./assets/case-studies/Sundion_Case_Study_Portrait/image2.png",
        objectPosition: "center top"
      },
      {
        label: "The Performance",
        desc: "Spoken-word bilingual delivery (Urdu-English blend) coached for natural hand gestures and warm, accessible vocal pacing.",
        image: "./assets/case-studies/Sundion_Case_Study_Portrait/image3.png",
        objectPosition: "center top"
      },
      {
        label: "The Proof Layer",
        desc: "Harvard Gazette research article overlaid directly on screen to validate claims with tangible citations.",
        image: "./assets/case-studies/Sundion_Case_Study_Portrait/image4.png",
        objectPosition: "center top"
      },
      {
        label: "The Medical Graphics",
        desc: "Visual chromosome diagrams illustrating telomere caps and a split-face comparison graphic to make abstract cellular science intuitive.",
        image: "./assets/case-studies/Sundion_Case_Study_Portrait/image5.png",
        objectPosition: "center center"
      }
    ],

    outcomes: {
      distribution: "Shared across Nutrifactor's educational channels and deployed as a trust-building ad creative.",
      feedOptimization: "Strong visual citations and podcast atmosphere generated above-average watch times and comment engagement.",
      nextIteration: "Produce an animated metaphor series comparing telomeres to shoelace aglets for even simpler comprehension."
    }
  }
];

export const MORE_WORK_PROJECTS = [
  {
    id: "mw-1",
    title: "Collagatin Sachet DVC",
    brand: "Nutrifactor",
    category: "Beauty & Radiance",
    tag: "Marine Collagen",
    description: "Cinematic beauty commercial demonstrating Type 1 & Type 3 Marine Collagen. Focused on aesthetic visual pacing, liquid texture, and radiant skin benefits.",
    duration: "0:30",
    image: "./assets/more-work/project_1.png",
    views: "1.8M",
    hook: "“Type 1 & Type 3 Marine Collagen — softer, smoother and plump skin.”",
    script: "Type 1 & Type 3 Marine Collagen\nSofter smoother and plump skin.\nIt is a cinematic beauty type commercial for the product.",
    productUrl: "https://www.nutrifactor.com.pk/products/collagatin-powder?_pos=1&_psq=Collagatin&_psid=e1bfa4cb0&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/oOHrn5NFiZc?feature=share",
    youtubeId: "oOHrn5NFiZc"
  },
  {
    id: "mw-2",
    title: "Glutathione Brightening Cream",
    brand: "Cellcense",
    category: "Science Explainers",
    tag: "4-in-1 Correction",
    description: "Storytelling commercial following Ava tackling winter climate damage, presenting Cellcense Glutathione Brightening Cream to reduce dark spots, sunspots, and post-acne marks.",
    duration: "0:25",
    image: "./assets/more-work/project_2.png",
    views: "950K",
    hook: "“Winter isn't good for her skin... luckily she discovered a 4-in-1 formula.”",
    script: "(0:02) This is Ava. And winter isn't good for her skin.\n(0:05) The heat, rain, and sun leave her skin soft, unbalanced, and damaged.\n(0:10) Luckily, she's discovered a 4-in-1 formula for visible pigmentation correction.\n(0:15) CellSense Glutathione Brightening Cream.\n(0:17) It reduces dark spots, sunspots, and post-acne marks to glow soft and…",
    productUrl: "https://cellcense.com/products/glutathione-brightening-cream",
    youtubeUrl: "https://youtube.com/shorts/BAgzRzCigi8?feature=share",
    youtubeId: "BAgzRzCigi8"
  },
  {
    id: "mw-3",
    title: "Cellcense Serums Transition",
    brand: "Cellcense",
    category: "Viral Hooks",
    tag: "Serum Lineup",
    description: "Trendy rhythmic transition video showcasing the entire Cellcense serum collection. Choreographed to sync snap cuts with screen taps and musical beats.",
    duration: "0:15",
    image: "./assets/more-work/project_3.png",
    views: "1.4M",
    hook: "“Move your thumb to the beat — with each beat the serums change.”",
    script: "Concept: Move your thumb to the beat. And with each beat the serums change.\nTrendy transition commercial showcasing the full Cellcense targeted serums range synced to rhythmic audio.",
    productUrl: "https://cellcense.com/",
    youtubeUrl: "https://youtube.com/shorts/Ib9WKg_5K30?feature=share",
    youtubeId: "Ib9WKg_5K30"
  },
  {
    id: "mw-4",
    title: "Sleep Well: Doomscroll Interrupter",
    brand: "Nutrifactor",
    category: "Viral Hooks",
    tag: "Sleep Optimization",
    description: "Pattern-interrupt late-night commercial engineered to catch night-scrollers in bed. Directly addresses sleep procrastination before introducing Nutrifactor Sleep Well melatonin and calming herbs.",
    duration: "0:30",
    image: "./assets/more-work/project_4.png",
    views: "2.1M",
    hook: "“Still awake? You were trying to sleep... Still scrolling?”",
    script: "0:03 — Still Awake?\n0:04 — You were Trying to sleep?\n0:07 — Still Scrolling…..\n0:09 — One More Reel\n0:10 — One More Video\n0:13 — To Interrupt Your Doomscrolling\n0:16 — Sleep Well\n0:19 — Melatonin\n0:20 — Calming Herbs\n0:22 — Helps Mind Relax\n0:28 — Goodnight\n0:30 — Rest Well and Sleep Well",
    productUrl: "https://www.nutrifactor.com.pk/products/sleep-well?srsltid=AU7gw4Xc1_8TEi1bUCKhXIFDpD7dBGQTr3C7LG2ZSJtRHsBEaERztBTh",
    youtubeUrl: "https://youtube.com/shorts/RrwtldJ4RDI",
    youtubeId: "RrwtldJ4RDI"
  },
  {
    id: "mw-5",
    title: "Nutri Collagen Eid Meme Speech",
    brand: "Nutrifactor",
    category: "Viral Hooks",
    tag: "Meme Concept",
    description: "Humorous viral ad adapting the iconic Snoop Dogg acceptance speech meme to celebrate consistent skincare and early Eid prep with Nutrifactor Nutri Collagen.",
    duration: "0:35",
    image: "./assets/more-work/project_5.png",
    views: "1.6M",
    hook: "“Me after having glowing skin for Eid: I wanna thank ME.”",
    script: "On-screen text: Me after having glowing skin for Eid\n\nSpeech:\nLast but not least…\nI wanna thank me…\nI wanna thank me for choosing consistency.\nI wanna thank me for taking care of my skin before Eid instead of panicking two days before.\nI wanna thank me for staying hydrated, eating clean and not settling for dull skin.\nI wanna thank me for investing in my glow… and trusting Nutrifactor’s Nutri Collagen to have my back.\nI wanna thank me for using Nutri Collagen to help boost hydration to keep my skin soft, smooth, and Eid-ready.\nI wanna thank me for choosing collagen, Vitamin C, and biotin to achieve glowing skin, strong hair, and shiny nails.\nYeah… that’s me.\nAnd most importantly…\nI wanna thank me for showing up radiant every single time.",
    productUrl: "https://www.nutrifactor.com.pk/products/nutri-collagen?srsltid=AU7gw4VsxEzbfzrd8QQspRzRtiexSrw7WbiXedV-APg83rTUY2E9PTAR",
    youtubeUrl: "https://youtube.com/shorts/reh5Pup81rs",
    youtubeId: "reh5Pup81rs"
  },
  {
    id: "mw-6",
    title: "Glutafair: The Moon Analogy",
    brand: "Nutrifactor",
    category: "Science Explainers",
    tag: "Master Antioxidant",
    description: "Compelling narrative linking lunar resilience to cellular antioxidant defense. Explains how L-Glutathione detoxifies oxidative stress to maintain natural radiance.",
    duration: "0:45",
    image: "./assets/more-work/project_6.png",
    views: "1.3M",
    hook: "“If you have 10,000 PKR, you can buy 1 acre of land on the moon.”",
    script: "If you have 10,000PKR, you can buy 1 ACRE of land on the MOON, Yes the Moon.\nCool, right? But here is the fun thing:\nYou don’t need to own the moon to glow like it.\nMoon’s been through a lot… asteroids, craters… but it still glows.\nHamari skin bhi roz kuch na kuch challenges face karti hai: pollution, stress, toxins.\nAnd slowly, glow dull hona shuru ho jata hai. That’s where support matters.\nJaisy moon needs support of sun to glow, support your skin with Nutrifactor’s Glutafair.\nNutrifactor’s Gluta Fair contains L-Glutathione jo ke ek master antioxidant hai. It helps detox your body and fights oxidative stress jo premature aging ka major reason hota hai. Ye apki skin ko naturally brighten krta hai.\nPlus Vitamin C—jo not only supports collagen production but keeps your skin tone even and radiant.\nSo no, you don’t need to own the moon…\nBas thodi care chahiye to glow like it.",
    productUrl: "https://www.nutrifactor.com.pk/products/gluta-fair?_pos=2&_sid=f1ab54af8&_ss=r",
    youtubeUrl: "https://youtube.com/shorts/ABUAsfyU8bY",
    youtubeId: "ABUAsfyU8bY"
  },
  {
    id: "mw-7",
    title: "FIFA 2026 Trionda Football Teaser",
    brand: "Nutrifactor",
    category: "Brand Campaigns",
    tag: "FIFA 2026",
    description: "High-energy B-roll teaser showcasing the official FIFA Trionda match football with motion typography announcing the 5-winner giveaway.",
    duration: "0:15",
    image: "./assets/more-work/project_7.png",
    views: "890K",
    hook: "“5 Official FIFA match footballs up for grabs.”",
    script: "Dynamic B-roll showcasing the official FIFA Trionda match ball with animated typography:\n'Pro Trionda — 5 Winners — Official FIFA 2026 Football Giveaway'.",
    productUrl: "https://www.nutrifactor.com.pk/",
    youtubeUrl: "https://youtube.com/shorts/WYF6l8mB-2A",
    youtubeId: "WYF6l8mB-2A"
  },
  {
    id: "mw-8",
    title: "FIFA World Cup Ball Giveaway (Host Announcement)",
    brand: "Nutrifactor",
    category: "Brand Campaigns",
    tag: "World Cup Giveaway",
    description: "On-camera host announcement explaining how customers can enter to win an official FIFA match ball simply by placing an order before July 20th.",
    duration: "0:30",
    image: "./assets/more-work/project_8.png",
    views: "1.1M",
    hook: "“FIFA World Cup 2026 is here — and Nutrifactor is giving away 5 official match balls.”",
    script: "FIFA world cup 2026 is here—and to share the excitement, Nutrifactor is giving away 5 Official FIFA footballs to lucky winners.\n\nGiveaway Entry bohat simple hai:\nHamari website pe koi bhi order place karo, 20th July se pehle, aur aap automatically enter ho jate hain official FIFA football jeetne ke liye.\nYes itna hi simple hai.\n\nOrder karin your favourite health products on Nutrifactor Website, aur official football jeetne ka chance hasil karin.",
    productUrl: "https://www.nutrifactor.com.pk/",
    youtubeUrl: "https://youtube.com/shorts/AJ7GmMQHK_g",
    youtubeId: "AJ7GmMQHK_g"
  },
  {
    id: "mw-9",
    title: "Cellcense Science-Backed Skincare",
    brand: "Cellcense",
    category: "Beauty & Radiance",
    tag: "Targeted Actives",
    description: "Interactive visual concept where the talent points to floating text prompts, surrounded by multiple hands offering skincare serums before selecting Cellcense.",
    duration: "0:20",
    image: "./assets/more-work/project_9.png",
    views: "780K",
    hook: "“Looking for science-backed skincare? Try Cellcense.”",
    script: "The talent points to the floating kinetic question above their head: { Looking for science backed skincare? }\nHands enter from frame sides (5 to 6 hands) each holding different competing products.\nThe host confidently picks the Cellcense bottle: [ Try Cellcense ].",
    productUrl: "https://cellcense.com/",
    youtubeUrl: "https://youtube.com/shorts/CAffa737ncw",
    youtubeId: "CAffa737ncw"
  },
  {
    id: "mw-10",
    title: "Collagen Day & Night Cream",
    brand: "Cellcense",
    category: "Beauty & Radiance",
    tag: "Day & Night Glow",
    description: "Playful, energetic application ad demonstrating day-and-night barrier replenishment and skin bounce.",
    duration: "0:25",
    image: "./assets/more-work/project_10.png",
    views: "840K",
    hook: "“Stay plumped, stay you, stay bouncy and firm.”",
    script: "Collagen Day and Night.\nStay glowy!\n[ The talent applies the cream in a playful, energetic cadence ]\nOn-Screen Super: 'Stay plumped, Stay you, Stay bouncy and Firm.'",
    productUrl: "https://cellcense.com/products/collagen-day-night-cream?_pos=1&_sid=e278dbc6e&_ss=r",
    youtubeUrl: "https://youtube.com/shorts/uUo1NbTMNgI",
    youtubeId: "uUo1NbTMNgI"
  },
  {
    id: "mw-11",
    title: "Cellcense 2% Salicylic Acid Acne Buster",
    brand: "Cellcense",
    category: "Science Explainers",
    tag: "Stop Counting Pimples",
    description: "Pattern interrupt debunking DIY acne hacks (toothpaste, ice cubes, lemons) and introducing 2% Salicylic Acid + Niacinamide + Peppermint Oil.",
    duration: "0:45",
    image: "./assets/more-work/project_11.png",
    views: "1.7M",
    hook: "“1, 2, 3... 17, 18, 19, 20... Stop counting acne hacks and pimples.”",
    script: "Numbers popping around host: [ 1, 2, 3... 17… 18… 19… 20… oh hey thanks for waiting. ]\nI was just counting all the random hacks people try for acne.\nToothpaste… DIY masks… ice cubes… lemon…\n{{{ Toothpaste… DIY masks… ice cubes… lemon… }}} [ separate graphics popping ]\nHonestly, I’ve tried half of them.\nBut now we can stop counting nonsense, because something useful just launched:\n{{{ Stop counting Nonsense }}} [ animated text ]\nThis, Cellcense 2% Salicylic Acid.\nIf you want visibly clearer, breakout-free skin… this is the stuff that actually makes sense.\n2% Salicylic Acid unclogs pores, clears acne, and gently exfoliates.\nUnclogs, Clears, Exfoliates [ B-roll & kinetic typography ]\nPlus it has Peppermint Oil to purify, and Niacinamide to soothe redness and those annoying post-acne marks.\nSo instead of counting pimples in the mirror every morning… maybe count Salicylic acid into your routine.\n{ STOP COUNTING PIMPLES }\nCellcense 2% Salicylic Acid: something that works, without the drama.",
    productUrl: "https://cellcense.com/products/salicylic-acid?_pos=1&_psq=Salicylic+acid&_psid=b7fe5163c&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/0ncsgxrUDwg",
    youtubeId: "0ncsgxrUDwg"
  },
  {
    id: "mw-12",
    title: "Nutrifactor Gym Performance (Creatine & Soy Protein)",
    brand: "Nutrifactor",
    category: "Performance & Fitness",
    tag: "Strength & Recovery",
    description: "Cinematic gym commercial pairing Creatine Monohydrate for muscle ATP with Soy Protein Isolate for clean post-workout muscle repair.",
    duration: "0:50",
    image: "./assets/more-work/project_12.png",
    views: "1.5M",
    hook: "“This is Hifsa. She doesn't just train hard, she trains with intention.”",
    script: "(0:00) This is Hifsa. She doesn't just train hard, she trains with intention. Her day starts simple.\n(0:08) Creatine Monohydrate by Nutrifactor. Every morning, without excuses. Just 4 grams to keep (0:15) her muscles powered, strength consistent, and recovery on track.\nSo every workout actually (0:21) counts. And protein? That's non-negotiable. Nutrifactor's Soy Protein Isolate is her go-to.\n(0:28) Plant-based, dairy-free, and complete. 22 grams of soy protein per serving, (0:34) delivering a complete amino acid profile to help preserve lean muscle, support recovery, (0:39) and maintain strength beyond the gym. They're not shortcuts, they're daily habits.\nTrain smart, (0:46) recover better, show up stronger. That's Nutrifactor. Supporting performance every single day.",
    productUrl: "https://www.nutrifactor.com.pk/products/creatine-monohydrate-powder?_pos=1&_sid=62b7c54af&_ss=r",
    youtubeUrl: "https://youtube.com/shorts/vIbxGWSJPos",
    youtubeId: "vIbxGWSJPos"
  },
  {
    id: "mw-13",
    title: "Trionda Ball Giveaway (Product Lineup)",
    brand: "Nutrifactor",
    category: "Brand Campaigns",
    tag: "Giveaway Deadline",
    description: "Trendy product showcase video highlighting the full Nutrifactor lineup lined up with the official FIFA match ball center stage.",
    duration: "0:20",
    image: "./assets/more-work/project_13.png",
    views: "650K",
    hook: "“Order before 20th July — win the official match ball.”",
    script: "Order From www.nutrifactor.com.pk Before 20th July.\nCinematic camera push-in showing Nutrifactor vitamins arranged alongside the official FIFA Trionda soccer ball.",
    productUrl: "https://www.nutrifactor.com.pk/",
    youtubeUrl: "https://youtube.com/shorts/3WHX2K3d2tA",
    youtubeId: "3WHX2K3d2tA"
  },
  {
    id: "mw-14",
    title: "Ovacep PCOS Myth Busting with Doctor",
    brand: "Nutrifactor",
    category: "Science Explainers",
    tag: "Hormonal Balance",
    description: "Educational doctor Q&A dismantling common PCOS myths and detailing how Inositol and Folic Acid support ovulation and insulin sensitivity.",
    duration: "0:40",
    image: "./assets/more-work/project_14.png",
    views: "1.9M",
    hook: "“People with PCOS cannot conceive? Myth. Inositol supports ovulation? Fact.”",
    script: "People with PCOS cannot conceive: Myth.\n(0:03) Every hormonal imbalance is PCOS: Myth.\n(0:06) PCOS only affects overweight women: Myth.\n(0:09) You only need folic acid when you are pregnant: (0:12) Okay, you should take, but not only.\n(0:14) You need to lose weight to fix hormones: Sometimes.\n(0:19) PCOS symptoms can be managed with supplements: Yeah, can be.\n(0:23) PCOS symptoms can vary from person to person: Yeah, sure. Fact.\n(0:26) Inositol can support ovulation and insulin response in PCOS: (0:31) Yes.\n(0:31) Hormonal imbalance can cause weight gain: (0:34) Hormonal imbalance can cause, yeah.",
    productUrl: "https://www.nutrifactor.com.pk/",
    youtubeUrl: "https://youtube.com/shorts/xaKsQFg7H1w",
    youtubeId: "xaKsQFg7H1w"
  },
  {
    id: "mw-15",
    title: "Leanax Office Worker Routine",
    brand: "Nutrifactor",
    category: "Viral Hooks",
    tag: "Weight Loss & Habits",
    description: "Hyper-relatable 9-to-5 desk montage breaking down the hourly cycle of office snacks, tea, and cravings, introducing Garcinia-powered Leanax to curb appetite.",
    duration: "0:45",
    image: "./assets/more-work/project_15.png",
    views: "2.3M",
    hook: "“Main aapko dikhati hoon office workers kay liye weight loss krna kiun mushkil hota hai.”",
    script: "Main aapko dikhati hoon, office workers kay liye weight loss krna kiun mushkil hota hai...\nThe Desk Scene:\nOffice Day Montage — (0:05–0:22)\n9:00 AM — office start. Lekin box already ready hai... [ Snack box appears ]\n10:30 — Coffee\n11:45 — Snack 1\n12:50 — Lunch\n2:15 — Tea\n3:00 — Snack 2\n4:30 — Snack 3\n5:00 PM — Clock out.\n\nOffice workers k liye weight lose karna mushkil hai par impossible nahi.\nYou can use this Nutrifactor Leanax.\nLeanax aapki energy maintain karny mai help krta hai, metabolism support karta hai, aur sab se important baat ismai present Garcinia cravings ko control karne mein madad karta hai.\nTou apni weight loss journey ko support karin chahy aap office worker hain ya nhi Leanax can help you.",
    productUrl: "https://www.nutrifactor.com.pk/products/leanax?_pos=1&_sid=f6588c64d&_ss=r",
    youtubeUrl: "https://youtube.com/shorts/eb-PkNj6fMQ",
    youtubeId: "eb-PkNj6fMQ"
  },
  {
    id: "mw-16",
    title: "If You Have This, Try This (Problem-Solution)",
    brand: "Nutrifactor",
    category: "Viral Hooks",
    tag: "Visual Trend",
    description: "Silent visual trend video where the host sits centered, pointing to common health problems on the left and matching Nutrifactor solutions on the right.",
    duration: "0:25",
    image: "./assets/more-work/project_16.png",
    views: "1.2M",
    hook: "“If you have this... try this! Quick wellness matching guide.”",
    script: "Visual Concept:\nOn one side there is a problem and other side there are the products of the brand.\nThe host is sitting in the middle: first points left to 'IF YOU HAVE THIS' and then points right to 'TRY THIS'.\nThere is no talking in the video, just the host pointing to different sides to send the message with rhythmic beat pacing.",
    productUrl: "https://www.nutrifactor.com.pk/",
    youtubeUrl: "https://youtube.com/shorts/NfsUIWam2wc",
    youtubeId: "NfsUIWam2wc"
  },
  {
    id: "mw-17",
    title: "Butex: Hair, Skin & Nails Beat",
    brand: "Nutrifactor",
    category: "Beauty & Radiance",
    tag: "17 Essential Nutrients",
    description: "Rhythm-driven beauty commercial opening on a snappy musical cue with kinetic motion graphics framing skin, hair, and nails, followed by a charismatic on-screen host introducing Butex's 17 essential nutrients.",
    duration: "0:25",
    image: "./assets/more-work/project_17.png",
    views: "910K",
    hook: "“Skin, hair, nails — 17 essential vitamins and minerals in one routine.”",
    script: "Music Cue: [ Skin, hair, nails ] with animated target frames framing each feature.\nSpeech: 'With 17 essential vitamins and minerals and collagen, Butex supports stronger nails and healthier and glowing skin.'",
    productUrl: "https://www.nutrifactor.com.pk/products/butex?_pos=1&_sid=b1370aa21&_ss=r",
    youtubeUrl: "https://youtube.com/shorts/dg_VSCSujLM",
    youtubeId: "dg_VSCSujLM"
  },
  {
    id: "mw-18",
    title: "Magnesium Glycinate: Deep Rest & Calm",
    brand: "Nutrifactor",
    category: "Science Explainers",
    tag: "Fast-Absorbing Calm",
    description: "Relatable late-night scroll narrative following Sarah attempting to unwind through her social feed, using an authentic pattern interrupt to reveal that genuine calm comes from within via fast-absorbing Magnesium Glycinate.",
    duration: "0:30",
    image: "./assets/more-work/project_18.png",
    views: "1.35M",
    hook: "“Meet Sarah. She's deep in the scroll, hoping for calm. But calm isn't in the feed.”",
    script: "Meet Sarah. She's deep in the scroll, hoping for rest and calm.\nBut calm isn't (0:10) in the feed.\nIt's what you feed yourself.\nMagnesium glycinate, fast absorbing, (0:25) strong on relaxation, built for calm, real calm.\nThis is Nutrifactor's Magnesium.",
    productUrl: "https://www.nutrifactor.com.pk/products/magnesium-glycinate?_pos=1&_sid=463211820&_ss=r",
    youtubeUrl: "https://youtube.com/shorts/HS--iv0bWyU",
    youtubeId: "HS--iv0bWyU"
  },
  {
    id: "mw-19",
    title: "Bzolve Chewables: Brain Fog & Fatigue",
    brand: "Nutrifactor",
    category: "Viral Hooks",
    tag: "Focus & Stamina",
    description: "Humorous workplace lethargy montage capturing the midday slump and cycling through on-screen 'tired excuses', before a quick handoff of Bzolve Chewables provides an instant mental reset and revitalization.",
    duration: "0:30",
    image: "./assets/more-work/project_19.png",
    views: "880K",
    hook: "“Excuse #246: I forgot... tired, fidgeting, and foggy.”",
    script: "Talent is fidgeting at her desk looking tired and sluggish.\nOn-screen typography: 'Excuse 246: I forgot'.\nSomeone hands her the Nutrifactor Bzolve Chewables.\nShe takes it, revitalizes, and transitions into happily and effortlessly working.",
    productUrl: "https://www.nutrifactor.com.pk/products/bzolve-chewables?_pos=1&_sid=7d0e1f798&_ss=r",
    youtubeUrl: "https://youtube.com/shorts/TmPCl1hgSJI",
    youtubeId: "TmPCl1hgSJI"
  },
  {
    id: "mw-20",
    title: "Enerteen Gummies: Life With vs. Without",
    brand: "Nutrifactor",
    category: "Viral Hooks",
    tag: "Energy & Vitality",
    description: "Dynamic split-screen comparison contrasting sluggish, caffeine-dependent morning fatigue against high-vibe, effortless vitality powered by daily Enerteen Gummies.",
    duration: "0:25",
    image: "./assets/more-work/project_20.png",
    views: "1.05M",
    hook: "“Life with Nutrifactor vs. Life without Nutrifactor.”",
    script: "Concept: Two sides comparison — 'The life with Nutrifactor and life without'.\nOn one side the talent is taking Enerteen gummies and is vibrant and energetic.\nOn the other side the person is tired, sleepy, and slumped over coffee.",
    productUrl: "https://www.nutrifactor.com.pk/products/enerteen-gummies?_pos=11&_sid=42c3751e8&_ss=r",
    youtubeUrl: "https://youtube.com/shorts/IP9rPRa8PPw?feature=share",
    youtubeId: "IP9rPRa8PPw"
  },
  {
    id: "mw-21",
    title: "Collagen Peptides: Try Not to Steal",
    brand: "Nutrifactor",
    category: "Viral Hooks",
    tag: "Playful Comedy",
    description: "Playful situational comedy featuring two coworkers locked in a suspenseful standoff over the office's last tub of Collagen Peptides, escalating with comedic tension into a synchronized race to grab it.",
    duration: "0:25",
    image: "./assets/more-work/project_21.png",
    views: "1.25M",
    hook: "“Try not to steal the best collagen peptides in town!”",
    script: "On-screen text: { Try not to steal the best collagen peptides in town }\nTwo hosts stand in the office eyeing the product tub placed front and center on the table, pondering from different angles with playful suspenseful music.\nIn the end, they both make a hilarious synchronized dash to grab the tub.",
    productUrl: "https://www.nutrifactor.com.pk/products/collagatin-advance-powder?_pos=1&_sid=4ea579b57&_ss=r",
    youtubeUrl: "https://youtube.com/shorts/EIU0-ZxgQU8",
    youtubeId: "EIU0-ZxgQU8"
  },
  {
    id: "mw-22",
    title: "Collagatin Sachet Formula Reveal (Launch DVC)",
    brand: "Nutrifactor",
    category: "Beauty & Radiance",
    tag: "Formula Launch",
    description: "Theatrical lab-set reveal commercial featuring dry-ice smoke, test-tube ingredients (Vanilla flavor, Type 1 & 3 Collagen), and culminating in the sleek Collagatin Sachet reveal.",
    duration: "0:30",
    image: "./assets/more-work/project_22.png",
    views: "1.45M",
    hook: "“Dry ice fog, lab coats, and zero harmful chemicals: the formula reveal.”",
    script: "Concept: Launch commercial featuring a bucket with dry ice fog rolling over the table.\nThe host puts on a white lab coat and mixes in the essential active ingredients:\n'Vanilla flavour', 'Type 1 & 3 Collagen', 'No harmful chemicals'.\nAt the climax, she reveals the sleek Collagatin Sachet.",
    productUrl: "https://www.nutrifactor.com.pk/products/collagatin-powder?_pos=1&_psq=Collagatin&_psid=e1bfa4cb0&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/EJnkcDdS8GU",
    youtubeId: "EJnkcDdS8GU"
  },
  {
    id: "mw-23",
    title: "Hyaluronic Acid: The Damp Skin Rule",
    brand: "Cellcense",
    category: "Science Explainers",
    tag: "Skincare Protocol",
    description: "Pattern interrupt beauty explainer: creator washing face harshly with rough towel, trigger comical audio, then revealing the science-backed protocol of applying hyaluronic serum onto damp skin.",
    duration: "0:30",
    image: "./assets/more-work/mw2_01_hyaluronic_serum.png",
    views: "1.7M",
    hook: "“Harsh towel drying and serum on dry skin? Stop making this routine mistake.”",
    script: "Opening visual: Person washes their face with water and vigorously wipes with a rough towel, immediately applying serum onto dry skin as comical 'Oh no no no' sound triggers.\n\nThe Pivot: Record scratch. The host stops the frame and explains the proper way to apply serum: on damp skin to lock in 1,000x molecular hydration.\n\nClimax: Soft glowing skin texture with macro shots of Cellcense Hyaluronic Collagen Serum.",
    productUrl: "https://cellcense.com/products/hyaluronic-collagen?_pos=1&_psq=Hyaluronic&_psid=5d6da270d&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/oLm5rHzqbAM",
    youtubeId: "oLm5rHzqbAM"
  },
  {
    id: "mw-24",
    title: "Collagatin Sachet: Get-Ready Movement Flow",
    brand: "Nutrifactor",
    category: "Beauty & Radiance",
    tag: "Morning Routine",
    description: "Zero talking, pure aesthetic momentum: energetic morning flow of creator getting ready across room while effortlessly mixing a single Collagatin sachet into water.",
    duration: "0:25",
    image: "./assets/more-work/mw2_02_collagatin_sachet.png",
    views: "1.9M",
    hook: "“No talking, pure morning momentum: getting ready while mixing your daily glow.”",
    script: "Concept: No talking. Person bouncing around the room getting ready while making Collagatin sachet in fresh water.\nFloating on-screen text: 'For Skin, Hair & Nails — In 1 Daily Sachet.'\nChic, effortless morning routine highlighting instant solubility and clean daily glow habit.",
    productUrl: "https://www.nutrifactor.com.pk/products/collagatin-powder?_pos=1&_psq=collagatin&_psid=dd160bb47&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/o1qKVxlf7u4?feature=share",
    youtubeId: "o1qKVxlf7u4"
  },
  {
    id: "mw-25",
    title: "Nutri-Plum: 4 Gut Symptoms Cutout Grid",
    brand: "Nutrifactor",
    category: "Science Explainers",
    tag: "Digestive Wellness",
    description: "Interactive 4-problem green-screen cutout grid identifying common gut discomforts, transitioning seamlessly into botanical relief with Senna, Plum, Fennel, Chicory & Cinchona.",
    duration: "0:45",
    image: "./assets/more-work/mw2_03_nutriplum.png",
    views: "1.45M",
    hook: "“Bloating, sluggish transit, heavy stomach? If you have any of these 4, listen up.”",
    script: "(0:00 - 0:14) Four simultaneous floating cutout windows showing 4 common gut distress problems.\n(0:14) 'Gut not working properly?'\n(0:17) 'It's not just your problem.'\n(0:23) 'Try Nutri-Plum.' (Text overlay + 3D bottle render float in, background transitions to warm soothing palette).\n(0:27) 'Natural synergistic combination of Senna, Plum, Fennel, Chicory & Cinchona.'\n(0:32) 100% natural botanical extracts.\n(0:36) Gentle overnight relief without harsh cramping.\n(0:42) Wake up feeling light, regulated, and reset.",
    productUrl: "https://www.nutrifactor.com.pk/products/nutri-plum?_pos=1&_psq=NutriPlum&_psid=c55817d4b&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/AIeiZDypSwQ?feature=share",
    youtubeId: "AIeiZDypSwQ"
  },
  {
    id: "mw-26",
    title: "Glutafair & Extra-C: Retro TV Stack Drop",
    brand: "Nutrifactor",
    category: "Viral Hooks",
    tag: "Bundle & Savings",
    description: "Visual hook commercial opening with three stacked CRT retro televisions broadcasting the host, announcing limited bundle savings and synergistic skin glow + immunity benefits.",
    duration: "0:25",
    image: "./assets/more-work/mw2_04_glutafair_extrac_bundle.png",
    views: "2.3M",
    hook: "“Wanna save 690 PKR and get radiant skin with an immunity boost? Grab this combo.”",
    script: "Opening Hook: Three stacked retro televisions flick on simultaneously displaying the host in synchronized motion.\n\nDialogue: 'Wanna save 690 PKR and get radiant skin with an immunity boost? Get the Glutafair and Extra-C Bundle right now.'\n\nMechanism: L-Glutathione neutralizes free radicals while Vitamin C recycles active glutathione and triggers collagen production.\n\nCall-to-Action: Limited seasonal flash bundle announcement with high-conversion checkout link.",
    productUrl: "https://www.nutrifactor.com.pk/products/glutafair?_pos=1&_psq=glutafair&_psid=0b3433e5c&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/fuEmvY4tw2g",
    youtubeId: "fuEmvY4tw2g"
  },
  {
    id: "mw-27",
    title: "Supplements & Serums: Kinetic Grab Rush",
    brand: "Cellcense",
    category: "Viral Hooks",
    tag: "Full Lineup Match-Cut",
    description: "High-octane rhythmic match-cut ad: foreground hand presents target product close to camera while creator sprints towards the lens to grab each serum and beauty supplement to music beats.",
    duration: "0:20",
    image: "./assets/more-work/mw2_05_supplements_serums.png",
    views: "2.1M",
    hook: "“Kinetic match-cuts: a hand holds the holy grail while talent sprints to grab it.”",
    script: "Trendy dynamic music concept: In the extreme foreground, a hand presents the targeted bottle right in front of the lens. Talent sprints toward camera in background to snatch it.\n\nRapid rhythmic cuts on downbeats rotate through Cellcense serums and Nutrifactor daily beauty supplements in rapid succession, creating an irresistibly punchy loop.",
    productUrl: "https://cellcense.com/",
    youtubeUrl: "https://youtube.com/shorts/dQz8PChEUBU",
    youtubeId: "dQz8PChEUBU"
  },
  {
    id: "mw-28",
    title: "L-Arginine: Cinematic Nitric Oxide Pump",
    brand: "Nutrifactor",
    category: "Performance & Fitness",
    tag: "Gym Performance",
    description: "No talking, pure cinematic iron grit: aesthetic gym B-roll capturing chalk dust, compound lifts, vascularity, and sustained nitric oxide endurance.",
    duration: "0:30",
    image: "./assets/more-work/mw2_06_l_arginine.png",
    views: "1.65M",
    hook: "“Zero dialogue, pure focus: aesthetic B-roll capturing vascularity, endurance, and power.”",
    script: "Cinematic gym commercial built on rhythm, grit, and visual texture. Macro shots of chalk dust floating in gym shafts of light, capsule intake, and rhythmic compound lifts.\n\nVisual storytelling without narration: communicates nitric oxide vasodilation, amplified muscle pumps, and enhanced blood flow through intense visual pacing and deep percussive sound design.",
    productUrl: "https://www.nutrifactor.com.pk/products/l-arginine-500-mg?_pos=1&_psq=l-arginine&_psid=e02a0a5be&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/u0BX1wV1ANg",
    youtubeId: "u0BX1wV1ANg"
  },
  {
    id: "mw-29",
    title: "Bonex-D: The 8-Second Bone Health Challenge",
    brand: "Nutrifactor",
    category: "Science Explainers",
    tag: "Bone Density & Calcium",
    description: "Interactive stopwatch challenge: host taps an oversized digital timer on screen proving it takes only 8 seconds a day to safeguard bone density with Calcium, Vitamin D3 & Zinc.",
    duration: "0:25",
    image: "./assets/more-work/mw2_07_bonex_d.png",
    views: "1.85M",
    hook: "“Starting the stopwatch right now: let's see how long it takes to protect your bones.”",
    script: "Visual Hook: Person starts a live digital timer on screen and asks: 'Let's see how long it takes...'\n\nAt 8 seconds: Creator drinks water with one Bonex-D tablet.\n\nTakeaway: 'It takes only 8 seconds to take care of your bones today — saving decades of osteoporosis risk, joint stiffness, and calcium depletion. Calcium, Vitamin D3, and Zinc in one optimal tablet.'",
    productUrl: "https://www.nutrifactor.com.pk/products/bonex-d?_pos=1&_psq=bonex&_psid=a00cf187e&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/YbYbHAcUrpM",
    youtubeId: "YbYbHAcUrpM"
  },
  {
    id: "mw-30",
    title: "Maxzoom: The Pink Elephant Mind Trick",
    brand: "Nutrifactor",
    category: "Viral Hooks",
    tag: "Pattern Interrupt",
    description: "Psychological reverse-suggestion hook: telling viewers NOT to think of a pink elephant, and NOT to think of thinning hair or brittle nails, before revealing Maxzoom keratin support.",
    duration: "0:30",
    image: "./assets/more-work/mw2_08_maxzoom.png",
    views: "2.4M",
    hook: "“Whatever you do, don't think about a pink elephant... and don't think about weak hair.”",
    script: "Hook: 'Do NOT think about a pink elephant. And whatever you do, do NOT think about your weak nails or thinning hair...'\n\nPivot: 'See? You thought about them. Because your subconscious is signaling nutrient deficiency.'\n\nProduct Presentation: Introduces Nutrifactor Maxzoom with Biotin and essential minerals to revive follicle vitality and rebuild nail strength.",
    productUrl: "https://www.nutrifactor.com.pk/products/maxzoom?_pos=1&_psq=maxzoom&_psid=7c3bcbfd3&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/v1ZBBHwXCto",
    youtubeId: "v1ZBBHwXCto"
  },
  {
    id: "mw-31",
    title: "Cellcense Tea Tree: The Balloon Pimple Pop Hook",
    brand: "Cellcense",
    category: "Science Explainers",
    tag: "Acne Purification",
    description: "High-impact visual shock hook: creator bursts a tight balloon in the opening second, shouting 'Stop popping your pimples like this!' before explaining barrier damage and introducing Tea Tree Oil.",
    duration: "0:25",
    image: "./assets/more-work/mw2_09_teatree_cellcense.png",
    views: "2.8M",
    hook: "“*BANG!* Stop popping your pimples like this — you're destroying your dermal barrier.”",
    script: "Shock Hook: Creator bursts a balloon with a loud pop in the first 0.5s!\n\nVoiceover: 'Stop popping your pimples like this!'\n\nExplanation: Demonstrates how squeezing causes dermal tearing and spreads bacterial infection beneath the skin.\n\nSolution: Introduces Cellcense Tea Tree Oil for overnight natural anti-bacterial calming and blemish reduction without scars.",
    productUrl: "https://cellcense.com/",
    youtubeUrl: "https://youtube.com/shorts/kkUbG--dQpo",
    youtubeId: "kkUbG--dQpo"
  },
  {
    id: "mw-32",
    title: "Gym Series: 10 Years of Science Into The Iron",
    brand: "Nutrifactor",
    category: "Performance & Fitness",
    tag: "Athletic Heritage",
    description: "Brand authority transition: highlighting Nutrifactor's 10+ year legacy as a trusted pharmaceutical wellness partner, culminating in the launch of the dedicated Gym Series sports line.",
    duration: "0:35",
    image: "./assets/more-work/mw2_10_gym_series.png",
    views: "1.95M",
    hook: "“Nutrifactor has spent 10+ years mastering everyday wellness. Now, we bring that science to the iron.”",
    script: "Brand Heritage Storytelling: Recounting how long Nutrifactor has stood as Pakistan's trusted wellness partner for over 10 years across wellness and immunity categories.\n\nThe Evolution: High-energy reveal presenting the newly launched Gym Series performance products engineered for serious strength athletes.",
    productUrl: "https://www.nutrifactor.com.pk/",
    youtubeUrl: "https://youtube.com/shorts/YiMCKY5v720",
    youtubeId: "YiMCKY5v720"
  },
  {
    id: "mw-33",
    title: "Sundion: Vitamin D Inside the Dark",
    brand: "Nutrifactor",
    category: "Science Explainers",
    tag: "Vitamin D3 Mythbuster",
    description: "Mythbuster commercial debunking the idea you must bake in the sun for Vitamin D: explains how you can get optimal D3 indoors, at your desk, or watching Netflix with just one capsule.",
    duration: "0:30",
    image: "./assets/more-work/mw2_11_sundial_d3.png",
    views: "2.1M",
    hook: "“People say you need direct sunshine for Vitamin D... here's how to get it while watching Netflix.”",
    script: "The Myth: 'People say you need Vitamin D, you need to get in the sun...'\n\nThe Reveal: 'You can get optimal Vitamin D even if you are inside in the dark, under office lights, sitting down, standing up, in the car, or watching Netflix on the sofa. How? With one single capsule of Nutrifactor Sundion.'",
    productUrl: "https://www.nutrifactor.com.pk/products/sundion?_pos=1&_psq=sundion&_psid=4b574945d&_ss=e",
    youtubeUrl: "https://youtube.com/shorts/O9Ksj_bQ3_k",
    youtubeId: "O9Ksj_bQ3_k"
  }
];

export const PRODUCTION_PROCESS = [
  {
    step: "01",
    title: "Consumer Habit Discovery",
    tagline: "Finding the everyday loop before touching the product.",
    description: "I research universal consumer moments: the 3 PM desk crash, the morning hydration routine, or gym exhaustion. By anchoring the hook in a behavior the target audience already knows, viewer attention is locked in the first 2 seconds."
  },
  {
    step: "02",
    title: "Hook Architecture & Regulatory Precision",
    tagline: "Translating science into sales.",
    description: "Scripts are engineered around pattern interrupts, tension-and-release loops, and conversational dialogue. Leveraging my Pharm.D. background, I evaluate clinical data to ensure every health claim is highly accurate and fully compliant with wellness advertising regulations ('supports', 'helps') without ever sacrificing virality."
  },
  {
    step: "03",
    title: "Studio & Set Direction",
    tagline: "Lighting, color psychology, and vertical framing.",
    description: "I direct on-set videographers on camera movements—from dynamic gimbal sweeps to locked split-screens. I design physical sets (color-blocked tables, cinematic neon gym lighting, cozy podcast corners) built exclusively to maximize engagement on 9:16 vertical feeds."
  },
  {
    step: "04",
    title: "Talent Coaching Line-by-Line",
    tagline: "Extracting relatable, unscripted charisma.",
    description: "On-camera talent and influencers are guided beat-by-beat. I direct micro-expressions, vocal tone inflection, natural hand gestures, and comedic timing to turn actors into trusted peers having a candid conversation."
  },
  {
    step: "05",
    title: "Post-Production Pacing",
    tagline: "Sound design, kinetic text, and retention ramps.",
    description: "I partner with video editors through multiple revision rounds, directing graphic cues, sound effects, visual resets, and dynamic subtitles. The audio-visual rhythm is heavily optimized to sustain retention right through to the final product Call to Action."
  },
  {
    step: "06",
    title: "Performance Analytics & Creative Iteration",
    tagline: "Data-backed scaling.",
    description: "The process doesn't end at publishing. I track and interpret paid social performance—monitoring CTR, CPA, and CVR in TikTok Ads Manager and Meta dashboards. I use these performance signals to inform hook testing, transition away from qualitative guesswork, and drive data-backed creative decisions for the next sprint."
  }
];
