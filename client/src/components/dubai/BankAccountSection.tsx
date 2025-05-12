import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import dubaiAerialImage from '@/assets/dubai-aerial.png';

export default function BankAccountSection() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-[#FCF7E5] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2"
          >
            <img 
              src={dubaiAerialImage}
              alt="Dubai Aerial View"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 lg:text-right"
          >
            <h3 className="text-3xl font-serif text-[#8B4513] mb-4">
              {t('banking', 'title')}
            </h3>
            <p className="text-lg text-[#8B4513] mb-6">
              {t('banking', 'description')}
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 lg:flex-row-reverse">
                <p className="text-[#8B4513]">{t('banking', 'feature1') || 'Access to international and local banks'}</p>
                <div className="w-2 h-2 rounded-full bg-[#8B4513]"></div>
              </div>
              <div className="flex items-center gap-3 lg:flex-row-reverse">
                <p className="text-[#8B4513]">{t('banking', 'feature2') || 'Simplified account opening process with our assistance'}</p>
                <div className="w-2 h-2 rounded-full bg-[#8B4513]"></div>
              </div>
              <div className="flex items-center gap-3 lg:flex-row-reverse">
                <p className="text-[#8B4513]">{t('banking', 'feature3') || 'Various account options for personal and business needs'}</p>
                <div className="w-2 h-2 rounded-full bg-[#8B4513]"></div>
              </div>
            </div>
            
            <div className="mt-8 flex lg:justify-end">
              <button className="bg-[#8B4513] hover:bg-[#724114] text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-lg">
                {t('banking', 'learnMore') || 'Learn More'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}