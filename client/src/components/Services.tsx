import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionTitle from "@/components/ui/section-title";
import { 
  LineChart, 
  Code, 
  Megaphone, 
  DollarSign, 
  Globe, 
  Users, 
  ArrowRight 
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', delay * 0.2, 0.75)}
      className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <a href="#contact" className="text-primary font-medium inline-flex items-center hover:underline">
        Подробнее <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      icon: <LineChart className="text-primary text-xl" />,
      title: "Бизнес-консалтинг",
      description: "Профессиональные консультации по стратегическому развитию и оптимизации бизнес-процессов."
    },
    {
      icon: <Code className="text-primary text-xl" />,
      title: "Разработка ПО",
      description: "Создание индивидуальных программных решений под ваши бизнес-задачи и потребности."
    },
    {
      icon: <Megaphone className="text-primary text-xl" />,
      title: "Маркетинг",
      description: "Разработка и реализация эффективных маркетинговых стратегий для продвижения вашего бизнеса."
    },
    {
      icon: <DollarSign className="text-primary text-xl" />,
      title: "Финансовые услуги",
      description: "Комплексные финансовые решения, включая бухгалтерию, аудит и финансовое планирование."
    },
    {
      icon: <Globe className="text-primary text-xl" />,
      title: "Веб-разработка",
      description: "Создание современных веб-сайтов и приложений с учетом ваших потребностей и целевой аудитории."
    },
    {
      icon: <Users className="text-primary text-xl" />,
      title: "HR-консалтинг",
      description: "Услуги по управлению персоналом, подбору кадров и созданию эффективной HR-системы."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Наши услуги"
          description="Мы предлагаем широкий спектр профессиональных услуг для вашего бизнеса"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
