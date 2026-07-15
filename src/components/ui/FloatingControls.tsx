"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, VolumeX } from "lucide-react";

interface FloatingControlsProps {
  audioUrl: string;
  hasEntered: boolean;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  audioUrl,
  hasEntered,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio(audioUrl);
      audio.loop = true;
      audio.volume = 0.5;

      audio.onerror = () => {
        if (audio.src.includes(".m4a")) {
          audio.src = "/wedding-muhammad-al-muqit.mp3";
        } else if (!audio.src.includes("/wedding-muhammad-al-muqit.wav")) {
          audio.src = "/wedding-muhammad-al-muqit.wav";
        }
      };

      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [audioUrl]);

  // Handle auto-start on invitation open
  useEffect(() => {
    if (hasEntered && audioRef.current && audioRef.current.paused && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser policy, require user interaction via button
          console.log("Audio autoplay prevented by browser policy");
        });
    }
  }, [hasEntered, isPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Playback error:", err));
    }
  };

  if (!hasEntered) return null;

  return (
    <>
      {/* Top Scroll Progress Indicator right on top of mobile frame */}
      <div className="sticky top-0 left-0 right-0 z-50 h-1.5 w-full bg-[#E7D7C9]/40 backdrop-blur-sm overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#C4A484] via-[#8B6B4A] to-[#D4AF37] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Circular Music Button at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center pointer-events-auto">
        {/* Circular Button */}
        <button
          onClick={toggleAudio}
          aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
          title={isPlaying ? "Music Playing (Click to mute)" : "Click to play Arabic music"}
          className={`w-13 h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border-2 active:scale-90 cursor-pointer ${
            isPlaying
              ? "bg-[#8B6B4A] border-[#EAD0B1] shadow-[#8B6B4A]/50 ring-4 ring-[#C4A484]/30 scale-105"
              : "bg-[#8B6B4A]/90 border-[#C4A484]/60 hover:bg-[#8B6B4A] opacity-90"
          }`}
          style={{ width: "52px", height: "52px" }}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Music className="w-6 h-6 text-[#EAD0B1] animate-pulse" />
            </div>
          ) : (
            <div className="relative flex items-center justify-center">
              <Music className="w-6 h-6 text-[#EAD0B1]/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-7 h-[2px] bg-[#EAD0B1] rotate-45 rounded-full" />
              </div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};
