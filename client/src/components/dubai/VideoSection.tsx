import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import dubaiVideo from '@/assets/dubai-video.mp4';
import videoBackground from '@/assets/VideoReplace.png';
import { useLanguage } from "@/lib/LanguageContext";

interface VideoSectionProps {
  noBackground?: boolean;
}

export default function VideoSection({ noBackground = false }: VideoSectionProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // This is just a safety net in case HTML5 autoplay doesn't work
    // Most browsers now support autoplay when the video is muted
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        // Some older browsers might still need this explicit play call
      });
    }
  }, []);

  return (
    <section className="relative py-20 mt-[-80px] px-4">
      {!noBackground && (
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `url(${videoBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      
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
          <div className="relative pb-[56.25%] h-0 bg-black"> {/* 16:9 aspect ratio */}
            <video 
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              preload="auto"
              poster={videoBackground}
              playsInline
              autoPlay
              muted
              loop
            >
              <source src={dubaiVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Subtle overlay for better text visibility and to make video less prominent */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}