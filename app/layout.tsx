import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arykashid.dev"),
  title: "Ary Kashid — AI & Data Science Engineer",
  description:
    "Portfolio of Ary Kashid, AI & Data Science Engineer specializing in autonomous ML systems, time-series forecasting, predictive infrastructure resilience, and retrieval-augmented generation.",
  keywords: [
    "Ary Kashid",
    "AI Engineer",
    "Data Science",
    "Machine Learning",
    "CrashGuard AI",
    "RAG",
    "Predictive Maintenance",
    "Portfolio",
  ],
  authors: [{ name: "Ary Kashid", url: "https://github.com/Arykashid" }],
  openGraph: {
    title: "Ary Kashid — AI & Data Science Engineer",
    description:
      "Engineering AI systems that anticipate problems before they happen. Explore selected works including CrashGuard AI and RAG Teaching Assistant.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/ary-hero-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ary Kashid — AI & Data Science Engineer",
      },
    ],
  },
  icons: {
    icon: "/images/studio-logo.svg",
    apple: "/images/studio-logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#121315",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#121315] text-[#e3e2e5] antialiased selection:bg-[#f7bd55]/20 selection:text-[#f7bd55]">
        {children}
      </body>
    </html>
  );
}
