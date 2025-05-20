import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ctaBackground from '@/assets/cta-background.png';
import { useLanguage } from "@/lib/LanguageContext";

export default function CallToAction() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-24 px-4">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${ctaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 pattern-dots opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 pattern-dots opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FCF7E5]/90 backdrop-blur-sm rounded-xl p-16 text-center border border-[#4A2500]/20 shadow-lg"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A2500] mb-8">
            {t('cta', 'title')}
          </h2>
          
          <Button 
            className="bg-[#4A2500] text-white hover:bg-[#6b3209] px-10 py-7 text-xl rounded-md"
            onClick={(e) => {
              e.preventDefault();
              window.open("body=Hello,%0A%0AI%E2%80%99m%20interested%20in%20your%20services%20related%20to%20visa%20assistance,%20bank%20account%20setup,%20and%20relocation%20to%20Dubai.%20I%20would%20like%20to%20receive%20more%20detailed%20information.%0A%0AThank%20you!", "_blank");
            }}
          >
            {t('cta', 'button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}