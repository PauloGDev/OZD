"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/lib/siteData";

const Hero = () => {

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 md:py-36 xl:py-44 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-6 lg:px-20"
    >

      {/* Coluna esquerda: Avatar + estatísticas */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        {/* Avatar */}
        <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl mb-6">
          <Image
            src={aboutData.mainData.heroAvatar}
            alt={aboutData.mainData.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Estatísticas */}
        <div className="flex gap-10 mt-4">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">
              {aboutData.mainData.projectsDone}
            </p>
            <p className="text-sm md:text-base text-white/60">Projetos</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">
              {aboutData.mainData.yearsOfExperience}
            </p>
            <p className="text-sm md:text-base text-white/60">Anos</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">
              {aboutData.mainData.worldwideClients}
            </p>
            <p className="text-sm md:text-base text-white/60">Clientes</p>
          </div>
        </div>
      </motion.div>

      {/* Coluna direita: Nome + bio */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            {aboutData.mainData.name}
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
          {aboutData.mainData.biography ||
            "Sou apaixonado por transformar ideias em experiências digitais que inspiram e conectam pessoas. Combinando design moderno, tecnologia de ponta e criatividade, construo soluções que realmente fazem a diferença."}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8"
        >
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-lg hover:opacity-90 transition">
            Vamos conversar 🚀
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
