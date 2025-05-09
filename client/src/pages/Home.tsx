import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function Home() {
  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        
        if (href?.startsWith('#')) {
          e.preventDefault();
          const targetId = href;
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjust for header height
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return (
    <>
      <Helmet>
        <title>CompanyName - Профессиональные бизнес-решения</title>
        <meta name="description" content="Профессиональные бизнес-решения для вашей компании. Консалтинг, разработка, маркетинг и финансовые услуги. Свяжитесь с нами для роста вашего бизнеса." />
        <meta property="og:title" content="CompanyName - Профессиональные бизнес-решения" />
        <meta property="og:description" content="Мы помогаем компаниям расти и развиваться, предоставляя качественные услуги и индивидуальный подход к каждому клиенту." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://companyname.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
      </Helmet>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
