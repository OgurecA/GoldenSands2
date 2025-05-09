import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="bg-[hsl(var(--dubai-accent))] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <blockquote className="text-white text-2xl md:text-3xl font-serif italic mb-8">
            "Dubai Living made my move stress-free by assisting with
            all the paperwork and requirements."
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/women/68.jpg" 
                alt="Natalie Thompson"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-white text-left">
              <div className="font-medium">Natalie Thompson</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}