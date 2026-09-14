"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Activity,
  CheckCircle2,
  Cpu,
  Server,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CrashGuardAIPage() {
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

          {/* Large Interface Viewport / Screenshot Frame */}
          <div className="relative w-full rounded-2xl bg-[#1b1c1e] overflow-hidden shadow-2xl border border-[#444749]/30 group">
            <div className="w-full aspect-[16/9] relative">
              <Image
                src="/images/crashguard-ai.png"
                alt="CrashGuard AI Telemetry Dashboard"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1320px"
                className="object-cover object-top"
              />

              {/* HUD Telemetry Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e10]/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d0e10]/90 backdrop-blur-md border border-[#444749]/40">
                <Server size={14} className="text-[#00daf3]" />
                <span className="font-section-marker text-xs text-[#00daf3]">
                  // NODE: PROMETHEUS_CLUSTER_09
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between flex-wrap gap-2 pointer-events-none">
                <div className="px-3 py-1.5 rounded-lg bg-[#0d0e10]/90 backdrop-blur-md border border-[#444749]/40 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f7bd55] animate-ping" />
                  <span className="font-label text-xs text-[#f7bd55]">
                    TELEMETRY_ENGINE_V5.STATE // ACTIVE
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#0d0e10]/90 backdrop-blur-md border border-[#444749]/40 font-label text-xs text-[#c4c7c9]">
                  RMSE // 0.1337 | LOOKAHEAD // 15M
                </div>
              </div>
            </div>
          </div>

          {/* Deep Architectural Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Narrative & Inference Telemetry Kernel */}
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
                  CrashGuard AI is an autonomous infrastructure failure-prevention system engineered to anticipate compute spikes and node degradation before they impact production workloads. Built around a hybrid LSTM and XGBoost ensemble model, it processes multi-metric telemetry across CPU load, memory pressure, and I/O wait times to produce continuous 15-minute lookahead forecasts with an RMSE of 0.1337.
                </p>
                <p>
                  At the core of CrashGuard AI is a state-driven Decision Engine (v5) equipped with hysteresis boundaries and dynamic confidence gating. Rather than relying on static threshold alerts that induce alert fatigue, the engine evaluates confidence-weighted risk trajectories, proactively orchestrating cluster node mitigation and preemptive auto-scaling actions while suppressing false-positive flapping.
                </p>
                <p>
                  Packaged within containerized microservices utilizing Docker and Flask APIs, the architecture integrates directly with Prometheus monitoring pipelines. It demonstrates that predictive machine intelligence coupled with rigorous finite state machines can eliminate reactive outage fire drills in modern high-throughput cloud environments.
                </p>
              </div>

              {/* Inference Telemetry Kernel Chart */}
              <div className="p-6 rounded-2xl bg-[#1b1c1e] border border-[#444749]/30 shadow-lg flex flex-col gap-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-[#f7bd55]" />
                    <span className="font-label text-xs text-[#f7bd55] uppercase tracking-wider font-semibold">
                      // INFERENCE TELEMETRY KERNEL
                    </span>
                  </div>
                  <span className="font-label text-xs text-[#8e9193]">
                    HISTORICAL VS PREDICTION CONE
                  </span>
                </div>

                {/* Histogram Bars */}
                <div className="w-full h-28 flex items-end gap-1.5 pt-4 overflow-hidden border-b border-[#444749]/30 pb-2">
                  <div className="flex-1 bg-[#343537] h-[32%] rounded-t-sm" title="T-45: 32%" />
                  <div className="flex-1 bg-[#343537] h-[45%] rounded-t-sm" title="T-40: 45%" />
                  <div className="flex-1 bg-[#343537] h-[38%] rounded-t-sm" title="T-35: 38%" />
                  <div className="flex-1 bg-[#343537] h-[56%] rounded-t-sm" title="T-30: 56%" />
                  <div className="flex-1 bg-[#343537] h-[48%] rounded-t-sm" title="T-25: 48%" />
                  <div className="flex-1 bg-[#343537] h-[64%] rounded-t-sm" title="T-20: 64%" />
                  <div className="flex-1 bg-[#343537] h-[72%] rounded-t-sm" title="T-15: 72%" />
                  <div className="flex-1 bg-[#f7bd55]/40 h-[78%] rounded-t-sm" title="T-10: 78%" />
                  <div className="flex-1 bg-[#f7bd55]/60 h-[86%] rounded-t-sm" title="T-5: 86%" />
                  <div className="flex-1 bg-[#f7bd55] h-[94%] rounded-t-sm relative" title="T-0: PEAK 94%">
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-label text-[9px] text-[#f7bd55] font-bold">
                      PEAK
                    </span>
                  </div>
                  <div className="flex-1 bg-[#00daf3]/80 h-[82%] rounded-t-sm" title="T+5: 82% (Mitigation)" />
                  <div className="flex-1 bg-[#00daf3]/60 h-[68%] rounded-t-sm" title="T+10: 68%" />
                  <div className="flex-1 bg-[#343537] h-[54%] rounded-t-sm" title="T+15: 54%" />
                  <div className="flex-1 bg-[#343537] h-[42%] rounded-t-sm" title="T+20: 42%" />
                </div>

                <div className="flex items-center justify-between font-label text-[11px] text-[#8e9193] pt-1">
                  <span>T-45 MIN</span>
                  <span className="text-[#f7bd55] font-medium">T-0 (DETECTION TRIGGER)</span>
                  <span className="text-[#00daf3] font-medium">T+15 MIN (MITIGATED)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Tech Stack, Metrics & Repo Actions */}
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
                    "Prometheus Telemetry",
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

                {/* Telemetry Key Figures */}
                <div className="flex flex-col gap-2.5 pt-2 border-t border-[#444749]/30">
                  <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#121315] border border-[#444749]/20">
                    <span className="font-label text-xs text-[#c4c7c9]">MODEL ACCURACY</span>
                    <span className="font-section-marker text-sm text-[#ffffff] font-semibold">
                      99.14%
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#121315] border border-[#444749]/20">
                    <span className="font-label text-xs text-[#c4c7c9]">LATENCY OVERHEAD</span>
                    <span className="font-section-marker text-sm text-[#00daf3] font-semibold">
                      &lt; 14ms
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#121315] border border-[#444749]/20">
                    <span className="font-label text-xs text-[#c4c7c9]">DECISION HORIZON</span>
                    <span className="font-section-marker text-sm text-[#f7bd55] font-semibold">
                      15-Min Proactive
                    </span>
                  </div>
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
