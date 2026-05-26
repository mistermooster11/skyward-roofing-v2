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
    image: "/images/service-1.png",
    href: "/residential-roofing",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Commercial Roofing",
    image: "/images/service-2.png",
    href: "/commercial-roofing",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Flat Roofing",
    image: "/images/service-3.webp",
    href: "/flat-roofing",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Free Roof Inspection",
    image: "/images/service-4.webp",
    href: "/free-roof-inspection",
    width: 535,
    height: 643,
  },
];
