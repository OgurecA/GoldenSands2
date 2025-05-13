import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#FCF7E5] border-t border-[#8B4513]/10 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-6">
          <h4 className="font-serif text-[#8B4513] text-lg mb-3 text-center">Contact Us</h4>
          <ul className="text-[#8B4513]/80 text-sm space-y-2 text-center">
            <li>Telegram +757467482</li>
            <li>WhatsApp +854767843</li>
            <li>Email contact@dubailiving.com</li>
          </ul>
        </div>
        
        <div className="mt-6 mb-3">
          <a href="#" className="text-[#8B4513] hover:text-[#6b3209] transition-colors">
            {t('footer', 'homepage')}
          </a>
        </div>
        
        <div className="text-sm text-[#8B4513]/70">
          © {currentYear} {t('footer', 'rights')}
        </div>
      </div>
    </footer>
  );
}