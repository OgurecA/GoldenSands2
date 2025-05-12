import React from 'react';
import DubaiHero from './Hero';
import VideoSection from './VideoSection';
import heroBackground from '@/assets/new-hero-background.png';

export default function TopSections() {
  return (
    <div className="relative">
      {/* Common background for both sections */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // This makes the background fixed when scrolling
        }}
      />
      
      {/* Optional decorative element at the bottom for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FCF7E5] to-transparent z-[1]"></div>
      
      {/* Hero section without its own background */}
      <div className="relative z-10">
        <DubaiHero noBackground={true} />
      </div>
      
      {/* Video section without its own background */}
      <div className="relative z-10">
        <VideoSection noBackground={true} />
      </div>
    </div>
  );
}