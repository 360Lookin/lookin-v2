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
  Browser,
  Camera,
  ChartLineUp,
  DeviceMobile,
  Minus,
  Monitor,
  Plus,
  SquaresFour,
} from "@phosphor-icons/react";
import styles from "./WhiteSwanCaseStudy.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BOOKING_URL = "https://calendar.app.google/R1LZCQ1HcVA2joeG7";

type DemoMode = "rooms" | "functions";

type AccordionItem = {
  title: string;
  image: string;
  alt: string;
  description: string;
  detail: string;
  cta: string;
  href: string;
};

const demoContent: Record<DemoMode, AccordionItem[]> = {
  rooms: [
    {
      title: "Homestead Suite",
      image: "/assets/case-studies/white-swan/homestead-suite.webp",
      alt: "Homestead Suite interior at The White Swan Country Hotel",
      description:
        "A character-rich suite that balances the atmosphere of a Wairarapa homestead with modern comfort.",
      detail:
        "The content, gallery and booking action stay connected in one focused panel, helping guests make a confident choice without leaving the page.",
      cta: "View rooms page",
      href: "https://thewhiteswanhotel.co.nz/rooms-suites",
    },
    {
      title: "Governors Suite",
      image: "/assets/case-studies/white-swan/governors-suite.webp",
      alt: "Governors Suite living area at The White Swan Country Hotel",
      description:
        "A spacious suite presented with the photography and practical information guests need to compare their options.",
      detail:
        "On smaller screens the image, description and booking action form a comfortable vertical reading sequence with no horizontal overflow.",
      cta: "View rooms page",
      href: "https://thewhiteswanhotel.co.nz/rooms-suites",
    },
  ],
  functions: [
    {
      title: "The Captain's Room",
      image: "/assets/case-studies/white-swan/captains-room.webp",
      alt: "The Captain's Room arranged for a function at The White Swan",
      description:
        "An intimate event space presented with visual context, capacity guidance and a direct path to more information.",
      detail:
        "The same responsive component accepts a different content hierarchy without losing the interaction pattern guests already understand.",
      cta: "View functions page",
      href: "https://thewhiteswanhotel.co.nz/functions-conferences",
    },
    {
      title: "Garden Bar",
      image: "/assets/case-studies/white-swan/garden-bar.webp",
      alt: "Guests enjoying the Garden Bar at The White Swan",
      description:
        "A lively outdoor venue made easy to assess through one image-led, expandable content panel.",
      detail:
        "Capacity and enquiry details remain readable at mobile size, while the photography retains enough space to communicate the atmosphere.",
      cta: "View functions page",
      href: "https://thewhiteswanhotel.co.nz/functions-conferences",
    },
  ],
};

const sampleMetrics = [
  { label: "Website visits", value: "14.8k", change: "+16%" },
  { label: "Engagement", value: "72%", change: "+9%" },
  { label: "Enquiries", value: "236", change: "+27%" },
  { label: "Ad clicks", value: "740", change: "+14%" },
];

const sampleTrend = [34, 46, 42, 58, 53, 69, 64, 78, 74, 88, 82, 94];

