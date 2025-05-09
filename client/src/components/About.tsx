import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionTitle from "@/components/ui/section-title";
import { CheckCircle } from "lucide-react";

export default function About() {
  const statistics = [
    { number: "10+", label: "Лет опыта" },
    { number: "250+", label: "Клиентов" },
    { number: "500+", label: "Проектов" },
    { number: "50+", label: "Экспертов" },
  ];

  const values = [
    "Профессионализм и качество в каждом проекте",
    "Инновационные подходы к решению задач",
    "Честность и прозрачность в работе с клиентами",
    "Постоянное развитие и совершенствование",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="О нашей компании"
          description="С 2010 года мы предоставляем высококачественные услуги, помогая нашим клиентам достигать бизнес-целей."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div 
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Современный офис компании" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </motion.div>
          
          <motion.div
            variants={fadeIn('left', 'tween', 0.3, 1)}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Наша миссия</h3>
            <p className="text-gray-700 mb-6">
              Мы стремимся предоставлять инновационные решения, которые помогают нашим клиентам преодолевать бизнес-вызовы и достигать устойчивого роста.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Наши ценности</h3>
            <ul className="space-y-4 mb-8">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
