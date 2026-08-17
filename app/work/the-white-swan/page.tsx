import type { Metadata } from "next";
import WhiteSwanCaseStudy from "@/components/WhiteSwanCaseStudy";

export const metadata: Metadata = {
  title: "The White Swan Case Study | Lookin",
  description:
    "A responsive hospitality content system designed and coded by Lookin for The White Swan Country Hotel.",
  openGraph: {
    title: "The White Swan Case Study | Lookin",
    description:
      "See how Lookin turned detailed accommodation and venue content into a clear responsive customer journey.",
    type: "article",
  },
};

export default function WhiteSwanPage() {
  return <WhiteSwanCaseStudy />;
}
