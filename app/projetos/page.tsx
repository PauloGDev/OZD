"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

import Projects from "@/components/portfolio/Projects";
import ProjectsHero from "./ProjectsHero";

// Variantes de animação
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // cada item com delay incremental
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Componente de Loading
function Loading() {
  return (
    <div className="preloader z-50 fixed inset-0 flex flex-col items-center justify-center bg-black">
      {/* Logo OZD */}
      <div className="text-6xl md:text-7xl font-outfit font-extrabold text-white animate-glow">
        OZD
      </div>

      <style jsx>{`
        /* Glow pulsante */
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


export default function Home() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // mantém o loading visível por pelo menos 2s
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="w-[100vw] space-y-20">   
        {/* Hero */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <ProjectsHero />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5 space-y-20">
        {/* About */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <Projects />
        </motion.div>
      </div>
    </>
  );
}
