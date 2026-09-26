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
    <div className="w-full flex flex-col gap-3 pb-6 border-b border-[#444749]/20 last:border-b-0">
      {/* Category Header */}
      <div className="flex items-center gap-2">
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
  return (
    <ScrollReveal
      id="skills"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24 scroll-mt-24"
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
          // SKILLS &amp; CAPABILITIES
        </span>
        <div className="h-px flex-1 bg-[#343537]" />
        <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
          INDEX · 02
        </span>
      </div>

      <div className="flex flex-col gap-6 w-full">
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
    </ScrollReveal>
  );
}
