"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  DeviceMobile,
  ForkKnife,
  MapPin,
  Phone,
  ShoppingBag,
} from "@phosphor-icons/react";
import styles from "./KahakaiCaseStudy.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BOOKING_URL = "https://calendar.app.google/R1LZCQ1HcVA2joeG7";

type JourneyStage = "discover" | "choose" | "order";

const journeyContent: Record<JourneyStage, { label: string; title: string; summary: string }> = {
  discover: {
    label: "01 · Discover",
    title: "The offer lands quickly.",
    summary: "The opening screen explains the food, confirms dietary options and keeps three useful actions within reach.",
  },
  choose: {
    label: "02 · Choose",
    title: "A large menu feels simple.",
    summary: "The menu begins with a four-step bowl builder, then uses clear food photography and concise details to support choice.",
  },
  order: {
    label: "03 · Order",
    title: "The next action is obvious.",
    summary: "Customers can order delivery, call for pickup or get directions without hunting through the site.",
  },
};

const foodItems = [
  { name: "Katsu glazed chicken", image: "/assets/case-studies/kahakai/katsu-chicken-bowl.webp", alt: "Katsu glazed chicken poke bowl from Kahakai Poké Bowls", tags: ["GF", "DF"] },
  { name: "Marinated fresh salmon", image: "/assets/case-studies/kahakai/fresh-salmon-bowl.webp", alt: "Marinated fresh salmon poke bowl from Kahakai Poké Bowls", tags: ["GF", "DF"] },
  { name: "Lemongrass pulled beef", image: "/assets/case-studies/kahakai/pulled-beef-bowl.webp", alt: "Lemongrass pulled beef poke bowl from Kahakai Poké Bowls", tags: ["GF"] },
  { name: "Fresh creamy ceviche", image: "/assets/case-studies/kahakai/creamy-ceviche-bowl.webp", alt: "Fresh creamy ceviche poke bowl from Kahakai Poké Bowls", tags: ["GF"] },
];

