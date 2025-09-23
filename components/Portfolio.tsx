"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Swiper as SwiperType } from "swiper";
import { NavigationOptions } from "swiper/types";
import { projectsData } from "@/lib/projectsData";

const Portfolio = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const sliderRef = useRef<SwiperType | null>(null);

  const updateNavigation = (swiper: SwiperType) => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
      const navigation = swiper.params.navigation as NavigationOptions;

      if (prevRef.current && nextRef.current) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      }
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      updateNavigation(sliderRef.current);
    }
  }, []);

  return (
    <section id="portfolio" className="px-5 lg:px-10">
      <div className="rounded-2xl overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container mx-auto max-w-[1320px] px-5">
          {/* Header */}
          <div className="md:w-4/5 lg:w-3/4 md:mx-auto text-center mb-10 lg:mb-14">
            <h6 className="font-outfit font-medium text-xs md:text-sm uppercase tracking-wider text-white/40">
              Nossos Projetos
            </h6>
            <h2 className="font-outfit font-semibold text-[clamp(2rem,4vw,3.5rem)] text-white mt-2">
              Trabalhos{" "}
              <span className="bg-themeGradient bg-clip-text text-transparent">
                Realizados
              </span>
            </h2>
            <p className="leading-relaxed text-white/70 mt-3 max-w-2xl mx-auto text-sm md:text-base">
              Seleção de projetos em que aplicamos criatividade e estratégia para gerar resultados reais.
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            onSwiper={(swiper) => {
              sliderRef.current = swiper;
              swiper.on("init", () => updateNavigation(swiper));
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            simulateTouch={true}
            grabCursor={true}
            loop={true}
            className="swiper portfolio-slider overflow-visible"
          >
            {projectsData.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="group bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Imagem */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl">
                    <Link href={`/projetos/${project.slug}`}>
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      />
                    </Link>
                  </div>

                  {/* Conteúdo */}
                  <div className="pt-5 px-5 pb-6 text-left">
                    <p className="text-xs md:text-sm text-white/50">{project.year}</p>
                    <h3 className="font-outfit font-semibold text-lg md:text-2xl text-white mt-1 line-clamp-1">
                      <Link href={`/projetos/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-sm md:text-base text-white/70 mt-1 line-clamp-2">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-white/50 mt-3">
                      {project.services.join(" • ")}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navegação */}
          <div className="space-x-3 mt-8 flex justify-center">
            <button
              className="swiper-portfolio-prev w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition relative"
              onClick={() => sliderRef.current?.slidePrev()}
              aria-label="Slide anterior"
              ref={prevRef}
            >
              <i className="bi bi-arrow-left text-lg md:text-xl"></i>
            </button>
            <button
              className="swiper-portfolio-next w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition relative"
              onClick={() => sliderRef.current?.slideNext()}
              aria-label="Próximo slide"
              ref={nextRef}
            >
              <i className="bi bi-arrow-right text-lg md:text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
