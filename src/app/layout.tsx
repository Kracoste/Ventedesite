import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | webonia",
    default: "Créez votre site Next.js professionnel | webonia",
  },
  description:
    "Studio spécialisé Next.js : conception de sites vitrines, e-commerce et solutions sur-mesure. Performance, design et accompagnement complet.",
  alternates: {
    canonical: "https://webonia.com",
  },
  openGraph: {
    title: "Créez votre site Next.js professionnel | webonia",
    description:
      "Nous créons des sites vitrines, e-commerce et plateformes sur-mesure propulsés par Next.js.",
    url: "https://webonia.com",
    siteName: "webonia",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-transparent antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
