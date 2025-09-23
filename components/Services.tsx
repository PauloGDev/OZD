import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/siteData";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full lg:flex py-24 xl:py-28 space-y-6 lg:space-y-0"
    >
      {/* Títulos */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/3"
      >
        <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">
          {servicesData.mainData.title}
        </h6>
        <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
          {servicesData.mainData.title2}{" "}
          <span className="bg-themeGradient bg-clip-text text-transparent">
            {servicesData.mainData.title2Span}
          </span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="w-full lg:w-2/3 space-y-6">
        {servicesData.services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="z-[1] p-8 space-y-3 md:space-y-0 md:flex md:items-center bg-darkBg rounded-lg relative overflow-hidden 
              before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 before:transition-all before:ease-linear before:duration-100 
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient"
          >
            {/* Número */}
            <div className="md:w-[15%] text-white">
              <span className="font-outfit text-2xl xl:text-3xl font-medium">
                {item.number}/
              </span>
            </div>

            {/* Ícone + Título */}
            <div className="md:w-[40%] text-white flex items-center">
              <i className={`${item.bootstrapIcon} text-3xl`} />
              <h3 className="pl-3 font-outfit font-medium text-2xl xl:text-3xl">
                {item.title}
              </h3>
            </div>

            {/* Descrição */}
            <div className="md:w-[45%]">
              <p className="text-white/70">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
