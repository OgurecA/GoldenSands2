import { useEffect, useRef } from "react";

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
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;
    
    // Клонируем логотипы для обеспечения непрерывной анимации
    const originalItems = Array.from(marqueeElement.children);
    originalItems.forEach(item => {
      const clone = item.cloneNode(true);
      marqueeElement.appendChild(clone);
    });
    
    // CSS анимация для прокрутки
    const keyframes = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    
    // Добавляем стили
    const styleSheet = document.createElement("style");
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);
    
    marqueeElement.style.animation = "scroll 30s linear infinite";
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  return (
    <section className="bg-[#FCF7E5] py-14 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div 
          ref={marqueeRef}
          className="flex items-center whitespace-nowrap"
          style={{ minWidth: "100%" }}
        >
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="inline-flex px-10">
              <img 
                src={logo.src}
                alt={logo.alt}
                className="h-24 md:h-28 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}