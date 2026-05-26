export type PricingCard = {
  price: string;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

export const pricingCards: PricingCard[] = [
  {
    price: "Free",
    note: "No obligation. Written estimate included",
    title: "Roof Inspection",
    features: [
      "Full roof walkthrough",
      "Damage assessment & diagnosis",
      "Written estimate before any work",
      "Honest repair vs. replace recommendation",
    ],
    description:
      "We come to you, inspect the roof in person, and give you a written estimate at no cost. No phone quotes — we believe an accurate assessment requires actually seeing the roof.",
  },
  {
    price: "Call for Quote",
    note: "Flat roofs, shingles, metal, slate & more",
    title: "Roof Repair",
    features: [
      "Leak detection & patching",
      "Flashing repair & replacement",
      "Shingle, tile & metal repairs",
      "Gutter repair & maintenance",
      "Chimney work",
    ],
    description:
      "Targeted fixes for damage, leaks, and wear. We only recommend repair when that's the right call — never upsell to a full replacement when it isn't needed.",
    highlight: true,
  },
  {
    price: "Call for Quote",
    note: "Residential & commercial properties",
    title: "Full Replacement",
    features: [
      "Complete tear-off & haul-away",
      "All roof types: flat, pitched, metal",
      "TPO, EPDM, SPF, asphalt & more",
      "Licensed & insured crew",
      "20-year material warranty available",
    ],
    description:
      "Full roof replacement for residential and commercial properties across all five NYC boroughs and Westchester. Written estimate and timeline before work begins.",
  },
];