function ResponsiveDemo() {
  const shellRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const widthRef = useRef<HTMLSpanElement>(null);
  const [mode, setMode] = useState<DemoMode>("rooms");
  const [activeIndex, setActiveIndex] = useState(0);
  const items = demoContent[mode];

  const setDemoWidth = (width: number) => {
    shellRef.current?.style.setProperty("--demo-width", `${width}px`);
    if (rangeRef.current) rangeRef.current.value = String(width);
    if (widthRef.current) widthRef.current.textContent = `${width}px`;
  };

  const changeMode = (nextMode: DemoMode) => {
    setMode(nextMode);
    setActiveIndex(0);
  };

  return (
    <div className={styles.demoStage}>
      <div className={styles.demoToolbar}>
        <div className={styles.demoModes} aria-label="Choose example content">
          <button
            type="button"
            aria-pressed={mode === "rooms"}
            onClick={() => changeMode("rooms")}
          >
            Rooms and suites
          </button>
          <button
            type="button"
            aria-pressed={mode === "functions"}
            onClick={() => changeMode("functions")}
          >
            Functions and conferences
          </button>
        </div>
        <div className={styles.viewportControls}>
          <button type="button" onClick={() => setDemoWidth(960)}>
            <Monitor weight="regular" aria-hidden="true" /> Desktop
          </button>
          <label>
            <span className={styles.srOnly}>Preview width</span>
            <input
              ref={rangeRef}
              type="range"
              min="390"
              max="960"
              defaultValue="960"
              onInput={(event) => setDemoWidth(Number(event.currentTarget.value))}
            />
          </label>
          <button type="button" onClick={() => setDemoWidth(390)}>
            <DeviceMobile weight="regular" aria-hidden="true" /> Mobile
          </button>
        </div>
      </div>

      <div ref={shellRef} className={styles.demoShell}>
        <div className={styles.demoBrowserBar}>
          <Browser weight="regular" aria-hidden="true" />
          <span>thewhiteswanhotel.co.nz</span>
          <span ref={widthRef} className={styles.widthReadout}>960px</span>
        </div>
        <div className={styles.demoViewport}>
          <p className={styles.demoIntro}>
            {mode === "rooms" ? "Explore our accommodation" : "Find the right space"}
          </p>
          <div className={styles.demoAccordion}>
            {items.map((item, index) => {
              const isOpen = activeIndex === index;
              const panelId = `${mode}-panel-${index}`;
              return (
                <article className={styles.demoItem} key={item.title}>
                  <button
                    className={styles.demoHeader}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.title}</span>
                    {isOpen ? <Minus weight="bold" /> : <Plus weight="bold" />}
                  </button>
                  {isOpen && (
                    <div className={styles.demoPanel} id={panelId}>
                      <div className={styles.demoImage}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 700px) 86vw, 430px"
                        />
                      </div>
                      <div className={styles.demoCopy}>
                        <p>{item.description}</p>
                        <p>{item.detail}</p>
                        <a href={item.href} target="_blank" rel="noreferrer">
                          {item.cta} <ArrowUpRight weight="bold" />
                        </a>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhiteSwanCaseStudy() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("[data-case-hero]", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>("[data-case-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 44,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <main ref={rootRef} className={styles.page}>
      <a className={styles.skipLink} href="#case-content">Skip to case study</a>

      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="Lookin home">
          look<span>in</span><i>.</i>
        </Link>
        <nav aria-label="Case study navigation">
          <Link href="/#work"><ArrowLeft weight="bold" /> Back to work</Link>
          <a
            className={styles.headerCta}
            href="https://thewhiteswanhotel.co.nz/rooms-suites"
            target="_blank"
            rel="noreferrer"
          >
            Visit live project <ArrowUpRight weight="bold" />
          </a>
        </nav>
      </header>

      <div id="case-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow} data-case-hero>The White Swan / Experience Collective</p>
            <h1 data-case-hero>Complex content. Clear choices.</h1>
            <p className={styles.heroLede} data-case-hero>
              A responsive hospitality content system designed and coded for accommodation, functions and conferences.
            </p>
            <div className={styles.heroActions} data-case-hero>
              <a className={styles.primaryButton} href="#responsive-demo">
                Try the responsive component <ArrowRight weight="bold" />
              </a>
              <a
                className={styles.textLink}
                href="https://thewhiteswanhotel.co.nz/functions-conferences"
                target="_blank"
                rel="noreferrer"
              >
                View functions page <ArrowUpRight />
              </a>
            </div>
          </div>
          <figure className={styles.heroVisual} data-case-hero>
            <div>
              <Image
                src="/assets/illustrations/white-swan-connected-digital-illustration.webp"
                alt="Concept illustration representing The White Swan website, advertising and reporting work"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
            <figcaption>Connected website, advertising, content and reporting work</figcaption>
          </figure>
        </section>

        <div className={styles.projectFacts} data-case-reveal>
          <div><span>Client</span><strong>The White Swan Country Hotel</strong></div>
          <div><span>My contribution</span><strong>UX, responsive design and front-end code</strong></div>
          <div><span>Core deliverable</span><strong>Reusable accordion content system</strong></div>
        </div>

        <section className={styles.challenge} data-case-reveal>
          <div>
            <h2>More choice should not mean more friction.</h2>
          </div>
          <div>
            <p>
              The hotel needed to present richly detailed rooms and event spaces without turning either page into a repetitive wall of content.
            </p>
            <p>
              I built one expandable system that keeps comparison simple, gives photography room to work and keeps the next action close to the decision.
            </p>
          </div>
        </section>

        <section className={styles.demoSection} id="responsive-demo">
          <div className={styles.sectionHeading} data-case-reveal>
            <p className={styles.eyebrow}>Responsive by design</p>
            <h2>Built to reflow, not merely shrink.</h2>
            <p>Switch the content, drag the width or choose a device size to test the component.</p>
          </div>
          <div data-case-reveal>
            <ResponsiveDemo />
          </div>
        </section>

        <section className={styles.anatomy}>
          <div className={styles.anatomyHeading} data-case-reveal>
            <h2>The component earns its place.</h2>
            <p>Every interaction helps visitors understand an option or move closer to booking and enquiry.</p>
          </div>
          <div className={styles.proofList} data-case-reveal>
            <article><span>01</span><h3>Single-open focus</h3><p>One expanded panel keeps the comparison clear and the page length under control.</p></article>
            <article><span>02</span><h3>Image-led decisions</h3><p>Photography stays connected to the description instead of becoming a separate gallery.</p></article>
            <article><span>03</span><h3>True mobile reflow</h3><p>The desktop columns become a natural vertical reading order with comfortable touch targets.</p></article>
            <article><span>04</span><h3>Accessible state</h3><p>Expanded state and panel relationships are communicated explicitly for assistive technology.</p></article>
          </div>
        </section>

        <section className={styles.reuseSection}>
          <div className={styles.reuseHeading} data-case-reveal>
            <h2>One component. Two customer journeys.</h2>
            <p>The system adapts to different content without asking visitors to learn a new interaction.</p>
          </div>
          <div className={styles.journeyGrid}>
            <article data-case-reveal>
              <div className={styles.journeyImage}>
                <Image
                  src="/assets/case-studies/white-swan/homestead-suite.webp"
                  alt="Homestead Suite accommodation presented on The White Swan website"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3>Rooms and suites</h3>
                <p>Guests can compare distinct accommodation options, explore imagery and move directly towards booking.</p>
                <a href="https://thewhiteswanhotel.co.nz/rooms-suites" target="_blank" rel="noreferrer">
                  Open live page <ArrowUpRight weight="bold" />
                </a>
              </div>
            </article>
            <article data-case-reveal>
              <div className={styles.journeyImage}>
                <Image
                  src="/assets/case-studies/white-swan/captains-room.webp"
                  alt="The Captain's Room configured for an event at The White Swan"
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
              <div>
                <h3>Functions and conferences</h3>
                <p>Organisers can assess atmosphere, capacity and practical details before continuing to rates or enquiry.</p>
                <a href="https://thewhiteswanhotel.co.nz/functions-conferences" target="_blank" rel="noreferrer">
                  Open live page <ArrowUpRight weight="bold" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.systemSection}>
          <div className={styles.systemHeading} data-case-reveal>
            <p className={styles.eyebrow}>The wider digital system</p>
            <h2>The website was one connected part of the work.</h2>
            <p>My support extended across customer acquisition, content and reporting.</p>
          </div>
          <div className={styles.systemGrid} data-case-reveal>
            <article><Browser weight="regular" /><h3>Website</h3><p>Responsive content architecture and practical customer journeys.</p></article>
            <article><ChartLineUp weight="regular" /><h3>Google Ads</h3><p>Campaign support aligned with the hospitality offer.</p></article>
            <article><SquaresFour weight="regular" /><h3>Reporting</h3><p>A comprehensive Looker Studio dashboard for clearer oversight.</p></article>
            <article><Camera weight="regular" /><h3>Content</h3><p>Photography and immersive media that help guests understand the experience.</p></article>
          </div>
        </section>

        <section className={styles.reportingSection}>
          <div className={styles.reportingIntro} data-case-reveal>
            <h2>Proof without inflated claims.</h2>
            <p>
              Reporting brings website, search, enquiries and advertising into one view, then turns the patterns into practical next actions.
            </p>
            <p>
              This privacy-safe preview recreates the reporting approach with illustrative values. It does not reproduce The White Swan&apos;s client data.
            </p>
          </div>

          <div
            className={styles.dashboardMock}
            data-case-reveal
            aria-label="Illustrative performance dashboard using sample data"
          >
            <div className={styles.dashboardHeader}>
              <div>
                <strong>Lookin performance overview</strong>
                <span>Website, search, enquiries and advertising</span>
              </div>
              <span>Illustrative sample data</span>
            </div>

            <div className={styles.metricGrid}>
              {sampleMetrics.map((metric) => (
                <article key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <small>{metric.change} from previous period</small>
                </article>
              ))}
            </div>

            <div className={styles.dashboardBody}>
              <div className={styles.trendPanel}>
                <div className={styles.panelHeading}>
                  <div><strong>Website and search trend</strong><span>Sample reporting period</span></div>
                  <ChartLineUp weight="regular" aria-hidden="true" />
                </div>
                <div
                  className={styles.mockChart}
                  role="img"
                  aria-label="Illustrative upward website and search performance trend"
                >
                  {sampleTrend.map((value, index) => (
                    <i key={`${value}-${index}`} style={{ height: `${value}%` }} aria-hidden="true" />
                  ))}
                </div>
                <div className={styles.chartLegend}>
                  <span>Website</span><span>Organic search</span><span>Paid search</span>
                </div>
              </div>

              <div className={styles.actionsPanel}>
                <div className={styles.panelHeading}>
                  <div><strong>Recommended next actions</strong><span>Prioritised from the reporting</span></div>
                </div>
                <ol>
                  <li><span>High priority</span><strong>Improve the booking conversion path</strong></li>
                  <li><span>Content</span><strong>Refresh the seasonal campaign offer</strong></li>
                  <li><span>Optimisation</span><strong>Strengthen key landing-page calls to action</strong></li>
                </ol>
              </div>
            </div>

            <p className={styles.dashboardNote}>Sample values shown for presentation only. No client performance data is displayed.</p>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div data-case-reveal>
            <h2>Need complex content to feel simple?</h2>
            <p>Let us look at what your customers need to understand and build the clearest path through it.</p>
            <a className={styles.primaryButton} href={BOOKING_URL}>
              Book a free session <ArrowRight weight="bold" />
            </a>
          </div>
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
