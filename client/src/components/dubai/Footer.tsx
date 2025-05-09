import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#FCF7E5] border-t border-[#8B4513]/10 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-6">
          <a href="#" className="text-[#8B4513] hover:text-[#6b3209] transition-colors">
            Homepage
          </a>
        </div>
        
        <div className="flex space-x-6 mb-6">
          <a href="#" className="text-[#8B4513] hover:text-[#6b3209] transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-[#8B4513] hover:text-[#6b3209] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-[#8B4513] hover:text-[#6b3209] transition-colors">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-[#8B4513] hover:text-[#6b3209] transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
        
        <div className="text-sm text-[#8B4513]/70">
          © {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
}