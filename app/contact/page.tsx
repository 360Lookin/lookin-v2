import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarBlank,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import styles from "@/components/ContactPage.module.css";

const BOOKING_URL = "https://calendar.app.google/R1LZCQ1HcVA2joeG7";

export const metadata: Metadata = {
  title: "Contact | Website Design New Plymouth",
  description:
    "Tell Lookin about your website, content or digital growth project, or book a free Website Discovery Session with Tamron Galbraith.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Start a project with Lookin",
    description:
      "Share what you need help with and get a practical next step for your website or digital project.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <a className="skip-link" href="#contact-form">Skip to enquiry form</a>

      <header className={styles.header}>
        <Link href="/" className="wordmark" aria-label="Lookin home">
          look<span>in</span><i>.</i>
        </Link>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft weight="bold" /> Back to home
        </Link>
      </header>

      <div className={styles.main}>
        <div className={styles.intro}>
          <section className={styles.copy} aria-labelledby="contact-heading">
            <h1 id="contact-heading">Tell me about your project.</h1>
            <p className={styles.lede}>Share the basics below. I will read it personally and reply with a practical next step.</p>

            <div className={styles.contactDetails}>
              <a href="tel:+64273447853"><Phone />027 344 7853</a>
              <a href="mailto:hello@lookin.nz"><EnvelopeSimple />hello@lookin.nz</a>
              <span><MapPin />21 Liardet Street, New Plymouth</span>
            </div>

            <div className={styles.booking}>
              <p>If talking is easier, book a free 30-minute Website Discovery Session instead.</p>
              <a className="text-link" href={BOOKING_URL}>
                <CalendarBlank /> Book a session <ArrowRight />
              </a>
            </div>
          </section>

          <section className={styles.formPanel} id="contact-form" aria-labelledby="form-heading">
            <div className={styles.formHeading}>
              <h2 id="form-heading">Start with the essentials.</h2>
              <p>You do not need a finished brief. A useful overview is enough to begin.</p>
            </div>
            <ContactForm />
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <span>Websites, content and practical digital growth from New Plymouth.</span>
        <span><Link href="/privacy">Privacy statement</Link> · © {new Date().getFullYear()} Lookin. All rights reserved.</span>
      </footer>
    </main>
  );
}
