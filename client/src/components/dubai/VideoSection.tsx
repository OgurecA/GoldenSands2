import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import dubaiVideo from '@/assets/dubai-video.mp4';
import videoBackground from '@/assets/new-hero-background.png';
import { useLanguage } from "@/lib/LanguageContext";

export default function VideoSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        // Many browsers prevent autoplay with sound
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(e => 
            console.error("Muted autoplay also failed:", e)
          );
        }
      });
    }
  }, []);

  return (
    <section className="relative py-16 px-4">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${videoBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#8B4513] mb-4 text-shadow-sm">
            {t('video', 'title')}
          </h2>
          <p className="text-xl text-[#8B4513] max-w-2xl mx-auto text-shadow-sm">
            {t('video', 'description')}
          </p>
        </motion.div>
      
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <div className="relative pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
            <video 
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              preload="auto"
              poster="https://images.unsplash.com/photo-1546412414-e1885e51148b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            >
              <source src={dubaiVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}