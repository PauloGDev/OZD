"use client";

import { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

import Projects from "@/components/portfolio/Projects";
import ProjectsHero from "./ProjectsHero";

// Variantes de animação globais
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Preloader animado
function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-[clamp(3rem,8vw,5rem)] font-outfit font-extrabold text-white"
        animate={{
          textShadow: [
            "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff",
            "0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff",
            "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff",
          ],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        OZD
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fica visível no mínimo 1.5s
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loading />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="w-full space-y-20">
            {/* Hero */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <ProjectsHero />
            </motion.div>
          </div>

          <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5 space-y-20">
            {/* About */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={1}
            >
              <Projects />
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}
