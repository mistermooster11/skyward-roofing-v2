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
  title: "Commercial Roofing NYC — Skyward Roofing | Flat & Industrial Roofs",
  description:
    "Commercial and industrial roofing in NYC. Flat roof systems, TPO, EPDM, and SPF for warehouses, apartment buildings, and commercial properties. Licensed & insured.",
};

export default function CommercialRoofingPage() {
  return (
    <>
      <PageHeroSection
        title="Commercial Roofing"
        subtitle="Flat roof systems, industrial roofing, and commercial property repairs across all five NYC boroughs and Westchester County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Commercial Roofing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Commercial Roofing"
        sidebarImage="/images/roofing-crew-installing-shingles-aerial-view.jpg"
        sidebarImageWidth={800}
        sidebarImageHeight={600}
        heading="Commercial & Industrial Roofing Services"
        intro={[
          "Skyward Roofing handles commercial and industrial roofing across NYC — from apartment buildings and mixed-use properties to warehouses and retail spaces. Our team specializes in flat roof systems including TPO, EPDM, and SPF, as well as repairs and replacements for large commercial structures.",
          "We understand the stakes for commercial property owners: downtime, tenant disruption, and compliance matter. Every job starts with a free inspection and written estimate. We work efficiently, communicate throughout the project, and document everything.",
        ]}
        whatWeDo={[
          "Commercial flat roof installation and replacement",
          "TPO, EPDM, and SPF membrane systems",
          "Roof leak detection and emergency repairs",
          "Industrial warehouse and large-structure roofing",
          "Apartment building and mixed-use property roofing",
          "Inspection reports and documentation for property managers",
        ]}
        whyChooseUs={[
          "50+ years combined experience on NYC commercial roofs",
          "Licensed, bonded, and fully insured — NYC & Westchester",
          "Free in-person inspections with written estimates",
          "Experience with all flat roof system types",
          "Professional documentation for insurance and property records",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
