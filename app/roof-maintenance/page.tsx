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
  title: "Roof Maintenance & Coatings NYC — Skyward Roofing | Extend Roof Life",
  description:
    "Roof coatings, waterproofing, and preventive maintenance for NYC properties. Extend the life of your roof and avoid costly replacements. Licensed & insured.",
};

export default function RoofMaintenancePage() {
  return (
    <>
      <PageHeroSection
        title="Roof Maintenance"
        subtitle="Roof coatings, waterproofing, and preventive maintenance to extend the life of your roof and avoid costly replacements."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Roof Maintenance" },
        ]}
      />
      <ServiceDetailSection
        activeService="Roof Maintenance"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Roof Coatings, Waterproofing & Maintenance"
        intro={[
          "Regular maintenance is the most cost-effective way to extend the life of any roof. Skyward Roofing offers roof coating, waterproofing, and preventive maintenance services that protect your investment and delay the need for a full replacement — often by years.",
          "We work on both residential and commercial properties across all five NYC boroughs and Westchester. Whether it's an annual inspection, a coating application, or targeted waterproofing on a problem area, we assess the roof honestly and recommend only what it needs.",
        ]}
        whatWeDo={[
          "Roof coating application for flat and low-slope roofs",
          "Silicone and acrylic waterproofing systems",
          "Seam sealing and flashing maintenance",
          "Gutter cleaning and maintenance",
          "Annual roof inspection and condition reporting",
          "Emergency leak patching and weather protection",
        ]}
        whyChooseUs={[
          "Preventive-first approach — we protect your roof, not just fix it",
          "Experience across all NYC roof types and ages",
          "Licensed, bonded, and fully insured in NYC and Westchester",
          "Written maintenance reports for property records",
          "No upselling — we recommend only what the roof genuinely needs",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
