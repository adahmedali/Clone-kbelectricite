import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { ConsentBanner } from "@/components/ConsentBanner";

const SITE_URL = "https://www.kbelectricite.fr";
const TITLE =
  "Électricien à Toulouse — KB Électricité Générale | CFO / CFA";
const DESCRIPTION =
  "Électricien à Toulouse : courants forts & faibles, mise en conformité NF C 15-100, bornes IRVE, éclairage LED, dépannage et maintenance. Devis gratuit.";

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
    siteName: "KB Électricité Générale",
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
