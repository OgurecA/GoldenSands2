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
                href="tg://resolve?phone=757467482" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4A2500] hover:underline transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  // Пробуем открыть в приложении Telegram
                  window.open("tg://resolve?phone=757467482");
                  // Запасной вариант - открываем веб-версию с правильной ссылкой на чат
                  setTimeout(() => {
                    window.open("https://t.me/+757467482", "_blank");
                  }, 300);
                }}
              >
                Telegram +757467482
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/854767843" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4A2500] hover:underline transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://wa.me/854767843", "_blank");
                }}
              >
                WhatsApp +854767843
              </a>
            </li>
            <li>
              <a 
                href="mailto:contact@dubailiving.com" 
                className="hover:text-[#4A2500] hover:underline transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("mailto:contact@dubailiving.com", "_blank");
                }}
              >
                Email contact@dubailiving.com
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