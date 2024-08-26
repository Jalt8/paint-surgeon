'use client'

import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-50 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Interior Painting",
            description: "Transform your living space with our high-quality interior painting services.",
            icon: "🏠",
          },
          {
            title: "Exterior Painting",
            description: "Enhance your property's curb appeal and protection with our professional exterior painting.",
            icon: "🏡",
          },
          {
            title: "Commercial Painting",
            description: "Boost your business environment with our reliable and efficient commercial painting services.",
            icon: "🏢",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <span className="text-5xl mb-4">{service.icon}</span>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
            <a href="/services" className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition duration-300 ease-in-out">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Services;