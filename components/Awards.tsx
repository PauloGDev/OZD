import React from "react";
import { motion } from "framer-motion";
import { awardsData } from "@/lib/siteData";
import Link from "next/link";

const Awards = () => {
  return (
    <div
      id="awards"
      className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pt-24 xl:pt-28"
    >
      <div className="w-full lg:flex space-y-6 lg:space-y-0">
        {/* Títulos */}
        <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: true }}
  className="w-full lg:w-1/3 flex flex-col items-start"
>
  <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 
    before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 
    before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
    {awardsData.mainData.title}
  </h6>

  <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
    {awardsData.mainData.title2}
    <span className="bg-themeGradient bg-clip-text text-transparent">
      {awardsData.mainData.title2Span}
    </span>
  </h2>

  {/* Botão Saiba Mais */}
  <Link
    href={"/sobre"}
    className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-800 to-purple-950 
               text-white font-medium text-base shadow-lg hover:scale-105 hover:shadow-xl 
               transition duration-300 ease-in-out"
  >
    Saiba mais
  </Link>
</motion.div>


        {/* Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {awardsData.awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, x: index % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="z-[1] p-8 space-y-1.5 bg-darkBg rounded-lg relative overflow-hidden 
                before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient"
            >
              <h4 className="font-outfit font-medium text-white text-2xl">
                {award.title}
              </h4>
              <h6 className="block font-outfit font-medium uppercase text-sm tracking-wider text-white/40">
                {award.date}
              </h6>
              <p className="text-white/70">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
