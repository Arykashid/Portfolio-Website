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
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const slides = [
  {
    id: 1,
    title: "Dashboard (ESCALATE state)",
    category: "AUTONOMOUS RESPONSE",
    src: "/images/crashguard-dashboard.png",
    alt: "CrashGuard AI Dashboard showing ESCALATE state and active server node alert",
    caption:
      "Dashboard (ESCALATE state) — Real-time telemetry monitoring server load with autonomous escalation triggered upon predicted SLA breach risk.",
  },
  {
    id: 2,
    title: "Systems (5-server fleet overview)",
    category: "FLEET TELEMETRY",
    src: "/images/crashguard-systems.png",
    alt: "CrashGuard AI Systems view showing 5-server fleet status and CPU usage",
    caption:
      "Systems (5-server fleet overview) — Continuous fleet telemetry across 5 monitored nodes tracking real-time CPU usage, trend vectors, and autonomous operational decisions.",
  },
  {
    id: 3,
    title: "Models (calibration metrics)",
    category: "SAFETY GATING",
    src: "/images/crashguard-models.png",
    alt: "CrashGuard AI Models calibration proof and degraded trust mode",
    caption:
      "The system continuously validates its own calibration — when prediction divergence exceeds safe thresholds, it autonomously gates decisions to a safer monitoring mode rather than continuing to act on unreliable predictions.",
  },
  {
    id: 4,
    title: "Predictions (per-server predictions with recommended actions)",
    category: "PER-SERVER FORECASTS",
    src: "/images/crashguard-predictions.png",
    alt: "CrashGuard AI Predictions screen with per-server risk forecasts and recommended actions",
    caption:
      "Predictions (per-server predictions with recommended actions) — Granular per-server forecasts with 5-minute operational risk assessment, decision gating, and automated intervention actions.",
  },
];

