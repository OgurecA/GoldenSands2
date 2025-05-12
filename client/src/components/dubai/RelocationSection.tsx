import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import burjKhalifaImage from '@/assets/burj-khalifa.png';

export default function RelocationSection() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-[#FCF7E5] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#8B4513] mb-6">
            {t('relocation', 'mainTitle')}
          </h2>
          <p className="text-xl text-[#8B4513] max-w-2xl mx-auto">
            {t('relocation', 'mainDescription')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2"
          >
            <img 
              src={burjKhalifaImage}
              alt="Burj Khalifa Dubai"
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
              {t('relocation', 'title')}
            </h3>
            <p className="text-lg text-[#8B4513] mb-6">
              {t('relocation', 'description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}