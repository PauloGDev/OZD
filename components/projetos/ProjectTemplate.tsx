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

  // Abre lightbox
  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  // Navegação
  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % project.gallery.length);
  }, [project.gallery.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  }, [project.gallery.length]);

  // Teclado
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen, goNext, goPrev]);

  // Bloqueia scroll
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
    <main className="relative text-white bg-black">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
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
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <Detail label="Ano" value={project.year} />
          <Detail label="Cliente" value={project.client} />
          <Detail label="Serviços" value={project.services.join(", ")} />
        </div>
      </section>

      {/* Galeria */}
      <section className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`Abrir imagem ${i + 1}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={img}
                alt={`${project.title} - imagem ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-600 via-purple-800 to-purple-950 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Gostou do projeto?</h2>
        <p className="mt-4 text-white/70 text-lg">
          Vamos criar algo incrível juntos.
        </p>
        <Link
          href="https://wa.me/5585997089722?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20OZD%20Studio..."
          className="inline-block mt-8 px-8 py-3 rounded-full bg-white text-purple-900 font-medium shadow-lg hover:scale-105 transition"
        >
          Solicitar um projeto
        </Link>
      </section>

      {/* Lightbox */}
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
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fechar */}
              <button
                ref={closeButtonRef}
                onClick={() => setLightboxOpen(false)}
                aria-label="Fechar (Esc)"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/30 flex items-center justify-center text-white shadow-lg"
              >
                ✕
              </button>

              {/* Prev */}
              <NavButton direction="left" onClick={goPrev} />

              {/* Next */}
              <NavButton direction="right" onClick={goNext} />

              {/* Imagem */}
              <div className="relative rounded-md overflow-hidden">
                <Image
                  src={project.gallery[activeIndex]}
                  alt={`${project.title} - imagem ${activeIndex + 1}`}
                  width={1200}
                  height={800}
                  className="bg-black object-contain max-h-[85vh] max-w-[90vw] w-auto h-auto mx-auto"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-sm flex justify-between text-white/80">
                  <span>
                    {activeIndex + 1} / {project.gallery.length}
                  </span>
                  <span>{project.client}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// Subcomponents
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
        {label}
      </h3>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}

function NavButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const icon =
    direction === "left" ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    );
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Anterior" : "Próxima"}
      className={`absolute ${direction === "left" ? "left-4" : "right-4"} z-50 w-12 h-12 rounded-full bg-black/40 hover:bg-black/30 flex items-center justify-center text-white shadow-lg`}
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
        {icon}
      </svg>
    </button>
  );
}
