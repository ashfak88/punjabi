import React from "react";

interface SectionDividerProps {
  title?: string;
  subtitle?: string;
  variant?: "gold" | "emerald" | "minimal";
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  title,
  subtitle,
  variant = "gold",
}) => {
  return (
    <div className="py-12 flex flex-col items-center justify-center text-center px-4">
      {/* Decorative floral crest top */}
      <div className="flex items-center gap-3 mb-4 opacity-80">
        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#CCAF8D]" />
        <span className="text-[#CCAF8D] text-xl sm:text-2xl font-calligraphy select-none animate-pulse-glow">
          ✦ ❦ ✦
        </span>
        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#CCAF8D]" />
      </div>

      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair tracking-wide font-bold mb-3 gold-foil-text">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-sm sm:text-base font-poppins text-[#1A1A1A]/70 max-w-xl mx-auto tracking-widest uppercase">
          {subtitle}
        </p>
      )}

      {/* Subtle bottom diamond */}
      <div className="mt-4 w-2 h-2 rotate-45 bg-[#CCAF8D]/50" />
    </div>
  );
};
