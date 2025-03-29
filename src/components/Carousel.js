import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const images = [
  '/banner12.png',
  '/banner12.png',
  '/banner12.png',
  '/banner12.png',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // nextImage функц: Зураг солих
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Автоматаар зураг солигдох хэсэг
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage(); // 3 секунд тутамд зураг солигдоно
//     }, 3000); // 3000мс буюу 3 секунд

//     // Компонтент тайлах үед интервалыг цуцлах
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden mx-2 rounded-2xl">
        {images.map((image, index) => (
          <Transition
            key={index}
            show={index === currentIndex}
            // enter="transition duration-500 ease-in-out"
            // enterFrom="transform opacity-0 scale-95"
            // enterTo="transform opacity-100 scale-100"
            // leave="transition duration-500 ease-in-out"
            // leaveFrom="transform opacity-100 scale-100"
            // leaveTo="transform opacity-0 scale-95"
          >
            <img
              src={image}
              alt={`carousel-image-${index}`}
              className="w-full h-[256px] object-cover"
            />
          </Transition>
        ))}
      </div>
    </div>
  );
}