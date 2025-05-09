import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-[hsl(var(--dubai-cream-darker))] to-[hsl(var(--dubai-cream))] py-24 px-4">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 pattern-dots opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[hsla(var(--dubai-cream)/0.7)] to-[hsla(var(--dubai-cream)/0.9)] backdrop-blur-sm rounded-xl p-12 text-center border border-[hsla(var(--dubai-brown)/0.1)] shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[hsl(var(--dubai-brown))] mb-8">
            Start Your Dubai Journey Today.
          </h2>
          
          <Button 
            className="bg-[hsl(var(--dubai-brown))] text-white hover:bg-[hsl(var(--dubai-accent))] px-8 py-6 text-lg rounded-md"
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 pattern-dots opacity-10"></div>
      </div>
    </section>
  );
}