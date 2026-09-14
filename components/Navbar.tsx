"useclient";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onResumeClick?: () => void;
}

export default function Navbar({ onResumeClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#achievements", id: "achievements" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121315]/90 backdrop-blur-xl border-b border-[#444749]/20 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-[#121315]/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="h-20 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between">
        {/* Brand & Monogram Logo */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group min-h-[44px] min-w-[44px] py-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#444749]/40 bg-[#1b1c1e] p-1 flex items-center justify-center group-hover:border-[#f7bd55]/50 transition-colors">
            <Image
              src="/images/studio-logo.svg"
              alt="Ary Kashid Studio Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-label text-xs tracking-widest text-[#f4f4f5] uppercase group-hover:text-[#f7bd55] transition-colors font-semibold">
              Ary Kashid / Studio
            </span>
          </div>

          {/* Desktop Live Status Dot */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded bg-[#1b1c1e] border border-[#444749]/30 ml-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7bd55] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f7bd55]"></span>
            </span>
            <span className="font-label text-[11px] text-[#c4c7c9] uppercase tracking-wider">
              Available for select projects
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-[#ffffff]" : "text-[#c4c7c9] hover:text-[#ffffff]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#f7bd55] transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Buttons (Desktop & Tablet) */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#ffffff] text-[#121315] font-sans text-xs font-semibold hover:bg-[#f7bd55] transition-colors shadow-sm min-h-[44px] min-w-[44px]"
          >
            Get in Touch
          </a>

          {/* Mobile Hamburger Button (44x44px touch area) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg bg-[#1b1c1e] text-[#f4f4f5] border border-[#444749]/40 hover:bg-[#292a2c] active:scale-95 transition-all"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-[#121315]/98 backdrop-blur-2xl border-b border-[#444749]/30 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          <div className="px-6 py-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#1b1c1e] border border-[#444749]/30 self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7bd55] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f7bd55]"></span>
              </span>
              <span className="font-label text-xs text-[#c4c7c9] uppercase tracking-wider">
                Available for select projects
              </span>
            </div>

            <nav className="flex flex-col divide-y divide-[#444749]/20 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between py-3.5 text-base font-medium text-[#f4f4f5] hover:text-[#f7bd55] transition-colors min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <span className="font-label text-xs text-[#8e9193]">
                    // 0{navLinks.indexOf(link) + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-4 border-t border-[#444749]/30">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full py-3 rounded bg-[#ffffff] text-[#121315] font-sans text-center text-sm font-semibold hover:bg-[#f7bd55] transition-colors min-h-[44px] flex items-center justify-center"
              >
                Get in Touch
              </a>
              {onResumeClick && (
                <button
                  type="button"
                  onClick={() => {
                    handleLinkClick();
                    onResumeClick();
                  }}
                  className="w-full py-3 rounded bg-[#1b1c1e] text-[#f4f4f5] font-sans text-center text-sm font-medium border border-[#444749]/40 hover:bg-[#292a2c] transition-colors min-h-[44px] flex items-center justify-center gap-2"
                >
                  <span>View Resume / CV</span>
                  <ArrowUpRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
