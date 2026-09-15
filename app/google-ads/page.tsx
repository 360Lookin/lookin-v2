import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "@phosphor-icons/react/dist/ssr";
import styles from "../google-hotel-ads/page.module.css";
import ads from "./page.module.css";

const title = "Google Ads Setup & Management in New Plymouth";
const description = "Google Ads for New Zealand small businesses. Setup from $499 + GST and ongoing management from $399 + GST per month. Work directly with Tamron at Lookin.";
const portrait = "/assets/portraits/tamron-galbraith-working-at-desk.webp";
const faqs = [
  { q: "How much should I spend on the ads themselves?", a: "That depends on your services, location, competition and what a new customer is worth. We research your keywords and agree a budget before launch. The $1,000 monthly ad budget shown above is an illustration, not a minimum or a prediction of results." },
  { q: "Can you take over an existing Google Ads account?", a: "Yes. I’ll review the account, tracking and campaign structure first. If a rebuild or tracking repair is needed, I’ll explain the work and quote it before starting. You keep access to your account and its history." },
  { q: "Can I book setup without ongoing management?", a: "Yes. Setup can be a standalone service, with a handover of the campaign structure, budget settings and tracking. If you want me to look after the campaigns after launch, monthly management is priced separately." },
  { q: "How soon will I see results?", a: "Ads can start attracting visitors once campaigns are approved and running. Reliable conclusions take enough conversion data, and the time needed varies with search demand and budget. I’ll review lead quality with you and adjust the campaign; a particular number of leads or return is never guaranteed." },
  { q: "Do these prices include Shopping, Performance Max or Hotel Ads?", a: "These starting prices cover Google Search campaigns for a small service business. Product feeds, Shopping, Performance Max, video campaigns and Hotel Ads need different setup and management, so I quote them separately." },
  { q: "What needs to be ready before we start?", a: "A working website, a clear offer, access to your Google Ads and analytics accounts, and a way to respond to enquiries. We agree the scope, fees, budget and service terms before work begins. New landing pages, complex tracking integrations and third-party tools are quoted separately." },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/google-ads" },
  openGraph: { title: `${title} | Lookin`, description, url: "/google-ads", type: "website", images: [{ url: portrait, alt: "Tamron at work at Lookin" }] },
  twitter: { card: "summary_large_image", title, description, images: [portrait] },
};

