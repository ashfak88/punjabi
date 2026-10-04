"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flower2, Heart } from "lucide-react";
import { coupleData } from "../../data/weddingData";

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
          className="w-16 h-16 rounded-full bg-white backdrop-blur-md border border-[#A14124]/30 shadow-md flex items-center justify-center mb-6 text-[#A14124]"
        >
          <Flower2 className="w-8 h-8" />
        </motion.div>

        {/* Thank You Message */}
        <h2 className="text-2xl font-playfair font-bold text-[#A14124] mb-3">
          Thank You
        </h2>
        <p className="text-xs text-[#A14124]/90 font-poppins leading-relaxed mb-6 font-light">
          We look forward to celebrating this sacred milestone with you. May Waheguru shower our families with affection, understanding, and eternal peace.
        </p>

        {/* Prayer Box */}
        <div className="w-full bg-white/95 backdrop-blur-md border border-[#A14124]/30 rounded-[24px] p-5 shadow-lg mb-8 relative">
          <span className="text-[10px] uppercase tracking-widest text-[#A14124] font-bold block mb-2 font-poppins">
            A Blessing For The Couple
          </span>
          <p className="text-xs font-playfair italic text-[#A14124] leading-relaxed">
            "Jeevan sathi judde ta waheguru de rang vich rang jaye."
          </p>
          <span className="text-[10px] text-[#A14124]/80 font-poppins mt-2 block">
            (May Waheguru bless you both and join you together in goodness.)
          </span>
        </div>

        {/* Monogram Seal / Signature */}
        <div className="flex items-center gap-2 text-[#A14124] font-calligraphy text-2xl my-2">
          <span>{coupleData.groomShort}</span>
          <Heart className="w-4 h-4 fill-[#A14124] text-[#A14124]" />
          <span>{coupleData.brideShort}</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#A14124]/60 font-poppins mt-2">
          04 DECEMBER 2026
        </p>
      </motion.div>
    </footer>
  );
};
