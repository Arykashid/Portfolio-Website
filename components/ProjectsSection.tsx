"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectItem {
  id: string;
  category: string;
  year: string;
  fig: string;
  title: string;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  caseStudyHref: string;
  codeHref: string;
}

const projects: ProjectItem[] = [
  {
    id: "crashguard-ai",
    category: "AUTONOMOUS ML",
    year: "2026",
    fig: "FIG. P-01",
    title: "CrashGuard AI",
    tagline:
      "Predicts infrastructure failure before it occurs using autonomous workload forecasting.",
    description:
      "Autonomous CPU workload forecasting and infrastructure decision system using an LSTM + XGBoost ensemble, achieving an RMSE of 0.1337 and a Decision Engine v5 state machine with hysteresis and confidence-gated escalation.",
    imageSrc: "/images/crashguard-ai.png",
    imageAlt: "CrashGuard AI Dashboard — Autonomous Infrastructure Telemetry & Decision Engine",
    tags: ["LSTM", "XGBoost", "Flask", "Docker"],
    caseStudyHref: "/projects/crashguard-ai",
    codeHref: "https://github.com/Arykashid/CrashGuard-AI",
  },
  {
    id: "rag-teaching-assistant",
    category: "GEN AI & RAG",
    year: "2025",
    fig: "FIG. P-02",
    title: "RAG-Based AI Teaching Assistant",
    tagline:
      "Answers questions from video-based learning content via semantic retrieval and transcription.",
    description:
      "A Retrieval-Augmented Generation system answering questions from video-based coursework, featuring an end-to-end pipeline covering Whisper ASR audio transcription, vector embeddings, and reciprocal rank fusion retrieval.",
    imageSrc: "/images/rag-teaching-assistant.png",
    imageAlt: "RAG-Based AI Teaching Assistant Dashboard — Semantic Search and Video Timestamp Sync",
    tags: ["Python", "Streamlit", "FFmpeg", "Embeddings"],
    caseStudyHref: "/projects/rag-teaching-assistant",
    codeHref: "https://github.com/Arykashid/RAG---Based-AI-Assistant",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  // Refs for per-card elements to allow individual animations
  const card1Ref = useRef<HTMLDivElement>(null);
  const card1ThumbRef = useRef<HTMLAnchorElement>(null);
  const card1ContentRef = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card2ThumbRef = useRef<HTMLAnchorElement>(null);
  const card2ContentRef = useRef<HTMLDivElement>(null);

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
          // Ensure everything visible, no transforms
          [
            headerRef.current,
            card1Ref.current,
            card1ContentRef.current,
            card2Ref.current,
            card2ContentRef.current,
          ].forEach((el) => {
            if (el) gsap.set(el, { clearProps: "all" });
          });
          return;
        }

        // ── INITIAL STATES ──
        // Header: mask-reveal
        gsap.set(headerRef.current, { yPercent: 110, opacity: 0 });

        // Card 1: enters from below with scale-down (feels heavy/far)
        gsap.set(card1Ref.current, {
          y: isDesktop ? 120 : 80,
          scale: 0.92,
          opacity: 0,
        });
        // Card 1 inner content: starts further down (creates internal depth when card arrives)
        gsap.set(card1ContentRef.current, {
          y: isDesktop ? 40 : 25,
          opacity: 0,
        });

        // Card 2: starts even further below — clear visual sequencing from card1
        gsap.set(card2Ref.current, {
          y: isDesktop ? 160 : 100,
          scale: 0.90,
          opacity: 0,
        });
        gsap.set(card2ContentRef.current, {
          y: isDesktop ? 50 : 30,
          opacity: 0,
        });

        // ── SECTION HEADER TIMELINE ──
        // Header reveals first, before the cards arrive
        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 0.9,
          },
        });

        headerTl.to(headerRef.current, {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.3,
        });

        // ── CARD 1 TIMELINE ──
        // Card 1 starts entering when section is ~60% into viewport, finishes at center
        const card1Tl = gsap.timeline({
          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top bottom",
            end: "center center",
            scrub: 0.8,
          },
        });

        // A. Card container: scale up + rise from below
        card1Tl.to(
          card1Ref.current,
          { y: 0, scale: 1, opacity: 1, ease: "power2.out", duration: 0.5 },
          0
        );

        // B. Card image: moves at a DIFFERENT rate from the card — creates internal parallax
        // The thumb starts higher relative to the card (y: -20), then settles to y: 0
        // This makes it feel like the image is "revealing" as the card arrives
        const thumb1Inner = card1ThumbRef.current?.querySelector("img");
        if (thumb1Inner) {
          gsap.set(thumb1Inner, { y: isDesktop ? -30 : -20, scale: 1.08 });
          card1Tl.to(
            thumb1Inner,
            { y: 0, scale: 1, ease: "none", duration: 0.7 },
            0
          );
        }

        // C. Card content: arrives slightly AFTER the card container itself
        card1Tl.to(
          card1ContentRef.current,
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.4 },
          0.2
        );

        // ── CARD 1 EXIT / THROUGH-SCROLL DEPTH ──
        // As the user scrolls past card1, it drifts upward and subtly dims
        // This exit continues into the Achievements section entrance — deliberate overlap.
        const card1ExitTl = gsap.timeline({
          scrollTrigger: {
            trigger: card1Ref.current,
            start: "center center",
            end: "bottom top",
            scrub: 1.0,
          },
        });
        card1ExitTl.to(card1Ref.current, {
          y: isDesktop ? -60 : -30,
          opacity: 0.87,
          ease: "none",
          duration: 1,
        });

        // ── CARD 2 TIMELINE ──
        // Card 2 uses a different start/end creating clearly different feel from card1
        const card2Tl = gsap.timeline({
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "top bottom",
            end: "center center",
            scrub: 1.1,  // slightly different scrub — adds to the differentiation
          },
        });

        // Card 2 has a more dramatic entrance: wider scale range, more y travel
        card2Tl.to(
          card2Ref.current,
          { y: 0, scale: 1, opacity: 1, ease: "power2.out", duration: 0.55 },
          0
        );

        // Card 2 image parallax — offset direction opposite to card1 for variety
        const thumb2Inner = card2ThumbRef.current?.querySelector("img");
        if (thumb2Inner) {
          gsap.set(thumb2Inner, { y: isDesktop ? -40 : -25, scale: 1.1 });
          card2Tl.to(
            thumb2Inner,
            { y: 0, scale: 1, ease: "none", duration: 0.8 },
            0
          );
        }

        // Card 2 content: arrives with slightly more delay than card1's content — creates distinct rhythm
        card2Tl.to(
          card2ContentRef.current,
          { y: 0, opacity: 1, ease: "power2.out", duration: 0.45 },
          0.25
        );

        // ── CARD 2 EXIT ──
        const card2ExitTl = gsap.timeline({
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "center center",
            end: "bottom top",
            scrub: 1.0,
          },
        });
        card2ExitTl.to(card2Ref.current, {
          y: isDesktop ? -45 : -22,
          opacity: 0.87,
          ease: "none",
          duration: 1,
        });

        // ─── SECTION-LEVEL EXIT: Projects header → Achievements ──
        // The section header moves out on a slower, separate rate from the cards,
        // creating a final depth beat as Projects hands off to Achievements.
        const sectionExitTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "75% bottom",
            end: "bottom top",
            scrub: 1.3,
          },
        });
        sectionExitTl.to(headerRef.current, {
          y: isDesktop ? -15 : -8,
          opacity: 0.88,
          ease: "none",
          duration: 1,
        });
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-24"
    >
      {/* Section Header — overflow:hidden creates mask for editorial reveal */}
      <div className="overflow-hidden mb-8">
        <div ref={headerRef} className="flex items-center gap-3">
          <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
            // SELECTED PROJECTS
          </span>
          <div className="h-px flex-1 bg-[#343537]" />
          <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
            INDEX · 03
          </span>
        </div>
      </div>

      {/* Grid: 1 column on mobile, 2 columns on tablet/desktop */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

        {/* ── PROJECT CARD 1: CrashGuard AI ── */}
        <div ref={card1Ref} className="project-card w-full flex will-change-transform">
          <div className="flex flex-col rounded-2xl bg-[#1b1c1e] p-6 sm:p-7 shadow-xl border border-[#444749]/30 hover:-translate-y-1 hover:border-[#f7bd55]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out group w-full">
            {/* Metadata Header */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="font-label text-xs text-[#f7bd55] uppercase tracking-wider font-semibold">
                {projects[0].category} // {projects[0].year}
              </span>
              <span className="font-label text-xs text-[#8e9193] uppercase tracking-widest">
                {projects[0].fig}
              </span>
            </div>

            {/* Thumbnail — the Link wrapper has overflow:hidden for image parallax */}
            <Link
              ref={card1ThumbRef}
              href={projects[0].caseStudyHref}
              className="project-thumb-depth block w-full h-52 sm:h-60 relative overflow-hidden rounded-xl bg-[#0d0e10] border border-[#444749]/30 mb-5 group/thumb"
            >
              <Image
                src={projects[0].imageSrc}
                alt={projects[0].imageAlt}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center rounded-xl group-hover/thumb:scale-[1.03] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121315]/80 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                <span className="font-label text-xs text-[#f7bd55] uppercase tracking-wider font-medium flex items-center gap-1.5">
                  View Full Case Study <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Card content that follows after card arrives */}
            <div ref={card1ContentRef} className="flex flex-col flex-1">
              {/* Title */}
              <div className="mb-2">
                <Link href={projects[0].caseStudyHref} className="group/title inline-block">
                  <h3 className="font-sans text-2xl font-bold text-[#ffffff] tracking-tight group-hover/title:text-[#f7bd55] transition-colors flex items-center gap-2">
                    {projects[0].title}
                  </h3>
                </Link>
              </div>

              {/* One-line Purpose Statement */}
              <p className="font-sans text-base text-[#f4f4f5] font-medium leading-snug mb-3">
                {projects[0].tagline}
              </p>

              {/* Detailed Technical Description */}
              <p className="font-sans text-sm text-[#c4c7c9] leading-relaxed mb-6">
                {projects[0].description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-label text-xs px-2.5 py-1 rounded bg-[#292a2c] text-[#e3e2e5] tracking-wider border border-[#444749]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Row */}
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#444749]/30">
                <Link
                  href={projects[0].caseStudyHref}
                  className="inline-flex items-center gap-1.5 font-label text-xs px-4 py-2.5 rounded-lg bg-[#f7bd55]/15 border border-[#f7bd55]/40 text-[#f7bd55] hover:bg-[#f7bd55]/25 hover:border-[#f7bd55]/60 transition-all font-semibold min-h-[44px]"
                >
                  <span>Case Study</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={projects[0].codeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-label text-xs px-3.5 py-2 rounded-lg bg-transparent hover:bg-[#292a2c] text-[#c4c7c9] hover:text-[#ffffff] transition-colors border border-[#444749]/30 min-h-[44px]"
                >
                  <span>Source Code</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── PROJECT CARD 2: RAG Teaching Assistant ── */}
        <div ref={card2Ref} className="project-card w-full flex will-change-transform">
          <div className="flex flex-col rounded-2xl bg-[#1b1c1e] p-6 sm:p-7 shadow-xl border border-[#444749]/30 hover:-translate-y-1 hover:border-[#f7bd55]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out group w-full">
            {/* Metadata Header */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="font-label text-xs text-[#f7bd55] uppercase tracking-wider font-semibold">
                {projects[1].category} // {projects[1].year}
              </span>
              <span className="font-label text-xs text-[#8e9193] uppercase tracking-widest">
                {projects[1].fig}
              </span>
            </div>

            {/* Thumbnail */}
            <Link
              ref={card2ThumbRef}
              href={projects[1].caseStudyHref}
              className="project-thumb-depth block w-full h-52 sm:h-60 relative overflow-hidden rounded-xl bg-[#0d0e10] border border-[#444749]/30 mb-5 group/thumb"
            >
              <Image
                src={projects[1].imageSrc}
                alt={projects[1].imageAlt}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center rounded-xl group-hover/thumb:scale-[1.03] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121315]/80 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                <span className="font-label text-xs text-[#f7bd55] uppercase tracking-wider font-medium flex items-center gap-1.5">
                  View Full Case Study <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Card content */}
            <div ref={card2ContentRef} className="flex flex-col flex-1">
              {/* Title */}
              <div className="mb-2">
                <Link href={projects[1].caseStudyHref} className="group/title inline-block">
                  <h3 className="font-sans text-2xl font-bold text-[#ffffff] tracking-tight group-hover/title:text-[#f7bd55] transition-colors flex items-center gap-2">
                    {projects[1].title}
                  </h3>
                </Link>
              </div>

              {/* One-line Purpose Statement */}
              <p className="font-sans text-base text-[#f4f4f5] font-medium leading-snug mb-3">
                {projects[1].tagline}
              </p>

              {/* Detailed Technical Description */}
              <p className="font-sans text-sm text-[#c4c7c9] leading-relaxed mb-6">
                {projects[1].description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {projects[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-label text-xs px-2.5 py-1 rounded bg-[#292a2c] text-[#e3e2e5] tracking-wider border border-[#444749]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Row */}
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#444749]/30">
                <Link
                  href={projects[1].caseStudyHref}
                  className="inline-flex items-center gap-1.5 font-label text-xs px-4 py-2.5 rounded-lg bg-[#f7bd55]/15 border border-[#f7bd55]/40 text-[#f7bd55] hover:bg-[#f7bd55]/25 hover:border-[#f7bd55]/60 transition-all font-semibold min-h-[44px]"
                >
                  <span>Case Study</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={projects[1].codeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-label text-xs px-3.5 py-2 rounded-lg bg-transparent hover:bg-[#292a2c] text-[#c4c7c9] hover:text-[#ffffff] transition-colors border border-[#444749]/30 min-h-[44px]"
                >
                  <span>Source Code</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

