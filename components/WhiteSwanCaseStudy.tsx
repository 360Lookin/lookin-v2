"use client";

import { useEffect, useRef, useState } from "react";
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
  CaretLeft,
  CaretRight,
  ChartLineUp,
  DeviceMobile,
  MagnifyingGlassPlus,
  Monitor,
  SquaresFour,
  X,
} from "@phosphor-icons/react";
import styles from "./WhiteSwanCaseStudy.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BOOKING_URL = "https://calendar.app.google/R1LZCQ1HcVA2joeG7";

type DemoMode = "rooms" | "functions";

type AccordionItem = {
  title: string;
  images: string[];
  alt: string;
  paragraphs: string[];
  cta: string;
  href: string;
};

const WHITE_SWAN_BOOKING_URL =
  "https://bookdirect.prenohq.com/inst/#home?propertyId=422IjFc1GMKHbkDkKA4qjq30URUwOTQ1MiI=&JDRN=Y";

const demoContent: Record<DemoMode, AccordionItem[]> = {
  rooms: [
    {
      title: "Homestead Suite",
      images: [
        "/assets/case-studies/white-swan/homestead-suite-01.webp",
        "/assets/case-studies/white-swan/homestead-suite-02.webp",
        "/assets/case-studies/white-swan/homestead-suite-03.webp",
        "/assets/case-studies/white-swan/homestead-suite-04.webp",
        "/assets/case-studies/white-swan/homestead-suite-05.webp",
      ],
      alt: "Homestead Suite interior at The White Swan Country Hotel",
      paragraphs: [
        "Ensconce yourself in what an original Wairarapa homestead suite may have felt like, layering in modern elements of comfort and style. This elegant room pays homage to the timeless beauty and grace of a homestead, with earthy warm neutrals and textures. A representation of life on the farm, new beginnings and greener pastures.",
        "Located upstairs within the hotel with a balcony overlooking Greytown. Amenities include free wi-fi, smart TV, tea and coffee, fridge, bath and shower, free onsite parking, plus the usual necessities such as a hair dryer, iron and ironing board. Each room includes hand wash, body wash, shampoo and conditioner.",
        "The Homestead Suite can also have an additional rollaway bed added for an additional charge.",
      ],
      cta: "Book your stay",
      href: WHITE_SWAN_BOOKING_URL,
    },
    {
      title: "Governors Suite",
      images: [
        "/assets/case-studies/white-swan/governors-suite-01.webp",
        "/assets/case-studies/white-swan/governors-suite-02.webp",
        "/assets/case-studies/white-swan/governors-suite-03.webp",
        "/assets/case-studies/white-swan/governors-suite-04.webp",
        "/assets/case-studies/white-swan/governors-suite-05.webp",
      ],
      alt: "Governors Suite living area at The White Swan Country Hotel",
      paragraphs: [
        "The Governors Suite is spacious enough to let you spread out and enjoy the moment or be used as a comfortable and practical meeting room, with a Super King bed in a separate room and a large dining table in the living area.",
        "Located upstairs within the hotel with a balcony overlooking Greytown's Main Street. Amenities include free wi-fi, smart TV, tea and coffee, fridge, bath and shower, free onsite parking, plus the usual necessities such as a hair dryer, iron and ironing board.",
        "The Governors Suite can also have an additional rollaway bed added for an additional charge.",
      ],
      cta: "Book your stay",
      href: WHITE_SWAN_BOOKING_URL,
    },
  ],
  functions: [
    {
      title: "The Captain's Room",
      images: ["/assets/case-studies/white-swan/captains-room.webp"],
      alt: "The Captain's Room arranged for a function at The White Swan",
      paragraphs: [
        "An intimate event space presented with visual context, capacity guidance and a direct path to more information.",
        "The same responsive component accepts a different content hierarchy without losing the interaction pattern guests already understand.",
      ],
      cta: "View functions page",
      href: "https://thewhiteswanhotel.co.nz/functions-conferences",
    },
    {
      title: "Garden Bar",
      images: ["/assets/case-studies/white-swan/garden-bar.webp"],
      alt: "Guests enjoying the Garden Bar at The White Swan",
      paragraphs: [
        "A lively outdoor venue made easy to assess through one image-led, expandable content panel.",
        "Capacity and enquiry details remain readable at mobile size, while the photography retains enough space to communicate the atmosphere.",
      ],
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

const verifiedMetrics = [
  {
    label: "Website sessions",
    value: "+74%",
    detail: "31,762 sessions across the reporting window",
  },
  {
    label: "Website accommodation bookings",
    value: "+26%",
    detail: "230 direct website bookings",
  },
  {
    label: "Website accommodation revenue",
    value: "+16%",
    detail: "Growth versus the comparison period",
  },
  {
    label: "Engagement rate",
    value: "+23.9%",
    detail: "Reaching 59.74% across the period",
  },
];

const sampleTrend = [34, 46, 42, 58, 53, 69, 64, 78, 74, 88, 82, 94];

function DemoAccordionItem({
  item,
  isOpen,
  panelId,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  panelId: string;
  onToggle: () => void;
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const imageCount = item.images.length;

  const changeSlide = (direction: number) => {
    setSlideIndex((current) => (current + direction + imageCount) % imageCount);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft" && imageCount > 1) {
        setSlideIndex((current) => (current - 1 + imageCount) % imageCount);
      }
      if (event.key === "ArrowRight" && imageCount > 1) {
        setSlideIndex((current) => (current + 1) % imageCount);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imageCount, lightboxOpen]);

  return (
    <article className={styles.demoItem} data-open={isOpen}>
      <button
        className={styles.demoHeader}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <h3>{item.title}</h3>
        <span className={styles.demoAccordionIcon} aria-hidden="true">+</span>
      </button>

      <div
        className={styles.demoContent}
        id={panelId}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className={styles.demoContentClip}>
          <div className={styles.demoPanel}>
            <div className={styles.demoSlider}>
              <div
                className={styles.demoSlides}
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {item.images.map((image, index) => (
                  <div className={styles.demoSlide} key={image}>
                    <Image
                      src={image}
                      alt={index === 0 ? item.alt : `${item.title} gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 700px) 86vw, 320px"
                    />
                  </div>
                ))}
              </div>

              {imageCount > 1 && (
                <>
                  <button
                    type="button"
                    className={`${styles.demoSliderButton} ${styles.demoPrevious}`}
                    aria-label={`Previous ${item.title} image`}
                    onClick={() => changeSlide(-1)}
                  >
                    <CaretLeft weight="bold" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className={`${styles.demoSliderButton} ${styles.demoNext}`}
                    aria-label={`Next ${item.title} image`}
                    onClick={() => changeSlide(1)}
                  >
                    <CaretRight weight="bold" aria-hidden="true" />
                  </button>
                </>
              )}

              <button
                type="button"
                className={styles.demoZoomButton}
                aria-label={`View ${item.title} image full screen`}
                onClick={() => setLightboxOpen(true)}
              >
                <MagnifyingGlassPlus weight="bold" aria-hidden="true" />
              </button>

              {imageCount > 1 && (
                <div className={styles.demoSliderDots} aria-label={`${item.title} image selection`}>
                  {item.images.map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      aria-label={`Show ${item.title} image ${index + 1}`}
                      aria-current={slideIndex === index ? "true" : undefined}
                      onClick={() => setSlideIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className={styles.demoCopy}>
              {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className={styles.demoLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} image gallery`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className={styles.demoLightboxClose}
            aria-label="Close image gallery"
            onClick={() => setLightboxOpen(false)}
          >
            <X weight="bold" aria-hidden="true" />
          </button>
          {imageCount > 1 && (
            <>
              <button
                type="button"
                className={`${styles.demoLightboxButton} ${styles.demoLightboxPrevious}`}
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  changeSlide(-1);
                }}
              >
                <CaretLeft weight="bold" aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.demoLightboxButton} ${styles.demoLightboxNext}`}
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  changeSlide(1);
                }}
              >
                <CaretRight weight="bold" aria-hidden="true" />
              </button>
            </>
          )}
          <div className={styles.demoLightboxImage} onClick={(event) => event.stopPropagation()}>
            <Image
              src={item.images[slideIndex]}
              alt={`${item.title} gallery image ${slideIndex + 1}`}
              fill
              sizes="90vw"
            />
          </div>
          <span className={styles.demoLightboxCounter}>{slideIndex + 1} / {imageCount}</span>
        </div>
      )}
    </article>
  );
}

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

      <div ref={shellRef} className={styles.demoShell} data-responsive-demo>
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
                <DemoAccordionItem
                  key={item.title}
                  item={item}
                  isOpen={isOpen}
                  panelId={panelId}
                  onToggle={() => setActiveIndex(isOpen ? -1 : index)}
                />
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
                src="/assets/case-studies/white-swan/white-swan-rooms-accordion-hero.webp"
                alt="Responsive Deluxe Suites accordion with the Homestead Suite expanded on The White Swan website"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
            <figcaption>Responsive Rooms &amp; Suites accordion · Homestead Suite expanded</figcaption>
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
            <article><Browser weight="regular" /><h3>Website</h3><p>Responsive journeys supported 230 website accommodation bookings across the reporting window.</p></article>
            <article><ChartLineUp weight="regular" /><h3>Google Ads</h3><p>Search campaigns produced about $6.40 in tracked accommodation revenue for every $1 spent.</p></article>
            <article><SquaresFour weight="regular" /><h3>Reporting</h3><p>Website, booking, search and paid-media outcomes brought into one decision-making view.</p></article>
            <article><Camera weight="regular" /><h3>Content</h3><p>Photography and immersive media that help guests understand the experience.</p></article>
          </div>
        </section>

        <section className={styles.reportingSection}>
          <div className={styles.reportingIntro} data-case-reveal>
            <h2>Proof without inflated claims.</h2>
            <p>
              From 1 April to 31 July 2026, the reporting showed stronger traffic, engagement and direct website bookings while helping identify where seasonal campaigns and booking paths could work harder.
            </p>
            <p>
              The figures below are verified headline outcomes from the supplied reports. The dashboard preview remains illustrative so granular client data stays private.
            </p>
          </div>

          <div className={styles.verifiedResults} data-case-reveal>
            <div className={styles.verifiedResultsHeading}>
              <p className={styles.eyebrow}>Verified performance</p>
              <h3>Measured improvement across the connected digital system.</h3>
              <p>Comparison figures follow the reporting source for 1 April–31 July 2026.</p>
            </div>
            <div className={styles.verifiedMetricGrid}>
              {verifiedMetrics.map((metric) => (
                <article key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <small>{metric.detail}</small>
                </article>
              ))}
            </div>
            <p className={styles.verifiedResultsNote}>
              Search advertising also generated approximately 6.4 times its spend in tracked accommodation revenue. Direct-channel gains held through the period, helping reduce reliance on commission-based booking channels.
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
