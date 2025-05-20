import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#FCF7E5] border-t border-[#4A2500]/20 py-14 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-8">
          <h4 className="font-serif text-[#4A2500] text-2xl mb-4 text-center">Contact Us</h4>
          <ul className="text-[#4A2500]/90 text-lg md:text-xl space-y-3 text-center">
            <li>
              <a 
                href="https://t.me/+757467482" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4A2500] hover:underline transition-colors cursor-pointer"
              >
                Telegram +0000000
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/854767843" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4A2500] hover:underline transition-colors cursor-pointer"
              >
                WhatsApp +0000000
              </a>
            </li>
            <li>
              <a 
                href="body=Hello,%0A%0AI%E2%80%99m%20interested%20in%20your%20services%20related%20to%20visa%20assistance,%20bank%20account%20setup,%20and%20relocation%20to%20Dubai.%20I%20would%20like%20to%20receive%20more%20detailed%20information.%0A%0AThank%20you!" 
                className="hover:text-[#4A2500] hover:underline transition-colors cursor-pointer"
              >
                Email contact@goldensands.website
              </a>
            </li>
          </ul>
        </div>
        
        <div className="mt-8 mb-4">
          <a href="#" className="text-[#4A2500] text-xl hover:text-[#6b3209] transition-colors font-medium">
            {t('footer', 'homepage')}
          </a>
        </div>
        
        <div className="text-base text-[#4A2500]/70">
          © {currentYear} {t('footer', 'rights')}
        </div>
      </div>
    </footer>
  );
}