import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lookin.nz"),
  title: "Web Design New Plymouth | Lookin",
  description:
    "Approachable website design, original content and practical digital growth support for New Plymouth, Taranaki and businesses across New Zealand.",
  openGraph: {
    title: "A better website, without the usual hassle | Lookin",
    description:
      "Strategy, design, development and original content—handled by one experienced local partner.",
    type: "website",
    locale: "en_NZ",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ" className={`${plusJakarta.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
