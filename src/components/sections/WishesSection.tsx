"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageSquareHeart, Heart, Send, PlusCircle, CheckCircle2, Mail } from "lucide-react";
import confetti from "canvas-confetti";
import { initialWishesData } from "../../data/weddingData";
import { WishComment } from "../../types";

export const WishesSection: React.FC = () => {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("Family");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddWish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const wishName = name.trim();
    const wishRelation = relation.trim() || "Guest";
    const wishMessage = message.trim();

    // 1. Send to WhatsApp
    const whatsappMessage = encodeURIComponent(`Wedding Wish from ${wishName} (${wishRelation}):\n\n${wishMessage}`);
    window.open(`https://wa.me/918871529952?text=${whatsappMessage}`, "_blank");

    setName("");
    setMessage("");
    setIsSubmitting(false);
    setShowForm(false);

    // 3. Trigger celebratory golden confetti
    try {
      confetti({
        particleCount: 130,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#CCAF8D", "#A14124", "#CCAF8D", "#10B981"],
      });
    } catch (e) {
      console.log("Confetti triggered");
    }
  };



  return (
    <section id="wishes" className="py-16 px-5 relative z-10 bg-[#FFF8F0]">
      <div className="w-full max-w-xs mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CCAF8D] text-[10px] uppercase tracking-widest text-[#A14124] font-semibold mb-2 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#CCAF8D]" />
            <span>WORDS OF BLESSING</span>
          </div>
          <h2 className="text-3xl font-playfair font-bold text-[#A14124]">
            Guest Wishes
          </h2>
          <p className="text-xs text-[#A14124]/70 font-poppins mt-1">
            Send your heartfelt prayers & wishes
          </p>
          <div className="w-12 h-0.5 bg-[#CCAF8D] mx-auto mt-3" />
        </motion.div>

        {/* Add Wish Trigger / Form */}
        <div className="mb-8">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#A14124] to-[#CCAF8D] text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Send a Blessing</span>
            </button>
          ) : (
            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleAddWish}
              className="bg-white border-2 border-[#CCAF8D] rounded-[24px] p-5 shadow-2xl"
            >
              <h3 className="text-sm font-playfair font-bold text-[#A14124] mb-1 text-center">
                Leave Your Blessing
              </h3>
              <p className="text-[10px] text-[#A14124]/70 text-center font-poppins mb-3">
                Your message will be sent via WhatsApp
              </p>
              <input
                type="text"
                placeholder="Your Name (e.g. Uncle Rashid)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
                className="w-full text-xs p-2.5 rounded-xl border border-[#CCAF8D] bg-[#FFF8F0] mb-2.5 outline-none focus:border-[#A14124] disabled:opacity-50"
              />
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                disabled={isSubmitting}
                className="w-full text-xs p-2.5 rounded-xl border border-[#CCAF8D] bg-[#FFF8F0] mb-2.5 outline-none focus:border-[#A14124] text-[#A14124] disabled:opacity-50"
              >
                <option value="Family">Family Member</option>
                <option value="Close Friend">Close Friend</option>
                <option value="Colleague">Colleague</option>
                <option value="Well Wisher">Well Wisher</option>
              </select>
              <textarea
                placeholder="Write your heartfelt wish or prayer..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                disabled={isSubmitting}
                className="w-full text-xs p-2.5 rounded-xl border border-[#CCAF8D] bg-[#FFF8F0] mb-3 outline-none focus:border-[#A14124] disabled:opacity-50"
              />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 rounded-xl border border-[#CCAF8D] text-[#A14124] text-xs font-semibold cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 rounded-xl bg-[#A14124] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquareHeart className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </div>


      </div>
    </section>
  );
};
