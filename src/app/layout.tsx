import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Atmosphere } from "@/components/atmosphere";
import { Boot } from "@/components/motion/boot";
import { Cursor } from "@/components/motion/cursor";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/content";

import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.pitch,
  keywords: [
    "Sandeep Gonnabattula",
    "Backend Engineer",
    "AI Agent Systems",
    "LangGraph",
    "FastAPI",
    "Python",
    ".NET 8",
    "Kafka",
    "PostgreSQL",
    "pgvector",
    "ChromaDB",
    "Distributed Systems",
    "Workflow Automation",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.pitch,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.pitch,
    creator: "@sandeep-go",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    sameAs: [site.github, site.linkedin],
    alumniOf: "VNR Vignana Jyothi Institute of Engineering and Technology",
    knowsAbout: [
      "AI Agent Systems",
      "LangGraph",
      "Backend Engineering",
      "FastAPI",
      "Python",
      ".NET 8",
      "Kafka",
      "PostgreSQL",
      "Vector Search",
      "RAG Systems",
    ],
  };

  return (
    <html
      lang="en"
      className={`dark ${sans.variable} ${display.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-full bg-[#0a0a0a] font-sans text-[#f5f5f5] selection:bg-sky-500/30 selection:text-sky-200">
        <Boot />
        <Cursor />
        <Atmosphere />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

