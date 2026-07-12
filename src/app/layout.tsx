import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { ConsentBanner } from "@/components/ConsentBanner";

const SITE_URL = "https://www.prosan-electricite.fr";
const TITLE =
  "Électricien à Beaugency — Pro San Electricité | Automatisme & dépannage";
const DESCRIPTION =
  "Électricien à Beaugency (Loiret) : rénovation et mise aux normes, tableaux, éclairage, automatisme de portails, interphonie et dépannage 24h/24. Devis gratuit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Pro San Electricité",
    locale: "fr_FR",
    images: ["/images/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-default.png"],
  },
};

export const viewport = {
  themeColor: "#0e63ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        <Header />
        {children}
        <Footer />
        <StickyCallBar />
        <ConsentBanner />
      </body>
    </html>
  );
}
