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
  title: "Residential Roofing NYC — Skyward Roofing | All 5 Boroughs",
  description:
    "Residential roof repairs and replacements across all five NYC boroughs, Yonkers, and Westchester. Free in-person inspections, written estimates, licensed & insured.",
};

export default function ResidentialRoofingPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Roofing"
        subtitle="Repairs, replacements, and free inspections for homeowners across all five NYC boroughs, Yonkers, and Westchester County."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Residential Roofing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Roofing"
        sidebarImage="/images/service-1.png"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Residential Roofing Services"
        intro={[
          "Skyward Roofing handles all residential roofing work across the five boroughs and Westchester — from emergency leak repairs to full roof replacements. Our third-generation team works on every roof type: asphalt shingles, flat roofs, metal, slate, and tile.",
          "We start every job with a free in-person inspection. No phone quotes — we believe an accurate estimate requires actually walking the roof. You get a written estimate before any work begins, and we only recommend what your roof genuinely needs.",
        ]}
        whatWeDo={[
          "Free in-person roof inspections with written estimate",
          "Roof repair — leaks, flashing, shingles, valleys, and ridges",
          "Full roof replacement for all material types",
          "Emergency storm damage response",
          "Chimney and gutter services",
          "Before/after photo documentation on every job",
        ]}
        whyChooseUs={[
          "Third-generation family business — our reputation is on every job",
          "Licensed (NYC #2100010-DCA), bonded, and fully insured",
          "Honest assessments — repair when repair will do",
          "50+ combined years on NYC roofs",
          "Direct team contact — no call centers or middlemen",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
