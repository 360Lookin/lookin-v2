import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import styles from "@/components/PrivacyPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Statement",
  description:
    "How Lookin collects, uses, stores and shares personal information under New Zealand's Privacy Act 2020.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy statement | Lookin",
    description:
      "How Lookin handles personal information and how to request access or correction.",
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <a className="skip-link" href="#privacy-content">Skip to privacy statement</a>

      <header className={styles.header}>
        <Link href="/" className="wordmark" aria-label="Lookin home">
          look<span>in</span><i>.</i>
        </Link>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft weight="bold" /> Back to home
        </Link>
      </header>

      <div className={styles.hero}>
        <p className="eyebrow">Privacy Act 2020 · New Zealand</p>
        <h1>Privacy statement.</h1>
        <p>
          This statement explains what personal information Lookin collects, why it is
          collected, who may receive it and the choices and rights you have.
        </p>
        <span>Last updated 17 August 2026</span>
      </div>

      <article className={styles.content} id="privacy-content">
        <section>
          <h2>Who is responsible for your information</h2>
          <p>
            Lookin is operated by Tamron Galbraith from 21 Liardet Street, New Plymouth,
            New Zealand. Tamron is Lookin&apos;s privacy officer and is responsible for the
            personal information described in this statement.
          </p>
          <div className={styles.contactCard}>
            <a href="mailto:hello@lookin.nz">hello@lookin.nz</a>
            <a href="tel:+64273447853">027 344 7853</a>
          </div>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>We may collect personal information that you provide when you:</p>
          <ul>
            <li>
              send a project enquiry, including your name, email address, optional phone
              number and business name, service needs, optional budget and timeframe, and
              the details in your message;
            </li>
            <li>
              book a discovery session, including the contact and appointment details you
              provide through Google Calendar;
            </li>
            <li>email, telephone, meet with or otherwise do business with Lookin; or</li>
            <li>
              approve photographs, video, testimonials or project information for use in
              Lookin&apos;s portfolio or marketing.
            </li>
          </ul>
          <p>
            Our hosting and security providers may also automatically record limited
            technical information, such as your IP address, browser or device type, pages
            requested, referring page, and the date and time of a request. We also use Google
            Tag Manager to manage the website measurement technologies described below.
          </p>
          <p>
            If we receive personal information about you from another person, a referral or
            a public business source, we will take reasonable steps to tell you about that
            collection unless an exception under the Privacy Act applies.
          </p>
        </section>

        <section>
          <h2>Website measurement and cookies</h2>
          <p>
            Google Tag Manager loads and manages measurement tags configured by Lookin.
            Depending on the active tags, Google and other measurement providers may receive
            information about visits and interactions, including IP address, device and
            browser information, referring page, pages viewed, approximate location, and
            cookie or similar identifiers. These technologies help us understand website
            use, measure enquiries and improve our services and marketing.
          </p>
          <p>
            Google Tag Manager itself manages tags; the individual tags it loads determine
            what information is collected and whether cookies are set. We do not deliberately
            send the contents of enquiry forms through Google Tag Manager. You can limit or
            delete cookies using your browser settings, although this may reduce the accuracy
            of website measurement.
          </p>
        </section>

        <section>
          <h2>Why we collect and use it</h2>
          <p>We collect and use personal information only where reasonably necessary to:</p>
          <ul>
            <li>respond to enquiries and arrange appointments;</li>
            <li>prepare proposals and provide website, content and digital services;</li>
            <li>manage projects, client relationships, invoices and business records;</li>
            <li>operate, protect and improve the website and prevent misuse; and</li>
            <li>meet legal, accounting and regulatory obligations.</li>
          </ul>
          <p>
            We will not use your information for an unrelated purpose unless you authorise
            it or the use is otherwise permitted by law.
          </p>
        </section>

        <section>
          <h2>Providing information is your choice</h2>
          <p>
            Providing personal information is voluntary and is not required by a particular
            law. However, if you do not provide the fields marked as required, we may be
            unable to respond to your enquiry, arrange a booking or provide the requested
            service. Optional fields may be left blank.
          </p>
        </section>

        <section>
          <h2>Who may receive it</h2>
          <p>
            Lookin does not sell or rent personal information. Information may be accessed
            by Tamron and by service providers where needed to operate the business,
            including:
          </p>
          <ul>
            <li>Formspree, which processes website enquiry submissions;</li>
            <li>Google Calendar and Google Meet, which provide appointment scheduling;</li>
            <li>
              Google Tag Manager and any measurement services configured through it, which
              help measure website use and marketing performance;
            </li>
            <li>Vercel and related infrastructure providers, which host the website; and</li>
            <li>
              professional advisers or specialist contractors who need the information to
              help deliver an agreed service and are expected to protect it.
            </li>
          </ul>
          <p>
            These providers may process or store information outside New Zealand. We select
            reputable providers and take reasonable steps to ensure information remains
            protected. We may also disclose information where required or permitted by New
            Zealand law, or where necessary to address a serious threat or protect legal
            rights.
          </p>
        </section>

        <section>
          <h2>Storage, security and retention</h2>
          <p>
            We use reasonable technical and organisational safeguards designed to protect
            personal information against loss, unauthorised access, misuse or disclosure.
            No online system is completely secure, so please avoid sending unnecessary
            sensitive information through the enquiry form.
          </p>
          <p>
            We keep personal information only for as long as it is reasonably needed for
            the purpose for which it was collected, to maintain appropriate business and
            financial records, or to meet legal obligations. When it is no longer required,
            we take reasonable steps to delete it or make it anonymous.
          </p>
        </section>

        <section>
          <h2>Your right to access and correct information</h2>
          <p>
            You may ask for access to the personal information Lookin holds about you and
            ask for it to be corrected if it is wrong. Contact the privacy officer using the
            details above. We may need to confirm your identity before responding and will
            handle the request in accordance with the Privacy Act 2020.
          </p>
        </section>

        <section>
          <h2>Questions or complaints</h2>
          <p>
            Please contact Tamron first if you have a privacy question or concern so it can
            be investigated and addressed. If you are not satisfied with the response, you
            can contact the New Zealand Office of the Privacy Commissioner.
          </p>
          <a
            className={styles.externalLink}
            href="https://www.privacy.org.nz/your-rights/how-to-complain/"
          >
            Visit the Privacy Commissioner&apos;s website <ArrowRight weight="bold" />
          </a>
        </section>

        <section>
          <h2>Changes to this statement</h2>
          <p>
            We may update this statement when our services, providers or legal obligations
            change. The current version and its update date will remain available on this
            page.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <span>Websites, content and practical digital growth from New Plymouth.</span>
        <span>© {new Date().getFullYear()} Lookin. All rights reserved.</span>
      </footer>
    </main>
  );
}
