import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const serviceLinks = [
    { text: "Бизнес-консалтинг", href: "#services" },
    { text: "Разработка ПО", href: "#services" },
    { text: "Маркетинг", href: "#services" },
    { text: "Финансовые услуги", href: "#services" },
    { text: "Веб-разработка", href: "#services" },
    { text: "HR-консалтинг", href: "#services" }
  ];
  
  const quickLinks = [
    { text: "Главная", href: "#home" },
    { text: "О нас", href: "#about" },
    { text: "Услуги", href: "#services" },
    { text: "Портфолио", href: "#portfolio" },
    { text: "Команда", href: "#team" },
    { text: "Контакты", href: "#contact" }
  ];
  
  const contactLinks = [
    { icon: <MapPin className="mt-1 mr-3 text-primary h-4 w-4" />, text: "ул. Примерная, 123, Москва, Россия, 123456" },
    { icon: <Phone className="mt-1 mr-3 text-primary h-4 w-4" />, text: "+7 (495) 123-45-67" },
    { icon: <Mail className="mt-1 mr-3 text-primary h-4 w-4" />, text: "info@company.com" },
    { icon: <Clock className="mt-1 mr-3 text-primary h-4 w-4" />, text: "Пн-Пт: 9:00 - 18:00" }
  ];
  
  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: "#" },
    { icon: <Twitter className="h-4 w-4" />, href: "#" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#" },
    { icon: <Instagram className="h-4 w-4" />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">О компании</h3>
            <p className="text-gray-400 mb-6">
              Мы предоставляем профессиональные бизнес-решения, помогая компаниям развиваться и достигать новых высот.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Услуги</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Контакты</h3>
            <ul className="space-y-3">
              {contactLinks.map((link, index) => (
                <li key={index} className="flex items-start">
                  {link.icon}
                  <span className="text-gray-400">{link.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} CompanyName. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
