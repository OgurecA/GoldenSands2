import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionTitle from "@/components/ui/section-title";
import { Star, StarHalf } from "lucide-react";

interface TestimonialProps {
  rating: number;
  text: string;
  author: {
    name: string;
    position: string;
    image: string;
  };
  index: number;
}

const Testimonial = ({ rating, text, author, index }: TestimonialProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className="bg-white rounded-xl shadow-md p-8"
    >
      <div className="flex items-center mb-6">
        <div className="text-yellow-400 flex">
          {renderStars()}
        </div>
      </div>
      <p className="text-gray-700 mb-6">
        {text}
      </p>
      <div className="flex items-center">
        <img 
          src={author.image} 
          alt={author.name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <div className="font-semibold">{author.name}</div>
          <div className="text-sm text-gray-600">{author.position}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "\"Отличная команда профессионалов, которая помогла нам трансформировать бизнес-процессы и увеличить эффективность. Рекомендую всем, кто ищет надежного партнера для развития бизнеса.\"",
      author: {
        name: "Иван Соколов",
        position: "CEO, Technology Solutions",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
      }
    },
    {
      rating: 5,
      text: "\"Мы работаем с этой компанией уже 3 года, и я могу с уверенностью сказать, что их экспертиза и профессионализм помогли нам достичь значительного роста. Отличный сервис и индивидуальный подход.\"",
      author: {
        name: "Мария Волкова",
        position: "Директор по маркетингу, Retail Group",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
      }
    },
    {
      rating: 4.5,
      text: "\"Команда проявила гибкость и профессионализм при разработке нашего корпоративного сайта. Результат превзошел наши ожидания, и мы получили множество положительных отзывов от клиентов.\"",
      author: {
        name: "Дмитрий Козлов",
        position: "Владелец, Construction LLC",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Отзывы клиентов"
          description="Что говорят о нас клиенты, с которыми мы имели честь работать"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              author={testimonial.author}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
