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
        <h1 className="text-[#4A2500] text-5xl md:text-7xl font-serif mb-6 text-shadow-sm">
          {t('hero', 'title')}
        </h1>
        
        <p className="text-[#4A2500] text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-shadow-sm">
          {t('hero', 'subtitle')}
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button 
            className="bg-[#4A2500] text-white hover:bg-[#6b3209] px-8 py-6 text-lg rounded-md"
            onClick={() => {
              window.location.href = "mailto:contact@dubailiving.com?subject=Dubai%20Living%20Inquiry&body=Здравствуйте,%20я%20хотел%20бы%20узнать%20больше%20о%20ваших%20услугах...";
            }}
          >
            {t('hero', 'ctaButton')}
          </Button>
        </motion.div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-[#4A2500] font-medium text-shadow-sm">{t('hero', 'relocationServices')}</div>
          <div className="h-4 w-px bg-[#4A2500] hidden md:block" />
          <div className="text-[#4A2500] font-medium text-shadow-sm">{t('hero', 'expertGuidance')}</div>
        </div>
        
{/* Отзыв удален по просьбе пользователя */}
      </motion.div>
    </section>
  );
}