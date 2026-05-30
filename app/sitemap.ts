import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.skywardroofing.com";
  const routes = [
    "",
    "/about-us",
    "/services-page",
    "/residential-roofing",
    "/commercial-roofing",
    "/flat-roofing",
    "/free-roof-inspection",
    "/roof-maintenance",
    "/blog",
    "/faq",
    "/contact-us",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
