"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, FileText, ArrowUpRight, ArrowUp, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ContactSectionProps {
  onResumeClick?: () => void;
}

export default function ContactSection({ onResumeClick }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const email = "arykashidofficial@gmail.com";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollReveal
      id="contact"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
          // INITIATE CONTACT
        </span>
        <div className="h-px flex-1 bg-[#343537]" />
        <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
          INDEX · 05
        </span>
      </div>

      {/* Main Container */}
      <div className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-[#1b1c1e] shadow-2xl border border-[#444749]/30 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Headline & Action Controls */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#ffffff] font-normal leading-tight">
              Let&apos;s talk about ML, data &amp; opportunities.
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-[#c4c7c9] leading-relaxed">
              Open to AI &amp; Data Science engineering roles, internships, and collaborative research initiatives.
            </p>
          </div>

          {/* Action Row: Copy Email Box + Direct Email CTA + Resume */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
            {/* Copyable Email Pill */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#0d0e10] text-[#ffffff] border border-[#444749]/30 w-full sm:w-auto shadow-inner min-h-[44px]">
              <Mail size={16} className="text-[#f7bd55] shrink-0" />
              <span className="font-code-inline text-xs sm:text-sm select-all text-[#f7bd55] truncate">
                {email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="px-3 py-1.5 rounded bg-[#292a2c] hover:bg-[#343537] text-[#f4f4f5] font-label text-xs uppercase tracking-wider transition-colors ml-auto border border-[#444749]/40 flex items-center gap-1.5 min-h-[36px]"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-[#00daf3]" />
                    <span className="text-[#00daf3] font-semibold">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* Open Mail Client Button */}
            <a
              href={`mailto:${email}`}
              className="px-5 py-3 rounded-lg bg-[#ffffff] text-[#121315] font-sans text-xs sm:text-sm font-semibold hover:bg-[#f7bd55] transition-colors inline-flex items-center justify-center gap-2 shadow-md min-h-[44px]"
            >
              <span>Open Mail Client</span>
              <Send size={15} />
            </a>

            {/* Download Resume Button */}
            {onResumeClick ? (
              <button
                type="button"
                onClick={onResumeClick}
                className="px-5 py-3 rounded-lg bg-[#292a2c] text-[#f4f4f5] font-sans text-xs sm:text-sm font-medium hover:bg-[#38393b] hover:text-[#ffffff] transition-colors inline-flex items-center justify-center gap-2 border border-[#444749]/40 min-h-[44px]"
              >
                <FileText size={15} className="text-[#f7bd55]" />
                <span>Download Resume</span>
              </button>
            ) : (
              <a
                href="#contact"
                className="px-5 py-3 rounded-lg bg-[#292a2c] text-[#f4f4f5] font-sans text-xs sm:text-sm font-medium hover:bg-[#38393b] hover:text-[#ffffff] transition-colors inline-flex items-center justify-center gap-2 border border-[#444749]/40 min-h-[44px]"
              >
                <FileText size={15} className="text-[#f7bd55]" />
                <span>Download Resume</span>
              </a>
            )}
          </div>

          {/* Footer Metadata in Contact Box */}
          <div className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#444749]/20">
            <div className="flex items-center gap-2 text-[#c4c7c9]">
              <span className="w-2 h-2 rounded-full bg-[#f7bd55]" />
              <span className="font-label text-xs uppercase tracking-wider font-medium text-[#f4f4f5]">
                Kolhapur, Maharashtra, India · IST
              </span>
            </div>

            <div className="flex items-center gap-5 flex-wrap">
              <a
                href="https://github.com/Arykashid"
                target="_blank"
                rel="noreferrer"
                className="font-label text-xs text-[#c4c7c9] hover:text-[#ffffff] uppercase tracking-widest transition-colors flex items-center gap-1 py-1 min-h-[44px]"
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://linkedin.com/in/ary-kashid"
                target="_blank"
                rel="noreferrer"
                className="font-label text-xs text-[#c4c7c9] hover:text-[#ffffff] uppercase tracking-widest transition-colors flex items-center gap-1 py-1 min-h-[44px]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="font-label text-xs text-[#c4c7c9] hover:text-[#f7bd55] uppercase tracking-widest transition-colors flex items-center gap-1 py-1 min-h-[44px]"
              >
                <span>Top of Page</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Availability Callout */}
        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end lg:text-right border-t lg:border-t-0 lg:border-l border-[#444749]/20 pt-6 lg:pt-0 lg:pl-8">
          <div className="p-4 rounded-xl bg-[#121315]/60 border border-[#444749]/20 w-full lg:w-auto">
            <span className="font-section-marker text-[11px] text-[#00daf3] uppercase tracking-wider block mb-2">
              // CURRENT STATUS
            </span>
            <p className="font-display text-[#ffffff] leading-tight font-normal text-xl sm:text-2xl">
              Available for
              <br />
              <span className="text-[#f7bd55] italic">
                internships, research &amp; ML engineering roles.
              </span>
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