export default function CrashGuardAIPage() {
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

      <main className="w-full pt-28 pb-16 flex-1">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 flex flex-col gap-12 sm:gap-16">
          {/* Top Breadcrumb & Metadata */}
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
                    AUTONOMOUS ML // 2026
                  </span>
                </div>
                <span className="font-section-marker text-xs text-[#8e9193] tracking-widest uppercase">
                  PROJECT // 01
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl text-[#ffffff] tracking-tight font-normal">
                CrashGuard AI
              </h1>
              <p className="font-sans text-lg sm:text-2xl text-[#c4c7c9] max-w-4xl font-normal leading-relaxed">
                Autonomous CPU workload forecasting &amp; proactive infrastructure resiliency engine.
              </p>
            </div>
          </div>

          {/* 4-Slide Interactive Screenshot Carousel */}
          <figure className="w-full flex flex-col gap-4">
            {/* Quick-select Tab Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {slides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-label whitespace-nowrap transition-all flex items-center gap-2 border min-h-[44px] ${
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
                  width={1920}
                  height={912}
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
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#121315]/90 hover:bg-[#121315] text-[#ffffff] hover:text-[#f7bd55] border border-[#444749]/50 hover:border-[#f7bd55]/60 flex items-center justify-center transition-colors shadow-xl z-10"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#121315]/90 hover:bg-[#121315] text-[#ffffff] hover:text-[#f7bd55] border border-[#444749]/50 hover:border-[#f7bd55]/60 flex items-center justify-center transition-colors shadow-xl z-10"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Dynamic Figcaption */}
            <figcaption className="p-4 sm:p-5 rounded-xl bg-[#1b1c1e] border border-[#444749]/30 flex items-start gap-3.5 text-xs sm:text-sm text-[#c4c7c9] leading-relaxed shadow-md">
              <div className="mt-0.5 p-1 rounded-md bg-[#292a2c] text-[#f7bd55] shrink-0">
                <ShieldCheck size={18} />
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

          {/* Deep Architectural Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Narrative & Benchmarks */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <span className="font-section-marker text-sm text-[#f7bd55] font-semibold">
                  // 01
                </span>
                <span className="font-section-marker text-sm text-[#8e9193] uppercase tracking-wider font-semibold">
                  SYSTEM ARCHITECTURE &amp; SPECIFICATION
                </span>
              </div>

              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[#c4c7c9]">
                <p className="text-[#ffffff] font-medium">
                  CrashGuard AI is an autonomous infrastructure failure-prevention system engineered to anticipate compute spikes and node degradation before they impact production workloads. Built around a hybrid LSTM and XGBoost ensemble model, it processes 15 engineered temporal features from ~60,000 Google Cluster CPU records to achieve a 60% CPU spike prediction accuracy, a forecast RMSE of 0.1337, and a Diebold-Mariano (DM) test p-value of 0.0086 demonstrating statistically significant predictive superiority over baseline models.
                </p>
                <p>
                  At the core of CrashGuard AI is a state-driven Decision Engine (v5) equipped with hysteresis boundaries and dynamic confidence gating. Rather than relying on static threshold alerts that induce alert fatigue, the engine evaluates confidence-weighted risk trajectories, proactively orchestrating cluster node mitigation and preemptive auto-scaling actions while suppressing false-positive flapping. A hard override triggers at CPU &ge; 90% to guarantee immediate fail-safe escalation.
                </p>
                <p>
                  Packaged within containerized microservices utilizing Docker and Flask APIs, the architecture demonstrates that predictive machine intelligence coupled with rigorous finite state machines can eliminate reactive outage fire drills in modern high-throughput cloud environments.
                </p>
              </div>

              {/* Empirical Benchmarks & Specifications Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 shadow-lg flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-section-marker text-xs text-[#f7bd55] uppercase font-semibold">
                    // EMPIRICAL BENCHMARKS &amp; SPECIFICATIONS
                  </span>
                  <span className="font-label text-xs text-[#8e9193] uppercase">
                    Validated Performance &amp; State Engine Rules
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/20 flex flex-col gap-1">
                    <span className="font-label text-[11px] text-[#8e9193] uppercase">
                      Spike Prediction Accuracy
                    </span>
                    <span className="font-section-marker text-2xl text-[#ffffff] font-semibold">
                      60%
                    </span>
                    <span className="font-sans text-xs text-[#8e9193]">
                      Anticipating critical CPU spikes
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/20 flex flex-col gap-1">
                    <span className="font-label text-[11px] text-[#8e9193] uppercase">
                      Forecast RMSE
                    </span>
                    <span className="font-section-marker text-2xl text-[#f7bd55] font-semibold">
                      0.1337
                    </span>
                    <span className="font-sans text-xs text-[#8e9193]">
                      LSTM + XGBoost ensemble
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121315] border border-[#444749]/20 flex flex-col gap-1">
                    <span className="font-label text-[11px] text-[#8e9193] uppercase">
                      Diebold-Mariano Test
                    </span>
                    <span className="font-section-marker text-2xl text-[#00daf3] font-semibold">
                      p = 0.0086
                    </span>
                    <span className="font-sans text-xs text-[#8e9193]">
                      Statistically significant superiority
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#444749]/30">
                  <div className="p-3.5 rounded-xl bg-[#121315]/70 border border-[#444749]/20 flex items-start gap-3">
                    <div className="mt-0.5 text-[#f7bd55] shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label text-xs text-[#ffffff] font-medium">
                        Training &amp; Feature Engineering
                      </span>
                      <span className="font-sans text-xs text-[#c4c7c9] leading-relaxed">
                        15 temporal features extracted from ~60,000 Google Cluster CPU records.
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#121315]/70 border border-[#444749]/20 flex items-start gap-3">
                    <div className="mt-0.5 text-[#f7bd55] shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label text-xs text-[#ffffff] font-medium">
                        Decision Engine v5 Governance
                      </span>
                      <span className="font-sans text-xs text-[#c4c7c9] leading-relaxed">
                        Hysteresis boundaries and confidence gating with hard override at CPU &ge; 90%.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Tech Stack & Repo Actions */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Tech Stack Box */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 shadow-lg flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="font-section-marker text-xs text-[#f7bd55] uppercase font-semibold">
                    // TECH STACK &amp; METHODOLOGIES
                  </span>
                  <span className="font-label text-xs text-[#8e9193] uppercase">
                    Runtime, ML Models &amp; Frameworks
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "LSTM",
                    "XGBoost",
                    "Python",
                    "Flask",
                    "Docker",
                    "Time-Series Forecasting",
                    "Confidence-Gated Escalation",
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

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/Arykashid/CrashGuard-AI"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#ffffff] text-[#121315] font-sans text-sm font-semibold hover:bg-[#f7bd55] transition-colors shadow-lg group min-h-[44px]"
                >
                  <Terminal size={17} />
                  <span>View Repository</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <div className="px-4 py-3 rounded-xl bg-[#1b1c1e] border border-[#444749]/30 text-center font-label text-xs text-[#c4c7c9] flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f7bd55] animate-pulse" />
                  <span>CONTAINERIZED WORKFLOW DOCKERFILE READY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pagination */}
          <div className="pt-12 border-t border-[#444749]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="font-section-marker text-xs text-[#8e9193] uppercase">
              ARCHIVE REF // 01 of 02
            </div>

            <Link
              href="/projects/rag-teaching-assistant"
              className="flex items-center gap-4 text-right group p-3 rounded-xl hover:bg-[#1b1c1e] transition-colors min-h-[44px]"
            >
              <div className="flex flex-col">
                <span className="font-label text-[10px] text-[#8e9193] uppercase tracking-wider">
                  NEXT CASE STUDY
                </span>
                <span className="font-sans text-base sm:text-lg font-semibold text-[#ffffff] group-hover:text-[#f7bd55] transition-colors">
                  RAG-Based AI Teaching Assistant
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#292a2c] text-[#f4f4f5] flex items-center justify-center group-hover:bg-[#f7bd55] group-hover:text-[#121315] transition-colors">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
