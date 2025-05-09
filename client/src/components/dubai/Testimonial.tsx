import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Testimonial() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-[#8B4513] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <blockquote className="text-white text-2xl md:text-3xl font-serif italic mb-8">
            "{t('testimonial', 'quote')}"
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/women/68.jpg" 
                alt={t('testimonial', 'author')}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-white text-left">
              <div className="font-medium">{t('testimonial', 'author')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}