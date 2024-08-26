'use client'

import React, { useState } from 'react';
import '../../styles/CTA.css';

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="cta-section bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">Transform Your Space Today!</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Experience the difference with our expert painting services. Book a free, no-obligation inspection and get a personalized estimate.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="tel:0836796055"
            className="cta-btn-secondary group relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10">Book a Call</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            {isHovered && <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl animate-bounce">📞</span>}
          </a>
          <a href="/contact" className="cta-btn-main group relative overflow-hidden">
            <span className="relative z-10">Get Free Estimate</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  );
};

export default CTA;