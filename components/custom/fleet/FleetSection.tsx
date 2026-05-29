"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FleetSection() {
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
        gsap.from(".fleet-section__text", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".fleet-section__img", {
          scale: 0.92, opacity: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fleet-section" ref={sectionRef}>
      <div className="fleet-section__container">
        {/* LEFT — text */}
        <div className="fleet-section__text">
          <div className="fleet-section__eyebrow">Our Work</div>
          <h2 className="fleet-section__heading">
            Roofing You Can See — Before &amp; After
          </h2>
          <p className="fleet-section__intro">
            Every job we complete is documented with before-and-after photos. From flat
            roof replacements and shingle repairs to full residential tear-offs across the
            Bronx, Brooklyn, Manhattan, Queens, and Staten Island — the results speak for
            themselves.
          </p>
        </div>

        {/* RIGHT — 3 images stacked */}
        <div className="fleet-section__images">
          <Image
            src="https://www.skywardroofing.com/uploads/1/1/6/0/116005231/dji-fly-20250506-141730-527-1746555462466-photo.jpg"
            alt="Tile and flat roof replacement by Skyward Roofing NYC"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="https://www.skywardroofing.com/uploads/1/1/6/0/116005231/bobbranton-image2-orig-highqualitymaterialsservice_orig.jpeg"
            alt="Top-down drone shot of asphalt shingle roof replaced by Skyward Roofing"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="https://www.skywardroofing.com/uploads/1/1/6/0/116005231/img-4442-1.jpeg"
            alt="Completed slate roof with dormers and chimney by Skyward Roofing"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
        </div>
      </div>
    </section>
  );
}
