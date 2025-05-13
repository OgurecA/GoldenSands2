import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import dubaiVideo from '@/assets/dubai-video.mp4';
import videoBackground from '@/assets/new-hero-background.png';
import { useLanguage } from "@/lib/LanguageContext";

interface VideoSectionProps {
  noBackground?: boolean;
}

export default function VideoSection({ noBackground = false }: VideoSectionProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play the video when component mounts
    // Most browsers require muted videos for autoplay
    if (videoRef.current) {
      // Set muted by default for better autoplay experience
      videoRef.current.muted = true;
      
      // Try to play the video
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video autoplay failed:", error);
        });
      }
      
      // Add click handler to unmute when user interacts
      const handleClick = () => {
        if (videoRef.current) {
          videoRef.current.muted = false;
        }
      };
      
      const videoElement = videoRef.current;
      videoElement.addEventListener('click', handleClick);
      
      return () => {
        videoElement.removeEventListener('click', handleClick);
      };
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
          <div className="relative pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
            <video 
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              preload="auto"
              poster={videoBackground}
              playsInline
            >
              <source src={dubaiVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-lg text-sm pointer-events-none opacity-80">
              {t('video', 'clickToUnmute') || 'Click to unmute'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}