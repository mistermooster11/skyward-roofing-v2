import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Roofing Blog — Skyward Roofing | NYC Roofing Tips & Guides",
  description:
    "Expert roofing tips, guides, and insights from Skyward Roofing. Topics include repair vs. replacement, flat roofing, NYC winters, gutters, and free inspections.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Blog"
        subtitle="Expert roofing tips, maintenance guides, and NYC-specific advice from the Skyward Roofing team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
