"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flower2, Sparkles, Clock } from "lucide-react";
import { coupleData } from "../../data/weddingData";

export const GreetingSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(coupleData.weddingDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <>
      {/* SECTION 1: STANDALONE COUNTDOWN */}
      <section id="countdown" className="pt-16 pb-12 px-5 relative z-10 bg-[#F8F4EF]">
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.93 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xs mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-xl border border-[#C4A484]/50 rounded-[28px] p-5 shadow-xl text-center">
            <p className="text-[10px] uppercase tracking-widest text-[#8B6B4A] font-semibold mb-3.5 flex items-center justify-center gap-1.5 font-poppins">
              <Clock className="w-3.5 h-3.5 text-[#C4A484]" />
              <span>COUNTDOWN TO OUR UNION</span>
            </p>

            <div className="grid grid-cols-4 gap-2.5">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="bg-[#F8F4EF] border border-[#E7D7C9] rounded-2xl p-2.5 flex flex-col items-center justify-center shadow-inner"
                >
                  <span className="text-2xl font-playfair font-bold text-[#8B6B4A] tabular-nums">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/60 font-semibold mt-1 font-poppins">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Elegant Floral Section Divider between Countdown and Divine Blessing */}
        <div className="w-full max-w-xs mx-auto mt-14 mb-2 flex items-center justify-center gap-3 text-[#C4A484]">
          <span className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C4A484]/60" />
          <Flower2 className="w-4 h-4 text-[#C4A484]" />
          <span className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C4A484]/60" />
        </div>
      </section>

      {/* SECTION 2: STANDALONE DIVINE BLESSING */}
      <section id="greeting" className="pt-10 pb-20 px-5 relative z-10 bg-[#F8F4EF]">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.93 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xs mx-auto"
        >
          {/* Elegant Framed Card */}
          <div className="relative bg-white/95 border-2 border-[#C4A484]/60 rounded-[28px] p-7 shadow-2xl overflow-hidden text-center flex flex-col items-center">
            {/* Corner Floral Ornaments */}
            <div className="absolute top-2.5 left-2.5 text-[#E7D7C9] opacity-70">
              <Flower2 className="w-6 h-6 rotate-45" />
            </div>
            <div className="absolute top-2.5 right-2.5 text-[#E7D7C9] opacity-70">
              <Flower2 className="w-6 h-6 -rotate-45" />
            </div>
            <div className="absolute bottom-2.5 left-2.5 text-[#E7D7C9] opacity-70">
              <Flower2 className="w-6 h-6 -rotate-135" />
            </div>
            <div className="absolute bottom-2.5 right-2.5 text-[#E7D7C9] opacity-70">
              <Flower2 className="w-6 h-6 rotate-135" />
            </div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F4EF] border border-[#E7D7C9] text-[10px] uppercase tracking-widest text-[#8B6B4A] font-semibold mb-6 font-poppins">
              <Sparkles className="w-3 h-3 text-[#C4A484]" />
              <span>DIVINE BLESSING</span>
            </div>

            {/* Bismillah Calligraphy */}
            <h2 className="text-2xl font-calligraphy text-[#8B6B4A] leading-relaxed drop-shadow-sm mb-1">
              {coupleData.bismillahArabic}
            </h2>
            <p className="text-[10px] uppercase tracking-wider text-[#8B6B4A]/60 font-poppins mb-6 italic">
              {coupleData.bismillahTransliteration}
            </p>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C4A484] to-transparent mb-6" />

            {/* Islamic Greeting */}
            <h3 className="text-sm font-playfair font-bold text-[#8B6B4A] mb-3 tracking-wide">
              {coupleData.islamicGreeting}
            </h3>

            {/* Invitation Message */}
            <p className="text-xs text-[#1A1A1A]/80 font-poppins leading-relaxed mb-6 font-light">
              {coupleData.greetingIntro}
            </p>

            {/* Quranic Verse Block */}
            <div className="w-full bg-[#F8F4EF]/80 border border-[#E7D7C9] rounded-2xl p-4 mt-1 relative">
              <p className="text-sm font-calligraphy text-[#8B6B4A] leading-relaxed mb-2">
                {coupleData.quranVerseArabic}
              </p>
              <p className="text-[11px] font-playfair italic text-[#1A1A1A]/75 leading-relaxed mb-2">
                "{coupleData.quranVerseEnglish}"
              </p>
              <span className="text-[10px] uppercase tracking-widest text-[#8B6B4A] font-bold block font-poppins">
                — {coupleData.quranReference}
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
