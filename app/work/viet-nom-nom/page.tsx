import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import VietNomNomGallery from "@/components/VietNomNomGallery";
import { vietNomNomPhotos } from "@/components/vietNomNomPhotos";
import styles from "@/components/VietNomNomCaseStudy.module.css";

const title = "Viet Nom Nom Food Photography | New Plymouth";
const description = "Professional food photography by Tamron at Lookin for Viet Nom Nom, New Plymouth. Explore the shoot and photography for menus, websites and social content.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/viet-nom-nom" },
  openGraph: {
    title: `${title} | Lookin`,
    description,
    url: "/work/viet-nom-nom",
    type: "article",
    images: [{ url: vietNomNomPhotos[0].src, width: 2000, height: 1333, alt: vietNomNomPhotos[0].alt }],
  },
  twitter: { card: "summary_large_image", title, description, images: [vietNomNomPhotos[0].src] },
};

export default function VietNomNomPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#photography-content">Skip to photography</a>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="Lookin home">look<span>in</span><i>.</i></Link>
        <nav aria-label="Photography navigation"><Link href="/#work"><ArrowLeft aria-hidden="true" /> Back to work</Link></nav>
      </header>
      <main id="photography-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Viet Nom Nom · New Plymouth</p>
            <h1>Good food.<br />Worth a look.</h1>
            <p className={styles.lede}>Food photography that brings the colour, texture and character of a local kitchen into focus.</p>
            <a className={styles.button} href="#gallery">Explore the photographs <ArrowRight aria-hidden="true" weight="bold" /></a>
          </div>
          <div className={styles.heroImage}>
            <Image src={vietNomNomPhotos[0].src} alt={vietNomNomPhotos[0].alt} fill preload sizes="(max-width: 800px) 100vw, 60vw" />
          </div>
        </section>

        <section className={styles.story} aria-labelledby="story-title">
          <dl className={styles.facts}>
            <div><dt>Client</dt><dd>Viet Nom Nom</dd></div>
            <div><dt>Location</dt><dd>New Plymouth, Taranaki</dd></div>
            <div><dt>Photography</dt><dd>Tamron / Lookin</dd></div>
          </dl>
          <div className={styles.storyCopy}>
            <h2 id="story-title">Let the food do the talking.</h2>
            <p>I photographed Viet Nom Nom’s food here in New Plymouth, capturing everything from fresh rice-paper rolls to golden wontons and generously filled bánh mì.</p>
            <p>Close-up detail, fresh colour and a consistent setting bring the collection together. The result is a portrait of the food that gives people something to connect with before their first bite.</p>
          </div>
        </section>

        <section className={styles.gallerySection} id="gallery" aria-labelledby="gallery-title">
          <div className={styles.galleryHeading}>
            <h2 id="gallery-title">A closer look.</h2>
            <p>16 photographs from the shoot. Select any image to see it in full.</p>
          </div>
          <VietNomNomGallery />
        </section>

        <section className={styles.service} aria-labelledby="service-title">
          <div className={styles.serviceIntro}>
            <h2 id="service-title">Your next customer<br />looks before they book.</h2>
            <p>Original photography gives people a real feel for what you offer. I create food and business imagery in New Plymouth and Taranaki, with your wider digital presence in mind.</p>
          </div>
          <div className={styles.serviceUses}>
            <article><h3>Food &amp; menus</h3><p>Show the detail in your dishes with photographs for menus, seasonal specials and ordering pages.</p></article>
            <article><h3>Websites &amp; campaigns</h3><p>Give your website and advertising original imagery that feels like your business, from the first impression onwards.</p></article>
            <article><h3>Social content</h3><p>Build a consistent collection of photographs to draw on when you have something new to share.</p></article>
          </div>
          <div className={styles.enquiry}>
            <h3>Something good to show?</h3>
            <p>Tell me what you need photographed, where you are and how you plan to use the images. We can work out the right shoot together.</p>
            <Link className={styles.button} href="/contact">Enquire about photography <ArrowRight aria-hidden="true" weight="bold" /></Link>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <Link href="/" className={styles.wordmark} aria-label="Lookin home">look<span>in</span><i>.</i></Link>
        <Link href="/#work">More connected digital work <ArrowRight aria-hidden="true" /></Link>
        <small>© {new Date().getFullYear()} Lookin. <Link href="/privacy">Privacy statement</Link></small>
      </footer>
    </div>
  );
}
