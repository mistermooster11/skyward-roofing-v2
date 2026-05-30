import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Skyward Roofing — NYC Roofing Specialists | All 5 Boroughs + Westchester",
  description:
    "Third-generation, family-owned roofing company serving all five NYC boroughs, Yonkers, and Westchester County. Free inspections, licensed & insured, honest assessments.",
  openGraph: {
    title: "Skyward Roofing — NYC Roofing Specialists",
    description:
      "Third-generation, family-owned roofers serving all five NYC boroughs + Westchester. Free inspections, honest assessments, licensed & insured.",
    url: "https://www.skywardroofing.com",
    siteName: "Skyward Roofing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyward Roofing — NYC Roofing Specialists",
    description:
      "Third-generation, family-owned roofers serving all five NYC boroughs + Westchester. Free inspections, honest assessments.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Skyward Roofing",
  url: "https://www.skywardroofing.com",
  telephone: "+19179798704",
  email: "info@skywardroofing.com",
  description:
    "Third-generation, family-owned roofing company serving all five NYC boroughs, Yonkers, and Westchester County. Free inspections, licensed & insured.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: [
    "Bronx, NY", "Brooklyn, NY", "Manhattan, NY",
    "Queens, NY", "Staten Island, NY", "Yonkers, NY", "Westchester County, NY",
  ],
  priceRange: "$$",
  openingHours: "Mo-Su 07:00-19:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Roofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Roof Inspection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chimney & Gutter Services" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
