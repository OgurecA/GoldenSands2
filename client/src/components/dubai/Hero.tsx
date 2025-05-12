import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBackground from '@/assets/new-hero-background.png';
import { useLanguage } from "@/lib/LanguageContext";

interface DubaiHeroProps {
  noBackground?: boolean;
}

export default function DubaiHero({ noBackground = false }: DubaiHeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4">
      {!noBackground && (
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <h1 className="text-[#8B4513] text-5xl md:text-7xl font-serif mb-6 text-shadow-sm">
          {t('hero', 'title')}
        </h1>
        
        <p className="text-[#8B4513] text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-shadow-sm">
          {t('hero', 'subtitle')}
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button 
            className="bg-[#8B4513] text-white hover:bg-[#6b3209] px-8 py-6 text-lg rounded-md"
            asChild
          >
            <a href="#contact">{t('hero', 'ctaButton')}</a>
          </Button>
        </motion.div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-[#8B4513] font-medium text-shadow-sm">{t('hero', 'relocationServices')}</div>
          <div className="h-4 w-px bg-[#8B4513] hidden md:block" />
          <div className="text-[#8B4513] font-medium text-shadow-sm">{t('hero', 'expertGuidance')}</div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col items-center"
        >
          <p className="text-[#8B4513] italic text-lg mb-4 text-shadow-sm">
            {t('hero', 'testimonialQuote')}
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt={t('hero', 'testimonialAuthor')} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[#8B4513] font-medium text-shadow-sm">{t('hero', 'testimonialAuthor')}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}