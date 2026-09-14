# Lookin Launch Build Notes

## Viet Nom Nom photography showcase

- Added `/work/viet-nom-nom` and a feature in the home page’s Connected digital work section.
- Includes all 16 user-supplied photographs, converted to WebP at a maximum width of 2000px under `public/assets/photography/viet-nom-nom/`. Original JPEG files are untouched.
- Gallery supports full-image viewing, keyboard arrows, Escape, focus restoration and reduced motion. Photography enquiries use the existing contact page.
- Copy identifies Tamron’s photography for Viet Nom Nom in New Plymouth. No shoot dates, client results, testimonials, pricing or claims of published campaign usage were supplied or invented. Dish descriptions describe the photographs rather than asserting official menu names.
- Design follows the existing Plus Jakarta typography, Lookin wordmark, purple/red brand colours and rounded imagery. New page dials: DESIGN_VARIANCE 6, MOTION_INTENSITY 3, VISUAL_DENSITY 3. Existing work routes and navigation are preserved; local light/dark colours support the gallery page.
- Validation: lint, TypeScript and production build passed. Browser checks at 1440px and 390px verified layouts without horizontal overflow, gallery navigation and wraparound, Escape and focus restoration, home feature navigation and the contact link. No browser console errors were observed on the new page.

## Kahakai original video

- Added the user-created Kahakai video (`5vc27OFncfo`) to the existing case study, with credit to Tamron / Lookin and a description of its role on the client’s homepage.
- Confirmed the matching embed on `https://www.kahakaipokebowl.com/`. YouTube identifies the video as “Kahakai”.
- Uses a responsive, lazy-loaded YouTube privacy-enhanced embed without autoplay, plus direct YouTube and client-homepage links. Updated the home work feature, metadata and sitemap to include video.
- Validation: lint, TypeScript and production build passed. Desktop and 390px mobile layouts fit without horizontal overflow; Chrome verified the embedded 44-second video plays and pauses.

## Positioning

Lookin is an approachable, experienced digital partner for small businesses that want a more useful website without managing multiple suppliers. Website strategy, design and development lead the offer; original content, advertising, measurement and support strengthen it.

## Recommended Sitemap

The rapid-launch home page carries the full conversion journey. The next approved expansion is:

1. Home
2. Website Design & Development
3. Photography, Video & Content
4. Google Ads & Growth
5. Work / Case Studies
6. About Tamron
7. Book a Free Discovery Session

## Conversion Journey

Visitors move from recognising an underperforming website to understanding the connected Build/Grow/Support model, seeing credible qualitative proof, reviewing transparent scope and pricing, and booking a free 30-minute conversation. Email and phone provide working fallbacks until Google Calendar is ready.

## Decisions and Assets Required

- Existing Lookin logo in a production-ready SVG or confirmation that the refreshed wordmark can replace it.
- Google Calendar appointment-schedule URL.
- Approved photography for the hero, The White Swan and Kahakai Poké Bowls.
- A professional portrait of Tamron and optional introduction video.
- Written permission, approved testimonials and any verified metrics for both case studies.
- Confirmation of the $2,900 + GST starter price and included scope.
- Hosting and maintenance prices, if these should be published.
- Analytics property, conversion events and privacy-policy wording.
- Inventory of existing `lookin.nz` URLs for redirects and 360-tour content migration.
