"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Building2 } from "lucide-react";

const storyItems = [
  {
    id: "beginning",
    label: "THE BEGINNING",
    title: "Two Families, One Dua",
    description:
      "What Allah has decreed shall always come to pass. Two families, bound by faith and love, came together in prayer.",
    icon: "heart",
    side: "right",
  },
  {
    id: "promise",
    label: "THE PROMISE",
    title: "Istikhara & Acceptance",
    description:
      "Guided by Allah's wisdom, both hearts found peace and acceptance in this blessed union.",
    icon: "ring",
    side: "left",
  },
  {
    id: "nikah",
    label: "25 DECEMBER 2026",
    title: "The Sacred Nikah",
    description:
      "With the words of Allah as their bond and their families as witnesses, Amina and Yusuf begin their forever.",
    icon: "mosque",
    side: "right",
  },
];

const IconNode = ({ icon, side }: { icon: string; side: string }) => {
  const base =
    "w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-[#B78846] bg-[#06402B]/60 backdrop-blur-md text-[#D4AF37] shrink-0";

  return (
    <div className={base}>
      {icon === "heart" && <Heart className="w-5 h-5 fill-[#B78846] text-[#B78846]" />}
      {icon === "ring" && <Sparkles className="w-5 h-5 text-[#D4AF37]" />}
      {icon === "mosque" && <Building2 className="w-5 h-5 text-[#D4AF37]" />}
    </div>
  );
};

export const StoryTimeline: React.FC = () => {
  return (
    <section id="story" className="py-16 px-5 relative z-10 bg-[transparent]">
      <div className="w-full max-w-xs mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06402B]/60 backdrop-blur-md border border-[rgba(212,175,55,0.3)] text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#B78846]" />
            <span>OUR JOURNEY</span>
          </div>
          <h2 className="text-3xl font-playfair font-bold text-[#D4AF37]">
            Our Story
          </h2>
          <p className="text-xs text-[#D4AF37]/70 font-poppins mt-1">
            How Allah brought our paths together
          </p>
          <div className="w-12 h-0.5 bg-[#B78846] mx-auto mt-3" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Centre vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#B78846]/30" />

          <div className="flex flex-col gap-0">
            {storyItems.map((item, index) => {
              const isRight = item.side === "right";
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-start pb-12 last:pb-0"
                >
                  {/* Left content (or spacer) */}
                  <div className="flex-1 pr-6 text-right">
                    {!isRight && (
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#B78846] font-bold font-poppins block mb-1">
                          {item.label}
                        </span>
                        <h3 className="text-base font-playfair font-bold text-[#D4AF37] leading-snug mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-[#1A1A1A]/70 font-poppins font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Centre Icon Node */}
                  <div className="relative z-10 shrink-0">
                    <IconNode icon={item.icon} side={item.side} />
                  </div>

                  {/* Right content (or spacer) */}
                  <div className="flex-1 pl-6 text-left">
                    {isRight && (
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#B78846] font-bold font-poppins block mb-1">
                          {item.label}
                        </span>
                        <h3 className="text-base font-playfair font-bold text-[#D4AF37] leading-snug mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-[#1A1A1A]/70 font-poppins font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
