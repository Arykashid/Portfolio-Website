"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const slides = [
  {
    id: 1,
    title: "Interface (Query & Parameter Controls)",
    category: "SEMANTIC QUERY",
    src: "/images/rag-teaching-assistant.png",
    width: 1568,
    height: 672,
    alt: "RAG-Based AI Teaching Assistant Interface demoed on SQL coursework",
    caption:
      "Query & Settings Interface — Model selection, chunk retrieval configuration, and query interface demoed on SQL coursework as \"RAG based SQL Assistant.\"",
  },
  {
    id: 2,
    title: "Timestamp-Aware Retrieval & Video Sync",
    category: "TIMESTAMP CITATIONS",
    src: "/images/rag-teaching-assistant-2.png",
    width: 1024,
    height: 572,
    alt: "RAG-Based AI Teaching Assistant timestamp-aware retrieval with direct YouTube lecture links",
    caption:
      "Timestamp-Aware Retrieval & Video Sync — Grounded answer generation with timestamp-specific links mapping directly into corresponding YouTube video lecture segments.",
  },
];

export default function RagTeachingAssistantPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen bg-[#121315] text-[#e3e2e5] flex flex-col">
      <Navbar />

      <main className="w-full pt-32 pb-16 flex-1">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 flex flex-col gap-12 sm:gap-16">
          {/* Top Breadcrumb & Metadata Bar */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 font-section-marker text-xs sm:text-sm text-[#c4c7c9] hover:text-[#ffffff] transition-colors group min-h-[44px] py-2"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1 text-[#f7bd55]"
                />
                <span>Back to Selected Projects</span>
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1c1e] border border-[#444749]/30">
                  <span className="w-2 h-2 rounded-full bg-[#f7bd55] animate-pulse" />
                  <span className="font-label text-xs tracking-widest text-[#f7bd55] uppercase font-medium">
                    GEN AI &amp; RAG // 2025
                  </span>
                </div>
                <span className="font-section-marker text-xs text-[#8e9193] tracking-widest uppercase">
                  PROJECT // 02
                </span>
              </div>
            </div>

            {/* Editorial Hero Title */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-8 space-y-2">
                <span className="font-section-marker text-xs text-[#f7bd55] tracking-widest uppercase font-semibold">
                  // ARCHITECTURAL SPECIFICATION
                </span>
                <h1 className="font-display text-4xl sm:text-6xl text-[#ffffff] tracking-tight font-normal leading-tight">
                  RAG-Based AI <br className="hidden sm:inline" />
                  <span className="italic font-display font-light text-[#f7bd55]">
                    Teaching Assistant
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4 pb-1">
                <p className="font-sans text-base sm:text-lg text-[#c4c7c9] leading-relaxed">
                  Retrieval-Augmented Generation system answering questions from video-based learning content through an end-to-end semantic retrieval pipeline.
                </p>
              </div>
            </div>
          </div>

          {/* 2-Slide Interactive Screenshot Carousel */}
          <figure className="w-full flex flex-col gap-4">
            {/* Quick-select Tab Strip */}
            <div className="w-full max-w-full min-w-0 flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none overscroll-x-contain">
              {slides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`shrink-0 px-3.5 py-2.5 rounded-xl text-xs font-label whitespace-nowrap transition-all flex items-center gap-2 border min-h-[44px] ${
                      isActive
                        ? "bg-[#292a2c] text-[#f7bd55] border-[#f7bd55]/50 shadow-md font-semibold"
                        : "bg-[#1b1c1e] text-[#8e9193] border-[#444749]/30 hover:text-[#ffffff] hover:border-[#444749]"
                    }`}
                  >
                    <span className={isActive ? "text-[#f7bd55]" : "text-[#8e9193]"}>
                      0{idx + 1}
                    </span>
                    <span>{slide.title.split(" (")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Carousel Frame */}
            <div className="relative w-full rounded-2xl bg-[#1b1c1e] overflow-hidden shadow-2xl border border-[#444749]/30 group">
              {/* Active Image */}
              <div className="relative w-full bg-[#0d0e10]">
                <Image
                  src={slides[currentSlide].src}
                  alt={slides[currentSlide].alt}
                  width={slides[currentSlide].width}
                  height={slides[currentSlide].height}
                  priority
                  unoptimized
                  className="w-full h-auto object-contain block select-none"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                  }}
                />
              </div>

              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#121315]/90 hover:bg-[#121315] text-[#ffffff] hover:text-[#f7bd55] border border-[#444749]/50 hover:border-[#f7bd55]/60 flex items-center justify-center transition-colors shadow-xl z-10"
              >
                <ChevronLeft className="w-4 h-4 sm:w-[22px] sm:h-[22px]" />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#121315]/90 hover:bg-[#121315] text-[#ffffff] hover:text-[#f7bd55] border border-[#444749]/50 hover:border-[#f7bd55]/60 flex items-center justify-center transition-colors shadow-xl z-10"
              >
                <ChevronRight className="w-4 h-4 sm:w-[22px] sm:h-[22px]" />
              </button>
            </div>

            {/* Dynamic Figcaption */}
            <figcaption className="p-4 sm:p-5 rounded-xl bg-[#1b1c1e] border border-[#444749]/30 flex items-start gap-3.5 text-xs sm:text-sm text-[#c4c7c9] leading-relaxed shadow-md">
              <div className="mt-0.5 p-1 rounded-md bg-[#292a2c] text-[#f7bd55] shrink-0">
                <Sparkles size={18} />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-label text-xs uppercase tracking-wider text-[#f7bd55] font-semibold">
                    {slides[currentSlide].title}
                  </span>
                  <span className="text-[#8e9193] text-xs font-section-marker">
                    // SLIDE 0{currentSlide + 1} OF 0{slides.length}
                  </span>
                </div>
                <p className="text-[#e3e2e5]">
                  {slides[currentSlide].caption}
                </p>
              </div>
            </figcaption>
          </figure>

          {/* Asymmetric Deep-Dive Technical Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Key Capabilities */}
              <div className="p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 flex flex-col gap-4 shadow-lg">
                <span className="font-section-marker text-xs text-[#f7bd55] uppercase font-semibold">
                  // KEY CAPABILITIES
                </span>
                <ul className="space-y-3 text-xs text-[#c4c7c9] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#f7bd55] font-code-inline font-bold shrink-0">01</span>
                    <span>Video-to-text transcription via FFmpeg audio extraction and speech-to-text processing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#f7bd55] font-code-inline font-bold shrink-0">02</span>
                    <span>Embedding generation and vector storage for timestamped lecture content</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#f7bd55] font-code-inline font-bold shrink-0">03</span>
                    <span>Semantic retrieval to answer questions with reduced hallucinations through context-aware grounding</span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 flex flex-col gap-4 shadow-lg">
                <div className="flex flex-col gap-1">
                  <span className="font-section-marker text-xs text-[#f7bd55] uppercase font-semibold">
                    // TECH STACK &amp; METHODOLOGIES
                  </span>
                  <span className="font-label text-xs text-[#8e9193] uppercase">
                    Runtime, Libraries &amp; Frameworks
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "NumPy",
                    "Joblib",
                    "Streamlit",
                    "FFmpeg",
                    "Speech-to-text transcription",
                    "Embeddings-based semantic search",
                    "Vector retrieval",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#292a2c] text-[#f4f4f5] font-label text-xs border border-[#444749]/30 hover:border-[#f7bd55]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="https://github.com/Arykashid/RAG---Based-AI-Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3.5 rounded-xl bg-[#ffffff] text-[#121315] font-sans text-sm font-semibold hover:bg-[#f7bd55] transition-colors inline-flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
              >
                <Terminal size={17} />
                <span>View Repository</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Right Column: Architectural Narrative */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {/* Chapter 01 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-section-marker text-sm text-[#f7bd55] font-semibold">
                    // 01
                  </span>
                  <h2 className="font-sans text-xl sm:text-2xl text-[#ffffff] font-semibold tracking-tight">
                    System Intent &amp; Pedagogical Impact
                  </h2>
                </div>
                <p className="font-sans text-base sm:text-lg text-[#c4c7c9] leading-relaxed">
                  The RAG-Based AI Teaching Assistant is a Retrieval-Augmented Generation system built to answer questions from video-based learning content. It transforms recorded lecture videos into a queryable knowledge base, enabling students to ask precise conceptual questions and receive grounded, context-aware responses that reduce hallucinations through semantic retrieval rather than generative guessing.
                </p>

                {/* Pipeline Overview */}
                <div className="p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 flex flex-col gap-4 my-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-label text-xs text-[#8e9193] uppercase tracking-wider font-semibold">
                      // END-TO-END PIPELINE
                    </span>
                    <span className="font-label text-xs text-[#f7bd55]">
                      VIDEO &rarr; ANSWER
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
                    <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/30 flex flex-col gap-1.5">
                      <span className="font-label text-xs text-[#f7bd55] uppercase font-semibold">Transcription</span>
                      <span className="font-sans text-sm text-[#ffffff] font-medium">Video-to-Text</span>
                      <span className="font-sans text-xs text-[#c4c7c9] leading-normal">FFmpeg audio extraction &amp; speech-to-text processing</span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/30 flex flex-col gap-1.5">
                      <span className="font-label text-xs text-[#f7bd55] uppercase font-semibold">Embedding</span>
                      <span className="font-sans text-sm text-[#ffffff] font-medium">Vector Generation</span>
                      <span className="font-sans text-xs text-[#c4c7c9] leading-normal">Timestamped content converted to dense embeddings</span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/30 flex flex-col gap-1.5">
                      <span className="font-label text-xs text-[#f7bd55] uppercase font-semibold">Storage</span>
                      <span className="font-sans text-sm text-[#ffffff] font-medium">Vector Store</span>
                      <span className="font-sans text-xs text-[#c4c7c9] leading-normal">Indexed vector storage for fast similarity lookup</span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/30 flex flex-col gap-1.5">
                      <span className="font-label text-xs text-[#f7bd55] uppercase font-semibold">Retrieval</span>
                      <span className="font-sans text-sm text-[#ffffff] font-medium">Semantic Search</span>
                      <span className="font-sans text-xs text-[#c4c7c9] leading-normal">Context-aware retrieval to ground responses</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter 02 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-section-marker text-sm text-[#f7bd55] font-semibold">
                    // 02
                  </span>
                  <h2 className="font-sans text-xl sm:text-2xl text-[#ffffff] font-semibold tracking-tight">
                    Signal Ingestion &amp; Embedding Pipeline
                  </h2>
                </div>
                <p className="font-sans text-base sm:text-lg text-[#c4c7c9] leading-relaxed">
                  The pipeline begins with FFmpeg extracting audio from lecture video files, which is then passed through a speech-to-text transcription stage to produce timestamped text. Those transcripts are converted into vector embeddings stored in a vector index. When a student submits a query, the system searches this store to surface the most contextually relevant lecture segments, grounding its response in the actual source material.
                </p>
              </div>

              {/* Chapter 03 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-section-marker text-sm text-[#f7bd55] font-semibold">
                    // 03
                  </span>
                  <h2 className="font-sans text-xl sm:text-2xl text-[#ffffff] font-semibold tracking-tight">
                    Conversational Fabric &amp; Interaction
                  </h2>
                </div>
                <p className="font-sans text-base sm:text-lg text-[#c4c7c9] leading-relaxed">
                  Built with Python and Streamlit, the application provides a conversational interface where students can ask questions about lecture content and receive answers grounded in retrieved transcript segments. By anchoring responses to semantically retrieved context, the system improves response relevance and reduces hallucinations compared to ungrounded generative approaches.
                </p>
              </div>


            </div>
          </div>

          {/* Bottom Pagination */}
          <div className="pt-12 border-t border-[#444749]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/projects/crashguard-ai"
              className="group inline-flex items-center gap-3 p-3 rounded-xl hover:bg-[#1b1c1e] transition-colors w-full sm:w-auto min-h-[44px]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#292a2c] flex items-center justify-center text-[#f7bd55] group-hover:-translate-x-1 transition-transform">
                <ArrowLeft size={18} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-label text-[10px] text-[#8e9193] uppercase">
                  // PREVIOUS SYSTEM
                </span>
                <span className="font-sans text-base sm:text-lg font-semibold text-[#ffffff] group-hover:text-[#f7bd55] transition-colors">
                  CrashGuard AI
                </span>
              </div>
            </Link>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-label text-xs text-[#c4c7c9] hover:text-[#ffffff] transition-colors uppercase tracking-widest min-h-[44px] py-2"
            >
              <span>All Work Archive</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
