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
    image: "/images/roofers-installing-shingles-teamwork.jpg",
    href: "/residential-roofing",
    width: 800,
    height: 600,
  },
  {
    number: "02",
    title: "Commercial Roofing",
    image: "/images/roofing-crew-installing-shingles-aerial-view.jpg",
    href: "/commercial-roofing",
    width: 800,
    height: 600,
  },
  {
    number: "03",
    title: "Flat Roofing",
    image: "/images/worker-applying-roof-coating-roller.jpg",
    href: "/flat-roofing",
    width: 800,
    height: 600,
  },
  {
    number: "04",
    title: "Free Roof Inspection",
    image: "/images/roofer-inspecting-asphalt-shingles-closeup.jpg",
    href: "/free-roof-inspection",
    width: 800,
    height: 600,
  },
];
