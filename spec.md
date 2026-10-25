## Problem Statement

Adults 50+ in Kazan who need removable dentures are afraid the denture will fall out, hold poorly, get in the way when eating, or look unnatural. They arrive cold: they do not know which denture type suits them, what it roughly costs, or how the process goes, so they postpone the decision instead of booking a visit.

## Solution

A one-page Russian-language landing for **Опора**, a fictional Kazan removable-denture clinic (portfolio demo). The page calmly addresses each fear, explains denture types with "from" prices, shows the step-by-step process, the doctors, reviews, FAQ and guarantees, and leads to one action: «Записаться на консультацию» — a short name + phone booking form (placeholder, nothing is sent) that confirms with a toast.

## User Stories

1. As a cold visitor, I want to see on the first screen what the clinic offers, for whom, and a clear booking button, so that I immediately know I am in the right place.
2. As a visitor afraid of a bad denture, I want each of my fears (falls out, holds poorly, gets in the way when eating, looks unnatural) answered with how the clinic prevents it, so that I feel reassured.
3. As a visitor comparing options, I want the four denture types with short descriptions and "from" prices, plus repair/relining, so that I understand what fits me and my budget.
4. As a visitor unsure about the process, I want the steps from consultation to delivery and free adjustments, so that I know what will happen and how many visits it involves.
5. As a visitor, I want to see the doctors, so that the clinic feels human and trustworthy.
6. As a visitor, I want honest-looking reviews and an overall rating, so that I trust other patients' experience.
7. As a visitor with remaining doubts, I want an FAQ and clear guarantees, so that my last objections are answered before I book.
8. As a ready visitor, I want a short booking form and the clinic's contacts (address, hours, phone, Telegram, districts served), so that I can book or contact the clinic my way.
9. As a visitor clicking any booking button, I want a form to open in a dialog and, after submitting, see a confirmation toast, so that I know my request went through without leaving the page.
10. As a visitor who mistypes, I want clear inline errors on the form, so that I can fix the name or phone before submitting.
11. As a mobile visitor, I want a readable single-column page with phone and booking always reachable in the header, so that I can act from my phone.
12. As a visitor opening the page, I want a short, calm entrance animation that never hides the offer, so that the page feels alive but not slow; with reduced motion I see the final frame instantly.
13. As someone sharing the link, I want a proper title, description and preview image, while the fictional clinic never appears in search results, so that the demo looks professional without misleading real patients.
14. As a visitor (and as the portfolio owner), I want the footer to show the medical disclaimer, license placeholder and a clear "demo, fictional clinic" note, so that the page is realistic yet honest.
15. As the portfolio owner, I want the page built as static prerendered HTML and deployed to GitHub Pages, so that it is fast and free to host.

## Implementation Decisions

### Type, theme, elements

- Landing type: lead-gen + informational (hybrid, explicitly agreed). Theme: `local_service` (see shared `themes.md` / `elements.md`).
- R elements present: `hero_offer`, `review_summary`, `service_item`, `service_area`.
- E elements present: `benefit_item`, `testimonial`, `faq_item`, `cta_form`, `how_it_works_step`, `trust_badge`. Also `team_member` (O).
- `portfolio_project` (E) waived by the user: no before/after gallery.
- Audience familiarity: cold → full spine (value, process, proof, FAQ) before final CTA.
- Composition recipes: none (calm spine; no carousel, marquee, early proof strip).

### Chrome

- **Header:** text logo «Опора»; anchor nav «Виды и цены» → block 3, «Как проходит» → block 4, «Врачи» → block 5, «Контакты» → block 8; phone; primary CTA button. Desktop: sticky, becomes compact on scroll. Mobile: logo + phone icon + CTA only; anchor nav hidden, no burger.
- **Footer:** medical disclaimer «Имеются противопоказания, необходима консультация специалиста»; license placeholder («Лицензия № ЛО-16-01-000000 от 01.01.2020», marked placeholder); «Демо-проект, клиника вымышленная»; © 2026 Опора; placeholder privacy-policy link.
- **Booking modal:** native `<dialog>` containing the booking form; opened by every CTA button (header, hero, after block 3, after block 4). Without JS, CTAs are links to the block 8 form.
- **Toast:** bottom of viewport, ~5s, close button, `role="status"`. Text: «Заявка отправлена. Перезвоним в течение 15 минут».

