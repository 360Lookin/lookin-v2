"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  EnvelopeSimple,
  List,
  MapPin,
  Phone,
  X,
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BOOKING_URL = "https://calendar.app.google/R1LZCQ1HcVA2joeG7";

const scopeItems = [
  "Up to five core pages",
  "One 90-minute local photo and video session",
  "Up to 20 edited photographs and a video up to 30 seconds long",
  "Copy shaping from your supplied information",
  "Foundational on-page SEO and analytics",
  "One enquiry form or simple booking link",
  "Two design feedback rounds",
  "30 days of post-launch support",
];

const faqs = [
  {
    q: "Why not just build it with AI?",
    a: "AI is useful, and I use it where it genuinely improves the work. But the tool is not the job. A strong website still needs business understanding, original local content, sound decisions, careful implementation and someone accountable for the result.",
  },
  {
    q: "Will I be able to update the website myself?",
    a: "Yes. I choose the platform around your needs and make normal content changes straightforward. You will not be locked into calling a developer for every small update.",
  },
  {
    q: "How long does a starter website take?",
    a: "Allow roughly two to three weeks from kickoff to launch. That gives us enough time for photography, content, feedback and approvals without letting the project drift.",
  },
  {
    q: "Do I have to sign up for ongoing support?",
    a: "No. Hosting, maintenance, advertising and optimisation are available when useful, but a compulsory monthly retainer is not part of the starter website.",
  },
];

