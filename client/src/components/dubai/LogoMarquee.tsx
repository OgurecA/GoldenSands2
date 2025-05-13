import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Импортируем логотипы
import aldarLogo from "@/assets/aldar.png";
import damacLogo from "@/assets/damac.png";
import dubaiPropertiesLogo from "@/assets/dubaiproperties.png";
import emaarLogo from "@/assets/emaar.png";
import sobhaLogo from "@/assets/sobha.png";

// Массив с данными о логотипах
const logos = [
  { src: aldarLogo, alt: "Aldar" },
  { src: damacLogo, alt: "Damac" },
  { src: dubaiPropertiesLogo, alt: "Dubai Properties" },
  { src: emaarLogo, alt: "Emaar" },
  { src: sobhaLogo, alt: "Sobha" },
];

export default function LogoMarquee() {
  // Создаем дублированный массив для бесконечной прокрутки
  const duplicatedLogos = [...logos, ...logos];
  
  return (
    <section className="bg-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h3 className="text-2xl font-serif text-[#8B4513] mb-2">Our Partners</h3>
        <p className="text-[#8B4513]/70">We work with Dubai's top property developers</p>
      </div>
      
      <div className="relative w-full">
        <div className="logo-marquee-container overflow-hidden whitespace-nowrap">
          <motion.div
            className="inline-flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="px-8 inline-block">
                <img 
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 md:h-20 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}