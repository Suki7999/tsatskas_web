'use client';
import { useState, useEffect } from 'react';

const Banner = () => {
  const images = [
    // { src: '/black-g-banner.png', text: 'Welcome to our website!' },
    { src: '/black-g-banner-1.png', text: 'Explore amazing products!' },
    { src: '/black-g-banner-2.png', text: 'Discover our latest deals!' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next and previous slide functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={images[currentIndex].src}
          alt="Banner"
          className="w-full h-[400px] object-cover"
        />
        {/* Overlay Text on Left Side */}
        
      </div>

   
    </div>
  );
};

export default Banner;
