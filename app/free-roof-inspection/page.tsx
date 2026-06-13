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
  title: "Free Roof Inspection NYC — Skyward Roofing | No Obligation Estimate",
  description:
    "Free in-person roof inspections across all five NYC boroughs and Westchester. Written estimate included. No obligation to hire. Licensed & insured roofers.",
};

export default function FreeRoofInspectionPage() {
  return (
    <>
      <PageHeroSection
        title="Free Roof Inspection"
        subtitle="We come to you, walk the roof in person, and provide a written estimate at no cost — no obligation, no phone quotes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Free Roof Inspection" },
        ]}
      />
      <ServiceDetailSection
        activeService="Free Roof Inspection"
        sidebarImage="https://www.skywardroofing.com/uploads/1/1/6/0/116005231/skyward-rooofing-service-example-nyc-orig_orig.jpg"
        sidebarImageWidth={800}
        sidebarImageHeight={600}
        heading="Free In-Person Roof Inspection"
        intro={[
          "Skyward Roofing provides free roof inspections across all five NYC boroughs, Yonkers, and Westchester County. We don't give phone quotes — an accurate estimate requires actually seeing the roof. Our licensed team walks every inch of the roof, identifies existing damage and potential problem areas, and gives you a clear written estimate before any work begins.",
          "There is no obligation to hire us after the inspection. Our goal is to give you honest information about the condition of your roof so you can make the right decision — whether that's with us or someone else.",
        ]}
        whatWeDo={[
          "Full roof walkthrough by a licensed NYC roofer",
          "Damage assessment for all roof types",
          "Identification of leaks, wear, and at-risk areas",
          "Written estimate provided on-site",
          "Honest repair vs. replacement recommendation",
          "Photo documentation of findings",
        ]}
        whyChooseUs={[
          "No phone quotes — we come to you every time",
          "Zero obligation — the inspection is genuinely free",
          "Licensed (NYC #2100010-DCA), bonded, and insured",
          "50+ years of NYC roofing experience on the team",
          "Third-generation family business — reputation matters to us",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
