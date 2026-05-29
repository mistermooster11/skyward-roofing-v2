"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function TrustedLogos() {
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
        gsap.fromTo(
          ".trusted__heading",
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all",
            scrollTrigger: { trigger: ".trusted__heading", start: "top 92%", once: true },
          }
        );
        gsap.fromTo(
          ".trusted__logo-item",
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.12, clearProps: "all",
            scrollTrigger: { trigger: ".trusted__logos", start: "top 92%", once: true },
          }
        );
      }, sectionRef);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="trusted" ref={sectionRef}>
      <div className="trusted__inner">
        <h2 className="trusted__heading">
          Real Work. Real Results. Across All Five NYC Boroughs.
        </h2>
        <div className="trusted__logos">
          <div className="trusted__logo-item">
            <Image
              src="/images/roofer-inspecting-asphalt-shingles-closeup.jpg"
              alt="Skyward Roofing inspector examining asphalt shingles"
              width={300}
              height={200}
              style={{ height: "120px", width: "auto", borderRadius: "6px", objectFit: "cover" }}
            />
          </div>
          <div className="trusted__logo-item">
            <Image
              src="/images/chimney-inspection-repair-rooftop-worker.jpg"
              alt="Skyward Roofing technician inspecting chimney on NYC rooftop"
              width={300}
              height={200}
              style={{ height: "120px", width: "auto", borderRadius: "6px", objectFit: "cover" }}
            />
          </div>
          <div className="trusted__logo-item">
            <Image
              src="/images/roofing-crew-installing-shingles-aerial-view.jpg"
              alt="Skyward Roofing crew installing shingles on residential roof"
              width={300}
              height={200}
              style={{ height: "120px", width: "auto", borderRadius: "6px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
