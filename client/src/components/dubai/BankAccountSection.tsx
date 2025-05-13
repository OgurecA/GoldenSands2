import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import palmImage from '@/assets/palm-dubai.png';

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
              src={palmImage}
              alt="Palm Jumeirah Dubai Aerial View"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}