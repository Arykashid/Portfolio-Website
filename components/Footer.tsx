"use client";

import React, { useState } from "react";
import { X, Key, Terminal, Code2 } from "lucide-react";

export default function Footer() {
  const [modalContent, setModalContent] = useState<"colophon" | "pgp" | null>(
    null
  );

  return (
    <>
      <footer className="w-full bg-[#0d0e10] border-t border-[#444749]/20 mt-16 sm:mt-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 pt-8 sm:pt-12 pb-20 sm:pb-28 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: System Core Label & Copyright */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-center md:text-left">
            <span className="font-section-marker text-xs text-[#f7bd55] uppercase font-semibold">
              // ARY.SYSTEM.CORE
            </span>
            <span className="hidden sm:inline text-[#444749]">·</span>
            <span className="font-label text-xs text-[#8e9193] font-medium">
              &copy; {new Date().getFullYear()} Ary Kashid. All rights reserved.
            </span>
          </div>

          {/* Right: Technical Meta Links */}
          <div className="flex items-center gap-6 font-label text-xs text-[#8e9193]">
            <a
              href="#about"
              className="hover:text-[#ffffff] transition-colors tracking-wider py-2 min-h-[44px] flex items-center"
            >
              INDEX
            </a>
            <button
              type="button"
              onClick={() => setModalContent("colophon")}
              className="hover:text-[#ffffff] transition-colors tracking-wider py-2 min-h-[44px] flex items-center"
            >
              COLOPHON
            </button>
            <button
              type="button"
              onClick={() => setModalContent("pgp")}
              className="hover:text-[#ffffff] transition-colors tracking-wider py-2 min-h-[44px] flex items-center"
            >
              PGP KEY
            </button>
          </div>
        </div>
      </footer>

      {/* Modal Overlay for Colophon / PGP */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#1b1c1e] border border-[#444749]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#444749]/30">
              <div className="flex items-center gap-2">
                {modalContent === "colophon" ? (
                  <>
                    <Code2 size={16} className="text-[#f7bd55]" />
                    <span className="font-section-marker text-xs text-[#f7bd55] uppercase tracking-wider">
                      // COLOPHON &amp; ARCHITECTURE
                    </span>
                  </>
                ) : (
                  <>
                    <Key size={16} className="text-[#00daf3]" />
                    <span className="font-section-marker text-xs text-[#00daf3] uppercase tracking-wider">
                      // CRYPTOGRAPHIC PUBLIC KEY
                    </span>
                  </>
                )}
              </div>
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="w-8 h-8 rounded-lg bg-[#292a2c] text-[#c4c7c9] hover:text-[#ffffff] hover:bg-[#343537] flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-4">
              {modalContent === "colophon" ? (
                <div className="space-y-4 text-sm text-[#c4c7c9] leading-relaxed">
                  <p>
                    <strong className="text-[#ffffff]">Aesthetic:</strong> Obsidian Atelier — an intersection between meticulous engineering discipline and editorial restraint.
                  </p>
                  <p>
                    <strong className="text-[#ffffff]">Typography:</strong> Set in Newsreader (editorial serif displays), Geist (modern neo-grotesque UI), and JetBrains Mono (precision telemetry codifiers).
                  </p>
                  <p>
                    <strong className="text-[#ffffff]">Platform:</strong> Next.js App Router, TypeScript, Tailwind CSS v4, deployed globally via Vercel Edge Network.
                  </p>
                  <div className="pt-3 border-t border-[#444749]/30 font-label text-xs text-[#8e9193]">
                    BUILD: REV 2026.04 // IST PROTOCOL
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-[#8e9193] font-sans">
                    Fingerprint for secure communications and software commit verification:
                  </p>
                  <pre className="p-3.5 rounded-lg bg-[#0d0e10] border border-[#444749]/30 font-mono text-[11px] text-[#00daf3] overflow-x-auto select-all leading-tight">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v5.1.0
Comment: Ary Kashid <arykashidofficial@gmail.com>

mQENBF/ARYkBCADXk9p0+f9yL9Yk...
Fingerprint: 89A2 3C4F 120D E912 76B4
5A88 C310 9D77 EF01 2026
-----END PGP PUBLIC KEY BLOCK-----`}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
