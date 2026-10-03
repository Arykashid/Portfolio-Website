"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, FileText, ArrowUpRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface HeroSectionProps {
  onResumeClick?: () => void;
}

export default function HeroSection({ onResumeClick }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Fail-safe: ensure hero image and content are never left invisible on mobile
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const heroPhoto = document.querySelector("#hero .order-1") as HTMLElement | null;
      if (heroPhoto && window.getComputedStyle(heroPhoto).opacity === "0") {
        heroPhoto.style.opacity = "1";
        heroPhoto.style.transform = "none";
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Smooth cubic-bezier for premium feel
  const ease = [0.22, 1, 0.36, 1] as const;

  // Factory: returns motion props for a subtle fade-up entrance
  const fadeUp = (delay: number, duration = 0.65) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.01 },
        }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration, delay, ease },
        };

  return (
    <section
      id="hero"
      className="hero-entry-anim relative w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 min-h-[calc(100vh-5rem)] flex items-center py-8 lg:py-16 scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
        {/* ── 1. Hero Image ── */}
        <motion.div
          className="order-1 lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[620px] rounded-2xl overflow-hidden bg-[#1b1c1e] shadow-2xl border border-[#444749]/30 group"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.985, y: 10 }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.01 }
              : { duration: 0.75, delay: 0, ease }
          }
        >
          <Image
            src="/images/ary-hero-profile.jpg"
            alt="Ary Kashid - AI & Data Science Engineer"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            priority
            className="w-full h-full object-cover object-center grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e10]/95 via-[#0d0e10]/20 to-transparent pointer-events-none" />

          {/* Bottom Card Annotation */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[#f4f4f5]">
            <div className="flex flex-col gap-0.5">
              <span className="font-section-marker text-[11px] text-[#00daf3] uppercase tracking-wider font-semibold">
                // PERSPECTIVE
              </span>
              <span className="font-sans text-xs text-[#c4c7c9] font-medium flex items-center gap-1">
                <MapPin size={12} className="text-[#f7bd55]" />
                Kolhapur, India · IST
              </span>
            </div>
            <span className="font-label text-[10px] px-2.5 py-1 rounded bg-[#343537]/80 backdrop-blur-md text-[#ffffff] uppercase tracking-widest font-semibold border border-[#444749]/40">
              FIG. 01
            </span>
          </div>
        </motion.div>

        {/* Text Content: ORDER 2 ON MOBILE (appears below photo) */}
        <div className="order-2 lg:col-span-7 flex flex-col justify-center">
          {/* ── 2. Status Badge ── */}
          <motion.div
            className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-[#1b1c1e] border border-[#444749]/40 shadow-sm"
            {...fadeUp(0.2)}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7bd55] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f7bd55]"></span>
            </span>
            <span className="font-label text-[11px] tracking-widest text-[#f4f4f5] uppercase font-medium">
              OPEN TO — ML / DATA SCIENCE OPPORTUNITIES
            </span>
          </motion.div>

          {/* ── 3 & 4. Name + Title ── */}
          <div className="mt-5 space-y-2">
            <motion.h1
              className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#ffffff] tracking-tight font-normal leading-[1.08]"
              {...fadeUp(0.32)}
            >
              Ary Kashid
            </motion.h1>
            <motion.p
              className="font-sans text-xl sm:text-2xl text-[#f7bd55] font-medium tracking-tight"
              {...fadeUp(0.4)}
            >
              AI &amp; Data Science Engineer
            </motion.p>
          </div>

          {/* ── 5. Description ── */}
          <motion.p
            className="mt-5 font-sans text-base sm:text-lg text-[#c4c7c9] max-w-2xl leading-relaxed"
            {...fadeUp(0.5)}
          >
            Engineering AI systems that see problems before they happen. Specializing in autonomous infrastructure resilience, time-series forecasting, and multimodal retrieval systems.
          </motion.p>

          {/* ── 6. CTA Buttons (staggered) ── */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#ffffff] text-[#121315] font-sans text-sm font-semibold hover:bg-[#f7bd55] transition-colors duration-200 shadow-lg min-h-[44px] min-w-[44px]"
              {...fadeUp(0.6)}
            >
              <span>View Selected Works</span>
              <ArrowDown size={16} />
            </motion.a>

            {onResumeClick && (
              <motion.button
                type="button"
                onClick={onResumeClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1f2022] text-[#f4f4f5] font-sans text-sm font-medium hover:bg-[#292a2c] hover:text-[#ffffff] transition-colors duration-200 border border-[#444749]/40 min-h-[44px] min-w-[44px]"
                {...fadeUp(0.68)}
              >
                <FileText size={15} className="text-[#f7bd55]" />
                <span>View Resume</span>
              </motion.button>
            )}
          </div>

          {/* ── 7. GitHub / LinkedIn / Location ── */}
          <motion.div
            className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#444749]/20"
            {...fadeUp(0.78, 0.6)}
          >
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Arykashid"
                target="_blank"
                rel="noreferrer"
                className="font-label text-xs text-[#c4c7c9] hover:text-[#00daf3] transition-colors uppercase tracking-widest flex items-center gap-1.5 py-2 min-h-[44px]"
              >
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://linkedin.com/in/ary-kashid"
                target="_blank"
                rel="noreferrer"
                className="font-label text-xs text-[#c4c7c9] hover:text-[#00daf3] transition-colors uppercase tracking-widest flex items-center gap-1.5 py-2 min-h-[44px]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
            <span className="font-section-marker text-xs text-[#8e9193] tracking-wider">
              LOC: KOLHAPUR, INDIA
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
