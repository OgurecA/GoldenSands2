import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <motion.div 
      variants={fadeIn('up', 'tween', 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="w-20 h-1 bg-primary mb-8"></div>
      {description && (
        <p className="text-xl text-gray-700 text-center max-w-3xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