function JourneyPreview() {
  const [stage, setStage] = useState<JourneyStage>("discover");
  const content = journeyContent[stage];

  return (
    <div className={styles.journeyDemo}>
      <div className={styles.journeyTabs} aria-label="Customer journey stages">
        {(Object.keys(journeyContent) as JourneyStage[]).map((key) => (
          <button type="button" key={key} aria-pressed={stage === key} onClick={() => setStage(key)}>
            {journeyContent[key].label}
          </button>
        ))}
      </div>

      <div className={styles.journeyCanvas}>
        <div className={styles.journeyCopy}>
          <span>{content.label}</span>
          <h3>{content.title}</h3>
          <p>{content.summary}</p>
        </div>

        <div className={styles.phone} aria-live="polite">
          <div className={styles.phoneBar}><i /><span>kahakaipokebowl.com</span></div>
          {stage === "discover" && (
            <div className={styles.discoverScreen}>
              <small>Kahakai Poké Bowls</small>
              <h4>Fresh Hawaiian style poke, made to order.</h4>
              <p>Gluten-free, dairy-free and plant-based choices.</p>
              <div className={styles.phoneActions}><strong>Order now</strong><span>Call for pickup</span><span>View menu</span></div>
              <div className={styles.dietaryRow}>
                <span><CheckCircle weight="fill" /> Gluten-free</span>
                <span><CheckCircle weight="fill" /> Dairy-free</span>
              </div>
            </div>
          )}
          {stage === "choose" && (
            <div className={styles.chooseScreen}>
              <small>Build your own bowl</small>
              <ol>
                <li><b>1</b><span>Pick your poke</span></li>
                <li><b>2</b><span>Choose your base</span></li>
                <li><b>3</b><span>Select your style</span></li>
                <li><b>4</b><span>Add extras</span></li>
              </ol>
              <div className={styles.miniFoodGrid}>
                {foodItems.slice(0, 2).map((item) => (
                  <div key={item.name}>
                    <Image src={item.image} alt="" fill sizes="110px" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {stage === "order" && (
            <div className={styles.orderScreen}>
              <small>Ready when you are</small>
              <h4>Choose the quickest path.</h4>
              <a href="https://www.kahakaipokebowl.com/" target="_blank" rel="noreferrer"><ShoppingBag /><span><b>Order online</b>Delivery through Uber Eats</span><ArrowUpRight /></a>
              <a href="tel:+64274159357"><Phone /><span><b>Call for pickup</b>Order directly by phone</span><ArrowUpRight /></a>
              <a href="https://www.kahakaipokebowl.com/home#find-us" target="_blank" rel="noreferrer"><MapPin /><span><b>Find the food truck</b>Hours, map and directions</span><ArrowUpRight /></a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function KahakaiCaseStudy() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-kahakai-hero]", { y: 30, opacity: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" });
    gsap.utils.toArray<HTMLElement>("[data-kahakai-reveal]").forEach((element) => {
      gsap.from(element, { y: 44, opacity: 0, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
    });
  }, { scope: rootRef });

  return (
    <main ref={rootRef} className={styles.page}>
      <a className={styles.skipLink} href="#case-content">Skip to case study</a>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="Lookin home">look<span>in</span><i>.</i></Link>
        <nav aria-label="Case study navigation">
          <Link href="/#work"><ArrowLeft weight="bold" /> Back to work</Link>
          <a className={styles.headerCta} href="https://www.kahakaipokebowl.com/" target="_blank" rel="noreferrer">Visit live project <ArrowUpRight weight="bold" /></a>
        </nav>
      </header>

      <div id="case-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow} data-kahakai-hero>Kahakai Poké Bowls</p>
            <h1 data-kahakai-hero>Fresh food. Fewer taps.</h1>
            <p className={styles.heroLede} data-kahakai-hero>A mobile-first food-truck website that moves customers from discovery to menu choice, pickup and delivery.</p>
            <div className={styles.heroActions} data-kahakai-hero>
              <a className={styles.primaryButton} href="#mobile-journey">Explore the customer journey <ArrowRight weight="bold" /></a>
              <a className={styles.textLink} href="https://www.kahakaipokebowl.com/menu" target="_blank" rel="noreferrer">View live menu <ArrowUpRight /></a>
            </div>
          </div>
          <figure className={styles.heroVisual} data-kahakai-hero>
            <div><Image src="/assets/illustrations/kahakai-mobile-site-illustration.webp" alt="Concept illustration of a responsive mobile food-truck website and ordering journey" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div>
            <figcaption>Concept illustration · approved project photography shown below</figcaption>
          </figure>
        </section>

        <div className={styles.projectFacts} data-kahakai-reveal>
          <div><span>Client</span><strong>Kahakai Poké Bowls</strong></div>
          <div><span>Contribution</span><strong>Responsive website and mobile customer journey</strong></div>
          <div><span>Core focus</span><strong>Menu discovery, ordering and local findability</strong></div>
        </div>

        <section className={styles.challenge} data-kahakai-reveal>
          <h2>A hungry customer should not have to hunt.</h2>
          <div>
            <p>A food-truck website has only a few seconds to answer what is available, whether it suits the customer and how to order.</p>
            <p>The experience brings those answers forward, then gives a large menu a clear structure that works just as comfortably on a phone.</p>
          </div>
        </section>

        <section className={styles.journeySection} id="mobile-journey">
          <div className={styles.sectionHeading} data-kahakai-reveal>
            <p className={styles.eyebrow}>Mobile conversion flow</p>
            <h2>From craving to action in three clear moves.</h2>
            <p>Use the controls to see how the page supports discovery, choice and ordering.</p>
          </div>
          <div data-kahakai-reveal><JourneyPreview /></div>
        </section>

        <section className={styles.builderSection}>
          <div className={styles.builderIntro} data-kahakai-reveal>
            <span>Four useful decisions</span>
            <h2>The menu teaches customers how to build a bowl.</h2>
            <p>Instead of dropping visitors into a long product grid, the page first explains the sequence behind every custom order.</p>
          </div>
          <ol className={styles.builderSteps} data-kahakai-reveal>
            <li><span>01</span><strong>Pick your poke</strong><p>Start with the main flavour and protein.</p></li>
            <li><span>02</span><strong>Choose your base</strong><p>Make the bowl suit appetite and preference.</p></li>
            <li><span>03</span><strong>Select your style</strong><p>Clarify the finishing flavour combination.</p></li>
            <li><span>04</span><strong>Add extras</strong><p>Complete the order without adding clutter.</p></li>
          </ol>
        </section>

        <section className={styles.menuSection}>
          <div className={styles.menuHeading} data-kahakai-reveal>
            <h2>Photography does the selling. Structure does the guiding.</h2>
            <p>Consistent imagery, short descriptions and visible dietary markers make the range easy to scan at any screen size.</p>
          </div>
          <div className={styles.foodGrid}>
            {foodItems.map((item, index) => (
              <article key={item.name} data-kahakai-reveal>
                <div className={styles.foodImage}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 25vw" /></div>
                <span>0{index + 1}</span><h3>{item.name}</h3>
                <div>{item.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.localSection}>
          <div className={styles.localImage} data-kahakai-reveal><Image src="/assets/case-studies/kahakai/food-truck-story.webp" alt="Kahakai Poké Bowls food truck and outdoor seating in New Plymouth" fill sizes="(max-width: 800px) 100vw, 58vw" /></div>
          <div className={styles.localCopy} data-kahakai-reveal>
            <MapPin aria-hidden="true" /><h2>Digital discovery leads to a real place.</h2>
            <p>Hours, contact details, the map and directions sit together so local intent can become a visit without another search.</p>
            <a href="https://www.kahakaipokebowl.com/home#find-us" target="_blank" rel="noreferrer">See the live location page <ArrowUpRight weight="bold" /></a>
          </div>
        </section>

        <section className={styles.proofSection}>
          <div data-kahakai-reveal><DeviceMobile /><h3>Responsive throughout</h3><p>The menu resolves to a comfortable single column with no horizontal overflow and generous touch targets.</p></div>
          <div data-kahakai-reveal><ForkKnife /><h3>Choice without overload</h3><p>Category headings, dietary markers and the bowl-building sequence turn a broad menu into manageable decisions.</p></div>
          <div data-kahakai-reveal><ShoppingBag /><h3>Actions close to intent</h3><p>Menu, pickup, delivery and directions stay available at the moments customers are ready to use them.</p></div>
        </section>

        <section className={styles.finalCta}>
          <div data-kahakai-reveal><h2>Need your website to turn interest into action?</h2><p>Let us map the decisions your customers need to make and build the shortest useful path through them.</p><a className={styles.primaryButton} href={BOOKING_URL}>Book a free session <ArrowRight weight="bold" /></a></div>
        </section>
      </div>

      <footer className={styles.footer}>
        <Link href="/" className={styles.wordmark}>look<span>in</span><i>.</i></Link>
        <p>Websites, content and practical digital growth from New Plymouth.</p>
        <Link href="/#work">More selected work <ArrowRight /></Link>
        <small>© {new Date().getFullYear()} Lookin. All rights reserved.</small>
      </footer>
    </main>
  );
}
