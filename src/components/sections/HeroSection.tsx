"use client";

import React from "react";
import { motion } from "framer-motion";
import { coupleData } from "../../data/weddingData";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between text-center px-6 pt-10 pb-8 overflow-hidden bg-[#A14124] select-none"
    >
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#A14124]">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="/home-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Subtle Darkening Overlay for text readability (only in the center) */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Subtle Texture Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0" />



      {/* Top Khanda and IK ONKAR */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-10 flex flex-col items-center"
      >
        {/* Ornate Khanda SVG */}
        <svg
          width="56"
          height="56"
          viewBox="0 0 100 100"
          className="fill-[#A14124] mb-2 opacity-95 drop-shadow-sm"
        >
          {/* Central double-edged sword */}
          <path d="M50 10 L45 25 L47 80 L50 85 L53 80 L55 25 Z" />
          {/* Chakkar (Circle) */}
          <path d="M50 25 C38 25 28 35 28 48 C28 60 38 70 50 70 C62 70 72 60 72 48 C72 35 62 25 50 25 Z M50 32 C59 32 66 39 66 48 C66 57 59 64 50 64 C41 64 34 57 34 48 C34 39 41 32 50 32 Z" />
          {/* Left curved sword */}
          <path d="M22 35 C15 45 10 55 20 80 C22 82 25 80 25 78 C18 60 22 50 28 42 C30 40 28 35 22 35 Z" />
          {/* Right curved sword */}
          <path d="M78 35 C85 45 90 55 80 80 C78 82 75 80 75 78 C82 60 78 50 72 42 C70 40 72 35 78 35 Z" />
        </svg>

        {/* Decorative Swirl Divider */}
        <svg
          width="160"
          height="24"
          viewBox="0 0 160 24"
          className="fill-none stroke-[#A14124] stroke-[1.2] mb-1 opacity-90"
        >
          {/* Left Swirls */}
          <path d="M10 12 L60 12" />
          <path d="M50 8 C50 8 55 8 55 12 C55 16 50 16 50 16" />
          <path d="M30 16 C30 16 35 16 35 12 C35 8 30 8 30 8" />
          {/* Center Dot & Leaf */}
          <circle cx="80" cy="12" r="3" className="fill-[#A14124] stroke-none" />
          <path d="M70 12 Q80 2 90 12" className="fill-[#A14124] opacity-20 stroke-none" />
          <path d="M70 12 Q80 22 90 12" className="fill-[#A14124] opacity-20 stroke-none" />
          {/* Right Swirls */}
          <path d="M100 12 L150 12" />
          <path d="M110 8 C110 8 105 8 105 12 C105 16 110 16 110 16" />
          <path d="M130 16 C130 16 125 16 125 12 C125 8 130 8 130 8" />
        </svg>

        <span className="text-[10px] font-poppins uppercase tracking-[0.45em] text-[#A14124] font-medium ml-1">
          {coupleData.sacredTransliteration}
        </span>
      </motion.div>

      {/* Center Main Invitation Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 my-auto flex flex-col items-center w-full max-w-[340px]"
      >

        {/* Stacked Serif Names */}
        <div className="flex flex-col items-center my-4 w-full">
          <h1 className="text-[2.5rem] sm:text-[3.2rem] font-playfair font-normal text-[#A14124] tracking-wide leading-none drop-shadow-sm my-1 w-full text-center">
            {coupleData.groomShort}
          </h1>

          <span className="text-[2.2rem] sm:text-[2.8rem] font-calligraphy text-[#A14124] my-3 block drop-shadow-sm">
            &
          </span>

          <h1 className="text-[2.5rem] sm:text-[3.2rem] font-playfair font-normal text-[#A14124] tracking-wide leading-none drop-shadow-sm my-1 w-full text-center">
            {coupleData.brideShort}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[1.45rem] sm:text-[1.6rem] font-medium italic text-[#A14124] mt-4 mb-10 drop-shadow-sm" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
          are getting married
        </p>

        {/* Wedding Date with Dots */}
        <div className="text-[0.95rem] sm:text-[1.05rem] tracking-[0.45em] text-[#A14124] font-medium font-poppins mb-2 ml-1">
          0 4 • 1 2 • 2 0 2 6
        </div>

      </motion.div>

      {/* Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 mt-4"
      >
        <motion.span
          animate={{ height: [24, 34, 24], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-[#A14124] to-transparent"
        />
        <span className="text-[9px] tracking-[0.35em] uppercase text-[#A14124] font-poppins font-medium">
          S C R O L L
        </span>
      </motion.div>
    </section>
  );
};
