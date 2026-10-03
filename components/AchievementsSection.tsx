"use client";

import React, { useEffect, useRef } from "react";
import { GraduationCap, Award, Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
          // Ensure everything fully visible
          if (headerRef.current) gsap.set(headerRef.current, { clearProps: "all" });
          if (containerRef.current) gsap.set(containerRef.current, { clearProps: "all" });
          return;
        }

        // ── INITIAL STATES ──
        gsap.set(headerRef.current, { yPercent: 110, opacity: 0 });

        const subheads = containerRef.current
          ? gsap.utils.toArray<HTMLElement>(".achieve-subhead", containerRef.current)
          : [];
        if (subheads.length > 0) {
          gsap.set(subheads, { y: isDesktop ? 50 : 30, opacity: 0 });
        }

        const eduCard = containerRef.current?.querySelector(".edu-card");
        if (eduCard) {
          gsap.set(eduCard, { y: isDesktop ? 90 : 55, scale: 0.93, opacity: 0 });
        }

        const honorCards = containerRef.current
          ? gsap.utils.toArray<HTMLElement>(".honor-card", containerRef.current)
          : [];
        if (honorCards.length > 0) {
          honorCards.forEach((card, i) => {
            gsap.set(card, { y: isDesktop ? 80 + i * 30 : 50 + i * 18, opacity: 0, scale: 0.94 });
          });
        }

        // ── MAIN SCRUB TIMELINE: full section height ──
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.0,
          },
        });

        // ─── PHASE 1: Entrance (progress 0 → ~0.45) ──────────────────────────

        // Header: mask-reveal first
        tl.to(
          headerRef.current,
          { yPercent: 0, opacity: 1, ease: "power3.out", duration: 0.2 },
          0
        );

        // Subheads: follow header
        if (subheads.length > 0) {
          tl.to(
            subheads,
            { y: 0, opacity: 1, stagger: 0.04, ease: "power2.out", duration: 0.22 },
            0.1
          );
        }

        // Education card: arrives with scale-up
        if (eduCard) {
          tl.to(
            eduCard,
            { y: 0, scale: 1, opacity: 1, ease: "power2.out", duration: 0.32 },
            0.18
          );
        }

        // Honor cards: cascade in with progressive stagger
        if (honorCards.length > 0) {
          tl.to(
            honorCards,
            {
              y: 0,
              scale: 1,
              opacity: 1,
              stagger: 0.06,
              ease: "power2.out",
              duration: 0.3,
            },
            0.26
          );
        }

        // ─── PHASE 2: Through-Scroll Differential Depth (progress ~0.45 → 1.0) ──

        // Header: slowest
        tl.to(
          headerRef.current,
          { y: isDesktop ? -28 : -14, ease: "none", duration: 0.55 },
          0.45
        );

        // Subheads: medium speed
        if (subheads.length > 0) {
          tl.to(
            subheads,
            { y: isDesktop ? -50 : -25, ease: "none", duration: 0.55 },
            0.45
          );
        }

        // Edu card: medium-fast
        if (eduCard) {
          tl.to(
            eduCard,
            { y: isDesktop ? -70 : -35, ease: "none", duration: 0.55 },
            0.45
          );
        }

        // Honor cards: fastest — most foreground feel
        if (honorCards.length > 0) {
          tl.to(
            honorCards,
            {
              y: isDesktop ? -90 : -45,
              ease: "none",
              duration: 0.55,
            },
            0.45
          );
        }

        // ─── PHASE 3: Exit Transition → Contact (Achievements bottom leaving viewport) ──
        // Differential continued upward motion as Achievements hands off to Contact.
        // Contact's cinematic card entrance overlaps with this exit.
        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "75% bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Header: slowest exit layer
        exitTl.to(
          headerRef.current,
          { y: isDesktop ? -15 : -8, opacity: 0.88, ease: "none", duration: 1 },
          0
        );

        // Subheads: medium exit
        if (subheads.length > 0) {
          exitTl.to(
            subheads,
            { y: isDesktop ? -25 : -12, opacity: 0.87, ease: "none", duration: 1 },
            0
          );
        }

        // Edu card: medium-fast exit
        if (eduCard) {
          exitTl.to(
            eduCard,
            { y: isDesktop ? -38 : -19, opacity: 0.86, ease: "none", duration: 1 },
            0
          );
        }

        // Honor cards: fastest exit layer
        if (honorCards.length > 0) {
          exitTl.to(
            honorCards,
            { y: isDesktop ? -40 : -20, opacity: 0.85, ease: "none", duration: 1 },
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
      id="achievements"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-24"
    >
      {/* Section Header — overflow:hidden enables the yPercent mask reveal */}
      <div className="overflow-hidden mb-8">
        <div ref={headerRef} className="flex items-center gap-3">
          <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
            // EDU &amp; ACHIEVEMENTS
          </span>
          <div className="h-px flex-1 bg-[#343537]" />
          <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
            INDEX · 04
          </span>
        </div>
      </div>

      {/* Unified 2-Column Grid: Stacks to 1 Column on Mobile */}
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
        {/* Left Column: Academic Foundation (Mobile full-width, Desktop 5-col) */}
        <div className="lg:col-span-5 flex flex-col w-full">
          <div className="achieve-subhead flex items-center gap-2 mb-4">
            <GraduationCap size={16} className="text-[#f7bd55]" />
            <span className="font-section-marker text-xs sm:text-sm text-[#c4c7c9] uppercase tracking-wider font-semibold">
              01 / ACADEMIC FOUNDATION
            </span>
            <span className="h-px flex-1 bg-[#343537]/70" />
          </div>

          <div className="edu-card flex flex-col flex-1 h-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 flex flex-col justify-between h-full group hover:border-[#f7bd55]/40 transition-colors duration-300 shadow-lg">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-label text-xs px-2.5 py-1 rounded bg-[#f7bd55]/15 text-[#f7bd55] uppercase tracking-wider font-semibold">
                    EDUCATION
                  </span>
                  <span className="font-label text-xs px-2.5 py-1 rounded bg-[#292a2c] text-[#ffffff] font-medium">
                    2023 – 2027
                  </span>
                </div>

                <h3 className="font-sans text-xl sm:text-2xl text-[#ffffff] font-semibold tracking-tight mt-3">
                  B.Tech in Artificial Intelligence &amp; Data Science
                </h3>
                <p className="font-sans text-base text-[#e3e2e5] mt-2">
                  Government College of Engineering, Kolhapur
                </p>
                <div className="mt-4 pt-4 border-t border-[#444749]/30 flex items-center justify-between">
                  <span className="font-label text-xs text-[#00daf3] tracking-wider font-medium">
                    ACADEMIC RANKING
                  </span>
                  <span className="font-label text-xs text-[#f7bd55] bg-[#f7bd55]/10 px-2.5 py-1 rounded border border-[#f7bd55]/30 font-semibold">
                    Top 10% of Batch
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#444749]/20 flex items-center gap-2 text-xs text-[#8e9193] font-label">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00daf3]" />
                <span>Core: Distributed ML, Deep Learning &amp; Cloud Infra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Honors & Recognition (Mobile full-width, Desktop 7-col) */}
        <div className="lg:col-span-7 flex flex-col w-full">
          <div className="achieve-subhead flex items-center gap-2 mb-4">
            <Trophy size={16} className="text-[#f7bd55]" />
            <span className="font-section-marker text-xs sm:text-sm text-[#c4c7c9] uppercase tracking-wider font-semibold">
              02 / HONORS &amp; RECOGNITION
            </span>
            <span className="h-px flex-1 bg-[#343537]/70" />
          </div>

          <div className="flex flex-col gap-4">
            {/* Honor 1: Hackathon */}
            <div className="honor-card">
              <div className="group p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 hover:border-[#f7bd55]/50 hover:bg-[#1f2022] transition-all duration-300 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="font-label text-xs px-2.5 py-1 rounded bg-[#f7bd55]/15 text-[#f7bd55] uppercase tracking-wider font-semibold">
                      HACKATHON
                    </span>
                    <Award size={14} className="text-[#f7bd55]" />
                  </div>
                  <h3 className="font-sans text-lg sm:text-xl text-[#ffffff] font-semibold group-hover:text-[#f7bd55] transition-colors">
                    Token of Appreciation — Sentiment Analysis Project
                  </h3>
                  <p className="font-sans text-sm text-[#c4c7c9]">
                    National-Level Hackathon · Awarded for end-to-end NLP pipeline and high accuracy ensemble model
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-[#444749]/30">
                  <span className="font-display text-2xl sm:text-3xl text-[#ffffff] font-normal group-hover:text-[#f7bd55] transition-colors">
                    2025
                  </span>
                  <span className="font-label text-[10px] text-[#8e9193] uppercase tracking-wider">
                    NATIONAL
                  </span>
                </div>
              </div>
            </div>

            {/* Honor 2: Ideathon */}
            <div className="honor-card">
              <div className="group p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 hover:border-[#f7bd55]/50 hover:bg-[#1f2022] transition-all duration-300 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="font-label text-xs px-2.5 py-1 rounded bg-[#f7bd55]/15 text-[#f7bd55] uppercase tracking-wider font-semibold">
                      IDEATHON
                    </span>
                    <Trophy size={14} className="text-[#f7bd55]" />
                  </div>
                  <h3 className="font-sans text-lg sm:text-xl text-[#ffffff] font-semibold group-hover:text-[#f7bd55] transition-colors">
                    Guard of Honor — CrashGuard AI
                  </h3>
                  <p className="font-sans text-sm text-[#c4c7c9]">
                    D.Y. Patil Ideathon · Awarded for autonomous failure forecasting architecture and real-time mitigation demo
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-[#444749]/30">
                  <span className="font-display text-2xl sm:text-3xl text-[#ffffff] font-normal group-hover:text-[#f7bd55] transition-colors">
                    2026
                  </span>
                  <span className="font-label text-[10px] text-[#8e9193] uppercase tracking-wider">
                    HONOR ROLL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
