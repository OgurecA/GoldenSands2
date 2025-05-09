import { motion } from "framer-motion";

export default function BankAccountSection() {
  return (
    <section className="bg-[#FCF7E5] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Dubai Sunset Skyline"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h3 className="text-3xl font-serif text-[#8B4513] mb-4">
              Bank Account Setup
            </h3>
            <p className="text-lg text-[#8B4513] mb-6">
              Open a bank account hassle-free. We guide you through the requirements
              and help you set up your account quickly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}