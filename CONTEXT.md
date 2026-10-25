# Context

## Problem / goal

Landing goal: lead (primary) + info (secondary).
People who need removable dentures fear the prosthesis will fall out, hold poorly, get in the way when eating, or look unnatural. They want reassurance that a denture made individually will fit and feel natural, understand which denture type suits them and roughly what it costs, then book a consultation.

## Landing type

lead-gen + informational (hybrid, explicitly agreed). Lead-gen drives the page; the informational layer explains denture types, process, and prices.

## Theme

`local_service`.
R cells: `hero_offer`, `review_summary`, `service_item`, `service_area` — all included. No waives.

## Audience familiarity

cold — needs depth: objection handling, process steps, proof (reviews), FAQ before the final CTA.

## Brand / product

**Опора** (fictional demo clinic, Kazan) — removable denture clinic. Offer: removable dentures that stay in place, made individually from the patient's impressions, with fittings until the fit is right.

Services:
- Full acrylic denture — from 19 900 ₽
- Partial denture — from 24 900 ₽
- Nylon (flexible, no metal clasps) denture — from 34 900 ₽
- Clasp (bugel) denture — from 49 900 ₽
- Extra line: denture repair and relining

## Audience and pain

Adults 50+ in Kazan. Main pain: fear the denture will fall out, hold poorly, interfere with eating, or look unnatural.

## Primary CTA

Label: «Записаться на консультацию» → opens the booking form in a modal dialog (every CTA instance: header, hero, mid-page repeats). Without JS the CTA links to the inline booking form in the final contacts block.
Form fields: name, phone (+7 format). In return: a callback from the clinic administrator.
Form is a placeholder: client-side validation (inline field errors, modal stays open on error); on valid submit the modal closes (inline form: fields reset) and a toast shows «Заявка отправлена. Перезвоним в течение 15 минут». Nothing is sent anywhere.
Under the submit button: personal-data consent line (152-FZ) with a placeholder privacy-policy link.
Secondary contacts: clickable `tel:` phone `+7 (843) 000-00-00` and Telegram `@opora_demo` (deliberately fake placeholders).

## Price

Placement: after benefits. Specificity: from — overall «от 19 900 ₽» plus a short per-type "from" price list (see Brand / product).

## Constraints

- Page copy language: Russian. Address the reader as «вы». Calm, caring tone; no fear-mongering.
- Footer: medical disclaimer («Имеются противопоказания, необходима консультация специалиста»), license placeholder, and a line stating this is a demo project and the clinic is fictional.
- All contacts, address, prices, and license are plausible fictional placeholders.
- No deadline.

## Motion

`load-atmosphere`

## Deploy and stack

Stack tier: `static-prerender` — Vite (vanilla HTML + CSS + minimal TS/JS), built to static HTML. Small vanilla script for the booking modal (native `<dialog>`), placeholder form validation, and toast only; no libraries.
Host: GitHub Pages. No custom domain.
Backend: none.

## Analytics

none

## Canonical terms

- **Brand**: Опора
- **Offer**: individually made removable dentures that stay in place
- **Primary CTA**: «Записаться на консультацию» → booking form (name + phone)
- **Booking form**: placeholder form, client-side only
- **Denture types**: full acrylic, partial, nylon, clasp (bugel); plus repair/relining
