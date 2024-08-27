'use client'

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldImage } from 'next-cloudinary';

const testimonials = [
  {
    name: "Ryan Albert",
    date: "2024-02-05",
    rating: 5,
    content: "Paint Surgeon did a fantastic job on our home. The team was punctual and efficient, leaving everything spotless. Our walls look brilliant now, really brightened up the place. Highly recommend for a reliable painting service.",
    source: "Google"
  },
  {
    name: "Megan Baillie",
    date: "2023-05-02",
    rating: 5,
    content: "Had a great experience with Paint Surgeon. The painters were professional and worked quickly. They clearly know their stuff and the results are top-notch. Will definitely use them again for our holiday home in Hermanus.",
    source: "Google"
  },
  {
    name: "Andre Cossutti",
    date: "2024-04-01",
    rating: 5,
    content: "Paint Surgeon did a thorough job on our property, both inside and out. They even handled some tricky waterproofing on our patio. Their advice on colours for our Cape Dutch style home was spot on. Price was fair for the quality of work.",
    source: "Google"
  },
  {
    name: "Murray Williams",
    date: "2022-09-01",
    rating: 5,
    content: "Very pleased with Paint Surgeon&apos;s work on my home. The team was professional and careful with our antique furniture. The fresh paint has really improved the look of our Victorian-style house. Appreciate their attention to detail.",
    source: "Google"
  },
  {
    name: "Jacques van der Merwe",
    date: "2024-02-27",
    rating: 5,
    content: "Paint Surgeon did an excellent job refreshing the exterior of our house. The owner was attentive to our needs, especially in matching the paint to our farm&apos;s aesthetic. They used quality materials and the finish looks great.",
    source: "Google"
  },
  {
    name: "Byron Williams",
    date: "2023-05-17",
    rating: 5,
    content: "As a guesthouse owner, I needed a reliable painting service. Paint Surgeon delivered great results. They were on time, efficient, and left the property looking fresh. It&apos;s made a real difference to our guesthouse&apos;s appearance, and our guests have noticed!",
    source: "Google"
  }
];

interface Testimonial {
    name: string;
    date: string;
    rating: number;
    content: string;
    source: string;
  }

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const getRandomColor = () => {
  const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const initials = getInitials(testimonial.name);
  const bgColor = getRandomColor();

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${bgColor} flex items-center justify-center text-white font-bold text-sm sm:text-lg`}>
          {initials}
        </div>
        <div className="ml-3 sm:ml-4">
          <h4 className="text-base sm:text-lg font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{testimonial.date}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
          />
        ))}
      </div>
      <p className="text-sm sm:text-base text-gray-700 mb-4 flex-grow line-clamp-4">{testimonial.content}</p>
      <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-auto">
        <span className="mr-2">Source:</span>
        <CldImage width={30} height={15} src="paint-surgeon/google" alt={testimonial.source} className="h-6 sm:h-8" />
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        nextTestimonials();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoplay, startIndex]);

  const nextTestimonials = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonials = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800">What Our Clients Say</h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our painting services.</p>
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
              {[0, 1, 2].map((offset) => {
                const index = (startIndex + offset) % testimonials.length;
                return <TestimonialCard key={`${index}-${startIndex}`} testimonial={testimonials[index]} />;
              })}
            </div>
          </AnimatePresence>
          <button 
            onClick={() => { prevTestimonials(); setAutoplay(false); }}
            className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={() => { nextTestimonials(); setAutoplay(false); }}
            className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;