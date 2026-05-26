import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Flat Roofing NYC — TPO, EPDM & SPF | Skyward Roofing",
  description:
    "Flat roofing specialists in NYC. TPO, EPDM, and SPF systems for residential and commercial properties. Free inspections, written estimates, licensed & insured.",
};

export default function FlatRoofingPage() {
  return (
    <>
      <PageHeroSection
        title="Flat Roofing"
        subtitle="TPO, EPDM, and SPF flat roof systems for residential and commercial properties across NYC and Westchester County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Flat Roofing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Flat Roofing"
        sidebarImage="/images/service-3.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Flat Roof Installation, Repair & Replacement"
        intro={[
          "Flat roofs are common across NYC's residential and commercial building stock — and they require specific expertise. Skyward Roofing installs, repairs, and replaces all flat roof system types, including TPO (thermoplastic polyolefin), EPDM (rubber membrane), and SPF (spray polyurethane foam).",
          "Each system has different performance characteristics, lifespans, and ideal use cases. During your free inspection, we assess your building's specific conditions and recommend the right system — not just the most expensive one.",
        ]}
        whatWeDo={[
          "TPO flat roof installation and replacement",
          "EPDM rubber membrane installation and repair",
          "SPF (spray foam) roofing and coatings",
          "Flat roof leak detection and emergency repair",
          "Ponding water assessment and drainage solutions",
          "Roof coating and waterproofing for extended lifespan",
        ]}
        whyChooseUs={[
          "Certified in all three major flat roof systems — TPO, EPDM, SPF",
          "50+ years on NYC flat roofs in every borough",
          "Free inspections — we assess, not just quote",
          "Honest system recommendations based on your building",
          "Licensed (NYC #2100010-DCA) and fully insured",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
