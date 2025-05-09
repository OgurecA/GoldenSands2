import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function DubaiHero() {
  return (
    <section className="bg-gradient-to-b from-[hsl(var(--dubai-cream))] to-[hsl(var(--dubai-cream-darker))] min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-[hsl(var(--dubai-brown))] text-5xl md:text-7xl font-serif mb-6">
          Explore Dubai Living Services
        </h1>
        
        <p className="text-[hsl(var(--dubai-brown))] text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Your ultimate guide to living in Dubai. Get assistance with visas,
          bank accounts, loans, and more to make your move stress-free.
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button 
            className="bg-[hsl(var(--dubai-brown))] text-white hover:bg-[hsl(var(--dubai-accent))] px-8 py-6 text-lg rounded-md"
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="#F59E0B" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="text-[hsl(var(--dubai-brown))] font-medium">Relocation Services</div>
          <div className="h-4 w-px bg-[hsl(var(--dubai-brown))] hidden md:block" />
          <div className="text-[hsl(var(--dubai-brown))] font-medium">Expert Guidance</div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col items-center"
        >
          <p className="text-[hsl(var(--dubai-brown))] italic text-lg mb-4">
            "Their visa service saved me, since I didn't know anything about the visa creation process at the time."
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Mari Kulnup" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[hsl(var(--dubai-brown))] font-medium">Mari Kulnup</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}