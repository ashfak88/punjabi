"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Users, Heart } from "lucide-react";
import { familyData } from "../../data/weddingData";

export const FamilySection: React.FC = () => {
  const [activeSide, setActiveSide] = useState<"bride" | "groom">("groom");

  const filteredMembers = familyData.filter((member) => member.side === activeSide);

  return (
    <section id="family" className="py-16 px-5 relative z-10 bg-[transparent]">
      <div className="w-full max-w-xs mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#800000]/60 backdrop-blur-md border border-[rgba(212,175,55,0.3)] text-[10px] uppercase tracking-widest text-[#FFD700] font-semibold mb-2 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#FF4500]" />
            <span>BELOVED LOVED ONES</span>
          </div>
          <h2 className="text-3xl font-playfair font-bold text-[#FFD700]">
            Our Families
          </h2>
          <p className="text-xs text-[#FFD700]/70 font-poppins mt-1">
            The pillars of blessing & unconditional love
          </p>
          <div className="w-12 h-0.5 bg-[#FF4500] mx-auto mt-3" />
        </motion.div>

        {/* Side Tabs Switcher */}
        <div className="flex rounded-full bg-[#800000]/60 backdrop-blur-md border border-[rgba(212,175,55,0.3)] p-1.5 mb-8 shadow-md">
          <button
            onClick={() => setActiveSide("groom")}
            className={`flex-1 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
              activeSide === "groom"
                ? "bg-gradient-to-r from-[#FFD700] to-[#FF4500] text-white shadow-md"
                : "text-[#FFD700]/80 hover:bg-[transparent]"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Groom Family</span>
          </button>
          <button
            onClick={() => setActiveSide("bride")}
            className={`flex-1 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
              activeSide === "bride"
                ? "bg-gradient-to-r from-[#FFD700] to-[#FF4500] text-white shadow-md"
                : "text-[#FFD700]/80 hover:bg-[transparent]"
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Bride Family</span>
          </button>
        </div>

        {/* Family Cards */}
        <div className="flex flex-col gap-5">
          <AnimatePresence mode="wait">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#800000]/60 backdrop-blur-md border border-[rgba(212,175,55,0.3)] rounded-[24px] p-5 shadow-xl relative overflow-hidden flex flex-col items-center text-center"
              >
                {/* Top Subtle Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF4500] to-transparent" />

                <span className="text-[10px] uppercase tracking-widest text-[#FF4500] font-bold px-3 py-1 rounded-full bg-[transparent] border border-[rgba(212,175,55,0.3)] mb-2.5">
                  {member.relation}
                </span>

                <h3 className="text-base font-playfair font-bold text-[#FFD700] mb-1">
                  {member.name}
                </h3>
                <span className="text-xs text-[#1A1A1A]/70 italic font-poppins mb-3 block">
                  {member.role}
                </span>

                {/* Blessing Text */}
                <div className="bg-[transparent]/70 border border-[rgba(212,175,55,0.3)]/60 rounded-2xl p-3 text-center w-full">
                  <p className="text-[11px] font-playfair italic text-[#FFD700] leading-relaxed">
                    "{member.blessing}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
