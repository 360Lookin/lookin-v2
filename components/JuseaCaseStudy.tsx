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
  Coffee,
  DeviceMobile,
  Minus,
  Plus,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import styles from "./JuseaCaseStudy.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BOOKING_URL = "https://calendar.app.google/R1LZCQ1HcVA2joeG7";

const drinks = [
  {
    name: "Orange",
    image: "/assets/case-studies/jusea/orange-juice.webp",
    description: "Experience the vibrant, zesty taste of sun-ripened oranges, squeezed fresh in-house for the purest, most refreshing glass of juice.",
    price: 8,
  },
  {
    name: "Booster",
    image: "/assets/case-studies/jusea/booster.webp",
    description: "A vibrant and wholesome blend of sweet red apple, tropical pineapple, and earthy carrot. Cold-pressed in-house to create a pure, revitalising, and nutrient-rich juice.",
    price: 7,
  },
  {
    name: "Beetox",
    image: "/assets/case-studies/jusea/beetox.webp",
    description: "A bold and earthy blend of rich beetroot and sweet carrot, brightened by tangy pomegranate and perfectly balanced by the crisp, tart finish of fresh green apple. Cold-pressed to capture its deeply restorative flavour.",
    price: 8,
  },
];

type Drink = (typeof drinks)[number];

