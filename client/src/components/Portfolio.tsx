import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionTitle from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

interface PortfolioItemProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const PortfolioItem = ({ image, title, description, index }: PortfolioItemProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className="overflow-hidden rounded-xl shadow-md group"
    >
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-primary font-medium hover:underline">Подробнее</a>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Корпоративный ребрендинг",
      description: "Комплексный ребрендинг финансовой компании, включая стратегию, айдентику и коммуникации."
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Разработка CRM-системы",
      description: "Создание и внедрение индивидуальной CRM-системы для логистической компании."
    },
    {
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Веб-платформа для образования",
      description: "Разработка образовательной платформы с интерактивными элементами и системой управления курсами."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Аналитическая платформа",
      description: "Создание системы бизнес-аналитики для сети розничных магазинов с интерактивными дашбордами."
    },
    {
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Маркетинговая кампания",
      description: "Разработка и реализация комплексной маркетинговой кампании для запуска нового продукта."
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Финансовая оптимизация",
      description: "Проект по оптимизации финансовых процессов и сокращению операционных расходов производственной компании."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Наше портфолио"
          description="Ознакомьтесь с нашими успешными проектами и кейсами"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 'tween', 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            asChild
            className="bg-primary text-white hover:bg-secondary transition duration-300"
          >
            <a href="#contact">Обсудить ваш проект</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
