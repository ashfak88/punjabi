"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageSquareHeart, Heart, Send, PlusCircle, CheckCircle2, Mail } from "lucide-react";
import confetti from "canvas-confetti";
import { initialWishesData } from "../../data/weddingData";
import { WishComment } from "../../types";

export const WishesSection: React.FC = () => {
  const [wishes, setWishes] = useState<WishComment[]>([]);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("Guest");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [likedIds, setLikedIds] = useState<string[]>([]);
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

    // 2. Add to UI live board right away
    const newWish: WishComment = {
      id: `w-${Date.now()}`,
      name: wishName,
      relation: wishRelation,
      message: wishMessage,
      timestamp: "Just now",
      likes: 1,
    };

    setWishes([newWish, ...wishes]);
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
        colors: ["#C4A484", "#8B6B4A", "#D4AF37", "#10B981"],
      });
    } catch (e) {
      console.log("Confetti triggered");
    }
  };

  const toggleLike = (id: string) => {
    if (likedIds.includes(id)) {
      setLikedIds(likedIds.filter((i) => i !== id));
      setWishes(
        wishes.map((w) => (w.id === id ? { ...w, likes: Math.max(0, w.likes - 1) } : w))
      );
    } else {
      setLikedIds([...likedIds, id]);
      setWishes(wishes.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w)));
    }
  };

  return (
    <section id="wishes" className="py-16 px-5 relative z-10 bg-[#F8F4EF]">
      <div className="w-full max-w-xs mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E7D7C9] text-[10px] uppercase tracking-widest text-[#8B6B4A] font-semibold mb-2 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#C4A484]" />
            <span>WORDS OF BLESSING</span>
          </div>
          <h2 className="text-3xl font-playfair font-bold text-[#8B6B4A]">
            Guest Wishes
          </h2>
          <p className="text-xs text-[#8B6B4A]/70 font-poppins mt-1">
            Send your heartfelt prayers & wishes
          </p>
          <div className="w-12 h-0.5 bg-[#C4A484] mx-auto mt-3" />
        </motion.div>

        {/* Add Wish Trigger / Form */}
        <div className="mb-8">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#8B6B4A] to-[#C4A484] text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
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
              className="bg-white border-2 border-[#C4A484] rounded-[24px] p-5 shadow-2xl"
            >
              <h3 className="text-sm font-playfair font-bold text-[#8B6B4A] mb-1 text-center">
                Leave Your Blessing
              </h3>
              <p className="text-[10px] text-[#8B6B4A]/70 text-center font-poppins mb-3">
                Your message will be sent via WhatsApp
              </p>
              <input
                type="text"
                placeholder="Your Name (e.g. Uncle Rashid)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
                className="w-full text-xs p-2.5 rounded-xl border border-[#E7D7C9] bg-[#F8F4EF] mb-2.5 outline-none focus:border-[#8B6B4A] disabled:opacity-50"
              />
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                disabled={isSubmitting}
                className="w-full text-xs p-2.5 rounded-xl border border-[#E7D7C9] bg-[#F8F4EF] mb-2.5 outline-none focus:border-[#8B6B4A] text-[#8B6B4A] disabled:opacity-50"
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
                className="w-full text-xs p-2.5 rounded-xl border border-[#E7D7C9] bg-[#F8F4EF] mb-3 outline-none focus:border-[#8B6B4A] disabled:opacity-50"
              />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 rounded-xl border border-[#E7D7C9] text-[#8B6B4A] text-xs font-semibold cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 rounded-xl bg-[#8B6B4A] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md cursor-pointer disabled:opacity-50"
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

        {/* Wishes List */}
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#E7D7C9] rounded-[24px] p-5 shadow-xl relative overflow-hidden"
              >
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#C4A484] to-[#8B6B4A]" />

                <div className="flex justify-between items-start mb-2 pl-2">
                  <div>
                    <h4 className="text-sm font-playfair font-bold text-[#8B6B4A] flex items-center gap-1.5">
                      {wish.name}
                      <span className="text-[10px] font-poppins font-normal text-[#C4A484] bg-[#F8F4EF] px-2 py-0.5 rounded-full border border-[#E7D7C9]">
                        {wish.relation}
                      </span>
                    </h4>
                  </div>
                  <span className="text-[10px] font-poppins text-[#8B6B4A]/60">
                    {wish.timestamp}
                  </span>
                </div>

                <p className="text-xs font-playfair italic text-[#8B6B4A]/90 leading-relaxed pl-2 mb-3">
                  "{wish.message}"
                </p>

                <div className="flex justify-end pl-2">
                  <button
                    onClick={() => toggleLike(wish.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-poppins transition-all cursor-pointer ${likedIds.includes(wish.id)
                        ? "bg-[#8B6B4A] text-white shadow-sm scale-105"
                        : "bg-[#F8F4EF] text-[#8B6B4A] hover:bg-[#E7D7C9]/40 border border-[#E7D7C9]"
                      }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${likedIds.includes(wish.id) ? "fill-white text-white" : "text-[#C4A484]"
                        }`}
                    />
                    <span>{wish.likes}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
