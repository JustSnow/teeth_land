# Design

## Palette

Base ~90%: cool near-white page ground; deep navy for headings and body text. Optional soft alternate section surface: pale blue-grey.
Accent ≤10%: cobalt "liquid glass" blue (from ref #4).
Exact values are chosen at implementation; do not copy hex from refs.

**Pairing habits** (from ref #4): accent is reserved for the primary CTA fill, key emphasis sentences set in accent blue (like «Поэтому протез должен…» in ref #4), and list markers. Structure comes from thin hairline dividers and thin-stroked cards, not shadowed filled cards. Bold navy heading paired with a thin, light uppercase second line as the signature heading rhythm. Hero multicolor (ref #6 paint) stays inside the hero composite only; the rest of the page stays in the calm base + accent palette.

## Type pair

- Headings: **Onest** (heavy weight for the main line; thin weight uppercase for the secondary line, per ref #4).
- Body: **Golos Text**.
- Audience is 50+: body text size set larger than the implement default.

`font_strategy: google-fonts`

## Focal visual

No real clinic/product photos (fictional demo clinic). Usable ref assets (user confirmed rights):

- **Hero composite:** wide horizontal band of three tooth images, left → right: ref #6 (paint-splatter tooth, `image-ad9a611c-…jpg`), ref #1 (cutout tooth cross-section, `image-e6a962c2-…png`, center / dominant), ref #3 (glass tooth with flowers, `image-53351ca8-…jpg`). Images overlap at edges and blend via CSS gradient masks (no pixel editing); outer and seam edges dissolve into the near-white page ground. Mobile shows only the center panel (ref #1). Fallback if the ref #3 seam looks dirty: replace it with the denture crop from ref #4.
- **Denture visual:** ref #4 (`image-90c0d587-…png`) cropped to the glass denture only (no baked-in text); used in the Fears → solutions block and as the visual in the Denture types & prices block.
- **Doctors photo:** ref #5 (`image-0cc38689-…jpg`) in the Doctors block.
- Ref #2 not used.
- Testimonial avatars: grey circle placeholders. Team members: name + role only, no portraits.

All refs are ~1024px on the long side: hero media must not be full-viewport height; the composite band sits below the hero text.

## Block order

Header (chrome): text logo «Опора», anchor nav («Виды и цены» → block 3, «Как проходит» → block 4, «Врачи» → block 5, «Контакты» → block 8), phone, primary CTA button.

1. **Hero** — `hero_offer` (headline, supporting line, primary CTA «Записаться на консультацию»); `review_summary` line under the CTA («4,9 · 312 отзывов · Яндекс Карты», fictional). Text and CTA on plain ground above; hero composite band full width below. No text over the composite.
2. **Fears → solutions** — 4 × `benefit_item` (fears from ref #4: falls out, holds poorly, gets in the way when eating, looks unnatural — each with how the clinic solves it) + denture visual.
3. **Denture types & prices** — 4 × `service_item` with `price_range` «от …» (full acrylic 19 900, partial 24 900, nylon 34 900, clasp 49 900 ₽) + a line for repair and relining; headline price «от 19 900 ₽»; primary CTA repeat.
4. **How it works** — 5 × `how_it_works_step`: consultation, impressions, fitting, fabrication, delivery and free adjustments; primary CTA repeat.
5. **Doctors** — 2 × `team_member` (name + role, fictional) + ref #5 photo.
6. **Reviews** — 3 × `testimonial` (grey avatar, quote, name, Kazan district; fictional, restrained, one 4-star) + `review_summary`.
7. **FAQ & guarantees** — ~6 × `faq_item` + 3 × `trust_badge` («Гарантия 1 год», «Коррекции бесплатно», «Лицензия»).
8. **Final CTA & contacts** — `cta_form` (name, phone) + `service_area` (Kazan districts, NAP name/phone/address, hours, Telegram).

Footer (chrome): medical disclaimer, license placeholder, «Демо-проект, клиника вымышленная».

Theme R cells (`hero_offer`, `review_summary`, `service_item`, `service_area`) all present. `portfolio_project` (E) waived by the user: no before/after gallery for a fictional clinic. Mid-page CTAs repeat the same primary action.

## Composition recipes

Confirming skip: calm spine, extras off (no carousel, marquee, early proof strip). The fear → solution pairing lives inside block 2, not as a separate mirror recipe.

## Layout

- Follow implement skill `landing-implement/references/surface/grid.md` (rail, gutter, gaps, breakpoints, child rules).
- Block 2 Fears → solutions: `layout: split-equal`
- Block 3 Denture types & prices: `layout: quad`
- Block 4 How it works: `layout: stack`
- Block 5 Doctors: `layout: split-equal`
- Block 6 Reviews: `layout: thirds`
- Block 7 FAQ & guarantees: `layout: split-1-2`
- Block 8 Final CTA & contacts: `layout: split-equal`

## Motion

Id: `load-atmosphere` (matches CONTEXT). Co-designed (no load refs).

- **Phase 1 (~1.1s):** near-white ground; the three hero composite panels fade in one by one, left → right, as if the composite assembles.
- **Phase 2 (~0.9s):** header chrome appears, with a nested hero cascade: headline → supporting line → primary CTA (fade + small `translateY`, stagger).
- Freeze after entrance. No ambient loops.

`motion_recipes: []`
Secondary live beat: light primary-CTA hover. No media-row hover (no gallery).

## Enhanced JS

`needs_enhanced_js: false` — stack stays `static-prerender`. The only script is the vanilla placeholder form handler (validation + success message), already in CONTEXT.

## Reference lock

- **Primary — ref #4** (`image-90c0d587-…png`): airy layout on near-white; bold navy grotesk headline + thin light uppercase line; blue liquid-glass 3D denture; small body text with a bullet list of fears; thin divider; key sentence in accent blue. Drives palette, type rhythm, and overall page style.
- **Ref #1** (`image-e6a962c2-…png`): navy-contoured cutout tooth with cross-section (teeth, gum, porous bone, wires) on grey. Used only as the hero composite center panel; its mechanics/style are not carried into the UI.
- **Ref #3** (`image-53351ca8-…jpg`): glass tooth with wildflowers, golden bokeh, blue butterflies, blue→warm gradient. Hero composite right panel.
- **Ref #6** (`image-ad9a611c-…jpg`): multicolor paint-splatter tooth on white. Hero composite left panel; its multicolor is confined to the hero.
- **Ref #5** (`image-0cc38689-…jpg`): two doctors in white PPE forming a tooth shape with gloved hands, overexposed white, film feel. Doctors block; human, friendly tone.
- **Ref #2** (`image-7527ec77-…jpg`): turquoise knolling flat-lay of instruments and a denture model. Not used.
- Concept: three teeth in different materials = «всё индивидуально».
- Load refs: none — load entrance co-designed (see Motion).

Asset source folder: `/home/snowman/.cursor/projects/home-snowman-projects-portfolio-teeth-land/assets/`. All six files are JPEG data, including the two with a `.png` extension; copy into the project with a `.jpg` (or converted) extension.
