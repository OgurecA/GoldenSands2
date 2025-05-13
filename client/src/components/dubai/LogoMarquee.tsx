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

// Стили для анимации
const logoMarqueeStyles = `
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.marquee {
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: slide 30s linear infinite;
}
`;

export default function LogoMarquee() {
  return (
    <section className="bg-[#FCF7E5] py-12 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: logoMarqueeStyles }} />
      
      <div className="marquee">
        <div className="marquee-content">
          {/* Первый набор логотипов */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="inline-block px-10">
              <img 
                src={logo.src}
                alt={logo.alt}
                className="h-24 md:h-28 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
          
          {/* Второй набор логотипов (дублирование для непрерывности) */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="inline-block px-10">
              <img 
                src={logo.src}
                alt={logo.alt}
                className="h-24 md:h-28 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
          
          {/* Третий набор логотипов (дополнительное дублирование) */}
          {logos.map((logo, index) => (
            <div key={`third-${index}`} className="inline-block px-10">
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