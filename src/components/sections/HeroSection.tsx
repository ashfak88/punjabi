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
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#A14124]">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="/home-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0" />



      {/* Top Khanda and IK ONKAR */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-10 flex flex-col items-center"
      >
        {/* Classic Solid Khanda SVG */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 100 100"
          className="fill-[#A14124] mb-3 opacity-95 drop-shadow-sm"
        >
          {/* Central Khanda (Sword) */}
          <path d="M50 8 L44 28 L46 72 L50 82 L54 72 L56 28 Z" />
          {/* Chakkar (Circle) */}
          <path d="M50 22 C34 22 21 35 21 51 C21 67 34 80 50 80 C66 80 79 67 79 51 C79 35 66 22 50 22 Z M50 31 C61 31 70 40 70 51 C70 62 61 71 50 71 C39 71 30 62 30 51 C30 40 39 31 50 31 Z" />
          {/* Left Kirpan */}
          <path d="M22 36 C10 49 11 72 24 88 C26 90 29 88 27 85 C17 72 17 52 26 42 C28 40 24 35 22 36 Z" />
          {/* Right Kirpan */}
          <path d="M78 36 C90 49 89 72 76 88 C74 90 71 88 73 85 C83 72 83 52 74 42 C72 40 76 35 78 36 Z" />
        </svg>

        {/* Delicate Swirl Divider */}
        <svg
          width="140"
          height="20"
          viewBox="0 0 140 20"
          className="fill-none stroke-[#A14124] stroke-[1.5] mb-2 opacity-90"
        >
          <path d="M10 10 Q35 10 45 10 T65 10" />
          <path d="M130 10 Q105 10 95 10 T75 10" />
          <path d="M65 10 Q70 0 70 10 Q70 20 75 10" />
          {/* Small leaves/accents */}
          <circle cx="70" cy="10" r="2.5" className="fill-[#A14124] stroke-none" />
        </svg>

        <span className="text-[0.65rem] sm:text-[0.7rem] font-poppins uppercase tracking-[0.45em] text-[#A14124] font-medium ml-1">
          {coupleData.sacredTransliteration}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 my-auto flex flex-col items-center w-full max-w-[340px] -translate-y-6"
      >

        <div className="flex flex-col items-center mt-6 mb-4 w-full">
          <h1 className="text-[1.8rem] sm:text-[2.2rem] font-playfair font-normal text-[#A14124] tracking-wider leading-none drop-shadow-sm w-full text-center">
            {coupleData.groomShort}
          </h1>

          <span className="text-[1.5rem] sm:text-[1.8rem] font-playfair italic text-[#A14124] my-4 block drop-shadow-sm">
            &
          </span>

          <h1 className="text-[1.8rem] sm:text-[2.2rem] font-playfair font-normal text-[#A14124] tracking-wider leading-none drop-shadow-sm w-full text-center">
            {coupleData.brideShort}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[1.15rem] sm:text-[1.3rem] text-[#A14124] mt-6 mb-6 drop-shadow-sm" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
          are getting married
        </p>

        {/* Wedding Date with Dots */}
        <div className="text-[0.85rem] sm:text-[1rem] tracking-[0.45em] text-[#A14124] font-medium font-poppins mb-1 ml-1">
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
