import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import businessImage from '@/assets/dubai-museum.png';

export default function BusinessSetupSection() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-[#FCF7E5] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2"
          >
            <img 
              src={businessImage}
              alt="Dubai Museum of the Future"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h3 className="text-3xl font-serif text-[#8B4513] mb-4">
              {t('business', 'title') || 'Business Setup'}
            </h3>
            <p className="text-lg text-[#8B4513] mb-6">
              {t('business', 'description') || 'Let us help you establish your business in Dubai. We guide you through the entire process of company formation, ensuring compliance with local regulations.'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}