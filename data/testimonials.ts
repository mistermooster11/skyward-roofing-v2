export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Brice & Jamie King",
    rating: 5,
    text: "Our experience with Skyward Roofing was flawless. Bob explained everything we needed, knocked out the project in no time, and inspected his crew's work throughout the process. The price was fantastic as well. We have referred them to several other business owners and will continue to do so.",
    avatar: "https://ui-avatars.com/api/?name=Brice+King&background=0071AB&color=fff&size=40",
  },
  {
    name: "Peter Robinson",
    rating: 5,
    text: "Skyward came out within 48 hours, gave me a written estimate on the spot, and had the repair done the same week. No upselling, no nonsense. I appreciated the honesty — they told me the rest of the roof was solid and only fixed what was needed.",
    avatar: "https://ui-avatars.com/api/?name=Peter+Robinson&background=0071AB&color=fff&size=40",
  },
  {
    name: "Jordan Wells",
    rating: 5,
    text: "Third-generation family business and it shows — these guys take pride in their work. They handled our flat roof replacement on a commercial property in Brooklyn and the crew was professional from start to finish. Highly recommend for any NYC property owner.",
    avatar: "https://ui-avatars.com/api/?name=Jordan+Wells&background=0071AB&color=fff&size=40",
  },
  {
    name: "Maria Santos",
    rating: 5,
    text: "I called three roofing companies before Skyward. They were the only ones who actually came out in person for the estimate — no phone quotes. Bob walked the whole roof, showed me exactly what needed to be done, and the final bill matched the estimate to the dollar.",
    avatar: "https://ui-avatars.com/api/?name=Maria+Santos&background=0071AB&color=fff&size=40",
  },
  {
    name: "David Ferencz",
    rating: 5,
    text: "Been using Skyward for two properties in Queens. They do excellent work on both flat and pitched roofs. Responsive, licensed, and they always follow up after the job. Can't ask for more.",
    avatar: "https://ui-avatars.com/api/?name=David+Ferencz&background=0071AB&color=fff&size=40",
  },
  {
    name: "Angela Torres",
    rating: 5,
    text: "After a bad storm damaged our shingles, Skyward was out within 24 hours. They patched the emergency the same day and scheduled the full repair for the following week. Honest, fast, and fairly priced. This is the only roofing company I'll call going forward.",
    avatar: "https://ui-avatars.com/api/?name=Angela+Torres&background=0071AB&color=fff&size=40",
  },
];
