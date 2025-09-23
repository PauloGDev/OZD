"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { blogData } from '@/lib/siteData'
import { Swiper as SwiperType } from 'swiper';
import { NavigationOptions } from 'swiper/types';

const Blog = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef<SwiperType | null>(null);

    const updateNavigation = (swiper: SwiperType) => {
        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
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
        <div id="blog" className="px-5 lg:px-10">
            <div className="bg-darkBg rounded-2xl overflow-hidden py-20">
                <div className="container mx-auto max-w-[1320px] px-5">
                    <div className="md:w-4/5 lg:w-3/4 md:mx-auto">
                        <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">{blogData.mainData.title}</h6>
                        <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">{blogData.mainData.title2} <span className="bg-themeGradient bg-clip-text text-transparent">{blogData.mainData.title2Span}</span></h2>
                        <p className="leading-[1.75] text-white/70 mt-3">{blogData.mainData.description}</p>
                        {/* Slider Nav */}
                        <div className="space-x-1 mt-6">
                            <button className="swiper-blog-prev inline-block group w-[50px] h-[50px] rounded-full cursor-pointer bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100 cursor-link" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                <i className="bi bi-arrow-left absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0"></i>
                                <i className="bi bi-arrow-left absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100"></i>

                            </button>
                            <button className="swiper-blog-next inline-block group w-[50px] h-[50px] rounded-full cursor-pointer bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100 cursor-link" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
                                <i className="bi bi-arrow-right absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0"></i>
                                <i className="bi bi-arrow-right absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100"></i>
                            </button>
                        </div>
                        {/* end Slider Nav */}
                    </div>

                    <Swiper
                        onSwiper={(swiper) => {
                            sliderRef.current = swiper;
                            swiper.on('init', () => {
                                updateNavigation(swiper);
                            });
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="blog-slider overflow-visible mt-6 xl:mt-14"
                    >
                        {blogData.posts.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="group/blog-box">
                                    <div className="overflow-hidden relative rounded-2xl">
                                        {/* Image */}
                                        <Link className="group block relative before:content-[''] before:z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100" href={`blog/${item.slug}`}>
                                            <Image
                                                src={item.mainImage}
                                                alt={item.title}
                                                placeholder="blur"
                                                className="group-hover:scale-105 transition ease-custom duration-500"
                                            />

                                            <div className="absolute top-4 right-4 z-[1] bg-black/20 rounded-3xl px-5 py-2.5 font-outfit font-medium uppercase text-sm tracking-wider text-white">
                                                {item.category}
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="pt-6">
                                        <ul className="text-white font-outfit font-medium uppercase text-sm tracking-wider">
                                            <li className="list-none inline-block leading-none pr-[4px]">
                                                <Link className="inline-block overflow-hidden" href={`blog/${item.slug}`}>
                                                    <span className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100" data-text={`by ${item.postedBy}`}>by {item.postedBy}</span>
                                                </Link>
                                            </li>
                                            <li className="list-none inline-block leading-none relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80">
                                                <Link className="inline-block overflow-hidden" href={`blog/${item.slug}`}>
                                                    <span className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 hover:before:-top-full hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 hover:after:top-0 hover:after:opacity-100" data-text="Oct 8">Oct 8</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="mt-2">
                                            <h2 className="relative font-outfit font-medium text-3xl">
                                                <Link className="text-white group-hover/blog-box:pl-[44px] transition-all ease-out duration-200" href={`blog/${item.slug}`}>
                                                    <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover/blog-box:opacity-100 group-hover/blog-box:-translate-x-0 transition duration-100">
                                                        <i className="bi bi-arrow-right"></i>
                                                    </span>
                                                    {item.title}
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Blog