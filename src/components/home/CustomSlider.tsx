"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    image: "/1.jpg",
    title: "Exterior Painting",
    description: "Professional exterior painting to enhance curb appeal and protect your property.",
    link1: { href: "/services/exterior", text: "Learn More" },
    link2: { href: "/contact", text: "Contact Us" }
  },
  {
    image: "/2.jpg",
    title: "Interior Painting",
    description: "High-quality interior painting services for homes and businesses.",
    link1: { href: "/services/interior", text: "Learn More" },
    link2: { href: "/contact", text: "Contact Us" }
  },
  {
    image: "/3.jpg",
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
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time
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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
            <div className="text-white max-w-2xl px-8 md:px-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href={slide.link1.href} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-center sm:text-left">
                  {slide.link1.text}
                </Link>
                <Link href={slide.link2.href} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-center sm:text-left">
                  {slide.link2.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-full p-2"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-full p-2"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default CustomSlider;