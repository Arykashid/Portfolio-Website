"use client";

import React, { useState } from "react";
import {
  X,
  Download,
  Printer,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Cpu,
  FileText,
  Eye,
  Wrench,
  Sparkles,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [viewMode, setViewMode] = useState<"clean" | "pdf">("clean");

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#1b1c1e] border border-[#444749]/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="px-5 py-3.5 bg-[#121315] border-b border-[#444749]/30 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#f7bd55]" />
            <span className="font-section-marker text-xs text-[#f7bd55] uppercase tracking-wider font-semibold">
              // ARY_KASHID_RESUME.PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:inline-flex items-center bg-[#1f2022] p-0.5 rounded-lg border border-[#444749]/30 text-xs font-label">
              <button
                type="button"
                onClick={() => setViewMode("clean")}
                className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                  viewMode === "clean"
                    ? "bg-[#2d2e30] text-[#ffffff] font-medium"
                    : "text-[#8e9193] hover:text-[#e3e2e5]"
                }`}
              >
                <FileText size={12} />
                <span>Summary</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("pdf")}
                className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                  viewMode === "pdf"
                    ? "bg-[#2d2e30] text-[#ffffff] font-medium"
                    : "text-[#8e9193] hover:text-[#e3e2e5]"
                }`}
              >
                <Eye size={12} />
                <span>PDF Document</span>
              </button>
            </div>

            {/* Direct Download PDF Button */}
            <a
              href="/resume.pdf"
              download="Ary_Kashid_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#f7bd55] text-[#121315] hover:bg-[#ffffff] transition-colors text-xs font-semibold"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Open Raw PDF in New Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open PDF in new tab"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#292a2c] text-[#f4f4f5] hover:bg-[#343537] hover:text-[#ffffff] transition-colors text-xs font-label"
            >
              <ExternalLink size={13} />
            </a>

            {/* Print */}
            <button
              type="button"
              onClick={handlePrint}
              aria-label="Print resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#292a2c] text-[#f4f4f5] hover:bg-[#343537] hover:text-[#ffffff] transition-colors text-xs font-label"
            >
              <Printer size={13} />
            </button>

            {/* Close */}
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
          {viewMode === "pdf" ? (
            <div className="w-full h-[70vh] rounded-xl overflow-hidden border border-[#444749]/30 bg-[#121315]">
              <iframe
                src="/resume.pdf#view=FitH"
                title="Ary Kashid Resume PDF"
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <>
              {/* Header Contact Block */}
              <div className="border-b border-[#444749]/30 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl text-[#ffffff] font-normal tracking-tight">
                    ARY KASHID
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-[#f7bd55] font-medium mt-1">
                    Data Science and Artificial Intelligence Undergraduate
                  </p>
                  <p className="font-sans text-xs text-[#c4c7c9] mt-1.5 space-x-2">
                    <span>+91 7028834592</span>
                    <span className="text-[#444749]">|</span>
                    <a
                      href="mailto:arykashidofficial@gmail.com"
                      className="hover:underline text-[#00daf3]"
                    >
                      arykashidofficial@gmail.com
                    </a>
                    <span className="text-[#444749]">|</span>
                    <span>Kolhapur, India</span>
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
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Sparkles size={15} className="text-[#f7bd55]" />
                  <h3 className="font-section-marker text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                    PROFESSIONAL SUMMARY
                  </h3>
                </div>
                <div className="bg-[#121315] p-4 rounded-xl border border-[#444749]/30">
                  <p className="text-xs sm:text-sm text-[#c4c7c9] leading-relaxed">
                    Data Science and Artificial Intelligence undergraduate with internship experience and strong hands-on exposure to machine learning, time-series forecasting, and applied AI systems. Built end-to-end ML pipelines including an autonomous infrastructure decision system with LSTM+XGBoost ensemble, RAG pipelines, and production-ready Flask dashboards. Seeking Data Science / Machine Learning internship or research opportunities.
                  </p>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Briefcase size={15} className="text-[#f7bd55]" />
                  <h3 className="font-section-marker text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                    WORK EXPERIENCE
                  </h3>
                </div>
                <div className="bg-[#121315] p-4 sm:p-5 rounded-xl border border-[#444749]/30 space-y-2.5">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-[#ffffff]">
                        Data Science Intern
                      </h4>
                      <p className="font-sans text-xs text-[#8e9193]">
                        SkillDzire Technologies Pvt. Ltd. · Remote
                      </p>
                    </div>
                    <span className="font-label text-xs text-[#f7bd55]">
                      Jul 2025 – Aug 2025
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-[#c4c7c9] leading-relaxed pt-1">
                    <li>
                      Preprocessed and cleaned 3+ structured datasets totalling thousands of records, reducing data inconsistencies by applying automated EDA pipelines in Python.
                    </li>
                    <li>
                      Built and evaluated 5+ supervised ML classification models using Scikit-learn, improving baseline accuracy through iterative feature selection.
                    </li>
                    <li>
                      Applied feature engineering techniques across tabular datasets, resulting in measurable improvement in model F1-score and robustness on held-out test sets.
                    </li>
                    <li>
                      Collaborated with mentors on 2+ industry-aligned ML problem statements, delivering model reports aligned with real-world business workflows.
                    </li>
                  </ul>
                  <p className="text-[11px] font-label text-[#8e9193] pt-1">
                    Technologies / Skills Used: <span className="text-[#e3e2e5]">Python, Scikit-learn</span>
                  </p>
                </div>
              </div>

              {/* Projects */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Cpu size={15} className="text-[#f7bd55]" />
                  <h3 className="font-section-marker text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                    PROJECTS
                  </h3>
                </div>
                <div className="space-y-3">
                  {/* Project 1 */}
                  <div className="bg-[#121315] p-4 sm:p-5 rounded-xl border border-[#444749]/30 space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-sans text-sm font-semibold text-[#ffffff]">
                          CrashGuard AI – Autonomous CPU Workload Forecasting &amp; Infrastructure Decision System
                        </h4>
                        <a
                          href="https://github.com/Arykashid/CrashGuard-AI"
                          target="_blank"
                          rel="noreferrer"
                          className="font-label text-[11px] text-[#00daf3] hover:underline inline-flex items-center gap-1 mt-0.5"
                        >
                          github.com/Arykashid/CrashGuard-AI <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[#c4c7c9] leading-relaxed">
                      <li>Developed an autonomous infrastructure guardian that predicts CPU spikes with 60% accuracy.</li>
                      <li>Designed an LSTM + XGBoost ensemble model achieving an RMSE of 0.1337 and a DM test p-value of 0.0086.</li>
                      <li>Engineered 15 temporal features from approximately 60,000 Google Cluster CPU records.</li>
                      <li>Built a Decision Engine v5 state machine with hysteresis, confidence gating, and hard override activated at CPU ≥ 90%.</li>
                      <li>Delivered a 5-page production-ready dashboard using Flask, HTML, CSS, and JavaScript.</li>
                      <li>Integrated Twilio phone call alerts and Gmail SMTP routing with autonomous escalation logic.</li>
                    </ul>
                    <p className="text-[11px] font-label text-[#8e9193] pt-1">
                      Technologies / Tools Used: <span className="text-[#e3e2e5]">LSTM, XGBoost, Flask, Docker</span>
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-[#121315] p-4 sm:p-5 rounded-xl border border-[#444749]/30 space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-sans text-sm font-semibold text-[#ffffff]">
                          RAG-Based AI Teaching Assistant
                        </h4>
                        <a
                          href="https://github.com/Arykashid/RAG---Based-AI-Assistant"
                          target="_blank"
                          rel="noreferrer"
                          className="font-label text-[11px] text-[#00daf3] hover:underline inline-flex items-center gap-1 mt-0.5"
                        >
                          github.com/Arykashid/RAG---Based-AI-Assistant <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[#c4c7c9] leading-relaxed">
                      <li>Designed and developed a Retrieval-Augmented Generation (RAG) system to answer questions from custom video-based learning content.</li>
                      <li>Implemented end-to-end pipeline: video-to-text transcription, embedding generation, vector storage, and semantic retrieval.</li>
                      <li>Improved response relevance and reduced hallucinations through context-aware retrieval.</li>
                    </ul>
                    <p className="text-[11px] font-label text-[#8e9193] pt-1">
                      Technologies / Tools Used: <span className="text-[#e3e2e5]">Python, NumPy, Joblib, Streamlit, FFmpeg, Speech-to-text transcription, Embeddings-based semantic search, Vector retrieval</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Wrench size={15} className="text-[#f7bd55]" />
                  <h3 className="font-section-marker text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                    SKILLS
                  </h3>
                </div>
                <div className="bg-[#121315] p-4 rounded-xl border border-[#444749]/30 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-[#ffffff]">Frameworks &amp; Libraries: </span>
                    <span className="text-[#c4c7c9]">Pandas, NumPy, Matplotlib, Scikit-learn, XGBoost, Keras, TensorFlow, Flask, Plotly</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#ffffff]">Programming Languages: </span>
                    <span className="text-[#c4c7c9]">Python, SQL</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#ffffff]">Tools &amp; Platforms: </span>
                    <span className="text-[#c4c7c9]">Docker, Git, GitHub, Jupyter Notebook</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <GraduationCap size={15} className="text-[#f7bd55]" />
                  <h3 className="font-section-marker text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                    EDUCATION
                  </h3>
                </div>
                <div className="bg-[#121315] p-4 rounded-xl border border-[#444749]/30 space-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h4 className="font-sans text-sm font-semibold text-[#ffffff]">
                      Government College of Engineering, Kolhapur
                    </h4>
                    <span className="font-label text-xs text-[#f7bd55]">Aug 2023 – Present</span>
                  </div>
                  <p className="font-sans text-xs text-[#c4c7c9]">
                    Bachelor of Engineering – Artificial Intelligence and Data Science
                  </p>
                  <p className="font-label text-xs text-[#00daf3] pt-1">
                    CGPA: 8.0 | Among Top 10% of the Batch (Department Rank)
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-[#121315] border-t border-[#444749]/30 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <span className="font-label text-xs text-[#8e9193]">
            FILE: resume.pdf (4.8 KB)
          </span>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#292a2c] text-[#f4f4f5] font-sans text-xs font-medium hover:bg-[#343537] hover:text-[#ffffff] transition-colors"
            >
              <ExternalLink size={13} />
              <span>Open PDF</span>
            </a>
            <a
              href="/resume.pdf"
              download="Ary_Kashid_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#f7bd55] text-[#121315] font-sans text-xs font-semibold hover:bg-[#ffffff] transition-colors shadow-lg"
            >
              <Download size={14} />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