### Sections and layout (in order)

Grid tokens, breakpoints and gaps: follow implement `landing-implement/references/surface/grid.md`.

1. **Hero** — `hero_offer`. Text and CTA on plain ground on top; hero composite band full width below; no text over the composite.
   - `h1` (two lines, ref #4 rhythm): bold «Протезы, которые держатся» + thin light uppercase «сделаны индивидуально».
   - Supporting line: «Съёмные протезы в Казани по вашим слепкам — с примерками, пока посадка не станет удобной. Гарантия 1 год.»
   - Primary CTA «Записаться на консультацию».
   - `review_summary` under CTA: «4,9 · 312 отзывов · Яндекс Карты» (fictional).
2. **Fears → solutions** — `layout: split-equal`; 4 × `benefit_item` + denture visual. Copy direction:
   - Выпадает → протез по индивидуальным слепкам повторяет рельеф дёсен и держится за счёт точного прилегания.
   - Плохо держится → примерки, пока посадка не станет удобной; коррекции в течение года бесплатно.
   - Мешает есть → конструкцию подбираем под прикус и привычки в еде; нейлоновый вариант без металлических кламмеров.
   - Выглядит неестественно → цвет и форму зубов и оттенок десны подбираем под ваше лицо.
   - Accent-blue emphasis sentence: «Поэтому протез должен создаваться индивидуально.»
3. **Denture types & prices** — `layout: quad`; 4 × `service_item` with `price_range`, headline price «от 19 900 ₽», denture visual, primary CTA repeat.
   - Полный акриловый протез — при полном отсутствии зубов — от 19 900 ₽
   - Частичный протез — замещает несколько утраченных зубов — от 24 900 ₽
   - Нейлоновый протез — мягкий, без металлических кламмеров — от 34 900 ₽
   - Бюгельный протез — на металлическом каркасе, распределяет нагрузку — от 49 900 ₽
   - Extra line: «Починка и перебазировка» — стоимость после осмотра.
4. **How it works** — `layout: stack`; 5 × `how_it_works_step`: Консультация и осмотр → Слепки → Примерка (столько раз, сколько нужно) → Изготовление → Выдача и бесплатные коррекции в течение года. Primary CTA repeat.
5. **Doctors** — `layout: split-equal`; ref #5 photo + 2 × `team_member` (fictional name + role, no portraits; short bio written at build).
6. **Reviews** — `layout: thirds`; 3 × `testimonial` (grey circle avatar, quote, first name, Kazan district; restrained; one is 4 stars) + `review_summary` (same figures as hero).
7. **FAQ & guarantees** — `layout: split-1-2`; ~6 × `faq_item` (native `<details>`/`<summary>`, answers in DOM) + 3 × `trust_badge`: «Гарантия 1 год», «Коррекции бесплатно», «Лицензия».
8. **Final CTA & contacts** — `layout: split-equal`; inline booking form + `service_area`: name «Опора», phone `+7 (843) 000-00-00` (`tel:`), Telegram `@opora_demo`, Kazan address (real street, fictional building number), hours, list of Kazan districts served. No map embed.

### Primary CTA and form

- Label everywhere: «Записаться на консультацию»; one action family across the page.
- `cta_form`: headline (e.g. «Запишитесь на консультацию»), fields: name (text, required), phone (tel, required, +7 format); submit «Записаться»; consent line under submit: «Нажимая кнопку, вы соглашаетесь на обработку персональных данных» with placeholder policy link.
- Value exchange: callback from the administrator.
- Behaviour (placeholder, nothing is sent): validate on submit; invalid → inline field errors, dialog stays open; valid → modal closes (inline form: fields reset) and toast appears.

### Price

After benefits (block 3); specificity "from" — overall «от 19 900 ₽» + per-type "from" prices above.

### Visual system

- **Palette:** cool near-white ground ~90%; deep navy for headings/text; pale blue-grey optional alternate section surface; cobalt "liquid glass" blue accent ≤10%. Exact values chosen at build; no hex copied from refs.
- **Pairing habits:** accent only on primary CTA fill, accent-blue emphasis sentences and list markers; structure via thin hairline dividers and thin-stroked cards, not shadowed filled cards; signature heading rhythm = bold navy line + thin light uppercase line; ref #6 multicolor confined to the hero composite.
- **Type:** headings Onest (heavy + thin uppercase), body Golos Text; body size larger than implement default (audience 50+). `font_strategy: google-fonts`.
- **Focal visual / assets** (user confirmed rights):
  - Hero composite: left → right ref #6 (paint-splatter tooth), ref #1 (cutout tooth cross-section, center, dominant), ref #3 (glass tooth with flowers). Panels overlap and blend via CSS gradient masks (no pixel editing); edges dissolve into the near-white ground. Band is not full-viewport height (source images ~1024px). Mobile shows only the center panel. Fallback if the ref #3 seam looks dirty: replace it with the ref #4 denture crop.
  - Ref #4 denture, cropped to the glass denture only (no baked text): blocks 2 and 3.
  - Ref #5 doctors photo: block 5.
  - Ref #2 not used. All images get meaningful Russian `alt`; hero images are not lazy-loaded.
- **Favicon:** simple navy tooth-silhouette SVG.

### Motion

- Id: `load-atmosphere` (co-designed, no load refs).
  - Phase 1 (~1.1s): near-white ground; the three hero composite panels fade in one by one left → right.
  - Phase 2 (~0.9s): header chrome, with nested hero cascade headline → supporting line → CTA (fade + small `translateY`, stagger).
  - Freeze after entrance; no ambient loops. Total ≤ ~2s. Reduced motion → instant final frame. Offer and CTA readable without JS.
- `motion_recipes: []`. Secondary live beat: light primary-CTA hover. No media-row hover.

### Stack, deploy, analytics

- Stack tier: `static-prerender`. Vite, vanilla HTML + CSS + minimal TS/JS, built to static HTML.
- `enhanced_js: false`; no libraries. Only script: booking modal open/close, form validation, toast, and the header compact-on-scroll class toggle.
- Host: GitHub Pages project site of repo `JustSnow/teeth_land` (Vite base path `/teeth_land/`). No custom domain. No backend.
- Analytics: none.

### Copy

- Language Russian, address «вы», calm and caring, no fear-mongering.
- Key copy is fixed above; reviews, FAQ answers and doctor bios are written at build in the same tone. No medical claims beyond those listed; all figures and contacts fictional.

### SEO contract

Indexing is deliberately `noindex` on the production URL: the clinic is fictional and must not appear in search results (user decision; overrides the baseline "index on production" default).

```yaml
seo:
  environment: production
  indexing: noindex
  production_url: https://justsnow.github.io/teeth_land/
  canonical_url: https://justsnow.github.io/teeth_land/
  html_lang: ru

  keywords:
    primary: "съёмные протезы зубов в Казани"
    secondary: ["нейлоновый протез", "бюгельный протез", "акриловый протез", "перебазировка протеза"]
    intent: commercial

  title: "Съёмные протезы в Казани — клиника «Опора»"
  meta_description: "Съёмные протезы по индивидуальным слепкам: акриловые, нейлоновые, бюгельные. Примерки до идеальной посадки, гарантия 1 год. От 19 900 ₽."

  open_graph:
    type: website
    title: "Съёмные протезы в Казани — клиника «Опора»"
    description: "Съёмные протезы по индивидуальным слепкам: акриловые, нейлоновые, бюгельные. Примерки до идеальной посадки, гарантия 1 год. От 19 900 ₽."
    url: https://justsnow.github.io/teeth_land/
    site_name: "Опора"
    locale: ru_RU
    image_url: https://justsnow.github.io/teeth_land/og-image.jpg   # 1200×600 crop of the hero composite + «Опора», made at build
    image_alt: "Три зуба из краски, разреза и стекла — клиника съёмного протезирования «Опора»"

  twitter_card:
    card: summary_large_image
    title: "Съёмные протезы в Казани — клиника «Опора»"
    description: "Съёмные протезы по индивидуальным слепкам: акриловые, нейлоновые, бюгельные. Примерки до идеальной посадки, гарантия 1 год. От 19 900 ₽."
    image_url: https://justsnow.github.io/teeth_land/og-image.jpg
    site: null
    creator: null

  json_ld:
    organization:
      type: Organization
      name: "Опора"
      url: https://justsnow.github.io/teeth_land/
      logo_url: null
      same_as: []
    web_page:
      name: "Съёмные протезы в Казани — клиника «Опора»"
      url: https://justsnow.github.io/teeth_land/
    offer: null          # "from" prices are not a concrete offer; no fictional NAP in JSON-LD

  on_page:
    h1: "Протезы, которые держатся — сделаны индивидуально"   # two visual lines inside one <h1>
    faq_in_html: true
```

## Acceptance Criteria

- AC-1: First screen shows the two-line `h1` («Протезы, которые держатся» / «сделаны индивидуально»), the supporting line, the «Записаться на консультацию» button and the «4,9 · 312 отзывов · Яндекс Карты» line, with the hero composite band below and no text over the images. Evidence: hero
- AC-2: Hero composite shows ref #6, ref #1, ref #3 left → right, blended with CSS gradient masks; on mobile only the ref #1 panel is visible. Evidence: hero composite, mobile viewport
- AC-3: Block 2 lists all four fears (выпадает, плохо держится, мешает есть, выглядит неестественно), each with a solution, plus the ref #4 denture crop without baked-in text and the accent-blue sentence «Поэтому протез должен создаваться индивидуально.». Evidence: Fears → solutions
- AC-4: Block 3 shows four denture types with prices 19 900 / 24 900 / 34 900 / 49 900 ₽ (each «от»), the headline «от 19 900 ₽», a «Починка и перебазировка» line, and a CTA repeat; it follows block 2. Evidence: Denture types & prices
- AC-5: Block 4 shows exactly five numbered steps ending with free adjustments for a year, followed by a CTA repeat. Evidence: How it works
- AC-6: Block 5 shows the ref #5 photo and two doctors with name and role, no portrait photos. Evidence: Doctors
- AC-7: Block 6 shows three reviews with grey avatar placeholders, first name and Kazan district; exactly one review is 4 stars. Evidence: Reviews
- AC-8: Block 7 has ~6 FAQ items as `<details>`/`<summary>` with answers present in the HTML without JS, and three trust badges «Гарантия 1 год», «Коррекции бесплатно», «Лицензия». Evidence: FAQ & guarantees
- AC-9: Block 8 shows the inline booking form and contacts: `tel:+78430000000` link, Telegram `@opora_demo` link, address, hours, Kazan districts; no map embed. Evidence: Final CTA & contacts
- AC-10: Every «Записаться на консультацию» button (header, hero, after block 3, after block 4) has that exact label and opens the booking `<dialog>`; with JS disabled it navigates to the block 8 form. Evidence: CTA buttons, no-JS check
- AC-11: Submitting with an empty name or a phone not in +7 format shows inline errors next to the fields and keeps the dialog open; nothing is sent over the network. Evidence: booking form, network panel
- AC-12: A valid submit closes the dialog (inline form: fields reset) and shows the toast «Заявка отправлена. Перезвоним в течение 15 минут» with `role="status"` and a close button; it disappears after ~5s. Evidence: booking modal, inline form, toast
- AC-13: The consent line about personal-data processing with a policy link is under the submit button in both forms. Evidence: booking form
- AC-14: Header: on desktop it is sticky, compacts on scroll and has the four anchors («Виды и цены», «Как проходит», «Врачи», «Контакты») pointing to blocks 3, 4, 5, 8; on mobile it shows only logo, phone and CTA, with no burger. Evidence: header, desktop + mobile
- AC-15: Page load runs Phase 1 (panels fade in left → right) then Phase 2 (header + headline → support → CTA), readable within ~2s, then freezes; with `prefers-reduced-motion: reduce` the final frame shows instantly; no content flashes from visible to hidden. Evidence: page load, reduced-motion emulation
- AC-16: Accent blue is used only on CTA fills, emphasis sentences and list markers; cards use thin strokes, not drop shadows; headings use Onest and body uses Golos Text via Google Fonts. Evidence: computed styles
- AC-17: Footer contains the medical disclaimer, the license placeholder, «Демо-проект, клиника вымышленная», and © 2026 Опора. Evidence: footer
- AC-18: SEO head matches the `seo:` contract verbatim: `<html lang="ru">`, title, meta description, `<meta name="robots" content="noindex">`, absolute canonical and `og:url` = `https://justsnow.github.io/teeth_land/`, OG + `twitter:card=summary_large_image` tags with absolute image URLs. Evidence: `<head>`
- AC-19: The page has exactly one `<h1>` and no skipped heading levels; JSON-LD contains `Organization` and `WebPage` only — no `Offer`, `FAQPage` or `QAPage`, and no phone or address. Evidence: DOM, JSON-LD
- AC-20: The OG image exists at the contract URL, is 1200×600, and shows the hero composite with «Опора». Evidence: og-image file
- AC-21: All content images have meaningful Russian `alt`; hero composite images are not lazy-loaded. Evidence: `<img>` attributes
- AC-22: Build output is static prerendered HTML from Vite with the `/teeth_land/` base path; no third-party JS libraries, analytics, carousel or marquee are included. Evidence: `dist/`, package.json
- AC-23: The site is deployed to GitHub Pages and loads at `https://justsnow.github.io/teeth_land/` with working asset paths. Evidence: deployed URL
- AC-24: Layout is single-column below the implement breakpoints and uses the named patterns (`split-equal`, `quad`, `stack`, `thirds`, `split-1-2`) on wide screens; no horizontal scroll on mobile. Evidence: responsive check

## Out of Scope

- Real form submission, backend, CRM, Telegram bot, email.
- Analytics (Metrika / GA).
- Map embed.
- Before/after gallery (`portfolio_project`), carousels, marquees, any `motion_recipes`.
- `sitemap.xml`, `robots.txt`, hreflang, search indexing.
- `Offer` / `FAQPage` / `QAPage` JSON-LD.
- A/B testing, quizzes/calculators, ads packs.
- Custom domain.
- Real clinic data (license, doctors, contacts, reviews).

## Further Notes

- Sources folded in: `CONTEXT.md` and `DESIGN.md` (confirmed); this spec is the single source of truth for the build.
- Everything about the clinic is fictional (portfolio demo): brand, address building number, phone `+7 (843) 000-00-00`, Telegram `@opora_demo`, license number, doctors, reviews, rating. Values are deliberately fake to avoid colliding with real people or businesses.
- Reference lock:
  - Primary ref #4 (poster «ВСЕ / ИНДИВИДУАЛЬНО»): airy near-white layout, bold navy grotesk + thin light uppercase line, blue liquid-glass denture, bullet list of fears, thin divider, accent-blue key sentence. Drives the whole page style.
  - Ref #1: navy-contoured cutout tooth cross-section on grey — hero center panel only; its mechanics/style are not carried into the UI.
  - Ref #3: glass tooth with flowers, golden bokeh, blue→warm gradient — hero right panel.
  - Ref #6: multicolor paint-splatter tooth on white — hero left panel.
  - Ref #5: two doctors in white PPE forming a tooth shape with gloved hands — Doctors block.
  - Ref #2: turquoise instrument flat-lay — not used.
  - Concept: three teeth in different materials = «всё индивидуально».
- Asset files (all JPEG data; the two `.png` are misnamed — copy as `.jpg` or convert), in `/home/snowman/.cursor/projects/home-snowman-projects-portfolio-teeth-land/assets/`:
  - ref #1 `image-e6a962c2-361b-44cc-95af-e1fedf5913f4.png`
  - ref #2 `image-7527ec77-c851-4c4f-aa0b-6e2861dd1cf9.jpg` (unused)
  - ref #3 `image-53351ca8-a27a-4ef2-8647-bb69c8a7a220.jpg`
  - ref #4 `image-90c0d587-78f0-4231-8a12-f44a73fd77b5.png`
  - ref #5 `image-0cc38689-90a2-4c44-8f8a-6b1ec3e74593.jpg`
  - ref #6 `image-ad9a611c-269a-4bdf-a36b-78dcb0007e08.jpg`
- Source images are ~1024px on the long side; slight upscaling on retina is accepted for the demo.
- `gh` is not authenticated locally; GitHub Pages enablement for the repo was not verified.
