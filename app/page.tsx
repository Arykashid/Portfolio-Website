"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121315] text-[#e3e2e5] flex flex-col selection:bg-[#f7bd55]/25 selection:text-[#f7bd55]">
      {/* Fixed Frosted Glass Navigation Bar */}
      <Navbar onResumeClick={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 flex-1 flex flex-col">
        {/* 1. Hero Section (Photo stacks first on mobile) */}
        <HeroSection onResumeClick={() => setIsResumeOpen(true)} />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Skills Infinite Marquee Section */}
        <SkillsMarquee />

        {/* 4. Selected Projects Section (1-per-row on mobile) */}
        <ProjectsSection />

        {/* 5. Education & Achievements Section (1-column on mobile) */}
        <AchievementsSection />

        {/* 6. Contact Section (Non-oversized, copyable email) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
