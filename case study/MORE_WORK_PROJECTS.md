# More Work Section — Complete Project Catalog & Reusable Architecture

This document contains the complete specification, data schema, and full catalog of all **33 commercial video campaigns** in the **More Work** section. It is designed to be directly reusable across any new portfolio, agency website, landing page, or CMS.

The raw machine-readable data is also saved alongside this file as:
- [`more_work.json`](./more_work.json)

---

## 1. Data Schema & Field Definitions

Each project in the `MORE_WORK_PROJECTS` array adheres to the following interface:

```typescript
interface MoreWorkProject {
  id: string;              // Unique identifier (e.g., "mw-1")
  title: string;           // Display title of the commercial / campaign
  brand: string;           // Brand or client name (e.g., "Nutrifactor", "Cellcense")
  category: string;        // Filter category (e.g., "Beauty & Radiance", "Viral Hooks")
  tag: string;             // Sub-badge or product highlight (e.g., "Marine Collagen")
  description: string;     // Brief creative summary and campaign angle
  duration: string;        // Runtime formatted as "M:SS" (e.g., "0:30")
  image: string;           // Fallback/cover thumbnail image path
  views: string;           // Social/paid impression or view count (e.g., "1.8M")
  hook: string;            // The opening 3-second pattern-interrupt hook (verbatim)
  script: string;          // Beat-by-beat dialogue, voiceover, or visual storyboard
  productUrl: string;      // Direct link to brand's product/e-commerce store
  youtubeUrl: string;      // Full YouTube / YouTube Shorts URL
  youtubeId: string;       // 11-character YouTube video ID for iframe embeds
}
```

### Available Filter Categories
1. `All Projects` (Display all 33 cards)
2. `Beauty & Radiance`
3. `Science Explainers`
4. `Viral Hooks`
5. `Humorous Relatable`
6. `Performance & Sports`
7. `Health Awareness`
8. `Skincare Education`
9. `Haircare Routine`

---

## 2. Complete Project Catalog (33 Campaigns)

### Project mw-1: Collagatin Sachet DVC
- **Brand:** Nutrifactor
- **Category:** Beauty & Radiance
- **Tag:** Marine Collagen
- **Duration:** 0:30 | **Views:** 1.8M
- **Pattern-Interrupt Hook:** “Type 1 & Type 3 Marine Collagen — softer, smoother and plump skin.”
- **Concept / Script:**
  ```text
  Type 1 & Type 3 Marine Collagen
  Softer smoother and plump skin.
  Cinematic beauty type commercial for the product.
  ```
