"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/projectsData";
import Link from "next/link";

// 🔹 Função utilitária para pegar imagens únicas aleatórias
const getRandomImages = (count: number) => {
  const allImages = projectsData.flatMap((p) => [p.cover, ...p.gallery]);
  const uniqueImages = Array.from(new Set(allImages));
  const shuffled = [...uniqueImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// 🔹 Componente de contador
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

const Hero = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(getRandomImages(12));
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 md:py-40 xl:py-48 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-10"
    >
      {/* Fundo mobile/tablet - Cyberpunk */}
      <div className="absolute inset-0 lg:hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(135deg,  rgba(5,0,5,0.1), rgba(36,39,211,0.1), rgba(94,39,211,0.1))",
            backgroundSize: "300% 300%",
          }}
        />
        <div className="absolute inset-0 opacity-50 blur-md">
          {images.slice(0, 6).map((img, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40"
              animate={{
                x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20 + i * 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <Image
                src={img}
                alt={`bg-${i}`}
                fill
                className="object-cover opacity-70 mix-blend-screen rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coluna esquerda - Texto */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight"
        >
          <span className="text-white drop-shadow-lg">
            OZD - Comunicação & Marketing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
        >
          “Mais de 20 anos transformando ideias em design, editorial e audiovisual.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 flex flex-col md:flex-row gap-6 text-white/80"
        >
          <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md shadow-md">
            Head de Criação
          </span>
          <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md shadow-md">
            Especialista em Design & Motion
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8"
        >
          <Link href="https://wa.me/5585997089722?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20OZD%20Studio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20que%20podemos%20produzir%20juntos%20%F0%9F%9A%80" className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-800 to-purple-950 text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition">
            Solicite um projeto
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-wrap gap-10 text-left"
        >
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">
              <Counter target={80} />+
            </p>
            <p className="text-sm md:text-base text-white/60">
              Projetos concluídos (2022–2024)
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">
              <Counter target={20} />+
            </p>
            <p className="text-sm md:text-base text-white/60">Marcas atendidas</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">
              <Counter target={15} />
            </p>
            <p className="text-sm md:text-base text-white/60">
              Anos em direção de arte
            </p>
          </div>
        </motion.div>
      </div>

      {/* Coluna direita - Carrossel de imagens (somente Desktop) */}
      <div className="hidden lg:grid flex-1 grid-cols-2 gap-6 h-[500px] overflow-hidden relative z-10">
        {/* Coluna 1 */}
        <motion.div
          className="flex flex-col gap-6"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {images.slice(0, 6).map((img, i) => (
            <div key={`col1-${i}`} className="relative w-full h-40 rounded-xl group">
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-65 transition duration-500 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,0,255,0.8), rgba(0,255,255,0.8), rgba(255,0,128,0.8))",
                }}
              />
              <div className="relative w-full h-40 rounded-xl overflow-hidden z-10">
                <Image src={img} alt={`img-${i}`} fill className="object-cover rounded-xl" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Coluna 2 */}
        <motion.div
          className="flex flex-col gap-6"
          animate={{ y: ["-50%", "0%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {images.slice(6, 12).map((img, i) => (
            <div key={`col2-${i}`} className="relative w-full h-40 rounded-xl group">
              <div
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-65 transition duration-500 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,255,255,0.8), rgba(255,0,255,0.8), rgba(0,128,255,0.8))",
                }}
              />
              <div className="relative w-full h-40 rounded-xl overflow-hidden z-10">
                <Image src={img} alt={`img-${i}`} fill className="object-cover rounded-xl" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
