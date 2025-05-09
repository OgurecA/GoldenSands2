import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[hsla(36,33%,97%,0.8)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between"
        >
          <a href="#" className="text-2xl font-serif font-semibold text-[#8B4513]">
            {t('header', 'title')}
          </a>
          
          <div className="flex items-center space-x-4">
            <div className="flex rounded-md overflow-hidden border border-[#8B4513]/20">
              <button 
                onClick={() => setLanguage('eng')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  language === 'eng' 
                    ? 'bg-[#8B4513] text-white' 
                    : 'bg-[#FCF7E5] text-[#8B4513] hover:bg-[#F8F0C6]'
                }`}
              >
                ENG
              </button>
              <button 
                onClick={() => setLanguage('rus')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  language === 'rus' 
                    ? 'bg-[#8B4513] text-white' 
                    : 'bg-[#FCF7E5] text-[#8B4513] hover:bg-[#F8F0C6]'
                }`}
              >
                RUS
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}