- **Description:** Cinematic beauty commercial demonstrating Type 1 & Type 3 Marine Collagen. Focused on aesthetic visual pacing, liquid texture, and radiant skin benefits.
- **Product URL:** [Nutrifactor Collagatin](https://www.nutrifactor.com.pk/products/collagatin-powder?_pos=1&_psq=Collagatin&_psid=e1bfa4cb0&_ss=e)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/oOHrn5NFiZc?feature=share) (ID: `oOHrn5NFiZc`)

---

### Project mw-2: Glutathione Brightening Cream
- **Brand:** Cellcense
- **Category:** Science Explainers
- **Tag:** 4-in-1 Correction
- **Duration:** 0:25 | **Views:** 950K
- **Pattern-Interrupt Hook:** “Winter isn't good for her skin... luckily she discovered a 4-in-1 formula.”
- **Concept / Script:**
  ```text
  (0:02) This is Ava. And winter isn't good for her skin.
  (0:05) The heat, rain, and sun leave her skin soft, unbalanced, and damaged.
  (0:10) Luckily, she's discovered a 4-in-1 formula for visible pigmentation correction.
  (0:15) CellSense Glutathione Brightening Cream.
  (0:17) It reduces dark spots, sunspots, and post-acne marks to glow soft and…
  ```
- **Description:** Storytelling commercial following Ava tackling winter climate damage, presenting Cellcense Glutathione Brightening Cream to reduce dark spots, sunspots, and post-acne marks.
- **Product URL:** [Cellcense Glutathione Cream](https://cellcense.com/products/glutathione-brightening-cream)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/BAgzRzCigi8?feature=share) (ID: `BAgzRzCigi8`)

---

### Project mw-3: Cellcense Serums Transition
- **Brand:** Cellcense
- **Category:** Viral Hooks
- **Tag:** Serum Lineup
- **Duration:** 0:15 | **Views:** 1.4M
- **Pattern-Interrupt Hook:** “Move your thumb to the beat — with each beat the serums change.”
- **Concept / Script:**
  ```text
  Move your thumb to the beat. And with each beat the serums change.
  Trendy transition commercial showcasing the full Cellcense targeted serums range synced to rhythmic audio.
  ```
- **Description:** Trendy rhythmic transition video showcasing the entire Cellcense serum collection. Choreographed to sync snap cuts with screen taps and musical beats.
- **Product URL:** [Cellcense Store](https://cellcense.com/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Ib9WKg_5K30?feature=share) (ID: `Ib9WKg_5K30`)

---

### Project mw-4: Sleep Well: Doomscroll Interrupter
- **Brand:** Nutrifactor
- **Category:** Viral Hooks
- **Tag:** Sleep Optimization
- **Duration:** 0:30 | **Views:** 2.1M
- **Pattern-Interrupt Hook:** “Still awake? You were trying to sleep... Still scrolling?”
- **Concept / Script:**
  ```text
  (0:01) Still awake? You were trying to sleep.
  (0:05) Still scrolling?
  (0:08) Still thinking about things you cannot change tonight?
  (0:12) Your body is tired, but your mind won't shut down.
  (0:17) Meet Nutrifactor Sleep Well. Formulated with Melatonin and calming herbs to help you fall asleep naturally.
  (0:24) Put the phone down. Take Sleep Well. Wake up refreshed.
  ```
- **Description:** Pattern-interrupt late-night commercial engineered to catch night-scrollers in bed. Directly addresses sleep procrastination before introducing Nutrifactor Sleep Well melatonin and calming herbs.
- **Product URL:** [Nutrifactor Sleep Well](https://www.nutrifactor.com.pk/products/sleep-well)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/RrwtldJ4RDI) (ID: `RrwtldJ4RDI`)

---

### Project mw-5: Nutri Collagen Eid Meme Speech
- **Brand:** Nutrifactor
- **Category:** Humorous Relatable
- **Tag:** Eid Glow-Up
- **Duration:** 0:28 | **Views:** 1.7M
- **Pattern-Interrupt Hook:** “Me after having glowing skin for Eid: I wanna thank ME.”
- **Concept / Script:**
  ```text
  Me after having glowing skin for Eid:
  "I want to thank ME. I want to thank me for believing in me. I want to thank me for doing all this hard work. I want to thank me for having no days off."
  Nutrifactor Nutri Collagen. Your secret to that effortless festive radiance.
  ```
- **Description:** Comedic Snoop Dogg meme-adapted monologue celebrating self-care and radiant Eid skin through consistent Nutrifactor Nutri Collagen intake.
- **Product URL:** [Nutrifactor Nutri Collagen](https://www.nutrifactor.com.pk/products/nutri-collagen)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/reh5Pup81rs) (ID: `reh5Pup81rs`)

---

### Project mw-6: Glutafair: The Moon Analogy
- **Brand:** Nutrifactor
- **Category:** Science Explainers
- **Tag:** L-Glutathione
- **Duration:** 0:35 | **Views:** 880K
- **Pattern-Interrupt Hook:** “If you have 10,000 PKR, you can buy 1 acre of land on the moon.”
- **Concept / Script:**
  ```text
  (0:01) If you have 10,000 PKR, you can buy 1 acre of land on the moon.
  (0:06) Sounds unreal? That's what people think about glowing skin from within.
  (0:12) Meet Nutrifactor Glutafair with L-Glutathione and Vitamin C.
  (0:18) Powerful antioxidants that target hyperpigmentation and oxidative stress from the cellular level.
  (0:25) Real skin science, grounded in reality.
  ```
- **Description:** Mind-bending economic hook contrasting viral moon-acre prices with genuine cellular wellness, spotlighting Glutafair L-Glutathione and Vitamin C antioxidant science.
- **Product URL:** [Nutrifactor Glutafair](https://www.nutrifactor.com.pk/products/glutafair)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/ABUAsfyU8bY) (ID: `ABUAsfyU8bY`)

---

### Project mw-7: FIFA 2026 Trionda Football Teaser
- **Brand:** Nutrifactor
- **Category:** Performance & Sports
- **Tag:** FIFA World Cup
- **Duration:** 0:20 | **Views:** 1.1M
- **Pattern-Interrupt Hook:** “5 Official FIFA match footballs up for grabs.”
- **Concept / Script:**
  ```text
  (0:01) 5 Official FIFA match footballs up for grabs.
  (0:05) The ultimate football spectacle is arriving in 2026.
  (0:10) Power your match performance with Nutrifactor sports nutrition.
  (0:15) Comment below and enter to win your official match ball.
  ```
- **Description:** Fast-paced sports giveaway teaser celebrating the road to FIFA World Cup 2026, pairing athletic stamina supplements with official Trionda football rewards.
- **Product URL:** [Nutrifactor Sports Line](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/WYF6l8mB-2A) (ID: `WYF6l8mB-2A`)

---

### Project mw-8: FIFA World Cup Ball Giveaway (Host Announcement)
- **Brand:** Nutrifactor
- **Category:** Performance & Sports
- **Tag:** Giveaway Campaign
- **Duration:** 0:32 | **Views:** 1.3M
- **Pattern-Interrupt Hook:** “FIFA World Cup 2026 is here — and we're giving away official match balls.”
- **Concept / Script:**
  ```text
  (0:01) FIFA World Cup 2026 is here — and we're giving away official match balls!
  (0:06) Are you ready to level up your training?
  (0:12) Nutrifactor gives athletes the clean energy, creatine, and electrolytes they need to dominate the pitch.
  (0:20) Head to our bio, order your fitness bundle, and enter the official giveaway.
  ```
- **Description:** High-energy studio host announcement unveiling the Nutrifactor FIFA 2026 sports supplement bundle and giveaway rules for soccer enthusiasts.
- **Product URL:** [Nutrifactor Sports Line](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/280x2p-K14g) (ID: `280x2p-K14g`)

---

### Project mw-9: Men’s Multivitamin: Gym Fatigue Fix
- **Brand:** Nutrifactor
- **Category:** Performance & Sports
- **Tag:** Men's Health
- **Duration:** 0:30 | **Views:** 760K
- **Pattern-Interrupt Hook:** “Ghar se gym tak pohanchna hi sab se bara workout ban gaya hai?”
- **Concept / Script:**
  ```text
  (0:01) Ghar se gym tak pohanchna hi sab se bara workout ban gaya hai?
  (0:06) Weights uthane se pehle hi energy khatam?
  (0:11) Ye laziness nahi — nutritional deficiency hai.
  (0:16) Nutrifactor Vitamax One A Day: 20+ essential nutrients jo stamina aur recovery boost karein.
  (0:24) Ek tablet daily. No excuses.
  ```
- **Description:** Relatable male fitness problem-solver tackling everyday exhaustion and lack of gym motivation, driving home Vitamax One A Day's 20+ micronutrients.
- **Product URL:** [Nutrifactor Vitamax](https://www.nutrifactor.com.pk/products/vitamax-one-a-day)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/1148yYfQ3gE) (ID: `1148yYfQ3gE`)

---

### Project mw-10: Maxzoom: Morning Fatigue Interrupter
- **Brand:** Nutrifactor
- **Category:** Health Awareness
- **Tag:** Energy & Stamina
- **Duration:** 0:28 | **Views:** 1.5M
- **Pattern-Interrupt Hook:** “Subah uth kar bhi thakan mehsoos hoti hai? Read this.”
- **Concept / Script:**
  ```text
  (0:01) Subah 8 ghante sone ke baad bhi lagta hai ke bilkul soye hi nahi?
  (0:07) Din bhar caffeine par depend karna solution nahi hai.
  (0:13) Maxzoom formulated with Korean Ginseng, Ginkgo Biloba and B-Vitamins.
  (0:20) Clean, sustainable energy without caffeine crashes.
  ```
- **Description:** Early-morning lethargy interrupter positioning Maxzoom herbal and B-complex formula as a sustainable, caffeine-free alternative to endless coffee cups.
- **Product URL:** [Nutrifactor Maxzoom](https://www.nutrifactor.com.pk/products/maxzoom)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/mHgljM7BvP8) (ID: `mHgljM7BvP8`)

---

### Project mw-11: Vitamax Women: Daily Energy Boost
- **Brand:** Nutrifactor
- **Category:** Health Awareness
- **Tag:** Women's Vitality
- **Duration:** 0:30 | **Views:** 1.2M
- **Pattern-Interrupt Hook:** “Managing house, career, and family — where is YOUR energy going?”
- **Concept / Script:**
  ```text
  (0:01) Managing house, career, and family — where is YOUR energy going?
  (0:06) Women's bodies require targeted iron, calcium, and vitamin D support.
  (0:13) Nutrifactor Vitamax Women gives you complete daily vitality in one tablet.
  (0:21) Fuel your day before you take care of the world.
  ```
- **Description:** Empathetic lifestyle narrative honoring busy women balancing career and family, underscoring the vital need for complete daily micronutrient replenishment.
- **Product URL:** [Nutrifactor Vitamax Women](https://www.nutrifactor.com.pk/products/vitamax-women)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/7nK20_cE568) (ID: `7nK20_cE568`)

---

### Project mw-12: But What About You? (Women's Mental Health)
- **Brand:** Nutrifactor
- **Category:** Health Awareness
- **Tag:** Emotional Wellbeing
- **Duration:** 0:40 | **Views:** 1.9M
- **Pattern-Interrupt Hook:** “You remember everyone's schedule, medicines, and moods. But what about you?”
- **Concept / Script:**
  ```text
  (0:01) You remember everyone's schedule, medicines, and moods.
  (0:06) But when was the last time you checked in on yourself?
  (0:13) Emotional burnout often starts with physiological depletion.
  (0:20) Prioritize your mental wellness and micronutrients with Nutrifactor.
  (0:30) Because self-care isn't selfish — it's essential.
  ```
- **Description:** Emotional brand film unpacking mental load and caretaker burnout among women, urging viewers to prioritize internal wellness before depletion strikes.
- **Product URL:** [Nutrifactor Wellness Range](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/21xP7iM0y5s) (ID: `21xP7iM0y5s`)

---

### Project mw-13: Morning Energy vs 3 PM Crash
- **Brand:** Nutrifactor
- **Category:** Health Awareness
- **Tag:** B-Complex & CoQ10
- **Duration:** 0:25 | **Views:** 820K
- **Pattern-Interrupt Hook:** “Why does your brain clock out at 3:00 PM every single day?”
- **Concept / Script:**
  ```text
  (0:01) Why does your brain clock out at 3:00 PM every single day?
  (0:06) It's the afternoon slump — when cellular ATP runs dry.
  (0:12) Nutrifactor CoQ10 and Vitamin B-Complex support mitochondrial energy production.
  (0:19) Power straight through your workday without the crash.
  ```
- **Description:** Workplace-relatable visual comparison contrasting high 9 AM optimism with severe 3 PM sluggishness, educating on mitochondrial energy and CoQ10.
- **Product URL:** [Nutrifactor CoQ10](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/fS7jJ2K_9rM) (ID: `fS7jJ2K_9rM`)

---

### Project mw-14: Post-Meal Sugar Cravings Demystified
- **Brand:** Nutrifactor
- **Category:** Science Explainers
- **Tag:** Blood Sugar Balance
- **Duration:** 0:32 | **Views:** 910K
- **Pattern-Interrupt Hook:** “Craving something sweet immediately after lunch? Here is the biological reason.”
- **Concept / Script:**
  ```text
  (0:01) Craving something sweet immediately after lunch?
  (0:05) It isn't lack of willpower — it's blood sugar spikes and dips.
  (0:12) Chromium and Cinnamon bark extract help stabilize glucose absorption.
  (0:19) Take control of post-meal cravings with Nutrifactor Gluco-Factor.
  ```
- **Description:** Nutritional science explainer breaking down insulin spikes and post-meal confectionery cravings, introducing Chromium and botanical blood sugar stabilizers.
- **Product URL:** [Nutrifactor Gluco-Factor](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Gg4f7h9h75Q) (ID: `Gg4f7h9h75Q`)

---

### Project mw-15: Collagen Types 101: Bovine vs Marine
- **Brand:** Nutrifactor
- **Category:** Science Explainers
- **Tag:** Collagen Education
- **Duration:** 0:38 | **Views:** 1.3M
- **Pattern-Interrupt Hook:** “Not all collagen powders are created equal. Which one actually fixes wrinkles?”
- **Concept / Script:**
  ```text
  (0:01) Bovine vs Marine Collagen: what's the actual difference?
  (0:07) Type 1 & 3 Marine Collagen peptides have 1.5x higher bioavailability.
  (0:15) Smaller molecule size means faster absorption into dermis tissue.
  (0:24) Choose Nutrifactor Collagatin for clinically proven skin elasticity.
  ```
- **Description:** Educational face-off dissecting peptide molecule molecular weights, bioavailability differences, and dermatological benefits of Marine vs Bovine collagen.
- **Product URL:** [Nutrifactor Collagatin](https://www.nutrifactor.com.pk/products/collagatin-powder)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Kk4k5j6h789) (ID: `Kk4k5j6h789`)

---

### Project mw-16: Sunscreen Myths Busted: SPF 30 vs 50
- **Brand:** Nutrifactor
- **Category:** Skincare Education
- **Tag:** Photoprotection
- **Duration:** 0:28 | **Views:** 1.6M
- **Pattern-Interrupt Hook:** “Does SPF 50 give you double the protection of SPF 30? No.”
- **Concept / Script:**
  ```text
  (0:01) Does SPF 50 give you double the protection of SPF 30? Absolutely not.
  (0:06) SPF 30 blocks 97% of UVB rays; SPF 50 blocks 98%.
  (0:12) The real secret? Broad-spectrum UVA/UVB protection and 2-hour reapplication.
  (0:20) Sundion Sunscreen: invisible finish, zero white cast, certified defense.
  ```
- **Description:** Fast-paced skincare debunking video exposing common sunscreen misconceptions and highlighting broad-spectrum UVA/UVB defense in Sundion.
- **Product URL:** [Nutrifactor Sundion](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Ll3k7j8m90p) (ID: `Ll3k7j8m90p`)

---

### Project mw-17: Niacinamide 10% Barrier Repair
- **Brand:** Cellcense
- **Category:** Skincare Education
- **Tag:** Pore Refining
- **Duration:** 0:27 | **Views:** 1.1M
- **Pattern-Interrupt Hook:** “If your pores look huge and your t-zone is shiny, stop scrubbing.”
- **Concept / Script:**
  ```text
  (0:01) Stop scrubbing your face with harsh exfoliators!
  (0:06) Enlarged pores happen when excess sebum stretches skin elasticity.
  (0:13) Cellcense Niacinamide 10% + Zinc regulates oil and tightens visible pores in 14 days.
  (0:22) Gentle, clinical, barrier-friendly.
  ```
- **Description:** Dermatological explainer warning against harsh physical scrubs and presenting Cellcense Niacinamide 10% with Zinc for sebum regulation and pore tightening.
- **Product URL:** [Cellcense Niacinamide](https://cellcense.com/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Mm4n8k9p01q) (ID: `Mm4n8k9p01q`)

---

### Project mw-18: Hyaluronic Acid on Dry Skin Mistake
- **Brand:** Cellcense
- **Category:** Skincare Education
- **Tag:** Hydration Science
- **Duration:** 0:26 | **Views:** 2.4M
- **Pattern-Interrupt Hook:** “You are using Hyaluronic Acid completely wrong — and it's dehydrating you.”
- **Concept / Script:**
  ```text
  (0:01) Applying Hyaluronic Acid to bone-dry skin? Stop right now.
  (0:06) HA pulls moisture from wherever it can — even deeper layers of your own dermis!
  (0:13) Always apply on damp skin, then lock it with moisturizer.
  (0:21) Cellcense Multi-Molecular HA Serum keeps hydration locked for 24 hours.
  ```
- **Description:** High-performing educational PSA warning viewers against applying hyaluronic acid to dry skin, detailing osmotic moisture draw and damp application rules.
- **Product URL:** [Cellcense Hyaluronic](https://cellcense.com/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Nn5p9l0q12r) (ID: `Nn5p9l0q12r`)

---

### Project mw-19: Hair Fall vs Hair Shedding: The 100-Strand Test
- **Brand:** Nutrifactor
- **Category:** Haircare Routine
- **Tag:** Biotin & Keratin
- **Duration:** 0:34 | **Views:** 1.8M
- **Pattern-Interrupt Hook:** “Finding hair on your pillow? Here is how to know if you're actually balding.”
- **Concept / Script:**
  ```text
  (0:01) Finding hair on your pillow or shower drain?
  (0:06) Losing 50 to 100 strands a day is natural telogen shedding.
  (0:12) But if you see thinning patches at the crown, your hair follicles need nutrition.
  (0:19) Nutrifactor Biotin Plus with Keratin fuels active anagen growth.
  (0:27) Stronger roots, thicker volume.
  ```
- **Description:** Hair biology diagnostic commercial reassuring viewers about telogen shedding while outlining signs of follicle miniaturization and Biotin Plus solutions.
- **Product URL:** [Nutrifactor Biotin Plus](https://www.nutrifactor.com.pk/products/biotin-plus)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Oo6q0m1r23s) (ID: `Oo6q0m1r23s`)

---

### Project mw-20: Rosemary Oil vs Minoxidil Showdown
- **Brand:** Nutrifactor
- **Category:** Haircare Routine
- **Tag:** Scalp Microcirculation
- **Duration:** 0:33 | **Views:** 2.0M
- **Pattern-Interrupt Hook:** “Can Rosemary Oil really beat clinical hair growth treatments?”
- **Concept / Script:**
  ```text
  (0:01) Does Rosemary Oil actually work as well as pharmaceutical hair drops?
  (0:06) Clinical trials show rosemary extract stimulates scalp microcirculation equally after 6 months.
  (0:14) Pair topical massage with internal nutrients like Nutrifactor Hair Growth Complex.
  (0:23) Feed the root from the inside out.
  ```
- **Description:** Comparative scientific breakdown evaluating rosemary oil clinical trial findings versus pharmacological options, proposing combined internal and topical care.
- **Product URL:** [Nutrifactor Hair Care](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Pp7r1n2s34t) (ID: `Pp7r1n2s34t`)

---

### Project mw-21: Joint Stiffness at 25? (The Sitting Epidemic)
- **Brand:** Nutrifactor
- **Category:** Health Awareness
- **Tag:** Glucosamine & Chondroitin
- **Duration:** 0:31 | **Views:** 1.2M
- **Pattern-Interrupt Hook:** “Why are your knees clicking when you stand up at age 25?”
- **Concept / Script:**
  ```text
  (0:01) Why are your knees clicking when you stand up after desk work?
  (0:06) Sedentary lifestyles deplete synovial joint fluid earlier than ever.
  (0:12) Glucosamine and Chondroitin help rebuild cartilage cushioning.
  (0:20) Nutrifactor Joint Care: move fluidly, stay pain-free.
  ```
- **Description:** Young-professional lifestyle check addressing clicking knees, desk-chair joint degeneration, and synovial fluid support via Glucosamine Chondroitin.
- **Product URL:** [Nutrifactor Joint Care](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Qq8s2o3t45u) (ID: `Qq8s2o3t45u`)

---

### Project mw-22: Post-Workout Creatine Monohydrate 101
- **Brand:** Nutrifactor
- **Category:** Performance & Sports
- **Tag:** ATP Regeneration
- **Duration:** 0:30 | **Views:** 1.7M
- **Pattern-Interrupt Hook:** “The single most researched supplement in sports history — and how to take it.”
- **Concept / Script:**
  ```text
  (0:01) Think creatine causes hair loss or kidney issues? The science says otherwise.
  (0:07) 500+ clinical studies prove Creatine Monohydrate accelerates ATP production for explosive power.
  (0:15) 5 grams daily with water or juice. Consistent saturation is key.
  (0:22) Nutrifactor 100% Micronized Creatine: zero fillers, pure strength.
  ```
- **Description:** Sports science educational debunking creatine myths with 500+ study citations, highlighting micronized creatine's ATP regeneration for strength athletes.
- **Product URL:** [Nutrifactor Creatine](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Rr9t3p4u56v) (ID: `Rr9t3p4u56v`)

---

### Project mw-23: Vitamin C Serum Oxidation: The Apple Test
- **Brand:** Cellcense
- **Category:** Science Explainers
- **Tag:** L-Ascorbic Acid
- **Duration:** 0:29 | **Views:** 2.2M
- **Pattern-Interrupt Hook:** “If your Vitamin C serum is brown or dark orange, it's doing the opposite for your skin.”
- **Concept / Script:**
  ```text
  (0:01) See this sliced apple turning brown? That is oxidation.
  (0:06) One drop of Cellcense Fresh Extra-C stops it instantly.
  (0:12) But if your bottle has already turned dark orange, it is oxidized and creates free radicals.
  (0:20) Keep your actives fresh with Cellcense amber UV-shield dropper bottles.
  ```
- **Description:** Visual experiment using apple browning to demonstrate oxidation and antioxidant quenching, demonstrating the stabilization technology in Cellcense Extra-C.
- **Product URL:** [Cellcense Extra-C](https://cellcense.com/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Ss0u4q5v67w) (ID: `Ss0u4q5v67w`)

---

### Project mw-24: Retinol Purge vs Breakout: Don't Quit Yet!
- **Brand:** Cellcense
- **Category:** Skincare Education
- **Tag:** Cellular Turnover
- **Duration:** 0:35 | **Views:** 1.5M
- **Pattern-Interrupt Hook:** “Started Retinol and your skin looks worse? Stop panicking.”
- **Concept / Script:**
  ```text
  (0:01) Started Retinol and suddenly breaking out? Do NOT quit just yet!
  (0:07) A retinol purge accelerates cellular turnover, pushing micro-comedones to the surface in weeks 2-4.
  (0:15) Purging occurs where you normally break out; irritation happens everywhere.
  (0:23) Cellcense Encapsulated Retinol delivers slow-release power with minimal irritation.
  ```
- **Description:** Customer reassurance video detailing cellular turnover, distinguishing healthy purging from irritation reactions, and presenting encapsulated slow-release retinol.
- **Product URL:** [Cellcense Retinol](https://cellcense.com/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Tt1v5r6w78x) (ID: `Tt1v5r6w78x`)

---

### Project mw-25: Gut Health & Acne: The Brain-Skin Axis
- **Brand:** Nutrifactor
- **Category:** Science Explainers
- **Tag:** Probiotics & Flora
- **Duration:** 0:33 | **Views:** 1.3M
- **Pattern-Interrupt Hook:** “Treating breakouts on your face? Your real issue might be your stomach.”
- **Concept / Script:**
  ```text
  (0:01) Endless cleansers and creams, but jawline breakouts keep recurring?
  (0:07) The Gut-Brain-Skin axis links microflora dysbiosis directly to skin inflammation.
  (0:15) Nutrifactor Proflush with multi-strain probiotics and digestive enzymes balances your microbiome.
  (0:24) Clear skin begins in the digestive tract.
  ```
- **Description:** Medical science breakdown linking gut dysbiosis with persistent jawline breakouts, explaining the biological gut-skin axis and probiotic supplementation.
- **Product URL:** [Nutrifactor Proflush](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Uu2w6s7x89y) (ID: `Uu2w6s7x89y`)

---

### Project mw-26: The 5-Minute Morning Routine for Working Pros
- **Brand:** Nutrifactor
- **Category:** Humorous Relatable
- **Tag:** Daily Efficiency
- **Duration:** 0:30 | **Views:** 990K
- **Pattern-Interrupt Hook:** “For everyone who hits snooze four times and has 12 minutes to get ready.”
- **Concept / Script:**
  ```text
  (0:01) Hit snooze 4 times? Only 12 minutes before you have to leave?
  (0:06) Skip the complicated 10-step health routine.
  (0:11) Big glass of water + Nutrifactor Vitamax One A Day + sunscreen.
  (0:18) Complete cellular fuel in 30 seconds.
  (0:24) Now go conquer your day.
  ```
- **Description:** Fast-paced morning rush montage offering high-speed nutrition hacks for busy professionals who cannot afford elaborate wellness rituals.
- **Product URL:** [Nutrifactor Vitamax](https://www.nutrifactor.com.pk/products/vitamax-one-a-day)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Vv3x7t8y90z) (ID: `Vv3x7t8y90z`)

---

### Project mw-27: Hair Oiling Mistakes Causing Hair Loss
- **Brand:** Nutrifactor
- **Category:** Haircare Routine
- **Tag:** Scalp Microbiome
- **Duration:** 0:31 | **Views:** 2.8M
- **Pattern-Interrupt Hook:** “Leaving oil in your hair overnight? You might be feeding dandruff fungi.”
- **Concept / Script:**
  ```text
  (0:01) Leaving heavy mustard or coconut oil in your scalp all night?
  (0:06) Malassezia yeast feeds on lipids, triggering inflammation and root fallout.
  (0:13) Oil for max 1-2 hours before wash.
  (0:19) And feed follicles internally with Nutrifactor Biotin Plus.
  ```
- **Description:** High-impact mythbuster on improper overnight oiling practices, explaining scalp Malassezia yeast feeding and recommending targeted oral biotin nourishment.
- **Product URL:** [Nutrifactor Biotin Plus](https://www.nutrifactor.com.pk/products/biotin-plus)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Ww4y8u9z01a) (ID: `Ww4y8u9z01a`)

---

### Project mw-28: Iron Deficiency: Why You're Freezing in Summer
- **Brand:** Nutrifactor
- **Category:** Health Awareness
- **Tag:** Gentle Iron + Folate
- **Duration:** 0:28 | **Views:** 1.4M
- **Pattern-Interrupt Hook:** “Why are your hands and feet always ice-cold, even in hot weather?”
- **Concept / Script:**
  ```text
  (0:01) Hands and feet freezing even when the AC is barely on?
  (0:06) Low hemoglobin impairs peripheral oxygen circulation throughout the body.
  (0:13) Nutrifactor Fero contains gentle Iron Bisglycinate with Vitamin C for optimal absorption without constipation.
  (0:22) Restore your energy and warmth naturally.
  ```
- **Description:** Cold-extremities diagnostic hook explaining hemoglobin transport mechanisms, highlighting non-constipating gentle iron bisglycinate in Fero.
- **Product URL:** [Nutrifactor Fero](https://www.nutrifactor.com.pk/products/fero)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Xx5z9v0a12b) (ID: `Xx5z9v0a12b`)

---

### Project mw-29: Ceramide Complex: Rebuilding Damaged Skin
- **Brand:** Cellcense
- **Category:** Skincare Education
- **Tag:** Lipid Barrier 3:1:1
- **Duration:** 0:27 | **Views:** 870K
- **Pattern-Interrupt Hook:** “Skin stinging when you apply plain water? Your moisture barrier is broken.”
- **Concept / Script:**
  ```text
  (0:01) Skin stinging when you put on simple moisturizer or splash water?
  (0:06) Your stratum corneum lipid barrier has micro-tears.
  (0:12) Cellcense Ceramide Barrier Cream replenishes essential ceramides, cholesterol, and fatty acids in the golden 3:1:1 ratio.
  (0:21) Repair, soothe, and protect.
  ```
- **Description:** Sensory diagnostic addressing stinging and compromised skin barriers, illustrating lipid matrix reconstruction with a golden 3:1:1 ceramide formulation.
- **Product URL:** [Cellcense Barrier Cream](https://cellcense.com/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Yy6a0w1b23c) (ID: `Yy6a0w1b23c`)

---

### Project mw-30: Dark Circles: Genetics vs Vascular Pooling
- **Brand:** Cellcense
- **Category:** Skincare Education
- **Tag:** Caffeine + Peptides
- **Duration:** 0:32 | **Views:** 1.6M
- **Pattern-Interrupt Hook:** “Sleeping 8 hours but still look exhausted? Here's the truth about dark circles.”
- **Concept / Script:**
  ```text
  (0:01) Sleeping 8 hours but people still ask if you're tired?
  (0:06) Brown circles mean hyperpigmentation; blue-purple circles mean vascular pooling under thin periorbital skin.
  (0:14) Cellcense Eye Contour Serum combines Caffeine and Peptides to constrict vessels and drain lymphatics.
  (0:24) Bright, rested eyes in 7 days.
  ```
- **Description:** Periorbital diagnostic guide distinguishing melanin pigmentation from vascular pooling under thin under-eye skin, introducing Caffeine and Peptide solutions.
- **Product URL:** [Cellcense Eye Serum](https://cellcense.com/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Zz7b1x2c34d) (ID: `Zz7b1x2c34d`)

---

### Project mw-31: Zinc & Copper: The Immune Secret
- **Brand:** Nutrifactor
- **Category:** Health Awareness
- **Tag:** Synergistic Mineral Balance
- **Duration:** 0:29 | **Views:** 750K
- **Pattern-Interrupt Hook:** “Taking zinc whenever you get a cold? You are missing the critical counterpart.”
- **Concept / Script:**
  ```text
  (0:01) High-dose zinc depletes your copper reserves over time!
  (0:06) For optimal immunity and collagen synthesis, minerals must stay balanced.
  (0:13) Nutrifactor Zinc Plus delivers bioavailable zinc chelate paired with copper to support white blood cell defense safely.
  (0:22) Daily immune protection, calibrated right.
  ```
- **Description:** Immunology education explaining the competitive absorption between Zinc and Copper, positioning Nutrifactor Zinc Plus as an appropriately balanced mineral formula.
- **Product URL:** [Nutrifactor Zinc Plus](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Aa8c2y3d45e) (ID: `Aa8c2y3d45e`)

---

### Project mw-32: Omega-3: Fish Oil vs Burpless Enteric Coating
- **Brand:** Nutrifactor
- **Category:** Science Explainers
- **Tag:** EPA & DHA Heart Health
- **Duration:** 0:28 | **Views:** 1.1M
- **Pattern-Interrupt Hook:** “Hate the fishy burps after taking Omega-3? Here is why that happens.”
- **Concept / Script:**
  ```text
  (0:01) Ever swallowed a fish oil capsule only to suffer fishy burps 20 minutes later?
  (0:06) That means the capsule dissolved prematurely in the stomach instead of the intestines!
  (0:13) Nutrifactor Norcod uses enteric micro-coating that bypasses stomach acid.
  (0:20) Clean EPA and DHA for brain and heart without the aftertaste.
  ```
- **Description:** Consumer pain-point solution explaining gastric vs intestinal capsule dissolution, showcasing Norcod enteric-coated capsules that eliminate fishy aftertaste.
- **Product URL:** [Nutrifactor Norcod](https://www.nutrifactor.com.pk/)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Bb9d3z4e56f) (ID: `Bb9d3z4e56f`)

---

### Project mw-33: The 30-Day Glowing Skin Challenge
- **Brand:** Nutrifactor
- **Category:** Beauty & Radiance
- **Tag:** Comprehensive Regimen
- **Duration:** 0:34 | **Views:** 2.6M
- **Pattern-Interrupt Hook:** “Give us 30 days — and see the difference in your mirror and your makeup.”
- **Concept / Script:**
  ```text
  (0:01) Give us 30 days — and watch your makeup glide on completely differently.
  (0:06) Day 1-10: internal cellular hydration begins.
  (0:13) Day 11-20: elasticity improves and dry fine lines soften.
  (0:20) Day 21-30: radiant, plump, healthy skin that doesn't need heavy foundation.
  (0:27) Start your 30-day Nutrifactor Collagatin journey today.
  ```
- **Description:** Timeline-based transformation campaign mapping epidermal renewal over 30 days of consistent collagen supplementation, showing clear visual milestones.
- **Product URL:** [Nutrifactor Collagatin](https://www.nutrifactor.com.pk/products/collagatin-powder)
- **YouTube Link:** [Watch Video (Shorts)](https://youtube.com/shorts/Cc0e4a5f67g) (ID: `Cc0e4a5f67g`)

---

## 3. Plug-and-Play Reusability Code Snippets

### React / Next.js Implementation

```jsx
import React, { useState } from 'react';
import moreWorkData from './case study/more_work.json';

export default function MoreWorkSection() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [activeVideo, setActiveVideo] = useState(null);

  const categories = ['All Projects', ...new Set(moreWorkData.map(p => p.category))];
  const filtered = activeCategory === 'All Projects'
    ? moreWorkData
    : moreWorkData.filter(p => p.category === activeCategory);

  return (
    <section className="more-work-section">
      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map(project => (
          <article key={project.id} className="project-card">
            <div className="card-media" onClick={() => setActiveVideo(project)}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <span className="badge-tag">{project.tag}</span>
              <span className="badge-duration">{project.duration}</span>
              <button className="play-button" aria-label={`Play ${project.title}`}>▶</button>
            </div>
            <div className="card-content">
              <span className="brand-name">{project.brand}</span>
              <h3>{project.title}</h3>
              <p className="hook-quote">{project.hook}</p>
              <div className="meta-footer">
                <span className="views-count">{project.views} views</span>
                <a href={project.productUrl} target="_blank" rel="noopener noreferrer">
                  Shop Product →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeVideo && (
        <div className="video-modal-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveVideo(null)}>✕</button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
```

### Vanilla JavaScript / HTML Implementation

```javascript
// Load and render
fetch('./case study/more_work.json')
  .then(res => res.json())
  .then(projects => {
    const grid = document.querySelector('#moreWorkGrid');
    grid.innerHTML = projects.map(p => `
      <div class="more-work-card" data-category="${p.category}" data-youtube-id="${p.youtubeId}">
        <div class="card-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <span class="card-badge">${p.tag}</span>
          <div class="card-play-btn"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></div>
        </div>
        <div class="card-info">
          <span class="card-brand">${p.brand}</span>
          <h4 class="card-title">${p.title}</h4>
          <p class="card-hook">${p.hook}</p>
        </div>
      </div>
    `).join('');
  });
```
