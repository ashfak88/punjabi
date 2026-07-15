"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Soft background volume

    const handleCanPlay = () => setIsLoaded(true);
    audioRef.current.addEventListener("canplaythrough", handleCanPlay);

    // Auto-play listener on first user interaction anywhere if not started
    const handleFirstClick = () => {
      if (audioRef.current && audioRef.current.paused && !isPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay blocked, require explicit click on button
          });
      }
      window.removeEventListener("click", handleFirstClick);
    };

    window.addEventListener("click", handleFirstClick);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
      }
      window.removeEventListener("click", handleFirstClick);
    };
  }, [audioUrl, isPlaying]);

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
        .catch((err) => console.log("Playback error:", err));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {isPlaying && (
        <div className="hidden sm:flex items-center gap-1 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1.5 rounded-full shadow-lg text-xs font-medium tracking-wider text-[#1A1A1A] dark:text-[#D4AF37] animate-fade-in">
          <Music className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
          <span>Wedding Symphony</span>
          <div className="flex items-end gap-0.5 ml-1 h-3">
            <span className="w-0.5 bg-[#D4AF37] animate-pulse h-2"></span>
            <span className="w-0.5 bg-[#D4AF37] animate-pulse h-3"></span>
            <span className="w-0.5 bg-[#D4AF37] animate-pulse h-1.5"></span>
          </div>
        </div>
      )}

      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border ${isPlaying
            ? "bg-[#0A2E1F] text-[#D4AF37] border-[#D4AF37] shadow-[#D4AF37]/30 scale-105 ring-2 ring-[#D4AF37]/40 ring-offset-2"
            : "bg-white/90 text-[#1A1A1A] border-[#D4AF37]/50 hover:scale-105 hover:bg-[#D4AF37] hover:text-white"
          }`}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};
