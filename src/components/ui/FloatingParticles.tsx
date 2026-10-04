"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface FloatingParticlesProps {
  count?: number;
  type?: "petals" | "gold-dust" | "mixed";
  className?: string;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 24,
  type = "mixed",
  className = "absolute inset-0 pointer-events-none overflow-hidden z-10",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const elements: HTMLDivElement[] = [];

    // Clear previous
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      const isPetal = type === "petals" || (type === "mixed" && i % 3 === 0);

      if (isPetal) {
        // Flower Petal style
        const size = Math.random() * 12 + 8;
        particle.style.width = `${size}px`;
        particle.style.height = `${size * 1.3}px`;
        particle.style.backgroundColor = Math.random() > 0.5 ? "rgba(255, 245, 240, 0.75)" : "rgba(253, 238, 233, 0.65)";
        particle.style.borderRadius = "150% 0 150% 0";
        particle.style.boxShadow = "0 2px 6px rgba(212, 175, 55, 0.15)";
      } else {
        // Gold light particle
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = Math.random() > 0.3 ? "#CCAF8D" : "#CCAF8D";
        particle.style.borderRadius = "50%";
        particle.style.boxShadow = "0 0 8px rgba(212, 175, 55, 0.8)";
      }

      particle.style.position = "absolute";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * -20}%`;
      particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;

      container.appendChild(particle);
      elements.push(particle);

      // Animate with GSAP
      const duration = Math.random() * 12 + 8;
      const delay = Math.random() * 5;

      gsap.to(particle, {
        y: window.innerHeight * 1.3,
        x: `+=${(Math.random() - 0.5) * 250}`,
        rotation: Math.random() * 720,
        opacity: 0,
        duration: duration,
        delay: delay,
        repeat: -1,
        ease: "none",
        onRepeat: () => {
          gsap.set(particle, {
            y: -50,
            x: `${Math.random() * window.innerWidth}`,
            opacity: Math.random() * 0.7 + 0.3,
          });
        },
      });
    }

    return () => {
      elements.forEach((el) => gsap.killTweensOf(el));
      container.innerHTML = "";
    };
  }, [count, type]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
};
