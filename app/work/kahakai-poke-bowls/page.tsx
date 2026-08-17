import type { Metadata } from "next";
import KahakaiCaseStudy from "@/components/KahakaiCaseStudy";

export const metadata: Metadata = {
  title: "Kahakai Poké Bowls Website Case Study",
  description:
    "A mobile-first food-truck website and menu journey designed to move customers from discovery to ordering.",
  alternates: {
    canonical: "/work/kahakai-poke-bowls",
  },
  openGraph: {
    title: "Kahakai Poké Bowls Case Study | Lookin",
    description:
      "See how Lookin organised a rich menu, dietary information and local ordering actions into a clear mobile journey.",
    url: "/work/kahakai-poke-bowls",
    type: "article",
  },
};

export default function KahakaiPokeBowlsPage() {
  return <KahakaiCaseStudy />;
}
