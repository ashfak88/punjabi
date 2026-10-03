"use client";

import React, { useState, useEffect } from "react";

interface FloatingControlsProps {
  hasEntered: boolean;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  hasEntered,
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasEntered) return null;

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 h-1.5 w-full bg-[#FFDAB9]/40 backdrop-blur-sm overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#F2A900] via-[#D9381E] to-[#FFD700] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};
