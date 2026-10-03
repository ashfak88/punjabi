"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";
import { coupleData } from "../../data/weddingData";

export const CoupleSection: React.FC = () => {
  return (
    <section id="couple" className="py-16 px-4 relative z-10 bg-[transparent] text-center overflow-hidden">
      <div className="w-full max-w-xs mx-auto">
        {/* Top Tracking Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#FFD700] font-bold block mb-1.5 font-poppins">
            THE BLESSED COUPLE
          </span>
          <h2 className="text-3xl font-playfair font-bold text-[#FFD700] mb-4">
            Groom & Bride
          </h2>

          {/* Top Gold Flower Divider */}
          <div className="flex items-center justify-center gap-3 text-[#FF4500] mb-6">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FF4500]" />
            <Flower2 className="w-4 h-4 text-[#FF4500]" />
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FF4500]" />
          </div>
        </motion.div>

        {/* Central Couple Portrait Card */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[240px] mx-auto bg-[#FFF5EE] p-2.5 rounded-[28px] border-2 border-[#FF4500]/50 shadow-xl mb-5 relative overflow-hidden group"
        >
          <div className="w-full h-[310px] rounded-[22px] overflow-hidden relative border border-[rgba(212,175,55,0.3)]">
            <img
              src={coupleData.image || "/hero-couple.jpg"}
              alt={`${coupleData.groomShort} & ${coupleData.brideShort}`}
              className="w-full h-full object-cover object-[50%_35%] group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Calligraphy Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-6"
        >
          <p className="text-2xl sm:text-3xl font-calligraphy text-[#FFD700]">
            {coupleData.groomName} & {coupleData.brideName}
          </p>
        </motion.div>

        {/* Middle Gold Flower Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 text-[#FF4500] mb-8"
        >
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FF4500]" />
          <Flower2 className="w-4 h-4 text-[#FF4500]" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FF4500]" />
        </motion.div>

        {/* Family Cards Side by Side */}
        <div className="grid grid-cols-2 gap-3 text-center">
          {/* Groom's Family Card */}
          <motion.div
            initial={{ opacity: 0, x: -35, y: 25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FFF5EE] border border-[rgba(212,175,55,0.3)] rounded-[24px] p-4 shadow-md flex flex-col items-center justify-center"
          >
            <span className="text-[8px] uppercase tracking-[0.2em] text-[#FF8C00] font-bold mb-1.5 font-poppins">
              GROOM'S FAMILY
            </span>
            <span className="text-xl font-calligraphy text-[#FF6347] mb-2">
              {coupleData.groomShort}
            </span>
            <span className="text-[7px] uppercase tracking-widest text-[#FFD700]/70 font-semibold mb-1 font-poppins">
              SON OF
            </span>
            <span className="text-[11px] font-playfair text-[#FFD700] font-medium leading-tight whitespace-pre-line">
              {coupleData.groomTitle.replace("Son of ", "")}
            </span>
          </motion.div>

          {/* Bride's Family Card */}
          <motion.div
            initial={{ opacity: 0, x: 35, y: 25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FFF5EE] border border-[rgba(212,175,55,0.3)] rounded-[24px] p-4 shadow-md flex flex-col items-center justify-center"
          >
            <span className="text-[8px] uppercase tracking-[0.2em] text-[#FF8C00] font-bold mb-1.5 font-poppins">
              BRIDE'S FAMILY
            </span>
            <span className="text-xl font-calligraphy text-[#FF6347] mb-2">
              {coupleData.brideShort}
            </span>
            <span className="text-[7px] uppercase tracking-widest text-[#FFD700]/70 font-semibold mb-1 font-poppins">
              DAUGHTER OF
            </span>
            <span className="text-[11px] font-playfair text-[#FFD700] font-medium leading-tight whitespace-pre-line">
              {coupleData.brideTitle.replace("Daughter of ", "")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
