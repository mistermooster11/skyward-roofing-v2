export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/repair-vs-replace-how-to-know-whats-right-for-your-roof",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/bbranton-image5-orig.jpeg",
    date: "15",
    monthYear: "Apr '26",
    category: "Roof Advice",
    categoryHref: "/blog",
    title: "Repair vs. Replace: How to Know What's Right for Your Roof",
    excerpt:
      "Age, damage extent, and roof type all factor into this decision. Here's how a licensed NYC roofer evaluates your options — and why honest advice matters more than a bigger job.",
  },
  {
    slug: "/blog/5-signs-your-flat-roof-needs-attention-before-the-next-rainstorm",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/bbranton-image4-orig.jpeg",
    date: "01",
    monthYear: "Apr '26",
    category: "Flat Roofing",
    categoryHref: "/blog",
    title: "5 Signs Your Flat Roof Needs Attention Before the Next Rainstorm",
    excerpt:
      "Flat roofs in NYC take a beating year-round. Ponding water, bubbling membrane, and cracked flashing are early warning signs you shouldn't ignore.",
  },
  {
    slug: "/blog/what-to-expect-during-a-free-roof-inspection",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/bbranton-image5-orig.jpeg",
    date: "18",
    monthYear: "Mar '26",
    category: "Inspections",
    categoryHref: "/blog",
    title: "What to Expect During a Free Roof Inspection",
    excerpt:
      "We walk every roof in person. Here's exactly what our licensed inspectors look for — and why we never give phone quotes.",
  },
  {
    slug: "/blog/tpo-vs-epdm-vs-spf-which-flat-roof-system-is-right-for-your-building",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/bbranton-image4-orig.jpeg",
    date: "05",
    monthYear: "Mar '26",
    category: "Flat Roofing",
    categoryHref: "/blog",
    title: "TPO vs. EPDM vs. SPF: Which Flat Roof System Is Right for Your Building?",
    excerpt:
      "Three of the most common flat roofing systems explained — what they cost, how long they last, and which situations each is best suited for in the NYC climate.",
  },
  {
    slug: "/blog/how-nyc-winters-affect-your-roof-and-what-you-can-do-about-it",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/bbranton-image5-orig.jpeg",
    date: "20",
    monthYear: "Feb '26",
    category: "Maintenance",
    categoryHref: "/blog",
    title: "How NYC Winters Affect Your Roof — And What You Can Do About It",
    excerpt:
      "Ice dams, freeze-thaw cycles, and heavy snow loads are facts of life in New York. This guide covers the most common winter roof damage and how to prevent it.",
  },
  {
    slug: "/blog/why-gutter-maintenance-is-a-roofing-issue",
    image: "https://www.skywardroofing.com/uploads/1/1/6/0/116005231/bbranton-image4-orig.jpeg",
    date: "10",
    monthYear: "Feb '26",
    category: "Gutters",
    categoryHref: "/blog",
    title: "Why Gutter Maintenance Is a Roofing Issue",
    excerpt:
      "Clogged or damaged gutters are one of the leading causes of roof and fascia damage. Here's what to look for and when to call a roofer instead of just cleaning the gutters yourself.",
  },
];
