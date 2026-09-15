import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, CursorClick, MagnifyingGlass, Bed, Plus } from "@phosphor-icons/react/dist/ssr";
import styles from "./page.module.css";

const title = "Google Hotel Ads Setup & Management in New Plymouth";
const description = "Turn hotel searches into opportunities for direct bookings. Google Hotel Ads setup and ongoing management by Lookin, with experience at The White Swan Country Hotel.";
const hotelImage = "/assets/case-studies/white-swan/homestead-suite-01.webp";
const faqs = [
  { q: "Is this the same as ordinary Google Search ads?", a: "Hotel Ads are built around a traveller’s chosen dates, room rates and availability. They give guests a booking link as they compare accommodation. Standard Search ads are a separate campaign type; we can discuss how the two fit your hotel’s wider marketing." },
  { q: "Can I keep using Booking.com and other booking sites?", a: "Yes. Online travel agencies can remain part of your distribution mix. The aim is to give guests a clear route to book with you directly and assess whether that route delivers bookings at a worthwhile cost." },
  { q: "Does my booking system need to support Google Hotel Ads?", a: "We need a reliable way to send your rates, availability and booking links to Google. This is often handled by your booking engine, channel manager or an integration partner. I’ll check compatibility and any provider fees before recommending a setup." },
  { q: "What about Google’s free booking links?", a: "Free booking links can also send guests to your booking website, without a Google click charge. They are ranked separately from paid Hotel Ads, and advertising does not improve their ranking. I’ll check these as part of your setup; your booking provider may still charge connectivity fees." },
  { q: "What does it cost, and how soon can we launch?", a: "I’ll quote the setup and ongoing management after reviewing your hotel and booking system. Google advertising spend is separate, as are any booking-provider fees. Timing depends on access, rate connectivity and tracking. We agree the scope, budget and launch plan before starting." },
  { q: "How will I know whether it is working?", a: "We review advertising spend alongside tracked bookings and booking value, where your booking engine supports it. We also look at cost per booking and return on ad spend, with cancellations and other fees in mind. Results depend on demand, rates, availability and the booking experience; a click alone is not a booking." },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/google-hotel-ads" },
  openGraph: { title: `${title} | Lookin`, description, url: "/google-hotel-ads", type: "website", images: [{ url: hotelImage, alt: "The Homestead Suite at The White Swan Country Hotel" }] },
  twitter: { card: "summary_large_image", title, description, images: [hotelImage] },
};

