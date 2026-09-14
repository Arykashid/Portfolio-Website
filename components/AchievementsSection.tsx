"use client";

import React from "react";
import { GraduationCap, Award, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AchievementsSection() {
  return (
    <ScrollReveal
      id="achievements"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
          // EDU &amp; ACHIEVEMENTS
        </span>
        <div className="h-px flex-1 bg-[#343537]" />
        <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
          INDEX · 04
        </span>
      </div>

      {/* Unified 2-Column Grid: Stacks to 1 Column on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
        {/* Left Column: Academic Foundation (Mobile full-width, Desktop 5-col) */}
        <div className="lg:col-span-5 flex flex-col w-full">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={16} className="text-[#f7bd55]" />
            <span className="font-section-marker text-xs sm:text-sm text-[#c4c7c9] uppercase tracking-wider font-semibold">
              01 / ACADEMIC FOUNDATION
            </span>
            <span className="h-px flex-1 bg-[#343537]/70" />
          </div>

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

        {/* Right Column: Honors & Recognition (Mobile full-width, Desktop 7-col) */}
        <div className="lg:col-span-7 flex flex-col w-full">
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={16} className="text-[#f7bd55]" />
            <span className="font-section-marker text-xs sm:text-sm text-[#c4c7c9] uppercase tracking-wider font-semibold">
              02 / HONORS &amp; RECOGNITION
            </span>
            <span className="h-px flex-1 bg-[#343537]/70" />
          </div>

          <div className="flex flex-col gap-4">
            {/* Honor 1: Hackathon */}
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

            {/* Honor 2: Ideathon */}
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
    </ScrollReveal>
  );
}
