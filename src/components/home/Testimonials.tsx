'use client'

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
    content: "Very pleased with Paint Surgeon&aposs work on my home. The team was professional and careful with our antique furniture. The fresh paint has really improved the look of our Victorian-style house. Appreciate their attention to detail.",
    source: "Google"
  },
  {
    name: "Jacques van der Merwe",
    date: "2024-02-27",
    rating: 5,
    content: "Paint Surgeon did an excellent job refreshing the exterior of our house. The owner was attentive to our needs, especially in matching the paint to our farm&aposs aesthetic. They used quality materials and the finish looks great.",
    source: "Google"
  },
  {
    name: "Byron Williams",
    date: "2023-05-17",
    rating: 5,
    content: "As a guesthouse owner, I needed a reliable painting service. Paint Surgeon delivered great results. They were on time, efficient, and left the property looking fresh. It&aposs made a real difference to our guesthouse&aposs appearance, and our guests have noticed!",
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
      className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center text-white font-bold text-lg`}>
          {initials}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.date}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 line-clamp-4">{testimonial.content}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span className="mr-2">Source:</span>
        <Image width={30} height={15} src={`/google.png`} alt={testimonial.source} className="h-8" />
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
    <section className="bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">What Our Clients Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Don&apost just take our word for it. Here&aposs what our satisfied customers have to say about our painting services.</p>
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <div className="flex justify-between gap-6">
              {[0, 1, 2].map((offset) => {
                const index = (startIndex + offset) % testimonials.length;
                return <TestimonialCard key={`${index}-${startIndex}`} testimonial={testimonials[index]} />;
              })}
            </div>
          </AnimatePresence>
          <button 
            onClick={() => { prevTestimonials(); setAutoplay(false); }}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={() => { nextTestimonials(); setAutoplay(false); }}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
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