function OrderPreview({ product }: { product: Drink }) {
  const [service, setService] = useState("Takeaway");
  const [size, setSize] = useState("12oz");
  const [quantity, setQuantity] = useState(1);
  const total = quantity * (product.price + (size === "16oz" ? 2 : 0));

  const resetPreview = () => {
    setService("Takeaway");
    setSize("12oz");
    setQuantity(1);
  };

  return (
    <div className={styles.orderDemo}>
      <form className={styles.orderDialog} onSubmit={(event) => event.preventDefault()}>
        <button className={styles.dialogClose} type="button" onClick={resetPreview} aria-label="Reset product choices">
          <X weight="bold" aria-hidden="true" />
        </button>

        <div className={styles.orderImage}>
          <Image src={product.image} alt={`${product.name} juice available from JuSea`} fill sizes="(max-width: 520px) 92vw, 448px" />
        </div>

        <div className={styles.orderContent}>
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>

          <fieldset>
            <legend className={styles.srOnly}>Dining choice</legend>
            <div className={styles.choiceGrid}>
              {["Takeaway", "Have here"].map((option) => (
                <label key={option} className={service === option ? styles.selectedChoice : ""}>
                  <input type="radio" name="service" value={option} checked={service === option} onChange={() => setService(option)} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Size</legend>
            <div className={styles.choiceGrid}>
              {["12oz", "16oz"].map((option) => (
                <label key={option} className={size === option ? styles.selectedChoice : ""}>
                  <input type="radio" name="size" value={option} checked={size === option} onChange={() => setSize(option)} />
                  <span>{option}</span>
                  {option === "16oz" && <small>+ $2.00</small>}
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.quantityRow}>
            <span>Quantity</span>
            <div>
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus weight="bold" /></button>
              <strong aria-live="polite">{quantity}</strong>
              <button type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus weight="bold" /></button>
            </div>
          </div>
        </div>

        <div className={styles.orderFooter}>
          <button type="submit" className={styles.addButton}>Add {quantity} to Cart - ${total.toFixed(2)}</button>
        </div>
      </form>
      <p className={styles.demoNote}>Interactive portfolio demonstration. No order is placed.</p>
    </div>
  );
}

export default function JuseaCaseStudy() {
  const rootRef = useRef<HTMLElement>(null);
  const [selectedDrink, setSelectedDrink] = useState<Drink>(drinks[0]);

  const openProductPreview = (drink: Drink) => {
    setSelectedDrink(drink);
    document.getElementById("ordering-flow")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-jusea-hero]", { y: 30, opacity: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" });
    gsap.utils.toArray<HTMLElement>("[data-jusea-reveal]").forEach((element) => {
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
          <a className={styles.headerCta} href="https://jusea.co.nz/" target="_blank" rel="noreferrer">Visit live project <ArrowUpRight weight="bold" /></a>
        </nav>
      </header>

      <div id="case-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow} data-jusea-hero>JuSea · New Plymouth</p>
            <h1 data-jusea-hero>Choose it. Customise it. Collect it.</h1>
            <p className={styles.heroLede} data-jusea-hero>A complete ordering and loyalty website designed and developed from the ground up for a local juice bar.</p>
            <div className={styles.heroActions} data-jusea-hero>
              <a className={styles.primaryButton} href="#ordering-flow">Try the ordering flow <ArrowRight weight="bold" /></a>
              <a className={styles.textLink} href="https://jusea.co.nz/" target="_blank" rel="noreferrer">View live website <ArrowUpRight /></a>
            </div>
          </div>
          <figure className={styles.heroVisual} data-jusea-hero>
            <div><Image src="/assets/case-studies/jusea/jusea-hero.webp" alt="Customers gathered beside the JuSea juice bar at Liardet Street Projects" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div>
            <figcaption>Brand, product discovery, online ordering and loyalty in one experience</figcaption>
          </figure>
        </section>

        <div className={styles.projectFacts} data-jusea-reveal>
          <div><span>Client</span><strong>JuSea</strong></div>
          <div><span>Contribution</span><strong>End-to-end website design and development</strong></div>
          <div><span>Core deliverable</span><strong>Responsive ordering, accounts and loyalty experience</strong></div>
        </div>

        <section className={styles.challenge} data-jusea-reveal>
          <div>
            <p className={styles.eyebrow}>The design problem</p>
            <h2>A varied drinks menu needed one clear buying journey.</h2>
          </div>
          <div>
            <p>Juices, smoothies and barista drinks each bring different choices. The website had to make those options easy to understand without slowing down a customer who was ready to order.</p>
            <p>I designed and developed the complete experience, connecting the brand story, product menu, custom options, cart, customer accounts and loyalty programme.</p>
          </div>
        </section>

        <section className={styles.orderSection} id="ordering-flow">
          <div className={styles.sectionHeading} data-jusea-reveal>
            <p className={styles.eyebrow}>Ordering interaction</p>
            <h2>Useful choices appear exactly when they are needed.</h2>
            <p>This working demonstration recreates the decision pattern used on the live website.</p>
          </div>
          <div data-jusea-reveal><OrderPreview key={selectedDrink.name} product={selectedDrink} /></div>
        </section>

        <section className={styles.journeySection}>
          <div className={styles.journeyIntro} data-jusea-reveal>
            <p className={styles.eyebrow}>One connected system</p>
            <h2>From first sip to the next visit.</h2>
          </div>
          <ol className={styles.journeyGrid}>
            <li data-jusea-reveal><span>01</span><strong>Browse</strong><p>Products are grouped into recognisable drink categories with strong imagery.</p></li>
            <li data-jusea-reveal><span>02</span><strong>Customise</strong><p>Service, size and quantity choices stay close to the selected product.</p></li>
            <li data-jusea-reveal><span>03</span><strong>Collect</strong><p>The cart turns product decisions into a straightforward local pickup order.</p></li>
            <li data-jusea-reveal><span>04</span><strong>Return</strong><p>Customer accounts and loyalty rewards give repeat visitors a reason to sign in.</p></li>
          </ol>
        </section>

        <section className={styles.productSection}>
          <div className={styles.productCopy} data-jusea-reveal>
            <p className={styles.eyebrow}>Product-led design</p>
            <h2>The drinks do the talking.</h2>
            <p>Generous imagery and restrained interface styling keep the range appetising, while consistent product cards make it easy to compare and choose.</p>
          </div>
          <h3 className={styles.productCategoryTitle} data-jusea-reveal>Juices</h3>
          <div className={styles.productRail}>
            {drinks.map((drink) => (
              <article key={drink.name} data-jusea-reveal>
                <div><Image src={drink.image} alt={`${drink.name} drink from JuSea`} fill sizes="(max-width: 760px) 82vw, 28vw" /></div>
                <div className={styles.productCardBody}>
                  <h3>{drink.name}</h3>
                  <p>{drink.description}</p>
                  <div className={styles.productCardFooter}>
                    <strong>${drink.price.toFixed(2)}</strong>
                    <button type="button" onClick={() => openProductPreview(drink)} aria-label={`View options for ${drink.name}`}>Options</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.systemSection}>
          <div data-jusea-reveal><DeviceMobile weight="regular" /><h3>Responsive by design</h3><p>The complete journey adapts from large product browsing to comfortable one-handed ordering.</p></div>
          <div data-jusea-reveal><UserCircle weight="regular" /><h3>Accounts with a purpose</h3><p>Registration supports customer recognition and creates a home for repeat-purchase benefits.</p></div>
          <div data-jusea-reveal><Coffee weight="regular" /><h3>Loyalty built in</h3><p>The digital experience connects everyday purchases with JuSea’s seventh-drink reward.</p></div>
        </section>

        <section className={styles.outcomeSection}>
          <div data-jusea-reveal>
            <p className={styles.eyebrow}>The outcome</p>
            <h2>A digital counter that stays open beyond the juice bar.</h2>
            <p>JuSea now has one coherent platform for telling its local story, presenting the menu, taking orders and encouraging customers to return. Every part was designed and developed as one system rather than a collection of disconnected tools.</p>
            <a href="https://jusea.co.nz/" target="_blank" rel="noreferrer">Explore the live JuSea website <ArrowUpRight weight="bold" /></a>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div data-jusea-reveal><h2>Need more than a good-looking website?</h2><p>Let us design the complete path from interest to action, with the functionality your business actually needs.</p><a className={styles.primaryButton} href={BOOKING_URL}>Book a free session <ArrowRight weight="bold" /></a></div>
        </section>
      </div>

      <footer className={styles.footer}>
        <Link href="/" className={styles.wordmark}>look<span>in</span><i>.</i></Link>
        <p>Websites, content and practical digital growth from New Plymouth.</p>
        <Link href="/#work">More selected work <ArrowRight /></Link>
        <small><Link href="/privacy">Privacy statement</Link> · © {new Date().getFullYear()} Lookin. All rights reserved.</small>
      </footer>
    </main>
  );
}
