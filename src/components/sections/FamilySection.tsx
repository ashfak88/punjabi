"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { familyData } from "../../data/weddingData";

export const FamilySection: React.FC = () => {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#A14124]/20 text-[10px] uppercase tracking-widest text-[#A14124] font-semibold mb-2 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#A14124]" />
            <span>BELOVED LOVED ONES</span>
          </div>
          <h2 className="text-3xl font-playfair font-bold text-[#A14124]">
            Our Families
          </h2>
          <p className="text-xs text-[#A14124]/70 font-poppins mt-1">
            The pillars of blessing & unconditional love
          </p>
          <div className="w-12 h-0.5 bg-[#A14124] mx-auto mt-3" />
        </motion.div>

        {/* Family Cards */}
        <div className="flex flex-col gap-8">
          {/* Mann Family (Groom) */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-playfair font-bold text-center text-[#A14124]">Mann Family</h3>
            <AnimatePresence mode="wait">
              {familyData.filter(m => m.side === "groom").map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/95 backdrop-blur-md border border-[#A14124]/20 rounded-[24px] p-5 shadow-xl relative overflow-hidden flex flex-col items-center text-center"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A14124] to-transparent" />
                  <span className="text-[10px] uppercase tracking-widest text-[#A14124] font-bold px-3 py-1 rounded-full bg-[transparent] border border-[#A14124]/20 mb-2.5">
                    {member.relation}
                  </span>
                  <h3 className="text-base font-playfair font-bold text-[#A14124] mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs text-[#A14124]/80 italic font-poppins mb-3 block">
                    {member.role}
                  </span>
                  <div className="bg-[transparent]/70 border border-[#A14124]/20/60 rounded-2xl p-3 text-center w-full">
                    <p className="text-[11px] font-playfair italic text-[#A14124] leading-relaxed">
                      &quot;{member.blessing}&quot;
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Rehal Family (Bride) */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-playfair font-bold text-center text-[#A14124]">Rehal Family</h3>
            <AnimatePresence mode="wait">
              {familyData.filter(m => m.side === "bride").map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/95 backdrop-blur-md border border-[#A14124]/20 rounded-[24px] p-5 shadow-xl relative overflow-hidden flex flex-col items-center text-center"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A14124] to-transparent" />
                  <span className="text-[10px] uppercase tracking-widest text-[#A14124] font-bold px-3 py-1 rounded-full bg-[transparent] border border-[#A14124]/20 mb-2.5">
                    {member.relation}
                  </span>
                  <h3 className="text-base font-playfair font-bold text-[#A14124] mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs text-[#A14124]/80 italic font-poppins mb-3 block">
                    {member.role}
                  </span>
                  <div className="bg-[transparent]/70 border border-[#A14124]/20/60 rounded-2xl p-3 text-center w-full">
                    <p className="text-[11px] font-playfair italic text-[#A14124] leading-relaxed">
                      &quot;{member.blessing}&quot;
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
