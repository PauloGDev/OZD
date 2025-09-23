"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import About from "@/components/About";
import Awards from "@/components/Awards";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

import Loading from "@/components/loading";
import { fadeUp, scaleIn, staggerContainer, blurReveal } from "./utils/animations";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ozd-cookie-consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 800); // atraso leve p/ não ser intrusivo
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("ozd-cookie-consent", "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 place-self-center -translate-x-1/2 z-50 
                     w-[95%] max-w-2xl 
                     p-4 md:p-5 lg:p-6 
                     rounded-2xl 
                     bg-white/10 backdrop-blur-xl 
                     shadow-xl border border-white/20 
                     text-white"
          role="dialog"
          aria-live="polite"
        >
          {/* Texto */}
          <p className="text-sm md:text-base leading-relaxed text-white/80 text-center md:text-left">
            Usamos cookies para melhorar sua experiência e analisar o tráfego do site.
            Ao continuar navegando, você concorda com nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="underline text-fuchsia-400 hover:text-fuchsia-300"
            >
              política de privacidade
            </a>.
          </p>

          {/* Botões */}
          <div className="mt-4 flex flex-col sm:flex-row justify-center md:justify-end gap-3">
            <button
              onClick={acceptCookies}
              className="px-5 py-2 text-sm font-medium rounded-full 
                         bg-gradient-to-r from-fuchsia-600 via-purple-800 to-purple-950 
                         hover:scale-105 transition shadow-lg 
                         text-white"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="overflow-x-hidden w-full">
      {/* Cookie Consent */}
        <CookieBanner />
      {/* Hero */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        className="space-y-20"
      >
        <Hero />
      </motion.div>

      <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5 space-y-32">
        {/* About */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <About />
          </motion.div>
        </motion.section>

        {/* Services */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={blurReveal}>
            <Services />
          </motion.div>
        </motion.section>

        {/* Clients */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <Clients />
          </motion.div>
        </motion.section>

      </div>
        {/* Portfolio */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <Portfolio />
          </motion.div>
        </motion.section>

      {/* Awards */}
      <motion.section
        variants={blurReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Awards />
      </motion.section>

      {/* Contact */}
      <motion.section
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>
    </div>
  );
}
