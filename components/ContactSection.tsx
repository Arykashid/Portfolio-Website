"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, Check, Copy, ArrowUpRight, ArrowUp, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "arykashidofficial@gmail.com";

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) {
          if (headerRef.current) gsap.set(headerRef.current, { clearProps: "all" });
          if (cardRef.current) gsap.set(cardRef.current, { clearProps: "all" });
          return;
        }

        // ── INITIAL STATES ──
        // Header: editorial mask-reveal
        gsap.set(headerRef.current, { yPercent: 110, opacity: 0 });

        // Main card: enters from below with strong scale effect — "cinematic ending" feel
        gsap.set(cardRef.current, {
          y: isDesktop ? 110 : 70,
          scale: 0.91,
          opacity: 0,
        });

        // Internal card elements: start offset so they reveal within the card
        if (cardRef.current) {
          const headline = cardRef.current.querySelector(".contact-headline");
          const statusBox = cardRef.current.querySelector(".contact-status");
          const actionsRow = cardRef.current.querySelector(".contact-actions");
          const footerMeta = cardRef.current.querySelector(".contact-footer-meta");

          if (headline) gsap.set(headline, { y: isDesktop ? 45 : 28, opacity: 0 });
          if (statusBox) gsap.set(statusBox, { y: isDesktop ? 55 : 34, opacity: 0 });
          if (actionsRow) gsap.set(actionsRow, { y: isDesktop ? 38 : 24, opacity: 0 });
          if (footerMeta) gsap.set(footerMeta, { y: isDesktop ? 28 : 16, opacity: 0 });
        }

        // ── SECTION HEADER TIMELINE: enters first ──
        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center bottom",
            scrub: 0.9,
          },
        });

        headerTl.to(headerRef.current, {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.3,
        });

        // ── MAIN CARD TIMELINE: card settles into place ──
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1.0,
          },
        });

        // Card container: scale up + rise from below (cinematic landing)
        cardTl.to(
          cardRef.current,
          { y: 0, scale: 1, opacity: 1, ease: "power2.out", duration: 0.5 },
          0
        );

        if (cardRef.current) {
          const headline = cardRef.current.querySelector(".contact-headline");
          const statusBox = cardRef.current.querySelector(".contact-status");
          const actionsRow = cardRef.current.querySelector(".contact-actions");
          const footerMeta = cardRef.current.querySelector(".contact-footer-meta");

          // Internal elements cascade in AFTER the card arrives
          if (headline) {
            cardTl.to(headline, { y: 0, opacity: 1, ease: "power2.out", duration: 0.35 }, 0.2);
          }
          if (statusBox) {
            cardTl.to(statusBox, { y: 0, opacity: 1, ease: "power2.out", duration: 0.38 }, 0.28);
          }
          if (actionsRow) {
            cardTl.to(actionsRow, { y: 0, opacity: 1, ease: "power2.out", duration: 0.32 }, 0.36);
          }
          if (footerMeta) {
            cardTl.to(footerMeta, { y: 0, opacity: 1, ease: "power2.out", duration: 0.3 }, 0.44);
          }
        }

        // ── SETTLING / THROUGH-SCROLL DEPTH ──
        // Contact section is at the bottom of the page, so the depth effect
        // plays as the footer approaches. The card "lands" while header drifts.
        const settlingTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Header drifts upward (slowest)
        settlingTl.to(
          headerRef.current,
          { y: isDesktop ? -35 : -18, ease: "none", duration: 1 },
          0
        );

        // Card drifts more slowly — the whole section "settles" as you scroll to bottom
        settlingTl.to(
          cardRef.current,
          { y: isDesktop ? -20 : -10, ease: "none", duration: 1 },
          0
        );
      },
      sectionRef
    );

    return () => mm.revert();
  }, []);

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
    <section
      ref={sectionRef}
      id="contact"
      className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 pt-16 sm:pt-24 pb-28 sm:pb-36 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="overflow-hidden mb-8">
        <div ref={headerRef} className="flex items-center gap-3">
          <span className="font-section-marker text-xs sm:text-sm text-[#f7bd55] uppercase tracking-widest font-semibold">
            // INITIATE CONTACT
          </span>
          <div className="h-px flex-1 bg-[#343537]" />
          <span className="font-label text-xs sm:text-sm text-[#8e9193] uppercase tracking-widest font-medium">
            INDEX · 05
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div
        ref={cardRef}
        className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-[#1b1c1e] shadow-2xl border border-[#444749]/30 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
      >
        {/* Left Column: Headline & Action Controls */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="contact-headline max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#ffffff] font-normal leading-tight">
              Let&apos;s talk about ML, data &amp; opportunities.
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-[#c4c7c9] leading-relaxed">
              Open to AI &amp; Data Science engineering roles, internships, and collaborative research initiatives.
            </p>
          </div>

          {/* Action Row: Copy Email Box + Direct Email CTA + Resume */}
          <div className="contact-actions mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
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
                className="px-3.5 py-2 rounded bg-[#292a2c] hover:bg-[#343537] text-[#f4f4f5] font-label text-xs uppercase tracking-wider transition-colors ml-auto border border-[#444749]/40 flex items-center gap-1.5 min-h-[44px]"
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
          </div>

          {/* Footer Metadata in Contact Box */}
          <div className="contact-footer-meta mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#444749]/20">
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
        <div className="contact-status lg:col-span-4 flex flex-col justify-center items-start lg:items-end lg:text-right border-t lg:border-t-0 lg:border-l border-[#444749]/20 pt-6 lg:pt-0 lg:pl-8">
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
    </section>
  );
}
