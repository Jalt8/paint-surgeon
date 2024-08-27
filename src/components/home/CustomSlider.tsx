"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { CldImage } from 'next-cloudinary';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: "PaintSurgeon/1_rpvzhk",
    title: "Exterior Painting",
    description: "Professional exterior painting to enhance curb appeal and protect your property.",
    link1: { href: "/services/exterior", text: "Learn More" },
    link2: { href: "/contact", text: "Contact Us" }
  },
  {
    image: "PaintSurgeon/2_hfucd6",
    title: "Interior Painting",
    description: "High-quality interior painting services for homes and businesses.",
    link1: { href: "/services/interior", text: "Learn More" },
    link2: { href: "/contact", text: "Contact Us" }
  },
  {
    image: "PaintSurgeon/3_sbgwuq",
    title: "Commercial Painting",
    description: "Reliable and efficient painting services for commercial properties.",
    link1: { href: "/services/commercial", text: "Learn More" },
    link2: { href: "/contact", text: "Contact Us" }
  }
];

const CustomSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (loading) {
    return (
      <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 left-0 w-full h-full ${
              index === currentSlide ? 'z-10' : 'z-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CldImage
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end pb-16 px-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl text-white mb-6">{slide.description}</p>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link href={slide.link1.href} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center">
                    {slide.link1.text}
                  </Link>
                  <Link href={slide.link2.href} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center">
                    {slide.link2.text}
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-full p-2 z-20"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-full p-2 z-20"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default CustomSlider;