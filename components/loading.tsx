// components/Loading.tsx
"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="preloader z-50 fixed inset-0 flex flex-col items-center justify-center bg-black">
      {/* Logo OZD */}
      <div className="text-6xl md:text-7xl font-outfit font-extrabold text-white animate-glow">
        OZD
      </div>

      {/* Estilos exclusivos */}
      <style jsx>{`
        .animate-glow {
          animation: glowPulse 1.5s infinite;
        }

        @keyframes glowPulse {
          0% {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff;
            opacity: 0.7;
          }
          50% {
            text-shadow: 0 0 20px #fff, 0 0 20px #fff, 0 0 5px #fff;
            opacity: 1;
          }
          100% {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff;
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
