import type { Metadata } from "next";
import KahakaiCaseStudy from "@/components/KahakaiCaseStudy";

export const metadata: Metadata = {
  title: "Kahakai Poké Bowls Website & Video Case Study",
  description:
    "A mobile-first website and original video by Lookin for Kahakai Poké Bowls, connecting menu discovery, online ordering and a visit to Liardet Street Projects.",
  alternates: {
    canonical: "/work/kahakai-poke-bowls",
  },
  openGraph: {
    title: "Kahakai Poké Bowls Case Study | Lookin",
    description:
      "Explore the original Kahakai video and see how Lookin connected the food, location and ordering journey in one mobile-first website.",
    url: "/work/kahakai-poke-bowls",
    type: "article",
  },
};

export default function KahakaiPokeBowlsPage() {
  return <KahakaiCaseStudy />;
}
