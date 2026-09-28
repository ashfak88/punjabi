"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flower2, Heart } from "lucide-react";

export const ClosingSection: React.FC = () => {
  return (
    <footer id="closing" className="py-16 px-5 pb-24 relative z-10 bg-[transparent] text-center border-t border-[rgba(212,175,55,0.3)]/60 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xs mx-auto flex flex-col items-center"
      >
        {/* Floral Decorations */}
        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-[#06402B]/60 backdrop-blur-md border border-[#B78846]/40 shadow-md flex items-center justify-center mb-6 text-[#D4AF37]"
        >
          <Flower2 className="w-8 h-8" />
        </motion.div>

        {/* Thank You Message */}
        <h2 className="text-2xl font-playfair font-bold text-[#D4AF37] mb-3">
          Thank You & Salam
        </h2>
        <p className="text-xs text-[#1A1A1A]/80 font-poppins leading-relaxed mb-6 font-light">
          We look forward to celebrating this sacred milestone with you. May Allah shower our families with affection, understanding, and eternal peace.
        </p>

        {/* Prayer Box */}
        <div className="w-full bg-[#06402B]/60 backdrop-blur-md border border-[rgba(212,175,55,0.3)] rounded-[24px] p-5 shadow-lg mb-8 relative">
          <span className="text-[10px] uppercase tracking-widest text-[#B78846] font-bold block mb-2 font-poppins">
            A Prayer For The Couple
          </span>
          <p className="text-xs font-playfair italic text-[#D4AF37] leading-relaxed">
            "Barakallahu lakuma wa baraka alaikuma wa jama'a baynakuma fi khair."
          </p>
          <span className="text-[10px] text-[#1A1A1A]/60 font-poppins mt-2 block">
            (May Allah bless you both and join you together in goodness.)
          </span>
        </div>

        {/* Monogram Seal / Signature */}
        <div className="flex items-center gap-2 text-[#D4AF37] font-calligraphy text-2xl my-2">
          <span>Arish</span>
          <Heart className="w-4 h-4 fill-[#B78846] text-[#B78846]" />
          <span>Arshi</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/40 font-poppins mt-2">
          14 NOVEMBER 2026 • BHOPAL
        </p>
      </motion.div>
    </footer>
  );
};
