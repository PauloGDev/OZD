"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  subtitle: string;
  year: string;
  client: string;
  services: string[];
  cover: string;
  gallery: string[];
}

export default function ProjectTemplate({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Abre lightbox em um índice específico
  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  // Navegação
const goNext = useCallback(() => {
  setActiveIndex((prev) => (prev + 1) % project.gallery.length);
}, [project.gallery.length]);

const goPrev = useCallback(() => {
  setActiveIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
}, [project.gallery.length]);

  // Teclado: Esc fecha, setas navegam
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen,goNext, goPrev, project.gallery.length]);

  // Previne scroll do body quando modal aberto
  useEffect(() => {
    if (lightboxOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [lightboxOpen]);

  return (
    <main className="relative text-white">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-white/70"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Detalhes */}
      <section className="py-16 container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white/80">Ano</h3>
            <p className="text-xl">{project.year}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white/80">Cliente</h3>
            <p className="text-xl">{project.client}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white/80">Serviços</h3>
            <p className="text-xl">{project.services.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((img: string, i: number) => {
            const motionProps =
              i < 3 // primeiras 3 imagens sempre visíveis
                ? { initial: { opacity: 1, scale: 1 } }
                : {
                    initial: { opacity: 0, scale: 0.98 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: true, amount: 0.2 },
                  };

            return (
              <motion.div
                key={i}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                {...motionProps}
                className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden cursor-zoom-in"
                onClick={() => openLightbox(i)}
                role="button"
                aria-label={`Abrir imagem ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`gallery-${i}`}
                  fill
                  priority={i < 3}
                  loading={i < 3 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-80 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-600 via-purple-800 to-purple-950 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Gostou do projeto?</h2>
        <p className="mt-4 text-white/70 text-lg pb-8">
          Vamos criar algo incrível juntos.
        </p>
        <Link
        href="https://wa.me/5585997089722?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20OZD%20Studio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20que%20podemos%20produzir%20juntos%20%F0%9F%9A%80"
        className="mt-8 px-6 py-3 rounded-full bg-white text-purple-900 font-medium shadow-lg hover:scale-105 transition">
          Solicitar um projeto
        </Link>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              className="relative z-50 max-w-[95vw] max-h-[90vh] w-full flex items-center justify-center"
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                onClick={() => setLightboxOpen(false)}
                aria-label="Fechar (Esc)"
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 hover:bg-black/30 flex items-center justify-center text-white shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <button
                onClick={goPrev}
                aria-label="Imagem anterior"
                className="absolute left-4 z-50 w-12 h-12 rounded-full bg-black/40 hover:bg-black/30 flex items-center justify-center text-white shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                onClick={goNext}
                aria-label="Próxima imagem"
                className="absolute right-4 z-50 w-12 h-12 rounded-full bg-black/40 hover:bg-black/30 flex items-center justify-center text-white shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className="relative rounded-md overflow-hidden">
                <Image
                  src={project.gallery[activeIndex]}
                  alt={`${project.title} - imagem ${activeIndex + 1}`}
                  width={1200}
                  height={800}
                  className="bg-black object-contain max-h-[85vh] max-w-[90vw] w-auto h-auto mx-auto"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-sm text-white flex items-center justify-between">
                  <div>
                    {project.title} — imagem {activeIndex + 1} de{" "}
                    {project.gallery.length}
                  </div>
                  <div className="text-xs text-white/70">{project.client}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