export default function GoogleHotelAdsPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#hotel-content">Skip to content</a>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="Lookin home">look<span>in</span><i>.</i></Link>
        <nav aria-label="Hotel Ads navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#white-swan">The White Swan</a>
          <Link href="/contact" className={styles.navCta}>Let’s talk <ArrowRight aria-hidden="true" /></Link>
        </nav>
      </header>
      <main id="hotel-content">
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Google Hotel Ads for New Plymouth hotels</p>
            <h1>Your rooms.<br />More guests<br /><span>booking direct.</span></h1>
            <p className={styles.lede}>Give travellers a direct route from finding your hotel on Google to booking a stay with you.</p>
            <p className={styles.intro}>I set up and manage Google Hotel Ads for local hotels, bringing hands-on experience with The White Swan Country Hotel to your next booking opportunity.</p>
            <Link href="/contact" className={styles.button}>Let’s talk about your hotel <ArrowRight weight="bold" aria-hidden="true" /></Link>
            <a className={styles.secondary} href="#how-it-works">See how Hotel Ads work <ArrowRight aria-hidden="true" /></a>
          </div>
          <figure className={styles.heroFigure}>
            <div className={styles.heroImage}><Image src={hotelImage} alt="A sunlit bedroom opening onto the balcony at The White Swan Country Hotel" fill preload sizes="(max-width: 800px) 100vw, 48vw" /></div>
            <figcaption>The White Swan Country Hotel, Greytown.<br /><span>Hospitality experience behind a local service.</span></figcaption>
          </figure>
        </section>

        <section className={styles.explainer} id="how-it-works" aria-labelledby="explain-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Be there when they’re choosing</p>
            <h2 id="explain-title">What are Google Hotel Ads?</h2>
            <p>They’re paid booking links that can appear when travellers explore hotels on Google Search and Maps. Your room rates and availability help people compare their options, then click through to your own booking website.</p>
            <p>For a guest planning a stay in New Plymouth, that means a route from discovering your property to reserving a room directly with you.</p>
          </div>
          <ol className={styles.journey}>
            <li><MagnifyingGlass aria-hidden="true" /><div><h3>A guest searches</h3><p>They explore hotels and choose their travel dates.</p></div></li>
            <li><CursorClick aria-hidden="true" /><div><h3>Your booking link appears</h3><p>Your live rate gives them an option to book with you.</p></div></li>
            <li><Bed aria-hidden="true" /><div><h3>They book on your site</h3><p>The guest completes their reservation in your booking system.</p></div></li>
          </ol>
          <p className={styles.source}>More on <a href="https://support.google.com/google-ads/answer/9238461?hl=en">how Google Hotel Ads work</a>.</p>
        </section>

        <section className={styles.examples} id="booking-examples" aria-labelledby="examples-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>The White Swan on Google</p>
            <h2 id="examples-title">See what your guests see.</h2>
            <p>These real screenshots show The White Swan Country Hotel’s official booking link alongside other booking sites, on desktop and mobile. Look for the “Sponsored” label and the “Official site” or “Official website” badge.</p>
          </div>
          <div className={styles.screenshotGrid}>
            <figure>
              <figcaption><h3>On desktop</h3><p>Room options, live rates and a link to the hotel’s own booking website.</p></figcaption>
              <a className={styles.screenshotLink} href="/assets/case-studies/white-swan/hotel-ads/desktop-booking-panel.webp" target="_blank" rel="noreferrer" aria-label="Enlarge the desktop booking panel (opens in a new tab)">
                <Image src="/assets/case-studies/white-swan/hotel-ads/desktop-booking-panel.webp" alt="Google’s desktop Prices panel showing The White Swan’s official site in Sponsored featured options at NZ$215, alongside Booking.com and other providers at NZ$247, with All options below." width={755} height={1190} sizes="(max-width: 800px) calc(100vw - 48px), 540px" unoptimized />
              </a>
              <a className={styles.originalLink} href="/assets/case-studies/white-swan/hotel-ads/desktop-full.webp" target="_blank" rel="noreferrer">View full desktop screenshot <ArrowUpRight aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span></a>
            </figure>
            <figure>
              <figcaption><h3>On mobile</h3><p>The official website appears in the sponsored choices and again under “All options”.</p></figcaption>
              <a className={styles.screenshotLink} href="/assets/case-studies/white-swan/hotel-ads/mobile-booking-panel.webp" target="_blank" rel="noreferrer" aria-label="Enlarge the mobile booking panel (opens in a new tab)">
                <Image src="/assets/case-studies/white-swan/hotel-ads/mobile-booking-panel.webp" alt="Google’s mobile booking panel showing The White Swan’s official website under Sponsored at $205, other providers at $235 or $236, and a separate official website link under All options." width={1040} height={1530} sizes="(max-width: 800px) calc(100vw - 48px), 420px" unoptimized />
              </a>
              <a className={styles.originalLink} href="/assets/case-studies/white-swan/hotel-ads/mobile-full.webp" target="_blank" rel="noreferrer">View full mobile screenshot <ArrowUpRight aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span></a>
            </figure>
          </div>
          <div className={styles.exampleExplanation}>
            <div><h3>Sponsored: the paid placement</h3><p>This is the Hotel Ads example. The official website badge helps guests identify the hotel’s own booking option among the advertised links.</p></div>
            <div><h3>All options: a separate route</h3><p>The official booking link also appears in this section. Free booking links are ranked separately from Hotel Ads; paying for ads does not improve their ranking.</p></div>
          </div>
          <p className={styles.exampleNote}>Screenshots supplied by Lookin, shown as examples. Select either image to enlarge it in a new tab. The images show different travel dates; prices, availability, offers and placements vary. These are examples of visibility, not booking or revenue results.</p>
        </section>

        <section className={styles.benefits} aria-labelledby="benefits-title">
          <div><p className={styles.eyebrow}>Make more of the demand already there</p><h2 id="benefits-title">A stronger path<br />to direct bookings.</h2></div>
          <div className={styles.benefitList}>
            <article><h3>Reach people ready to plan a stay</h3><p>Put your booking option in front of travellers comparing hotels, dates and prices, when a reservation is already on their mind.</p></article>
            <article><h3>Give your own website a place in the choice</h3><p>Let guests consider booking directly alongside other booking channels. Build a healthier mix of reservations and an opportunity to reduce reliance on online travel agencies.</p></article>
            <article><h3>Start the guest relationship with you</h3><p>A direct reservation lets you handle the booking experience and guest communication through your own systems, from the first confirmation onwards.</p></article>
            <article><h3>Make decisions around booking value</h3><p>See what your advertising contributes. Compare acquisition costs with the value of bookings so the conversation goes beyond clicks and impressions.</p></article>
          </div>
        </section>

        <section className={styles.caseStudy} id="white-swan" aria-labelledby="swan-title">
          <div className={styles.caseImage}><Image src="/assets/case-studies/white-swan/governors-suite-01.webp" alt="The Governors Suite at The White Swan Country Hotel in Greytown" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
          <div className={styles.caseCopy}>
            <p className={styles.eyebrow}>Experience at The White Swan</p>
            <h2 id="swan-title">A service built on real hotel experience.</h2>
            <p>I’ve set up and managed Google Hotel Ads for The White Swan Country Hotel in Greytown. It’s experience I’m now bringing to hotels here in New Plymouth.</p>
            <p>My wider work for The White Swan also connects its website, photography, Google Ads and reporting. That gives me a practical view of the whole guest journey, from the first search to the booking experience.</p>
            <p className={styles.caseStatement}>Your hotel is different. We’ll build the approach around your rooms, your booking system and your goals.</p>
            <Link className={styles.textLink} href="/work/the-white-swan">Explore my wider White Swan work <ArrowRight aria-hidden="true" /></Link>
          </div>
        </section>

        <section className={styles.scope} aria-labelledby="scope-title">
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>Setup and ongoing management</p><h2 id="scope-title">I handle the moving parts.</h2><p>You know your hotel. I look after the connections, campaigns and ongoing attention that help the advertising do its job.</p></div>
          <div className={styles.scopeGrid}>
            <article><h3>Get connected and ready</h3><ul>{["Review your booking engine and Google connectivity", "Coordinate rate and availability feeds with your provider", "Connect Hotel Center and Google Ads as needed", "Set up campaigns and agree your advertising budget", "Check booking conversion tracking and test the guest journey"].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article>
            <article><h3>Keep improving after launch</h3><ul>{["Monitor campaign performance and spend", "Review bids and budgets against your priorities", "Watch for rate-feed and booking-link issues", "Review tracked bookings and revenue where supported", "Explain the results and recommend practical next steps"].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article>
          </div>
          <p className={styles.costNote}>A clear proposal before we start: setup, management, Google advertising spend and any provider fees are itemised separately.</p>
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <div><p className={styles.eyebrow}>A few useful answers</p><h2 id="faq-title">Before we talk.</h2><p>Have your hotel website and booking-system name handy. That’s a useful place to start.</p></div>
          <div>{faqs.map(({ q, a }) => <details key={q}><summary>{q}<Plus aria-hidden="true" /></summary><p>{a}</p></details>)}<p className={styles.source}>Google’s guide to <a href="https://support.google.com/hotelprices/answer/10472393?hl=en">free booking links</a>.</p></div>
        </section>

        <section className={styles.contact} aria-labelledby="contact-title">
          <p className={styles.eyebrow}>Your local Google Hotel Ads partner</p><h2 id="contact-title">Let’s put your next<br /> direct booking in reach.</h2>
          <p>I’m Tamron, based in New Plymouth. Tell me about your hotel and we’ll look at whether Google Hotel Ads is a good fit, what needs connecting and what a sensible starting budget could look like.</p>
          <Link href="/contact" className={styles.button}>Talk to Tamron <ArrowRight weight="bold" aria-hidden="true" /></Link>
          <a className={styles.secondary} href="mailto:hello@lookin.nz?subject=Google%20Hotel%20Ads%20enquiry">hello@lookin.nz</a>
        </section>
      </main>
      <footer className={styles.footer}><Link href="/" className={styles.wordmark} aria-label="Lookin home">look<span>in</span><i>.</i></Link><a href="tel:+64273447853">027 344 7853</a><small>© {new Date().getFullYear()} Lookin. <Link href="/privacy">Privacy statement</Link></small></footer>
    </div>
  );
}
