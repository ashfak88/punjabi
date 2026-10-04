import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "gold";
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  variant = "light",
  hoverEffect = true,
}) => {
  const baseStyles = "rounded-2xl p-6 sm:p-8 transition-all duration-500 relative overflow-hidden";
  
  const variantStyles = {
    light: "glass-card-luxury text-[#1A1A1A]",
    dark: "glass-card-dark text-white",
    gold: "bg-gradient-to-br from-[#FFF8F0]/90 to-[#FFF8DC]/90 backdrop-blur-xl border border-[#CCAF8D]/50 shadow-2xl text-[#1A1A1A]",
  };

  const hoverStyles = hoverEffect
    ? "hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#CCAF8D]"
    : "";

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {/* Subtle top shimmer glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#CCAF8D]/60 to-transparent opacity-60" />
      {children}
    </div>
  );
};
