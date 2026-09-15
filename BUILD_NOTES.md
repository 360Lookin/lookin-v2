# Lookin Launch Build Notes

## Google Hotel Ads service page

### Actual Google booking screenshots

- Added the two screenshots supplied on 15 September 2026 to a new `#booking-examples` section after the Hotel Ads explainer. Desktop focuses on the booking panel; mobile removes the status bar and account-management area. Ad labels, badges, dates, rates and competing options remain unchanged.
- Cropped previews and full originals are stored as lossless WebP under `public/assets/case-studies/white-swan/hotel-ads/`. The previews total approximately 226 KB, retain original pixels and load lazily. Originals remain available through clearly labelled new-tab links; no generative editing was used.
- Added descriptive alt text, visible keyboard focus, enlarge links and captions explaining sponsored versus free booking links. The caption notes different travel dates and variable rates/placements without presenting screenshots as revenue evidence.
- Validation for this update: production build, lint and standalone typecheck passed. Browser checks at 1366px and 390px verified image loading, layout without horizontal overflow and keyboard focus. The enlarged mobile asset rendered successfully; all four asset URLs returned HTTP 200 with image/webp content type.

### Homepage navigation

- Added a prominent `Google Hotel Ads` link to the main homepage navigation immediately after `What I do`. It uses a soft purple treatment on desktop and remains visually distinct inside the mobile menu while preserving the existing booking call to action as the strongest control.
- Validation: lint, standalone TypeScript and production build passed. Browser checks verified the highlighted desktop link, the expanded 390px mobile menu, and successful navigation to `/google-hotel-ads`.

- Added `/google-hotel-ads` for New Plymouth hotel owners, with a plain-language explanation, direct-booking benefits, White Swan experience, setup and management scope, FAQs and contact links. Added home Grow-section discovery, a contact-form service option, metadata and sitemap entry.
- Preserved Lookin typography, wordmark, purple/red palette and local WebP hospitality photography. Page uses server-rendered content, native keyboard-operable FAQ disclosures, responsive layouts and dark-mode tokens. Design dials: DESIGN_VARIANCE 6, MOTION_INTENSITY 2, VISUAL_DENSITY 3.
- Google product facts checked against https://support.google.com/google-ads/answer/9238461?hl=en and https://support.google.com/hotelprices/answer/10472393?hl=en on 15 September 2026. No commission bidding, guaranteed placement, pricing or booking uplift promised.
- Important evidence distinction: existing temporary report extracts at `tmp/pdfs/white-swan-reports/report1.txt` and `report2.txt` show zero Hotel Ads-attributed accommodation bookings in the reported periods; successful Search Ads results are a different channel. The page therefore features White Swan Hotel Ads experience without claiming proven booking growth. Newer verified Hotel Ads results, dates and approved client wording would strengthen the case study. Private reports are not copied into public assets.
- Setup and management pricing, advertising budget, provider fees and launch timing are scoped by enquiry rather than invented.
- Validation: lint and production build passed. An initial standalone TypeScript run overlapped route-type generation; rerunning after generation passed. Desktop (1366px) and mobile (390px) browser checks verified loaded imagery, readable layout, FAQ expansion and keyboard collapse, and the contact destination with the new service option. No live enquiry was submitted. Dark-mode tokens are implemented; dark-mode emulation and Lighthouse measurements were not available in this browser workflow.

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
