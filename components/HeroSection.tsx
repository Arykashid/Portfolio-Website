"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, FileText, ArrowUpRight, MapPin } from "lucide-react";

interface HeroSectionProps {
  onResumeClick?: () => void;
}

export default function HeroSection({ onResumeClick }: HeroSectionProps) {
  return (
    <section className="hero-entry-anim relative w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 min-h-[calc(100vh-5rem)] flex items-center py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
        {/* Photo Container: ORDER 1 ON MOBILE (appears first!), ORDER 1 on desktop */}
        <div className="order-1 lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[620px] rounded-2xl overflow-hidden bg-[#1b1c1e] shadow-2xl border border-[#444749]/30 group">
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
        </div>

        {/* Text Content: ORDER 2 ON MOBILE (appears below photo) */}
        <div className="order-2 lg:col-span-7 flex flex-col justify-center">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-[#1b1c1e] border border-[#444749]/40 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7bd55] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f7bd55]"></span>
            </span>
            <span className="font-label text-[11px] tracking-widest text-[#f4f4f5] uppercase font-medium">
              OPEN TO — ML / DATA SCIENCE OPPORTUNITIES
            </span>
          </div>

          {/* Main Display Headline */}
          <div className="mt-5 space-y-2">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#ffffff] tracking-tight font-normal leading-[1.08]">
              Ary Kashid
            </h1>
            <p className="font-sans text-xl sm:text-2xl text-[#f7bd55] font-medium tracking-tight">
              AI &amp; Data Science Engineer
            </p>
          </div>

          {/* Editorial Tagline */}
          <p className="mt-5 font-sans text-base sm:text-lg text-[#c4c7c9] max-w-2xl leading-relaxed">
            Engineering AI systems that see problems before they happen. Specializing in autonomous infrastructure resilience, time-series forecasting, and multimodal retrieval systems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#ffffff] text-[#121315] font-sans text-sm font-semibold hover:bg-[#f7bd55] transition-colors duration-200 shadow-lg min-h-[44px] min-w-[44px]"
            >
              <span>View Selected Works</span>
              <ArrowDown size={16} />
            </a>

            {onResumeClick ? (
              <button
                type="button"
                onClick={onResumeClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1f2022] text-[#f4f4f5] font-sans text-sm font-medium hover:bg-[#292a2c] hover:text-[#ffffff] transition-colors duration-200 border border-[#444749]/40 min-h-[44px] min-w-[44px]"
              >
                <FileText size={16} className="text-[#f7bd55]" />
                <span>Download Resume / CV</span>
              </button>
            ) : (
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1f2022] text-[#f4f4f5] font-sans text-sm font-medium hover:bg-[#292a2c] hover:text-[#ffffff] transition-colors duration-200 border border-[#444749]/40 min-h-[44px] min-w-[44px]"
              >
                <FileText size={16} className="text-[#f7bd55]" />
                <span>Download Resume / CV</span>
              </a>
            )}
          </div>

          {/* Social Links & Location Marker Bar */}
          <div className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#444749]/20">
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
          </div>
        </div>
      </div>
    </section>
  );
}