export default function LookinHome() {
  const root = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.from("[data-hero-reveal]", {
        y: 36,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 52,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        });
      });

      const desktop = gsap.matchMedia();
      desktop.add("(min-width: 900px)", () => {
        ScrollTrigger.create({
          trigger: ".work-layout",
          start: "top 14%",
          end: "bottom 78%",
          pin: ".work-intro",
          pinSpacing: false,
        });

        gsap.utils.toArray<HTMLElement>(".price-card").forEach((card, index) => {
          gsap.to(card, {
            scale: 0.94 + index * 0.02,
            opacity: 0.42 + index * 0.18,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: `top ${124 + index * 18}px`,
              end: "+=420",
              scrub: true,
            },
          });
        });
      });

      return () => desktop.revert();
    },
    { scope: root },
  );

  return (
    <main ref={root} className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Lookin home">
          look<span>in</span><i>.</i>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>What I do</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a className="nav-cta" href={BOOKING_URL}>Book a free session <ArrowRight weight="bold" /></a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <List />}
        </button>
      </header>

      <div id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow" data-hero-reveal>Web design in New Plymouth · working across New Zealand</p>
            <h1 data-hero-reveal>A better website, without the usual hassle.</h1>
            <p className="hero-lede" data-hero-reveal>
              I bring strategy, words, design, development and original photography together—so you get one clear process and a website built to help your business grow.
            </p>
            <div className="hero-actions" data-hero-reveal>
              <a className="button button-primary" href={BOOKING_URL}>
                Book a free 30-minute session <ArrowRight weight="bold" />
              </a>
              <a className="text-link" href="#work">See how I work <ArrowDownRight /></a>
            </div>
            <p className="hero-note" data-hero-reveal>
              In person around New Plymouth, or online anywhere in New Zealand.
            </p>
          </div>

          <div className="hero-visual" data-hero-reveal>
            <div className="hero-photo image-hover">
              <Image
                src="/assets/portraits/tamron-galbraith-working-at-desk.webp"
                alt="Tamron Galbraith working at his desk with website development and photography equipment"
                fill
                priority
                sizes="(max-width: 899px) 100vw, 40vw"
              />
            </div>
            <div className="hero-card">
              <span>Starter websites</span>
              <strong>From $2,900 + GST</strong>
              <small>Clear scope. Original photography. Two to three weeks.</small>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Services at a glance">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-set" aria-hidden={copy === 1} key={copy}>
                <span>Strategy</span><i>●</i><span>Web design</span><i>●</i><span>Development</span><i>●</i>
                <span>Photography</span><i>●</i><span>Videography</span><i>●</i><span>Google Ads</span><i>●</i><span>Reporting</span><i>●</i>
              </div>
            ))}
          </div>
        </div>

        <section className="problem-section content-width" data-reveal>
          <p className="eyebrow">A website should earn its keep</p>
          <h2>
            If yours is hard to update, hard to find, or simply not bringing in enough business, it is time for a more useful website.
          </h2>
          <p>
            You do not need more jargon or a pile of disconnected suppliers. You need someone who understands the business, makes the right calls and carries the work through to launch.
          </p>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading content-width" data-reveal>
            <p className="eyebrow">One connected offer</p>
            <h2>Build it properly. Make it work harder. Get support when you want it.</h2>
          </div>

          <div className="service-grid content-width">
            <article className="service-card service-build" data-reveal>
              <div>
                <span className="service-number">01</span>
                <h3>Build</h3>
                <p>Your business, translated into a clear, credible website that is easy to manage and ready to convert.</p>
              </div>
              <ul>
                <li>Strategy and information architecture</li>
                <li>Copy, UX and visual design</li>
                <li>WordPress, Shopify, Squarespace or custom development</li>
                <li>Photography, video and virtual tours</li>
                <li>Launch, analytics and enquiry tracking</li>
              </ul>
              <div className="build-orbit" aria-hidden="true"><span>idea</span><span>design</span><span>launch</span></div>
            </article>
            <article className="service-card service-grow" data-reveal>
              <span className="service-number">02</span>
              <h3>Grow</h3>
              <p>Practical promotion and measurement that shows what is working.</p>
              <ul><li>Google Ads and SEO</li><li>Conversion tracking</li><li>Reporting dashboards</li></ul>
            </article>
            <article className="service-card service-support" data-reveal>
              <span className="service-number">03</span>
              <h3>Support</h3>
              <p>Reliable help after launch, without locking you into a retainer.</p>
              <ul><li>Hosting and maintenance</li><li>Content updates</li><li>Ongoing improvements</li></ul>
            </article>
          </div>
        </section>

        <section className="accordions content-width" aria-label="What makes the process different">
          <div className="section-heading compact" data-reveal>
            <p className="eyebrow">More than a template</p>
            <h2>The value is in the thinking, the content and the follow-through.</h2>
          </div>
          <div className="accordion-row" data-reveal>
            <article className="accordion-panel">
              <span>Understand</span><h3>I learn how your business actually works.</h3><p>Your customers, priorities and constraints come before platform choices.</p>
            </article>
            <article className="accordion-panel">
              <span>Create</span><h3>Your business looks like your business.</h3><p>Original local photography and considered copy replace generic stock-filled templates.</p>
            </article>
            <article className="accordion-panel">
              <span>Deliver</span><h3>One accountable person sees it through.</h3><p>You work directly with me from the first conversation to launch and beyond.</p>
            </article>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-layout content-width">
            <div className="work-intro">
              <p className="eyebrow">Connected digital work</p>
              <h2>A good website is stronger when the content, promotion and reporting work together.</h2>
              <p>Explore how strategy, design, development, photography and promotion come together to create clearer customer journeys and more useful websites.</p>
            </div>
            <div className="work-list">
              <Link
                href="/work/the-white-swan"
                className="work-card work-card-link"
                aria-label="View The White Swan case study"
                data-reveal
              >
                <div className="work-image work-image-responsive image-hover">
                  <Image
                    src="/assets/case-studies/white-swan/white-swan-rooms-accordion-desktop.webp"
                    alt="Desktop and mobile views of the responsive Homestead Suite accordion designed for The White Swan website"
                    fill
                    sizes="(max-width: 899px) 100vw, 50vw"
                  />
                  <div className="work-card-mobile-shot" aria-hidden="true">
                    <Image
                      src="/assets/case-studies/white-swan/white-swan-rooms-accordion-mobile.webp"
                      alt=""
                      fill
                      sizes="(max-width: 560px) 24vw, 12vw"
                    />
                  </div>
                </div>
                <div className="work-copy">
                  <p>Hospitality · Website · Advertising · Reporting</p>
                  <h3>The White Swan / Experience Collective</h3>
                  <span>Website and digital work supported by Google Ads, a comprehensive reporting dashboard, photography and immersive content.</span>
                  <small>Apr–Jul 2026: website sessions up 74%, website accommodation bookings up 26% and website revenue up 16% versus the comparison period.</small>
                  <strong className="work-card-action">View case study <ArrowRight weight="bold" /></strong>
                </div>
              </Link>
              <Link
                href="/work/kahakai-poke-bowls"
                className="work-card work-card-link"
                aria-label="View Kahakai Poké Bowls case study"
                data-reveal
              >
                <div className="work-image work-image-responsive work-image-menu image-hover">
                  <Image
                    src="/assets/case-studies/kahakai/kahakai-menu-desktop.webp"
                    alt="Desktop and mobile views of the responsive build-your-own poké bowl menu designed for Kahakai Poké Bowls"
                    fill
                    sizes="(max-width: 899px) 100vw, 50vw"
                  />
                  <div className="work-card-mobile-shot" aria-hidden="true">
                    <Image
                      src="/assets/case-studies/kahakai/kahakai-menu-mobile.webp"
                      alt=""
                      fill
                      sizes="(max-width: 560px) 24vw, 12vw"
                    />
                  </div>
                </div>
                <div className="work-copy">
                  <p>Food · Website design and development</p>
                  <h3>Kahakai Poké Bowls</h3>
                  <span>A fresh digital home for a New Plymouth food truck at Liardet Street Projects.</span>
                  <strong className="work-card-action">View case study <ArrowRight weight="bold" /></strong>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="pricing-heading content-width" data-reveal>
            <p className="eyebrow">Straightforward starting points</p>
            <h2>Enough clarity to know if we should talk.</h2>
            <p>Every business is different, but the price should not be a complete mystery.</p>
          </div>
          <div className="price-stack content-width">
            <article className="price-card starter-card">
              <div className="price-card-main">
                <p>Starter website</p>
                <h3>From $2,900 <small>+ GST</small></h3>
                <span>Best for a small local business that needs a focused, credible website and original imagery without a drawn-out agency process.</span>
                <a className="button button-dark" href={BOOKING_URL}>Talk through your project <ArrowRight /></a>
              </div>
              <ul>{scopeItems.map((item) => <li key={item}><Check weight="bold" />{item}</li>)}</ul>
            </article>
            <article className="price-card growth-card">
              <div className="price-card-main">
                <p>Custom website</p>
                <h3>$5,000–$10,000 <small>+ GST</small></h3>
                <span>For larger content needs, custom functionality, e-commerce, booking systems or a more involved visual and technical build.</span>
              </div>
              <div className="price-aside"><strong>Scoped after discovery</strong><p>Clear proposal, milestones and staged payments before work begins.</p></div>
            </article>
            <article className="price-card ongoing-card">
              <div className="price-card-main">
                <p>Optional growth and support</p>
                <h3>Quoted to fit</h3>
                <span>Hosting, maintenance, Google Ads, SEO, reporting and ongoing improvements—only when they make sense for your business.</span>
              </div>
              <div className="price-aside"><strong>No compulsory retainer</strong><p>Choose one-off help or an ongoing rhythm after launch.</p></div>
            </article>
          </div>
          <div className="scope-note content-width" data-reveal>
            <strong>How starter projects stay on track</strong>
            <p>A 40% deposit books the project, 30% is due after design approval, and 30% before launch. Additional pages, complex integrations, extended copywriting, video production and extra revision rounds are quoted separately. Final scope is confirmed in writing before work begins.</p>
          </div>
        </section>

        <section className="about-section content-width" id="about">
          <div className="about-portrait image-hover" data-reveal>
            <Image
              src="/assets/portraits/tamron-galbraith-photographer-portrait.webp"
              alt="Tamron Galbraith holding a camera and tripod outside a local business"
              fill
              sizes="(max-width: 899px) 100vw, 42vw"
            />
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow">Direct, experienced and local</p>
            <h2>You work with me, Tamron—not an account manager.</h2>
            <p>I have spent decades working across marketing and technology. I am a practical IT nerd, a small-business owner and someone who genuinely enjoys making complicated projects feel manageable.</p>
            <p>I keep up with new technology—including AI—but I use it for a reason, not for show. My job is to understand your business, choose the right approach and take responsibility for getting the work finished properly.</p>
            <div className="contact-lines">
              <a href="tel:+64273447853"><Phone />027 344 7853</a>
              <a href="mailto:hello@lookin.nz"><EnvelopeSimple />hello@lookin.nz</a>
              <span><MapPin />21 Liardet Street, New Plymouth</span>
            </div>
          </div>
        </section>

        <section className="faq-section content-width">
          <div className="section-heading compact" data-reveal>
            <p className="eyebrow">Useful answers</p>
            <h2>A clear process starts with straight answers.</h2>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map((faq) => (
              <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>
            ))}
          </div>
        </section>

        <section className="contact-choice content-width" aria-labelledby="contact-choice-heading" data-reveal>
          <div>
            <h2 id="contact-choice-heading">Prefer to write it down first?</h2>
            <p>Tell me what you are working on, what is getting in the way and where you would like the business to go.</p>
          </div>
          <div className="contact-choice-actions">
            <Link className="button button-dark" href="/contact">Send a project enquiry <ArrowRight weight="bold" /></Link>
            <a className="text-link" href={BOOKING_URL}>Book a 30-minute session <ArrowRight /></a>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="final-cta-inner content-width" data-reveal>
            <p className="eyebrow">Bring the website. Bring the questions.</p>
            <h2>Let’s make the next step clear.</h2>
            <p>In 30 minutes, we can look at where your current website is falling short, what a sensible first version needs, and whether I am the right person to help.</p>
            <a className="button button-primary button-large" href={BOOKING_URL}>Book a free Website Discovery Session <ArrowRight weight="bold" /></a>
          </div>
        </section>
      </div>

      <footer className="site-footer content-width">
        <a href="#top" className="wordmark wordmark-footer">look<span>in</span><i>.</i></a>
        <p>Websites, content and practical digital growth from New Plymouth to businesses across New Zealand.</p>
        <div><a href="mailto:hello@lookin.nz">hello@lookin.nz</a><a href="tel:+64273447853">027 344 7853</a><Link href="/privacy">Privacy statement</Link></div>
        <small>© {new Date().getFullYear()} Lookin. All rights reserved.</small>
      </footer>
    </main>
  );
}
