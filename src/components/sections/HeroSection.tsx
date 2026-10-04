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



      {/* Top Monogram Initials */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-2"
      >
        <span className="text-2xl font-calligraphy text-[#A14124] tracking-widest block">
          {coupleData.groomShort[0]} & {coupleData.brideShort[0]}
        </span>
      </motion.div>

      {/* Center Main Invitation Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 my-auto flex flex-col items-center w-full max-w-xs"
      >
        {/* Text colors changed to fit the lighter central background of the image */}
        <p className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-poppins text-[#A14124] font-medium mb-8 text-center mt-6">
          {coupleData.sacredTransliteration}
        </p>

        {/* Stacked Serif Names */}
        <div className="flex flex-col items-center my-2">
          <h1 className="text-4xl sm:text-5xl font-playfair font-normal text-[#A14124] tracking-wide leading-none drop-shadow-sm my-1">
            {coupleData.groomShort}
          </h1>

          <span className="text-3xl sm:text-4xl font-calligraphy text-[#A14124] my-3.5 block italic">
            &
          </span>

          <h1 className="text-4xl sm:text-5xl font-playfair font-normal text-[#A14124] tracking-wide leading-none drop-shadow-sm my-1">
            {coupleData.brideShort}
          </h1>
        </div>

        {/* Calligraphy Subtitle */}
        <p className="text-2xl font-calligraphy text-[#A14124] tracking-normal mt-5 mb-8">
          are getting married
        </p>

        {/* Wedding Date with Dots */}
        <div className="text-sm sm:text-base tracking-[0.35em] text-[#A14124] font-medium font-poppins mb-2">
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
