"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import styles from "./ContactPage.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwlerbqv";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const business = String(formData.get("business") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    formData.set("_subject", `Website enquiry from ${business || name}`);
    formData.set("_replyto", email);
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Formspree rejected the submission");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-busy={status === "submitting"}>
      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="business">Business name <span>Optional</span></label>
          <input id="business" name="business" autoComplete="organization" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone number <span>Optional</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className={`${styles.field} ${styles.fullField}`}>
          <label htmlFor="help">What do you need help with?</label>
          <select id="help" name="help" defaultValue="" required>
            <option value="" disabled>Select an option</option>
            <option>Website design and development</option>
            <option>Photography and video</option>
            <option>Google Ads and digital growth</option>
            <option>Website support and improvements</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="budget">Approximate budget <span>Optional</span></label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Not sure yet</option>
            <option>Under $3,000</option>
            <option>$3,000-$5,000</option>
            <option>$5,000-$10,000</option>
            <option>$10,000+</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="timeframe">Preferred timeframe <span>Optional</span></label>
          <select id="timeframe" name="timeframe" defaultValue="">
            <option value="">Not sure yet</option>
            <option>As soon as possible</option>
            <option>Within 1-3 months</option>
            <option>Within 3-6 months</option>
            <option>I am exploring options</option>
          </select>
        </div>
        <div className={`${styles.field} ${styles.fullField}`}>
          <label htmlFor="message">Tell me about the project</label>
          <textarea
            id="message"
            name="message"
            rows={7}
            required
            aria-describedby="message-help"
          />
          <small id="message-help">A few sentences about the business, the current problem and the outcome you want are enough.</small>
        </div>
      </div>

      <div className={styles.formFooter}>
        <button className="button button-primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send enquiry"}
          {status !== "submitting" && <ArrowRight weight="bold" />}
        </button>
        <div
          className={styles.formStatus}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status === "idle" && <p>By sending this form, you agree that I may use these details to reply to your enquiry.</p>}
          {status === "submitting" && <p>Sending your enquiry...</p>}
          {status === "success" && (
            <p className={styles.successMessage}><CheckCircle weight="fill" />Thanks. Your enquiry has been sent and I will reply soon.</p>
          )}
          {status === "error" && (
            <p className={styles.errorMessage}><WarningCircle weight="fill" />The form could not be sent. Please try again or email <a href="mailto:hello@lookin.nz">hello@lookin.nz</a>.</p>
          )}
        </div>
      </div>
    </form>
  );
}
