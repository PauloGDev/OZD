"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/projectsData";

const Projects = () => {
  const projects = projectsData;
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  // 🔹 Função que gera os números da paginação com ellipsis
  const getPageNumbers = () => {
    const maxVisible = 5;
    let pages: (number | string)[] = [];

    if (totalPages <= maxVisible) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    return pages;
  };

  return (
    <section
      id="projects"
      className="relative py-12 container mx-auto px-6 lg:px-12"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-center mb-14"
      >
        <span className="text-white drop-shadow-lg">Projetos</span>
      </motion.h2>

      {/* Grid de projetos */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, i) => (
            <Link key={project.slug} href={`/projetos/${project.slug}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative rounded-xl overflow-hidden group shadow-lg cursor-pointer"
              >
                {/* Glow degradê neon */}
                <div
                  className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-70 transition duration-500 blur-2xl"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, rgba(255,0,255,0.7), rgba(0,255,255,0.7), rgba(255,128,0,0.7))"
                        : "linear-gradient(135deg, rgba(0,255,200,0.7), rgba(128,0,255,0.7), rgba(255,0,128,0.7))",
                  }}
                />

                {/* Imagem */}
                <div className="relative w-full h-72 rounded-xl overflow-hidden z-10">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover rounded-xl group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-20">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Paginação numérica com ellipsis */}
      <div className="mt-12 flex justify-center items-center gap-3 flex-wrap">
        {/* Botão Anterior */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition shadow-md text-sm font-bold ${
            currentPage === 1
              ? "bg-white/5 text-white cursor-not-allowed"
              : "bg-white text-black hover:shadow-lg"
          }`}
        >
          ⟨
        </button>

        {/* Números / Ellipsis */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-[60vw] min-h-[5vw] px-2">
          {getPageNumbers().map((page, idx) =>
            page === "..." ? (
              <span
                key={`ellipsis-${idx}`}
                className="px-2 text-white/50 select-none"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(Number(page))}
                className={`w-8 h-8 flex items-center justify-center rounded-full font-medium transition ${
                  currentPage === page
                    ? "bg-white text-black font-bold shadow-lg scale-110"
                    : "bg-white/5 text-white hover:bg-white/20"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* Botão Próxima */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition shadow-md text-sm font-bold ${
            currentPage === totalPages
              ? "bg-white/5 text-white cursor-not-allowed"
              : "bg-white text-black hover:shadow-lg"
          }`}
        >
          ⟩
        </button>
      </div>
    </section>
  );
};

export default Projects;
