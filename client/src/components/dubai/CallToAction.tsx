import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ctaBackground from '@/assets/cta-background.png';

export default function CallToAction() {
  return (
    <section className="relative py-24 px-4">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${ctaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 pattern-dots opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 pattern-dots opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8F0C6]/90 backdrop-blur-sm rounded-xl p-12 text-center border border-[#8B4513]/10 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#8B4513] mb-8">
            Start Your Dubai Journey Today.
          </h2>
          
          <Button 
            className="bg-[#8B4513] text-white hover:bg-[#6b3209] px-8 py-6 text-lg rounded-md"
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}