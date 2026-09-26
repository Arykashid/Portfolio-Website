"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <ScrollReveal
      id="about"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
          // ABOUT
        </span>
        <div className="h-px flex-1 bg-[#343537]" />
        <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
          INDEX · 01
        </span>
      </div>

      {/* Narrative & High-impact Editorial Paragraph */}
      <div className="max-w-4xl space-y-6">
        <p className="font-sans text-xl sm:text-2xl text-[#e3e2e5] leading-relaxed font-normal">
          AI &amp; Data Science engineer focused on building systems that predict failures before they happen, not just react to them. My work spans time-series forecasting, ensemble modeling, and retrieval-augmented AI — from CrashGuard AI&apos;s autonomous infrastructure decision engine to a RAG-based teaching assistant. Previously a Data Science Intern at SkillDzire Technologies, where I worked on end-to-end ML pipelines from raw data to production.
        </p>

        {/* Focus Tags */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {[
            "Time-Series Forecasting",
            "Ensemble Modeling",
            "Retrieval-Augmented Generation",
            "Edge & Cloud ML Deployments",
          ].map((tag) => (
            <span
              key={tag}
              className="font-label text-xs px-3.5 py-1.5 rounded bg-[#1f2022] text-[#e3e2e5] tracking-wider border border-[#444749]/40 hover:border-[#f7bd55]/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
