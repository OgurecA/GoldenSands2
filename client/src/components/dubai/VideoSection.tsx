import { useRef, useEffect } from 'react';
import dubaiVideo from '@/assets/dubai-video.mp4';

export default function VideoSection() {
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
    <section className="bg-gradient-to-b from-[hsl(var(--dubai-cream-darker))] to-[hsl(var(--dubai-cream))] py-10 px-4">
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
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
    </section>
  );
}