"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

import About from "@/components/sobre/About";
import AboutHero from "@/components/sobre/AboutHero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Loading from "@/components/loading";

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


export default function Home() {
  
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setIsLoading(false), 1500); // simula carregamento
    }, []);
  
    if (isLoading) return <Loading />;
  
    return (
    <>
      <div className="w-[100vw] space-y-20">   
        {/* Hero */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <AboutHero />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-[1320px] px-5 md:px-10 xl:px-5 space-y-20">
        {/* About */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <About />
        </motion.div>

        {/* Portfolio */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
          <Portfolio />
        </motion.div>
      </div>

      {/* Contact */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={8}>
        <Contact />
      </motion.div>

      {/* Map 
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={9}>
        <Map />
      </motion.div>
      */}
    </>
  );
}
