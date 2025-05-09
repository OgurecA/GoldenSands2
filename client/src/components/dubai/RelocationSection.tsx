import { motion } from "framer-motion";

export default function RelocationSection() {
  return (
    <section className="bg-[#F8F0C6] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[hsl(var(--dubai-brown))] mb-6">
            Relocation Made Easy
          </h2>
          <p className="text-xl text-[hsl(var(--dubai-brown))] max-w-2xl mx-auto">
            Simplify your move with our comprehensive services.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Dubai Skyline"
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
              Visa Assistance
            </h3>
            <p className="text-lg text-[hsl(var(--dubai-brown))] mb-6">
              We streamline the visa process, ensuring a smooth transition to Dubai. Let
              us handle the paperwork for you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}