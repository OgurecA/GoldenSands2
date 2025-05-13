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
  // Создаем три копии массива для гарантии непрерывности
  const triplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  
  return (
    <section className="bg-[#FCF7E5] py-14 overflow-hidden">
      <div className="relative w-full">
        <div className="logo-marquee-container overflow-hidden whitespace-nowrap">
          <motion.div
            className="inline-flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {triplicatedLogos.map((logo, index) => (
              <div key={index} className="px-10 inline-block">
                <img 
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 md:h-28 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}