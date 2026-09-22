"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

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
];

const mlMethodsSkills: SkillItem[] = [
  { name: "Time-Series Forecasting" },
  { name: "NLP" },
  { name: "Ensemble Modeling" },
  { name: "Retrieval-Augmented Generation" },
  { name: "Feature Engineering" },
  { name: "A/B Testing" },
  { name: "Hysteresis State Machines" },
];

const engineeringSkills: SkillItem[] = [
  { name: "Flask" },
  { name: "Docker" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Vercel" },
  { name: "REST APIs" },
  { name: "Streamlit" },
  { name: "Linux" },
];

interface MarqueeRowProps {
  label: string;
  skills: SkillItem[];
  direction?: "left" | "right";
}

function MarqueeRow({
  label,
  skills,
  direction = "left",
}: MarqueeRowProps) {
  const rowAnimClass = direction === "left" ? "skills-row-left" : "skills-row-right";

  return (
    <div className="w-full flex flex-col gap-3 pb-6 border-b border-[#444749]/20 last:border-b-0 overflow-hidden">
      {/* Category Header */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f7bd55]" />
        <h3 className="font-label text-xs sm:text-sm text-[#f7bd55] uppercase tracking-wider font-semibold">
          {label}
        </h3>
      </div>

      {/* Subtle Marquee Scrolling Track (no clipping mask, zero duplicates) */}
      <div className="w-full overflow-hidden relative py-1">
        <div className={`${rowAnimClass} flex items-center gap-3`}>
          {skills.map((skill) => (
            <div
              key={skill.name}
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
  );
}

export default function SkillsMarquee() {
  return (
    <ScrollReveal
      id="skills"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
          // SKILLS &amp; CAPABILITIES
        </span>
        <div className="h-px flex-1 bg-[#343537]" />
        <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
          INDEX · 02
        </span>
      </div>

      {/* 3 Horizontal Moving Rows (Unique Skills, Opposite Directions) */}
      <div className="flex flex-col gap-6 w-full">
        <MarqueeRow
          label="01 // ML & DATA"
          skills={mlDataSkills}
          direction="left"
        />
        <MarqueeRow
          label="02 // ML METHODS"
          skills={mlMethodsSkills}
          direction="right"
        />
        <MarqueeRow
          label="03 // ENGINEERING & INFRASTRUCTURE"
          skills={engineeringSkills}
          direction="left"
        />
      </div>
    </ScrollReveal>
  );
}
