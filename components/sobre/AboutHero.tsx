"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden py-28 md:py-36 xl:py-44 container mx-auto px-6 lg:px-12 w-full max-w-[100vw] flex flex-col items-center text-center">
      {/* Fundo gradiente animado */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,0,5,0.15), rgba(126,79,211,0.15), rgba(245,39,145,0.15))",
          backgroundSize: "300% 300%",
        }}
      />

      {/* Linhas diagonais animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[200%] h-[2px] bg-gradient-to-r from-fuchsia-500/20 via-purple-400/10 to-transparent"
            style={{
              top: `${i * 18}%`,
              left: "-50%",
              rotate: "-20deg",
            }}
            animate={{
              x: ["0%", "50%"],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Orbes translúcidas no fundo */}
      <motion.div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Conteúdo principal */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-3xl relative z-10"
      >
        Criatividade que conecta marcas{" "}
        <span className="bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-400 bg-clip-text text-transparent">
          e pessoas
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed relative z-10"
      >
        Somos especialistas em design, editorial e audiovisual há mais de 20 anos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8 relative z-10"
      >
        <Link
          href="https://wa.me/5585997089722?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20OZD%20Studio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20que%20podemos%20produzir%20juntos%20%F0%9F%9A%80"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-800 to-purple-950 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
        >
          Solicite um projeto
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutHero;
