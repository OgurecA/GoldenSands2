import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import palmImage from '@/assets/palm-dubai.png';

export default function LoanSection() {
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
              src={palmImage}
              alt="Palm Jumeirah Dubai Aerial View"
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
              {t('loan', 'title')}
            </h3>
            <p className="text-lg text-[#8B4513] mb-6">
              {t('loan', 'description')}
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8B4513]"></div>
                <p className="text-[#8B4513]">{t('loan', 'feature1')}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8B4513]"></div>
                <p className="text-[#8B4513]">{t('loan', 'feature2')}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8B4513]"></div>
                <p className="text-[#8B4513]">{t('loan', 'feature3')}</p>
              </div>
            </div>
            
            <button className="mt-8 bg-[#8B4513] hover:bg-[#724114] text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg">
              {t('loan', 'learnMore') || 'Learn More'}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}