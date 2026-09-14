"use client";

import React from "react";
import { X, Download, Printer, ExternalLink, GraduationCap, Briefcase, Award, Cpu } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#1b1c1e] border border-[#444749]/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="px-6 py-4 bg-[#121315] border-b border-[#444749]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#f7bd55]" />
            <span className="font-section-marker text-xs text-[#f7bd55] uppercase tracking-wider font-semibold">
              // ARY_KASHID_RESUME_2026.PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              aria-label="Print or save as PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#292a2c] text-[#f4f4f5] hover:bg-[#343537] hover:text-[#ffffff] transition-colors text-xs font-label"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-lg bg-[#292a2c] text-[#c4c7c9] hover:text-[#ffffff] hover:bg-[#343537] flex items-center justify-center transition-colors ml-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#e3e2e5]">
          {/* Header Contact Block */}
          <div className="border-b border-[#444749]/30 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#ffffff] font-normal">
                Ary Kashid
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#f7bd55] font-medium mt-1">
                AI &amp; Data Science Engineer
              </p>
              <p className="font-sans text-xs text-[#c4c7c9] mt-1">
                Kolhapur, Maharashtra, India · arykashidofficial@gmail.com
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-label">
              <a
                href="https://github.com/Arykashid"
                target="_blank"
                rel="noreferrer"
                className="text-[#00daf3] hover:underline flex items-center gap-1"
              >
                github.com/Arykashid <ExternalLink size={11} />
              </a>
              <span className="text-[#444749]">|</span>
              <a
                href="https://linkedin.com/in/ary-kashid"
                target="_blank"
                rel="noreferrer"
                className="text-[#00daf3] hover:underline flex items-center gap-1"
              >
                linkedin.com/in/ary-kashid <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={16} className="text-[#f7bd55]" />
              <h3 className="font-section-marker text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                EDUCATION
              </h3>
            </div>
            <div className="bg-[#121315] p-4 rounded-xl border border-[#444749]/30 space-y-1">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <h4 className="font-sans text-sm font-semibold text-[#ffffff]">
                  B.Tech in Artificial Intelligence and Data Science
                </h4>
                <span className="font-label text-xs text-[#8e9193]">2023 – 2027</span>
              </div>
              <p className="font-sans text-xs text-[#c4c7c9]">
                Government College of Engineering, Kolhapur
              </p>
              <p className="font-label text-xs text-[#f7bd55] pt-1">
                Standing: Top 10% of batch
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={16} className="text-[#f7bd55]" />
              <h3 className="font-section-marker text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                EXPERIENCE
              </h3>
            </div>
            <div className="bg-[#121315] p-4 rounded-xl border border-[#444749]/30 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <h4 className="font-sans text-sm font-semibold text-[#ffffff]">
                  Data Science Intern · SkillDzire Technologies
                </h4>
                <span className="font-label text-xs text-[#8e9193]">Internship</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#c4c7c9] leading-relaxed">
                <li>
                  Engineered end-to-end machine learning pipelines from raw data extraction and preprocessing to model deployment.
                </li>
                <li>
                  Implemented data validation, exploratory analysis, and supervised model benchmarking for production delivery.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu size={16} className="text-[#f7bd55]" />
              <h3 className="font-section-marker text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                SELECTED TECHNICAL PROJECTS
              </h3>
            </div>
            <div className="space-y-3">
              <div className="bg-[#121315] p-4 rounded-xl border border-[#444749]/30 space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-sans text-sm font-semibold text-[#ffffff]">
                    CrashGuard AI — Autonomous CPU Workload Forecasting
                  </h4>
                  <span className="font-label text-xs text-[#00daf3]">RMSE: 0.1337</span>
                </div>
                <p className="text-xs text-[#c4c7c9] leading-relaxed">
                  Hybrid LSTM + XGBoost ensemble architecture forecasting compute spikes 15 minutes ahead. Integrates Decision Engine v5 with hysteresis state bounds and containerized Flask microservices.
                </p>
              </div>

              <div className="bg-[#121315] p-4 rounded-xl border border-[#444749]/30 space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-sans text-sm font-semibold text-[#ffffff]">
                    RAG-Based AI Teaching Assistant
                  </h4>
                  <span className="font-label text-xs text-[#00daf3]">Hybrid RRF</span>
                </div>
                <p className="text-xs text-[#c4c7c9] leading-relaxed">
                  Multimodal educational copilot extracting audio streams via FFmpeg, transcribing lectures via Whisper ASR, and generating hallucination-guarded responses with precise video timestamps.
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-[#f7bd55]" />
              <h3 className="font-section-marker text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                HONORS &amp; ACHIEVEMENTS
              </h3>
            </div>
            <div className="bg-[#121315] p-4 rounded-xl border border-[#444749]/30 space-y-2 text-xs text-[#c4c7c9]">
              <div className="flex items-center justify-between">
                <span>Guard of Honor — CrashGuard AI (D.Y. Patil Ideathon)</span>
                <span className="font-label text-[#f7bd55]">2026</span>
              </div>
              <div className="flex items-center justify-between border-t border-[#444749]/20 pt-1.5">
                <span>Token of Appreciation — Sentiment Analysis (National Hackathon)</span>
                <span className="font-label text-[#f7bd55]">2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-[#121315] border-t border-[#444749]/30 flex items-center justify-between shrink-0">
          <span className="font-label text-xs text-[#8e9193]">
            FORMAT: PDF / CURRICULUM VITAE
          </span>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#ffffff] text-[#121315] font-sans text-xs font-semibold hover:bg-[#f7bd55] transition-colors"
          >
            <Download size={14} />
            <span>Download / Print</span>
          </button>
        </div>
      </div>
    </div>
  );
}
