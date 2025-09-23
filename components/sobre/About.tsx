import React from "react";
import Link from "next/link";
import { aboutData } from "@/lib/siteData";

const About = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Biografia + Serviços + Redes */}
          <div className="space-y-8">
            {/* Nome e Cargo */}
            <div>
              <h3 className="text-2xl font-outfit font-semibold text-white">
                {aboutData.mainData.name}
              </h3>
            </div>

            {/* Biografia */}
            <div>
              <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
                Biografia
              </h6>
              <p className="text-white/70 leading-[1.8]">
                {aboutData.mainData.biography}
              </p>
            </div>

            {/* Serviços */}
            <div>
              <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
                Serviços
              </h6>
              <ul className="flex flex-wrap gap-2">
                {aboutData.skills.map((item, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 hover:bg-themeGradient hover:text-white transition"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes */}
            <div>
              <h6 className="font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2">
                Redes
              </h6>
              <ul className="flex gap-3">
                {aboutData.connect.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white/10 text-white hover:bg-themeGradient transition"
                      href={item.url}
                      aria-label="Social media link"
                    >
                      <i className={`${item.bootstrapIcon} text-lg`}></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Números + Extras */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl text-center">
              <h6 className="text-sm uppercase text-white/60">Projetos Feitos</h6>
              <span className="text-4xl font-outfit font-bold text-white block mt-2">
                {aboutData.mainData.projectsDone}
              </span>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl text-center">
              <h6 className="text-sm uppercase text-white/60">Anos de Experiência</h6>
              <span className="text-4xl font-outfit font-bold text-white block mt-2">
                {aboutData.mainData.yearsOfExperience}+
              </span>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl text-center">
              <h6 className="text-sm uppercase text-white/60">Clientes</h6>
              <span className="text-4xl font-outfit font-bold text-white block mt-2">
                {aboutData.mainData.worldwideClients}
              </span>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl text-center">
              <h6 className="text-sm uppercase text-white/60">Missão</h6>
              <p className="text-white text-sm mt-2 leading-relaxed">
                Ajudar marcas a se destacarem com design criativo e estratégias digitais eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
