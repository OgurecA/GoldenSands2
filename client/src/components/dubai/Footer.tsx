import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#FCF7E5] border-t border-[#8B4513]/10 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-start pl-8 md:pl-16">
        <div className="mb-3">
          <a href="#" className="text-[#8B4513] hover:text-[#6b3209] transition-colors">
            {t('footer', 'homepage')}
          </a>
        </div>
        
        <div className="text-sm text-[#8B4513]/70 mb-8">
          © {currentYear} {t('footer', 'rights')}
        </div>
        
        <div className="mt-2">
          <h4 className="font-serif text-[#8B4513] text-lg mb-3">Contact Us</h4>
          <ul className="text-[#8B4513]/80 text-sm space-y-2">
            <li>Telegram +757467482</li>
            <li>WhatsApp +854767843</li>
            <li>Email contact@dubailiving.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}