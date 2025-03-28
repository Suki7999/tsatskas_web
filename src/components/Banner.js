'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const Banner = () => {
  const images = [
    { src: '/black-g-banner-1.png', text: '' },
    { src: '/black-g-banner-2.png', text: '' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next and previous slide functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);  // nextSlide-ийг хамааралтай хувьсагчид оруулсан

  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="relative">
        <Image
          src={images[currentIndex].src}
          alt="Banner"
          height={400}
          width={400}
          className="w-full h-[400px] object-cover"
        />
        {/* Overlay Text on Left Side */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold px-4">
          {images[currentIndex].text}
        </div>
      </div>
    </div>
  );
};

export default Banner;
