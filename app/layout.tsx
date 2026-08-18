import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat, Plus_Jakarta_Sans, Rubik } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GOOGLE_TAG_MANAGER_ID = "GTM-N8PFSPGM";

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

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lookin.nz"),
  title: {
    default: "Web Design New Plymouth | Lookin",
    template: "%s | Lookin",
  },
  description:
    "Approachable website design, original content and practical digital growth support for New Plymouth, Taranaki and businesses across New Zealand.",
  applicationName: "Lookin",
  authors: [{ name: "Tamron Galbraith", url: "https://lookin.nz" }],
  creator: "Tamron Galbraith",
  publisher: "Lookin",
  category: "Web design and digital marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "A better website, without the usual hassle | Lookin",
    description:
      "Strategy, design, development and original content—handled by one experienced local partner.",
    type: "website",
    locale: "en_NZ",
    siteName: "Lookin",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "A better website, without the usual hassle | Lookin",
    description:
      "Strategy, design, development and original content—handled by one experienced local partner.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-NZ"
      className={`${plusJakarta.variable} ${jetBrainsMono.variable} ${montserrat.variable} ${rubik.variable}`}
    >
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            aria-hidden="true"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`}
        </Script>
      </body>
    </html>
  );
}
