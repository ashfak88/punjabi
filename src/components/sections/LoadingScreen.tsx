"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Flower2, Music } from "lucide-react";
import confetti from "canvas-confetti";
import { coupleData } from "../../data/weddingData";

interface LoadingScreenProps {
  onEnter: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleEnterClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger celebratory golden confetti on opening
    try {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.55 },
        colors: ["#F2A900", "#D9381E", "#FFF8F0", "#FFD700", "#FFDF00"],
      });
    } catch (e) {
      console.log("Confetti animation triggered");
    }

    setTimeout(() => {
      setIsOpen(true);
      onEnter();
    }, 1100);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#FFF8F0] flex flex-col items-center justify-center p-6 text-center overflow-hidden selection:bg-[#F2A900]"
        >
          {/* Animated Floral Background & Soft Ambient Glow outside the card (Untouched) */}
          <div className="absolute inset-0 bg-[radial-gradient(#FFDAB9_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
          <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#F2A900]/20 via-[#FFDAB9]/30 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />

          {/* Floating Background Petals & Leaves outside the card */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-16 -right-16 w-64 h-64 border-[1px] border-[#F2A900]/20 rounded-full border-dashed pointer-events-none flex items-center justify-center"
          >
            <Flower2 className="w-12 h-12 text-[#F2A900]/20 absolute -top-6" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-72 h-72 border-[1px] border-[#D9381E]/20 rounded-full border-dashed pointer-events-none flex items-center justify-center"
          >
            <Flower2 className="w-14 h-14 text-[#D9381E]/20 absolute -bottom-7" />
          </motion.div>

          {/* Luxury Frame Border outside inside Mobile View */}
          <div className="absolute inset-5 border border-[#F2A900]/40 rounded-[28px] pointer-events-none flex flex-col justify-between p-4 z-10">
            <div className="flex justify-between items-center text-[#D9381E]/70 text-[10px] tracking-widest uppercase font-poppins font-medium">
              <span className="text-sm font-sans">{coupleData.sacredSymbol}</span>
              <span>04 • 12 • 2026</span>
            </div>
          </div>

          {/* Central Invitation Card Seal — Background Image ONLY INSIDE THIS AREA */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative bg-white/85 border border-[#F2A900]/50 rounded-[32px] p-8 max-w-xs w-full shadow-2xl flex flex-col items-center z-10 overflow-hidden"
          >
            {/* Couple Background Image ONLY INSIDE THIS CARD AREA — Slow Theme Fade-In */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FFF8F0] to-[#FFDAB9]">
              <motion.img
                initial={{ opacity: 0, scale: 1.18, filter: "blur(8px)" }}
                animate={{ opacity: 0.88, scale: 1.03, filter: "blur(0px)" }}
                transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}
                src="/hero-couple.jpg"
                alt="Couple Background"
                className="w-full h-full object-cover object-[50%_35%]"
              />
              {/* Soft warm overlay so the image is beautifully visible while text remains high contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0]/75 via-[#FFF8F0]/35 to-[#FFF8F0]/85 pointer-events-none" />
            </div>

            {/* Content inside the card right on top of the bg image (z-10) */}
            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Sacred Symbol Header */}
              <p className="text-xl font-calligraphy text-[#D9381E] mb-3 drop-shadow-sm">
                {coupleData.sacredSymbol}
              </p>

              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#F2A900] to-transparent my-2" />

              {/* Floral Icon Seal */}
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="my-3 text-[#F2A900]"
              >
                <Flower2 className="w-9 h-9 sm:w-10 sm:h-10 text-[#D9381E] drop-shadow-md" />
              </motion.div>

              <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#D9381E]/80 font-poppins font-semibold mb-3">
                The Wedding Invitation
              </h3>

              {/* Couple Script Names */}
              <div className="flex flex-col items-center my-3 gap-1">
                <span className="text-5xl font-calligraphy text-[#D9381E] leading-tight drop-shadow-md">
                  {coupleData.brideShort}
                </span>
                <motion.div
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="text-[#F2A900] my-0.5"
                >
                  <Heart className="w-5 h-5 fill-[#F2A900]" />
                </motion.div>
                <span className="text-5xl font-calligraphy text-[#D9381E] leading-tight drop-shadow-md">
                  {coupleData.groomShort}
                </span>
              </div>

              <p className="text-xs font-playfair italic text-[#D9381E] mt-2 mb-6 tracking-wide">
                {coupleData.dateFormatted}
              </p>



              {/* Open Invitation Button */}
              <motion.button
                onClick={handleEnterClick}
                disabled={isOpening}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative w-full py-4 rounded-full bg-gradient-to-r from-[#D9381E] via-[#F2A900] to-[#D9381E] text-[#FFF8F0] font-semibold text-xs uppercase tracking-[0.25em] shadow-xl shadow-[#D9381E]/25 transition-all overflow-hidden border border-white/30 cursor-pointer flex items-center justify-center gap-2"
              >
                {/* Button Shimmer Overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                {isOpening ? (
                  <span className="animate-pulse flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FFDF00] animate-spin" />
                    Opening Royal Invitation...
                  </span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#FFDF00]" />
                    <span>Open Invitation</span>
                    <Sparkles className="w-4 h-4 text-[#FFDF00]" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
