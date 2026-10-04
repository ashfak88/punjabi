"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation, Sparkles, HeartHandshake } from "lucide-react";
import { eventsData } from "../../data/weddingData";

export const EventDetails: React.FC = () => {
  return (
    <section id="events" className="py-16 px-5 relative z-10 bg-[#FFF8F0]">
      <div className="w-full max-w-xs mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CCAF8D] text-[10px] uppercase tracking-widest text-[#A14124] font-semibold mb-2 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#CCAF8D]" />
            <span>SACRED CELEBRATIONS</span>
          </div>
          <h2 className="text-3xl font-playfair font-bold text-[#A14124]">
            Event Details
          </h2>
          <p className="text-xs text-[#A14124]/70 font-poppins mt-1">
            We eagerly await your gracious presence
          </p>
          <div className="w-12 h-0.5 bg-[#CCAF8D] mx-auto mt-3" />
        </motion.div>

        {/* Venue Cards */}
        <div className="flex flex-col gap-7">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 45, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#CCAF8D] rounded-[24px] p-6 shadow-xl relative overflow-hidden group"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#CCAF8D] via-[#A14124] to-[#CCAF8D]" />

              <div className="flex items-center justify-between mb-4 mt-1">
                <span className="text-[10px] uppercase tracking-widest text-white px-3 py-1 rounded-full bg-[#A14124] font-semibold">
                  {event.subtitle || "Celebration"}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#FFF8F0] border border-[#CCAF8D] flex items-center justify-center text-[#A14124]">
                  {event.icon === "HeartHandshake" ? <HeartHandshake className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                </div>
              </div>

              <h3 className="text-xl font-playfair font-bold text-[#A14124] mb-3">
                {event.title}
              </h3>

              {/* Event Time & Date */}
              <div className="flex flex-col gap-2.5 my-4 bg-[#FFF8F0] p-3.5 rounded-2xl border border-[#CCAF8D]/60">
                <div className="flex items-center gap-3 text-xs font-poppins text-[#1A1A1A]">
                  <Calendar className="w-4 h-4 text-[#CCAF8D] shrink-0" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-poppins text-[#1A1A1A]">
                  <Clock className="w-4 h-4 text-[#CCAF8D] shrink-0" />
                  <span className="font-medium">{event.time}</span>
                </div>
                {event.location && (
                  <div className="flex items-start gap-3 text-xs font-poppins text-[#1A1A1A]">
                    <MapPin className="w-4 h-4 text-[#CCAF8D] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#A14124]">{event.location}</span>
                      {event.address && (
                        <span className="text-[11px] text-[#1A1A1A]/70 leading-relaxed block">{event.address}</span>
                      )}
                    </div>
                  </div>
                )}
                {event.dressCode && (
                  <div className="flex items-center gap-3 text-xs font-poppins text-[#1A1A1A] mt-1 pt-2 border-t border-[#CCAF8D]/40">
                    <Sparkles className="w-4 h-4 text-[#CCAF8D] shrink-0" />
                    <span className="font-medium text-[#A14124]">Dress Code: <span className="font-normal text-[#1A1A1A]/80">{event.dressCode}</span></span>
                  </div>
                )}
              </div>

              <p className="text-xs text-[#1A1A1A]/75 font-poppins leading-relaxed mb-6 font-light">
                {event.description}
              </p>

              {/* Google Maps Button */}
              {event.mapsUrl && (
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#A14124] to-[#CCAF8D] text-white font-semibold text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all group-hover:scale-[1.01]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
