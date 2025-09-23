"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/lib/siteData";

// 🔹 Contador animado
const Counter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = Math.abs(Math.floor((duration * 1000) / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
};

const ProjectsHero = () => {
  return (
    <section
      id="projects-hero"
      className="relative overflow-hidden py-28 md:py-40 xl:py-48 text-center flex flex-col items-center justify-center"
    >
      {/* Fundo: linhas animadas */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 80px)
          `,
          backgroundSize: "80px 80px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid de imagens sutis */}
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 gap-2 opacity-20">
        {aboutData.hero.slice(0, 12).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="relative w-full h-40 md:h-52 overflow-hidden"
          >
            <Image
              src={img}
              alt={`bg-${i}`}
              fill
              className="object-cover hover:scale-110 transition duration-[4000ms] ease-out"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay degradê para leitura */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 z-0" />

      {/* 🔹 Formas geométricas flutuantes */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-fuchsia-500/20 blur-3xl z-0"
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "15%", left: "10%" }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-cyan-400/20 blur-2xl rotate-45 z-0"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "20%", right: "15%" }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-purple-600/30 blur-xl z-0"
        animate={{ x: [0, 30, -50, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "30%", right: "30%" }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-0 max-w-5xl px-6">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          <span className="text-white">Projetos que transformam</span>{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-400 bg-clip-text text-transparent">
            marcas
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          Uma seleção de criações em design, motion e marketing que deram identidade e estratégia aos nossos clientes.
        </motion.p>

        {/* Destaques - Métricas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { value: 80, label: "Projetos únicos" },
            { value: 25, label: "Marcas atendidas" },
            { value: 10, label: "Segmentos de atuação" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-xl border border-white/10"
            >
              <p className="text-4xl font-bold text-white">
                <Counter target={item.value} />+
              </p>
              <p className="mt-1 text-sm md:text-base text-white/60">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;
