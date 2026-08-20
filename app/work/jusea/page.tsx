import type { Metadata } from "next";
import JuseaCaseStudy from "@/components/JuseaCaseStudy";

export const metadata: Metadata = {
  title: "JuSea Ordering Website Case Study",
  description: "An end-to-end ordering, customer account and loyalty website designed and developed for JuSea in New Plymouth.",
  alternates: { canonical: "/work/jusea" },
  openGraph: {
    title: "JuSea Website Case Study | Lookin",
    description: "See how Lookin designed and developed JuSea's complete responsive ordering and loyalty experience.",
    url: "/work/jusea",
    type: "article",
  },
};

export default function JuseaPage() {
  return <JuseaCaseStudy />;
}
