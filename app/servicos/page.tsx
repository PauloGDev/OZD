// app/servicos/page.tsx
"use client";


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { servicesData, aboutData } from "@/lib/siteData";
import Link from "next/link";
import Portfolio from "@/components/Portfolio";
import Loading from "@/components/loading";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function ServicosPage() {
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setIsLoading(false), 1500); // simula carregamento
    }, []);
  
    if (isLoading) return <Loading />;
  
    return (
    <div className="w-full text-white">
      {/* HERO */}
      {/* HERO */}
<section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
  {/* Overlay escuro */}
  <div className="absolute inset-0 bg-black" />

  {/* Conteúdo */}
  <div className="relative z-10 px-6">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="font-outfit font-semibold text-4xl md:text-6xl lg:text-7xl"
    >
      Nossos{" "}
      <span className="bg-themeGradient bg-clip-text text-transparent">
        Serviços
      </span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="mt-6 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
    >
      Transformamos ideias em soluções criativas, modernas e impactantes.
      Conheça tudo que podemos desenvolver para sua marca.
    </motion.p>
  </div>

  {/* Bolhas animadas */}
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600/30 blur-3xl"
  />
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
    className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-pink-600/30 blur-3xl"
  />
</section>


      {/* LISTA DE SERVIÇOS */}
      <section className="container mx-auto max-w-[1300px] px-5 md:px-10 xl:px-5 py-20 space-y-10">
        {servicesData.services.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={index}
            viewport={{ once: true }}
            className="z-[1] p-10 md:flex md:items-center gap-6 bg-darkBg rounded-xl relative overflow-hidden 
              before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:duration-300"
          >
            {/* Número */}
            <div className="md:w-[10%] text-white">
              <span className="font-outfit text-2xl xl:text-3xl font-medium">
                {item.number}/
              </span>
            </div>

            {/* Ícone + Título */}
            <div className="md:w-[35%] text-white flex items-center">
              <i className={`${item.bootstrapIcon} text-4xl`} />
              <h3 className="pl-4 font-outfit font-semibold text-2xl xl:text-3xl">
                {item.title}
              </h3>
            </div>

            {/* Descrição */}
            <div className="md:w-[55%] mt-4 md:mt-0">
              <p className="text-white/70">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ESPECIALIDADES (skills do aboutData) */}
      <section className="bg-black/40 py-20">
        <div className="container mx-auto max-w-[1100px] px-5 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="font-outfit text-3xl md:text-5xl font-semibold"
          >
            Áreas de <span className="bg-themeGradient bg-clip-text text-transparent">Especialidade</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {aboutData.skills.map((skill, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={i}
                className="px-6 py-4 bg-darkBg rounded-lg shadow-md hover:scale-105 transition"
              >
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
          <Portfolio />
        </motion.div>

      {/* CTA FINAL */}
      <section className="py-28 text-center container mx-auto px-6">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="font-outfit text-3xl md:text-4xl font-semibold"
        >
          Pronto para transformar sua marca?
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={2}
          className="text-white/70 mt-4 max-w-2xl mx-auto"
        >
          Entre em contato e solicite um projeto personalizado para o seu negócio.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={3}
          className="mt-8"
        >
          <Link
            href="https://wa.me/5585997089722?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20OZD%20Studio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20que%20podemos%20produzir%20juntos%20%F0%9F%9A%80"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-800 to-purple-950 text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            Solicitar Projeto
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
