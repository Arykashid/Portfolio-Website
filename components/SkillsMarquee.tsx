"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillItem {
  name: string;
}

const mlDataSkills: SkillItem[] = [
  { name: "Python" },
  { name: "SQL" },
  { name: "Pandas" },
  { name: "NumPy" },
  { name: "Scikit-learn" },
  { name: "PyTorch" },
  { name: "Exploratory Data Analysis" },
  { name: "A/B Testing" },
  { name: "Data Cleaning" },
  { name: "Statistical Modeling" },
];

const mlMethodsSkills: SkillItem[] = [
  { name: "Time-Series Forecasting" },
  { name: "NLP" },
  { name: "Ensemble Modeling" },
  { name: "Retrieval-Augmented Generation" },
  { name: "Feature Engineering" },
  { name: "Hysteresis State Machines" },
  { name: "Confidence Gating" },
  { name: "Anomaly Detection" },
];

const engineeringSkills: SkillItem[] = [
  { name: "Streamlit" },
  { name: "Flask" },
  { name: "Docker" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Vercel" },
  { name: "REST APIs" },
];

interface MarqueeRowProps {
  label: string;
  skills: SkillItem[];
  direction?: "left" | "right";
  speed?: string;
}

function MarqueeRow({
  label,
  skills,
  direction = "left",
  speed = "28s",
}: MarqueeRowProps) {
  const rowAnimClass = direction === "left" ? "skills-row-left" : "skills-row-right";

  return (
    <div className="skills-category-row w-full flex flex-col gap-3 pb-6 border-b border-[#444749]/20 last:border-b-0">
      {/* Category Header */}
      <div className="category-label flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f7bd55]" />
        <h3 className="font-label text-xs sm:text-sm text-[#f7bd55] uppercase tracking-wider font-semibold">
          {label}
        </h3>
      </div>

      {/*
        Seamless infinite marquee:
        The inner wrapper contains two identical flex children (Track Half A and Track Half B).
        Each half ends with pr-3 (12px) matching gap-3 (12px).
        Translating by -50% produces a flawless, seamless continuous loop with no clipped text,
        no jumps, and no visible duplicate sequences in the viewport.
      */}
      <div
        className="w-full overflow-hidden relative py-1 skills-track-wrapper"
        style={{ "--marquee-duration": speed } as React.CSSProperties}
      >
        <div className={`flex w-max ${rowAnimClass}`}>
          {/* Half A (Unique sequence) */}
          <div className="flex shrink-0 items-center gap-3 pr-3">
            {skills.map((skill, idx) => (
              <div
                key={`${skill.name}-a-${idx}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1b1c1e] border border-[#444749]/30 text-[#e3e2e5] hover:border-[#f7bd55]/50 hover:text-[#ffffff] transition-colors cursor-default select-none shadow-sm whitespace-nowrap"
              >
                <span className="font-label text-xs sm:text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Half B (Seamless continuous loop duplicate) */}
          <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden="true">
            {skills.map((skill, idx) => (
              <div
                key={`${skill.name}-b-${idx}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1b1c1e] border border-[#444749]/30 text-[#e3e2e5] hover:border-[#f7bd55]/50 hover:text-[#ffffff] transition-colors cursor-default select-none shadow-sm whitespace-nowrap"
              >
                <span className="font-label text-xs sm:text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsContainerRef = useRef<HTMLDivElement>(null);

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
          // Clear transforms, ensure everything visible
          if (headerRef.current) gsap.set(headerRef.current, { clearProps: "all" });
          if (rowsContainerRef.current) {
            const rows = gsap.utils.toArray<HTMLElement>(".skills-category-row", rowsContainerRef.current);
            rows.forEach((r) => gsap.set(r, { clearProps: "all" }));
          }
          return;
        }

        // ── INITIAL STATES ──
        // Header: mask-reveal (will slide up from inside overflow:hidden wrapper)
        gsap.set(headerRef.current, { yPercent: 110, opacity: 0 });

        const rows = rowsContainerRef.current
          ? gsap.utils.toArray<HTMLElement>(".skills-category-row", rowsContainerRef.current)
          : [];

        if (rows.length >= 3) {
          // Each row starts progressively further below — creates a staircase entry feel
          gsap.set(rows[0], { y: isDesktop ? 80 : 48, opacity: 0 });
          gsap.set(rows[1], { y: isDesktop ? 120 : 70, opacity: 0 });
          gsap.set(rows[2], { y: isDesktop ? 160 : 95, opacity: 0 });
        }

        // ── MAIN SCRUB TIMELINE ──
        // Full section height: animation responds throughout, not just on-enter
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.0,
          },
        });

        // ─── PHASE 1: Entrance (progress 0 → ~0.40) ──────────────────────────

        // Section label: editorial mask reveal — snaps up first
        tl.to(
          headerRef.current,
          { yPercent: 0, opacity: 1, ease: "power3.out", duration: 0.2 },
          0
        );

        // Row 0: first to arrive
        tl.to(
          rows[0],
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.26 },
          0.08
        );

        // Row 1: slightly behind
        tl.to(
          rows[1],
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.28 },
          0.17
        );

        // Row 2: last, most delayed — staircase progression
        tl.to(
          rows[2],
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.3 },
          0.26
        );

        // ─── PHASE 2: Through-Scroll Differential Depth (progress ~0.40 → 1.0) ──
        // Header moves least (background feel), row2 moves most (foreground feel).
        // The 4x ratio between header (-25px) and row2 (-100px) creates VISIBLE depth.

        // Header: slow drift — feels anchored/far
        tl.to(
          headerRef.current,
          { y: isDesktop ? -25 : -12, ease: "none", duration: 0.6 },
          0.40
        );

        // Row 0: medium drift
        tl.to(
          rows[0],
          { y: isDesktop ? -50 : -25, ease: "none", duration: 0.6 },
          0.40
        );

        // Row 1: medium-fast drift
        tl.to(
          rows[1],
          { y: isDesktop ? -75 : -38, ease: "none", duration: 0.6 },
          0.40
        );

        // Row 2: fastest — clearly moves further than rows above it
        tl.to(
          rows[2],
          { y: isDesktop ? -100 : -50, ease: "none", duration: 0.6 },
          0.40
        );

        // Category labels: subtle internal differential — slightly slower than their parent row
        const labels = rowsContainerRef.current
          ? gsap.utils.toArray<HTMLElement>(".category-label", rowsContainerRef.current)
          : [];
        if (labels.length > 0) {
          tl.to(
            labels,
            { y: isDesktop ? -12 : -6, ease: "none", duration: 0.6 },
            0.40
          );
        }

        // ─── PHASE 3: Exit Transition → Projects (Skills bottom leaving viewport) ──
        // As Skills exits, its layers continue moving upward with differential rates.
        // This overlaps with the Projects header beginning its entrance below.
        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "75% bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Header: slowest — background feel, barely moves on exit
        exitTl.to(
          headerRef.current,
          { y: isDesktop ? -15 : -8, opacity: 0.88, ease: "none", duration: 1 },
          0
        );

        // Row 0: slightly faster than header
        if (rows.length >= 1) {
          exitTl.to(
            rows[0],
            { y: isDesktop ? -30 : -15, opacity: 0.87, ease: "none", duration: 1 },
            0
          );
        }

        // Row 1: medium
        if (rows.length >= 2) {
          exitTl.to(
            rows[1],
            { y: isDesktop ? -45 : -22, opacity: 0.86, ease: "none", duration: 1 },
            0
          );
        }

        // Row 2: fastest foreground layer
        if (rows.length >= 3) {
          exitTl.to(
            rows[2],
            { y: isDesktop ? -55 : -28, opacity: 0.85, ease: "none", duration: 1 },
            0
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
      id="skills"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-24"
    >
      {/* Section Header with overflow-hidden mask */}
      <div className="overflow-hidden mb-8">
        <div ref={headerRef} className="flex items-center gap-3">
          <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
            // SKILLS &amp; CAPABILITIES
          </span>
          <div className="h-px flex-1 bg-[#343537]" />
          <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
            INDEX · 02
          </span>
        </div>
      </div>

      <div ref={rowsContainerRef} className="flex flex-col gap-6 w-full">
        <MarqueeRow
          label="01 // ML &amp; DATA"
          skills={mlDataSkills}
          direction="left"
          speed="26s"
        />
        <MarqueeRow
          label="02 // ML METHODS"
          skills={mlMethodsSkills}
          direction="right"
          speed="30s"
        />
        <MarqueeRow
          label="03 // ENGINEERING &amp; INFRASTRUCTURE"
          skills={engineeringSkills}
          direction="left"
          speed="28s"
        />
      </div>
    </section>
  );
}