export default function GoogleAdsPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#ads-content">Skip to content</a>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="Lookin home">look<span>in</span><i>.</i></Link>
        <nav aria-label="Google Ads navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <Link href="/contact" className={styles.navCta}>Let’s talk <ArrowRight aria-hidden="true" /></Link>
        </nav>
      </header>
      <main id="ads-content">
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Google Ads setup &amp; management</p>
            <h1>Be found.<br />At the moment<br /><span>it matters.</span></h1>
            <p className={styles.lede}>Reach people searching for what your business does, and give them a clear reason to get in touch.</p>
            <p className={styles.intro}>I’m Tamron, your Google Ads partner in New Plymouth. I build and manage Search campaigns for small businesses across New Zealand, with clear budgets and practical reporting.</p>
            <a href="#pricing" className={styles.button}>See setup &amp; management pricing <ArrowRight weight="bold" aria-hidden="true" /></a>
            <Link className={styles.secondary} href="/contact">Talk through your goals <ArrowRight aria-hidden="true" /></Link>
          </div>
          <figure className={styles.heroFigure}>
            <div className={styles.heroImage}><Image src={portrait} alt="Tamron working at his desk" fill preload sizes="(max-width: 800px) 100vw, 48vw" /></div>
            <figcaption>Work directly with Tamron.<br /><span>Strategy, campaigns and a real person to talk to.</span></figcaption>
          </figure>
        </section>

        <section className={styles.benefits} id="how-it-works" aria-labelledby="approach-title">
          <div><p className={styles.eyebrow}>From search to enquiry</p><h2 id="approach-title">Give the right<br />click a purpose.</h2><p>Google Search ads can put your business in front of people actively looking for your services. The work is in choosing the right searches and making the next step easy.</p></div>
          <div className={styles.benefitList}>
            <article><h3>Start with your customers</h3><p>We agree which services, locations and enquiries matter most. Keyword research shapes a focused campaign around that demand.</p></article>
            <article><h3>Connect the ad to the website</h3><p>Clear ad copy leads to a relevant page, with a straightforward way to call or enquire. I flag website issues that could waste your advertising budget.</p></article>
            <article><h3>Measure what happens next</h3><p>Conversion tracking records agreed actions such as enquiries. We review cost per enquiry alongside the quality of leads you actually receive.</p></article>
            <article><h3>Keep refining the campaign</h3><p>I review search terms, exclude irrelevant searches, test messaging and adjust bids and budgets as the campaign produces useful data.</p></article>
          </div>
        </section>

        <section className={styles.explainer} id="pricing" aria-labelledby="pricing-title">
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>Simple, separate fees</p><h2 id="pricing-title">A clear cost to get going.</h2><p>Starting prices for one small business, one target region and up to two Google Search campaigns, with monthly ad spend up to NZ$2,000. Larger or more complex accounts receive a tailored quote.</p></div>
          <div className={`${styles.scopeGrid} ${ads.pricing}`}>
            <article>
              <h3>Campaign setup</h3>
              <p className={ads.price}><span>From</span> $499</p>
              <p className={ads.frequency}>NZD + GST · one-off</p>
              <ul>{["Goals, keyword research and campaign plan", "Account configuration, location and budget settings", "Search ad copy, assets and negative keywords", "Standard enquiry tracking on your existing website", "Launch checks and campaign handover"].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </article>
            <article>
              <h3>Ongoing management</h3>
              <p className={ads.price}><span>From</span> $399</p>
              <p className={ads.frequency}>NZD + GST · per month</p>
              <ul>{["Weekly checks of performance and budget pacing", "Search-term reviews and irrelevant-search exclusions", "Bid, targeting and ad-copy improvements", "Conversion-tracking health checks", "Monthly performance report and review with you"].map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </article>
          </div>
          <div className={ads.budget}>
            <h3>Your Google ad budget is separate.</h3>
            <p>You pay Google directly for advertising. Setup and management are Lookin’s service fees; monthly management starts when ongoing campaign management begins.</p>
            <p><strong>Example:</strong> with NZ$1,000 in monthly ad spend, allow NZ$1,898 in the first month ($499 setup + $399 management + $1,000 ads), then NZ$1,399 per month. These figures are before GST; any applicable GST is additional.</p>
          </div>
          <p className={ads.exclusions}>Final scope and fees are agreed before work starts. New landing pages, ecommerce feeds, complex tracking and paid third-party tools are additional. Setup is also available on its own.</p>
          <Link href="/contact" className={styles.button}>Get a Google Ads proposal <ArrowRight weight="bold" aria-hidden="true" /></Link>
        </section>

        <section className={styles.benefits} aria-labelledby="experience-title">
          <div><p className={styles.eyebrow}>The bigger picture</p><h2 id="experience-title">Your ads and website.<br />Working together.</h2></div>
          <div className={styles.benefitList}>
            <article><h3>Experience beyond the ad account</h3><p>My work for The White Swan Country Hotel connects its website, photography, Google Ads and reporting. That wider view helps identify what visitors need after they click.</p><Link className={styles.textLink} href="/work/the-white-swan">Explore The White Swan work <ArrowRight aria-hidden="true" /></Link></article>
            <article><h3>Looking for Google Hotel Ads?</h3><p>Hotel Ads use room rates, availability and booking links. They’re a separate service from the Search campaigns priced here.</p><Link className={styles.textLink} href="/google-hotel-ads">Explore Google Hotel Ads <ArrowRight aria-hidden="true" /></Link></article>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <div><p className={styles.eyebrow}>Before we start</p><h2 id="faq-title">Useful answers.</h2><p>A sensible campaign starts with a clear offer, an agreed budget and realistic expectations.</p></div>
          <div>{faqs.map(({ q, a }) => <details key={q}><summary>{q}<Plus aria-hidden="true" /></summary><p>{a}</p></details>)}</div>
        </section>

        <section className={styles.contact} aria-labelledby="contact-title">
          <p className={styles.eyebrow}>Let’s find your next opportunity</p><h2 id="contact-title">What would a good<br />enquiry look like?</h2>
          <p>Tell me about your business, the services you want to promote and where your customers are. We’ll work out whether Google Ads makes sense and what a useful starting campaign could cost.</p>
          <Link href="/contact" className={styles.button}>Talk to Tamron <ArrowRight weight="bold" aria-hidden="true" /></Link>
          <a className={styles.secondary} href="mailto:hello@lookin.nz?subject=Google%20Ads%20enquiry">hello@lookin.nz</a>
        </section>
      </main>
      <footer className={styles.footer}><Link href="/" className={styles.wordmark} aria-label="Lookin home">look<span>in</span><i>.</i></Link><a href="tel:+64273447853">027 344 7853</a><small>© {new Date().getFullYear()} Lookin. <Link href="/privacy">Privacy statement</Link></small></footer>
    </div>
  );
}
