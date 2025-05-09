import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[hsla(var(--dubai-cream)/0.8)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center"
        >
          <a href="#" className="text-2xl font-serif font-semibold text-[hsl(var(--dubai-brown))]">
            Dubai Living
          </a>
        </motion.div>
      </div>
    </header>
  );
}