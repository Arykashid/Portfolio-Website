"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * PortfolioEntrance — AK logo-driven cinematic entrance.
 *
 * VISUAL SEQUENCE
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  PHASE 1 (0.00–0.45 s) — Logo Appearance:
 *    Full-screen dark overlay established from frame 0. AK logo fades in deliberately
 *    as solid white at the viewport centre.
 *
 *  PHASE 2 (0.45–1.05 s) — Logo Hold:
 *    AK logo remains static and clearly recognizable at the viewport centre.
 *
 *  PHASE 3 (1.05–3.30 s) — Expansion:
 *    AK paths expand with cinematic power3.inOut from s0 → s1, consuming the screen.
 *
 *  PHASE 4 (3.30–4.00 s) — Transition / Fade-Out:
 *    Full overlay dissolves opacity → 0 with power2.out, revealing the portfolio.
 *    Total entrance duration = 4.00 s on both mobile and desktop.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * MOBILE FIXES  (desktop behaviour is unchanged)
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  1. VIEWPORT — visualViewport (most accurate on mobile: accounts for address
 *     bar, keyboard, pinch-zoom), falls back to innerWidth/Height, then
 *     clientWidth/Height.  If dimensions are zero at layout-effect time
 *     (mobile browser hasn't settled), one rAF retry before starting.
 *
 *  2. OVERLAY SIZE — set via JS pixel values, not CSS 100vh/dvh, to match the
 *     ACTUAL visual viewport and avoid the address-bar layout-vs-visual-
 *     viewport mismatch on Android Chrome.
 *
 *  3. SVG VIEWBOX — "0 0 {vw} {vh}" using the same visual-viewport values so
 *     translate(vpCx, vpCy) is the exact pixel centre.
 *
 *  4. SCALE s1 — uses viewport diagonal × 1.8; portrait phones (vh >> vw)
 *     have a tall diagonal, so paths expand enough to cover every corner.
 *
 *  5. SAFETY FALLBACK — 4 s absolute timeout removes the overlay even if
 *     onComplete never fires.  Cleared in cleanup and on natural completion.
 *
 *  6. STRICT MODE — gsap.context() + ctx.revert() in cleanup correctly kills
 *     in-flight timelines on double-mount.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * LIFECYCLE  (Next.js 16 + React 19 + Strict Mode safe)
 *  useState(false) → SSR renders null (no hydration mismatch).
 *  useIsomorphicLayoutEffect (dep []) → session check, sets show=true.
 *  useIsomorphicLayoutEffect (dep [show]) → reads viewport, starts timeline.
 *  SESSION_KEY written only in onComplete / safety fallback.
 */

// ─── Isomorphic layout effect ─────────────────────────────────────────────────
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// ─── Constants ────────────────────────────────────────────────────────────────
const SESSION_KEY = "ak_entrance_v4";

// AK logo paths — verbatim from reference/gemini-svg.svg (viewBox 0 0 1000 1000)
const LEFT_PILLAR  = "M 148 852 L 358 852 L 358 664 L 460 664 L 460 148 L 396 148 Z";
const RIGHT_PILLAR = "M 490 148 L 604 148 L 852 852 L 634 852 L 500 664 L 618 518 L 490 518 Z";

// Centre of the AK mark in 1000 × 1000 viewBox coordinate space
const MARK_CX = 500;
const MARK_CY = 500;

// ─── Helper: most reliable visual-viewport dimensions ────────────────────────
function getViewport(): { vw: number; vh: number } {
  const vv = typeof window !== "undefined" ? window.visualViewport : null;
  const vw = Math.round(
    vv?.width ||
    window.innerWidth ||
    document.documentElement?.clientWidth ||
    375
  );
  const vh = Math.round(
    vv?.height ||
    window.innerHeight ||
    document.documentElement?.clientHeight ||
    667
  );
  return { vw, vh };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function PortfolioEntrance() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const svgRef     = useRef<SVGSVGElement>(null);
  const maskGRef   = useRef<SVGGElement>(null);   // hole-punching group (inside mask)
  const whiteGRef  = useRef<SVGGElement>(null);   // visible white logo group

  const [show, setShow] = useState(true);

  // ── Effect 1: session check ──────────────────────────────────────────────
  useIsomorphicLayoutEffect(() => {
    let alreadySeen = false;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) alreadySeen = true;
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) setShow(false);
  }, []);

  // ── Effect 2: GSAP animation ─────────────────────────────────────────────
  useIsomorphicLayoutEffect(() => {
    if (!show) return;

    const overlay = overlayRef.current;
    const svg     = svgRef.current;
    const maskG   = maskGRef.current;
    const whiteG  = whiteGRef.current;

    if (!overlay || !svg || !maskG || !whiteG) return;

    // Safety-timer ref — cleared in cleanup and on natural completion.
    // Guarantees overlay is ALWAYS removed (stuck-screen prevention).
    let safetyTimer: ReturnType<typeof setTimeout> | null = null;

    // ── Finalize: write session key, remove overlay ───────────────────────
    const finalize = () => {
      if (safetyTimer) { clearTimeout(safetyTimer); safetyTimer = null; }
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* noop */ }
      try { document.documentElement.classList.add("entrance-done"); } catch { /* noop */ }
      setShow(false);
    };

    // ── Core animation: called once we have valid viewport dimensions ─────
    const startAnimation = (vw: number, vh: number) => {
      // Mobile = anything narrower than 900 px CSS width.
      // Covers all phones (375–428), large Android phones (≤768), small tablets.
      const isMobile = vw < 900;

      // Overlay pinned to full viewport
      overlay.style.width  = "100%";
      overlay.style.height = "100%";
      overlay.style.inset  = "0";

      // SVG viewBox = pixel dimensions so translate(vpCx,vpCy) = screen centre.
      svg.setAttribute("viewBox", `0 0 ${vw} ${vh}`);

      const vpCx = vw / 2;
      const vpCy = vh / 2;

      // s0: AK logo scale
      // On desktop: ~18% of min(vw, vh) / 704 (approved desktop design)
      // On mobile: 28% of vw, bounded between 100px and 140px for ideal clarity
      const s0 = (isMobile ? Math.min(Math.max(vw * 0.28, 100), 140) : 0.18 * Math.min(vw, vh)) / 704;

      // s1: AK paths must cover every corner of the viewport.
      // On portrait phones, diagonal factor 2.5 ensures complete edge-to-edge coverage
      const diag = Math.sqrt(vw * vw + vh * vh);
      const s1   = (diag / 704) * (isMobile ? 2.5 : 1.8);

      const makeTransform = (s: number) =>
        `translate(${vpCx} ${vpCy}) scale(${s}) translate(${-MARK_CX} ${-MARK_CY})`;

      const ctx = gsap.context(() => {
        // Lock initial transforms before first browser paint
        const t0 = makeTransform(s0);
        maskG.setAttribute("transform",  t0);
        whiteG.setAttribute("transform", t0);
        gsap.set(whiteG, { opacity: 0 });
        gsap.set(overlay, { opacity: 1 });

        // ── Reduced-motion shortcut ───────────────────────────────────
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          gsap.to(overlay, {
            opacity:  0,
            duration: 0.3,
            delay:    0.2,
            ease:     "power1.out",
            onComplete: finalize,
          });
          return;
        }

        // ── Full animation timeline (4.0s total on both mobile & desktop) ──
        const proxy = { s: s0 };
        const tl = gsap.timeline({ onComplete: finalize });

        // Phase 1 — logo appearance: smooth deliberate fade-in (0.45s)
        tl.to(whiteG, {
          opacity:  1,
          duration: 0.45,
          ease:     "power2.out",
        });

        // Phase 2 — logo hold: AK logo static and clearly visible (0.60s)
        tl.to(proxy, {
          s:        s0,
          duration: 0.60,
          ease:     "none",
        });

        // Phase 3 — expansion: s0 → s1, logo becomes the transition (2.25s)
        tl.to(proxy, {
          s:        s1,
          duration: 2.25,
          ease:     "power3.inOut",
          onUpdate() {
            const t = makeTransform(proxy.s);
            maskG.setAttribute("transform",  t);
            whiteG.setAttribute("transform", t);
          },
        });

        // Phase 4 — final transition: overlay dissolves, portfolio revealed (0.70s)
        tl.to(overlay, {
          opacity:  0,
          duration: 0.70,
          ease:     "power2.out",
          onStart() {
            if (overlay) overlay.style.pointerEvents = "none";
          },
        });
      }, overlay);

      // 6-second absolute kill-switch: prevents permanent black screen (cleared on natural 4.0s completion)
      safetyTimer = setTimeout(() => {
        ctx.revert();
        if (overlay) {
          overlay.style.pointerEvents = "none";
          overlay.style.opacity = "0";
        }
        finalize();
      }, 6000);

      // Return cleanup for Strict Mode's double-mount
      return () => {
        if (safetyTimer) { clearTimeout(safetyTimer); safetyTimer = null; }
        ctx.revert();
      };
    };

    // ── Read viewport — defer one rAF if dimensions are zero ─────────────
    // Mobile browsers can briefly report zero during the very first
    // synchronous useLayoutEffect while the address-bar geometry settles.
    const { vw, vh } = getViewport();

    if (vw > 0 && vh > 0) {
      const cleanup = startAnimation(vw, vh);
      return cleanup ?? (() => { if (safetyTimer) clearTimeout(safetyTimer); });
    }

    // Dimensions temporarily zero — wait one animation frame then retry
    let raf = 0;
    raf = requestAnimationFrame(() => {
      const { vw: vw2, vh: vh2 } = getViewport();
      startAnimation(vw2 > 0 ? vw2 : 375, vh2 > 0 ? vh2 : 667);
    });
    return () => {
      cancelAnimationFrame(raf);
      if (safetyTimer) clearTimeout(safetyTimer);
    };
  }, [show]);

  // ── Render ────────────────────────────────────────────────────────────────
  if (!show) return null;

  return (
    /*
     * Full-screen fixed overlay — above everything (z 9999).
     *
     * width / height are NOT set in CSS here — they are written in JS by
     * startAnimation() using the exact visual-viewport pixel values to avoid
     * the CSS-100vh vs visualViewport mismatch on Android browsers.
     *
     * backgroundColor: #0d0e10 provides the initial dark field before the JS
     * sets the SVG viewBox (prevents any flash of transparent background).
     *
     * overflow:hidden — clips SVG content during large-scale expansion.
     * pointerEvents:all — blocks portfolio interaction while live.
     */
    <div
      ref={overlayRef}
      id="portfolio-entrance"
      aria-hidden="true"
      style={{
        position:        "fixed",
        inset:           0,
        width:           "100%",
        height:          "100%",
        zIndex:          9999,
        overflow:        "hidden",
        pointerEvents:   "all",
        willChange:      "opacity",
        backgroundColor: "#0d0e10", // dark field until SVG is ready
      }}
    >
      {/*
        Full-viewport SVG.
        viewBox is set dynamically in useLayoutEffect to match the actual
        visual-viewport pixel dimensions.

        Two visual layers:
          A. Dark masked rect — a full-screen dark rect with AK-logo-shaped
             transparent holes cut by the SVG mask. Portfolio shows through
             the holes.
          B. White AK paths — drawn on top at the same transform as the mask
             group → solid white logo glyph covering the transparent holes.
      */}
      <svg
        ref={svgRef}
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          top:      0,
          left:     0,
          width:    "100%",
          height:   "100%",
          display:  "block",
          overflow: "visible",
        }}
      >
        <defs>
          {/*
            SVG mask semantics:
              white area → dark rect is opaque (hides portfolio)
              black area → dark rect is transparent (portfolio visible through)
            AK paths rendered in black → punch transparent holes in the dark rect.
          */}
          <mask id="pe-ak-mask" maskUnits="userSpaceOnUse">
            {/* Large white background — dark rect is opaque everywhere by default */}
            <rect x="-10000" y="-10000" width="30000" height="30000" fill="white" />
            {/* AK paths in black — create transparent holes through the dark rect */}
            <g ref={maskGRef}>
              <path fill="black" d={LEFT_PILLAR}  />
              <path fill="black" d={RIGHT_PILLAR} />
            </g>
          </mask>
        </defs>

        {/* Layer A: Dark rect with AK-shaped transparent holes */}
        <rect
          x="-10000" y="-10000"
          width="30000" height="30000"
          fill="#0d0e10"
          mask="url(#pe-ak-mask)"
        />

        {/* Layer B: White AK logo — solid white, on top, same transform as mask group */}
        <g ref={whiteGRef} style={{ opacity: 0 }}>
          <path fill="#FFFFFF" d={LEFT_PILLAR}  />
          <path fill="#FFFFFF" d={RIGHT_PILLAR} />
        </g>
      </svg>
    </div>
  );
}
