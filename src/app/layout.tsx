import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samin-alfattah.com"),
  title: {
    default: "Samin Al Fattah | Finance x Data x Research",
    template: "%s | Samin Al Fattah"
  },
  description:
    "Personal brand website for Samin Al Fattah, a finance professional, CFA Level 1 Passed candidate, valuation specialist, data analyst, and national competition champion.",
  keywords: [
    "Samin Al Fattah",
    "Finance Analyst Bangladesh",
    "CFA Research Challenge Winner",
    "Equity Research Bangladesh",
    "Financial Modeling Portfolio",
    "Valuation Specialist Bangladesh"
  ],
  openGraph: {
    type: "website",
    url: "https://samin-alfattah.com",
    title: "Samin Al Fattah | Finance x Data x Research",
    description:
      "Finance, analytics, and research translated into investment insights, business decisions, and measurable impact.",
    images: [
      {
        url: "/images/profile-picture.jpeg",
        width: 1024,
        height: 1024,
        alt: "Samin Al Fattah profile picture"
      },
      {
        url: "/images/finance-data-research-hero.png",
        width: 1536,
        height: 1024,
        alt: "Abstract finance, data, and research dashboard visual"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Samin Al Fattah | Finance x Data x Research",
    description:
      "CFA Level 1 Passed, valuation specialist, data and BI analyst, and national competition champion.",
    images: ["/images/profile-picture.jpeg"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
