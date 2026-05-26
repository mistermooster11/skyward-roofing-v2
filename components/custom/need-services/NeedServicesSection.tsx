"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

export default function NeedServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".need-services__inner > *", {
          y: 35, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="need-services" ref={sectionRef}>
      <div className="need-services__inner">
        <h2 className="need-services__heading">
          Need a Roof Inspection or Repair
          <br />Anywhere in NYC?
        </h2>
        <p className="need-services__text">
          We serve the Bronx, Brooklyn, Manhattan, Queens, Staten Island, Yonkers, and
          Westchester County. <br />Free in-person inspections — call us or send a message and
          we&apos;ll get you scheduled.
        </p>
        <Link href="/free-roof-inspection" className="need-services__btn">
          Book Free Inspection
        </Link>
      </div>
    </section>
  );
}
