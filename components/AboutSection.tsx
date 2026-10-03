"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tags = [
  "Machine Learning",
  "Time-Series Forecasting",
  "NLP & Retrieval Systems",
  "Applied AI Engineering",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) {
          // Ensure everything is fully visible with no transforms
          gsap.set(
            [eyebrowRef.current, headingRef.current, contentRef.current, tagsRef.current],
            { clearProps: "all" }
          );
          return;
        }

        // ── INITIAL STATES: elements begin off-screen before scroll ──
        // Eyebrow: pushed far down inside overflow:hidden parent — creates mask-reveal
        gsap.set(eyebrowRef.current, { yPercent: 120, opacity: 0 });
        // Heading: same mask-reveal treatment
        gsap.set(headingRef.current, { yPercent: 120, opacity: 0 });
        // Content: slides up with opacity
        gsap.set(contentRef.current, { y: isDesktop ? 90 : 55, opacity: 0 });

        const tagEls = tagsRef.current
          ? (Array.from(tagsRef.current.children) as HTMLElement[])
          : [];
        if (tagEls.length > 0) {
          gsap.set(tagEls, { y: isDesktop ? 50 : 32, opacity: 0, scale: 0.92 });
        }

        // ── MAIN SCRUB TIMELINE: full section height ──
        // "top bottom" = animation starts the instant the section top enters the viewport.
        // "bottom top" = animation ends when the section bottom leaves the viewport.
        // This means the animation is tied to scroll position throughout, not just on-enter.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.0,
          },
        });

        // ─── PHASE 1: Entrance (timeline progress 0 → ~0.42) ──────────────────
        // Each layer enters sequentially at a different rate — creates true choreography.

        // Eyebrow: fastest layer, snaps in first (editorial mask-reveal)
        tl.to(
          eyebrowRef.current,
          { yPercent: 0, opacity: 1, ease: "power3.out", duration: 0.2 },
          0
        );

        // Heading: slides up from behind mask slightly after eyebrow
        tl.to(
          headingRef.current,
          { yPercent: 0, opacity: 1, ease: "power3.out", duration: 0.28 },
          0.07
        );

        // Content: arrives later than heading at a more relaxed pace
        tl.to(
          contentRef.current,
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.32 },
          0.16
        );

        // Tags: staggered entrance after content — feels like they "cascade in"
        if (tagEls.length > 0) {
          tl.to(
            tagEls,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              stagger: 0.03,
              ease: "power2.out",
              duration: 0.24,
            },
            0.26
          );
        }

        // ─── PHASE 2: Through-Scroll Differential Depth (progress ~0.42 → 1.0) ──
        // The key visual effect: each layer moves at a VISIBLY different rate.
        // Eyebrow drifts -30px total, tags drift -120px total.
        // With scrub=1.0 this plays out gradually as user scrolls — creates real depth.

        // Eyebrow: slowest drift — feels like the background layer
        tl.to(
          eyebrowRef.current,
          { y: isDesktop ? -30 : -15, ease: "none", duration: 0.58 },
          0.42
        );

        // Heading: medium-slow — clearly faster than eyebrow
        tl.to(
          headingRef.current,
          { y: isDesktop ? -60 : -30, ease: "none", duration: 0.58 },
          0.42
        );

        // Content: noticeably faster than heading
        tl.to(
          contentRef.current,
          { y: isDesktop ? -95 : -48, ease: "none", duration: 0.58 },
          0.42
        );

        // Tags: fastest — feels like the "foreground" layer
        if (tagEls.length > 0) {
          tl.to(
            tagsRef.current,
            { y: isDesktop ? -120 : -60, ease: "none", duration: 0.58 },
            0.42
          );
        }

      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-24"
    >
      {/* Layer 1: Section Eyebrow — overflow:hidden is the mask for the editorial reveal */}
      <div className="overflow-hidden mb-8">
        <div ref={eyebrowRef} className="flex items-center gap-3">
          <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
            // ABOUT
          </span>
          <div className="h-px flex-1 bg-[#343537]" />
          <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
            INDEX · 01
          </span>
        </div>
      </div>

      {/* Narrative & Editorial Structure */}
      <div className="max-w-4xl space-y-6">
        {/* Layer 2: Headline — overflow:hidden is the mask for the editorial reveal */}
        <div className="overflow-hidden">
          <h2
            ref={headingRef}
            className="font-sans text-2xl sm:text-3xl text-[#ffffff] font-normal leading-snug tracking-tight"
          >
            I build data-driven systems that turn complex problems into practical, reliable solutions.
          </h2>
        </div>

        {/* Layer 3: Body Paragraph */}
        <p
          ref={contentRef}
          className="font-sans text-lg sm:text-xl text-[#c4c7c9] leading-relaxed font-normal"
        >
          I&apos;m an Artificial Intelligence &amp; Data Science undergraduate focused on machine learning, data science, and intelligent systems — working across the full path from raw data and experimentation to models, applications, and deployment. My interests span time-series forecasting, NLP, retrieval-augmented systems, and applied machine learning. I&apos;m particularly drawn to building systems that are not only accurate, but useful, explainable, and designed for real-world constraints.
        </p>

        {/* Layer 4: Focus Tags with Staggered Entrance */}
        <div ref={tagsRef} className="flex flex-wrap items-center gap-2.5 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-label text-xs px-3.5 py-1.5 rounded bg-[#1f2022] text-[#e3e2e5] tracking-wider border border-[#444749]/40 hover:border-[#f7bd55]/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

