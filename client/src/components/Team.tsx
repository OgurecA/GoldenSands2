import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionTitle from "@/components/ui/section-title";
import { Linkedin, Twitter, Mail, Github, Instagram } from "lucide-react";

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  description: string;
  socialLinks: {
    icon: React.ReactNode;
    url: string;
  }[];
  index: number;
}

const TeamMember = ({ image, name, position, description, socialLinks, index }: TeamMemberProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary mb-3">{position}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="text-gray-600 hover:text-primary transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Анна Смирнова",
      position: "Генеральный директор",
      description: "15+ лет опыта в управлении бизнесом и стратегическом развитии компаний.",
      socialLinks: [
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Mail size={18} />, url: "#" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Михаил Петров",
      position: "Технический директор",
      description: "12+ лет в разработке программного обеспечения и управлении IT-проектами.",
      socialLinks: [
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Github size={18} />, url: "#" },
        { icon: <Mail size={18} />, url: "#" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Екатерина Иванова",
      position: "Директор по маркетингу",
      description: "10+ лет опыта в разработке и реализации маркетинговых стратегий.",
      socialLinks: [
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Instagram size={18} />, url: "#" },
        { icon: <Mail size={18} />, url: "#" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      name: "Алексей Кузнецов",
      position: "Финансовый директор",
      description: "14+ лет опыта в финансовом управлении и стратегическом планировании.",
      socialLinks: [
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Mail size={18} />, url: "#" }
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Наша команда"
          description="Познакомьтесь с нашими профессионалами, которые делают ваши проекты успешными"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              socialLinks={member.socialLinks}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
