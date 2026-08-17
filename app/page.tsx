import type { Metadata } from "next";
import LookinHome from "@/components/LookinHome";

export const metadata: Metadata = {
  title: {
    absolute: "Web Design New Plymouth | Lookin",
  },
  description:
    "Website design, development, original photography and practical digital growth support for New Plymouth, Taranaki and businesses across New Zealand.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A better website, without the usual hassle | Lookin",
    description:
      "Strategy, design, development and original content—handled by one experienced local partner.",
    url: "/",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://lookin.nz/#business",
  name: "Lookin",
  url: "https://lookin.nz",
  image: "https://lookin.nz/opengraph-image",
  logo: "https://lookin.nz/icon",
  description:
    "Website design, development, original photography and practical digital growth support from New Plymouth, New Zealand.",
  telephone: "+64 27 344 7853",
  email: "hello@lookin.nz",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 Liardet Street",
    addressLocality: "New Plymouth",
    addressRegion: "Taranaki",
    addressCountry: "NZ",
  },
  areaServed: [
    {
      "@type": "City",
      name: "New Plymouth",
    },
    {
      "@type": "Country",
      name: "New Zealand",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Tamron Gardner",
  },
  knowsAbout: [
    "Web design",
    "Website development",
    "Commercial photography",
    "Videography",
    "Google Ads",
    "Digital marketing",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <LookinHome />
    </>
  );
}
