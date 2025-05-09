import { motion } from "framer-motion";

export default function LoanSection() {
  return (
    <section className="bg-[hsl(var(--dubai-cream))] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Dubai Night Skyline"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h3 className="text-3xl font-serif text-[hsl(var(--dubai-brown))] mb-4">
              Loan Support
            </h3>
            <p className="text-lg text-[hsl(var(--dubai-brown))] mb-6">
              Need financial assistance? We provide guidance on loans to help you
              secure the funds you need for your new life in Dubai.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}