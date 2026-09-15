"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
  return (
    <ScrollReveal
      id="projects"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
          // SELECTED PROJECTS
        </span>
        <div className="h-px flex-1 bg-[#343537]" />
        <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
          INDEX · 03
        </span>
      </div>

      {/* Grid: 1 column on mobile, 2 columns on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-2xl bg-[#1b1c1e] p-6 sm:p-7 shadow-xl border border-[#444749]/30 hover:-translate-y-1 hover:border-[#f7bd55]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out group w-full"
          >
            {/* Metadata Header */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="font-label text-xs text-[#f7bd55] uppercase tracking-wider font-semibold">
                {project.category} // {project.year}
              </span>
              <span className="font-label text-xs text-[#8e9193] uppercase tracking-widest">
                {project.fig}
              </span>
            </div>

            {/* Thumbnail Image Viewport */}
            <Link
              href={project.caseStudyHref}
              className="block w-full h-52 sm:h-60 relative overflow-hidden rounded-xl bg-[#0d0e10] border border-[#444749]/30 mb-5 group/thumb"
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top rounded-xl group-hover/thumb:scale-[1.03] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121315]/80 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                <span className="font-label text-xs text-[#f7bd55] uppercase tracking-wider font-medium flex items-center gap-1.5">
                  View Full Case Study <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Title */}
            <div className="mb-2">
              <Link href={project.caseStudyHref} className="group/title inline-block">
                <h3 className="font-sans text-2xl font-bold text-[#ffffff] tracking-tight group-hover/title:text-[#f7bd55] transition-colors flex items-center gap-2">
                  {project.title}
                </h3>
              </Link>
            </div>

            {/* One-line Purpose Statement */}
            <p className="font-sans text-base text-[#f4f4f5] font-medium leading-snug mb-3">
              {project.tagline}
            </p>

            {/* Detailed Technical Description */}
            <p className="font-sans text-sm text-[#c4c7c9] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {project.tags.map((tag) => (
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
                href={project.caseStudyHref}
                className="inline-flex items-center gap-1.5 font-label text-xs px-4 py-2.5 rounded-lg bg-[#f7bd55]/15 border border-[#f7bd55]/40 text-[#f7bd55] hover:bg-[#f7bd55]/25 hover:border-[#f7bd55]/60 transition-all font-semibold min-h-[44px]"
              >
                <span>Case Study</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href={project.codeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-label text-xs px-3.5 py-2 rounded-lg bg-transparent hover:bg-[#292a2c] text-[#c4c7c9] hover:text-[#ffffff] transition-colors border border-[#444749]/30 min-h-[44px]"
              >
                <span>Source Code</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
