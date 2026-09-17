"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delayMs?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  id,
  delayMs = 0,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const currentEl = domRef.current;

    // Check if element is already within or near viewport on mount
    if (currentEl) {
      const rect = currentEl.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150) {
        setIsVisible(true);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              setTimeout(() => setIsVisible(true), delayMs);
            } else {
              setIsVisible(true);
            }
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        rootMargin: "150px 0px 150px 0px",
        threshold: 0.01,
      }
    );

    if (currentEl) {
      observer.observe(currentEl);
    }

    // Fail-safe: ensure sections are never stuck invisible
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => {
      clearTimeout(safetyTimer);
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [delayMs]);

  return (
    <div
      ref={domRef}
      id={id}
      className={`scroll-reveal scroll-mt-20 ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
