import { aboutData, footerData } from "@/lib/siteData";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 text-center px-5 py-6">
        {/* Redes sociais */}
        <div className="flex space-x-4">
          {footerData.socials.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-themeGradient transition"
            >
              <i className={`${item.icon} text-lg`}></i>
            </Link>
          ))}
        </div>
        {/* Desenvolvido por */}
        <Link
          href="https://digitaltricks.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white/70 hover:text-white transition"
        >
          <span className="text-sm">Desenvolvido por</span>
          <Image
            src={aboutData.mainData.digitalTricks}
            alt="Digital Tricks Logo"
            width={32}
            height={36}
            className="object-contain"
          />
        </Link>

      </div>

      {/* Copyright */}
      <div className="bg-[#1a1a1a] py-4">
        <div className="container mx-auto text-center">
          <p className="text-white/70 text-sm">{footerData.copyWriteText}</p>
        </div>
      </div>
    </footer>
  );
}
