import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[hsl(var(--dubai-cream))] to-[hsl(var(--dubai-cream-darker))] border-t border-[hsla(var(--dubai-brown)/0.1)] py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center relative">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 pattern-dots opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 pattern-dots opacity-10"></div>
        <div className="mb-6">
          <a href="#" className="text-[hsl(var(--dubai-brown))] hover:text-[hsl(var(--dubai-accent))] transition-colors">
            Homepage
          </a>
        </div>
        
        <div className="flex space-x-6 mb-6">
          <a href="#" className="text-[hsl(var(--dubai-brown))] hover:text-[hsl(var(--dubai-accent))] transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-[hsl(var(--dubai-brown))] hover:text-[hsl(var(--dubai-accent))] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-[hsl(var(--dubai-brown))] hover:text-[hsl(var(--dubai-accent))] transition-colors">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-[hsl(var(--dubai-brown))] hover:text-[hsl(var(--dubai-accent))] transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
        
        <div className="text-sm text-[hsla(var(--dubai-brown)/0.6)]">
          © {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
}