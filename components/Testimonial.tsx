"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { testimonialData } from "@/lib/siteData"

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 py-16 xl:py-20"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-testimonial-pagination",
          type: "progressbar",
        }}
        modules={[Pagination]}
        className="testimonial-slider relative pb-5 lg:pb-0"
      >
        {testimonialData.testimonial.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="lg:flex lg:items-center lg:space-x-8 text-center lg:text-left relative">
              {/* Avatar reduzido */}
              <div className="inline-block mb-3 lg:mb-0 w-[140px] min-w-[140px] md:w-[160px] md:min-w-[160px] lg:w-[180px] lg:min-w-[180px]">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  placeholder="blur"
                  className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full"
                />
              </div>

              {/* Conteúdo */}
              <div>
                <div className="mb-2">
                  <h3 className="font-outfit font-medium text-lg md:text-xl lg:text-2xl text-white mb-1">
                    {item.name}
                  </h3>
                  <span className="block font-outfit font-medium uppercase text-xs tracking-wide text-white/80">
                    {item.jobTitle}
                  </span>
                </div>
                <p className="text-base md:text-lg lg:text-xl italic text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Ícone de citação */}
              <div className="absolute top-0 right-0 opacity-15 text-white text-5xl lg:text-6xl">
                <i className="bi bi-quote"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Slider Pagination Progress */}
        <div className="swiper-testimonial-pagination"></div>
      </Swiper>
    </div>
  )
}

export default Testimonial
