export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Residential Roofing",   href: "/residential-roofing" },
  { label: "Commercial Roofing",    href: "/commercial-roofing" },
  { label: "Flat Roofing",          href: "/flat-roofing" },
  { label: "Free Roof Inspection",  href: "/free-roof-inspection" },
  { label: "Roof Maintenance",      href: "/roof-maintenance" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Residential Roofing",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/skyward-roofing-service-nyc-orig.jpg",
    href: "/residential-roofing",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Commercial Roofing",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/flat-roofing-service-skyward-roofing-nyc-orig.jpg",
    href: "/commercial-roofing",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Flat Roofing",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/commercial-flat-roof-install-skyward-roofing-nyc-orig.jpg",
    href: "/flat-roofing",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Free Roof Inspection",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/skyward-rooofing-service-example-nyc-orig_orig.jpg",
    href: "/free-roof-inspection",
    width: 535,
    height: 643,
  },
];
