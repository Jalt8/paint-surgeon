'use client'

import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400">
      <motion.section 
        className="pt-32 pb-24 text-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="container mx-auto px-4 relative z-10">
          <motion.h1 className="text-5xl font-bold mb-6 text-white" variants={fadeIn}>About Us</motion.h1>
          <motion.p className="text-xl text-blue-100 max-w-2xl mx-auto" variants={fadeIn}>
            Discover our story, values, and the passionate team behind our success.
          </motion.p>
        </motion.div>
      </motion.section>
      
      <motion.section 
        className="py-16 bg-gray-100"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="container mx-auto px-6">
          <motion.div className="mb-10" variants={fadeIn}>
            <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">Our Story</h2>
            <p className="text-gray-700 text-lg mb-4">
              Established in 2021 in Gauteng, South Africa, Paint Surgeon was born out of a desire to deliver exceptional painting services. Our journey began with a small yet dedicated team, and today, we are proud to be recognized for our meticulous attention to detail and unwavering commitment to customer satisfaction.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              What started as a small venture has grown into a trusted name in the industry. Our team&apos;s expertise and passion are evident in every project we undertake, from cozy homes to expansive commercial properties. We believe in the transformative power of paint and strive to bring your vision to life with every brushstroke.
            </p>
          </motion.div>
          
          <motion.div className="mb-10" variants={fadeIn}>
            <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">Our Values</h2>
            <motion.div 
              className="flex flex-wrap justify-center"
              variants={staggerChildren}
            >
              {['Quality', 'Integrity', 'Customer Satisfaction', 'Innovation'].map((value, index) => (
                <motion.div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4" variants={fadeIn}>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-4 text-blue-600">{value}</h3>
                    <p className="text-gray-700">We believe in {value.toLowerCase()} as a core principle of our business.</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div className="text-center" variants={fadeIn}>
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Team</h2>
            <p className="text-gray-700 text-lg mb-4">
              Our team is our greatest asset. Each member brings unique skills and a dedication to excellence. We work together to deliver outstanding results and create beautiful, lasting finishes that our clients love.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              We invite you to get to know us better and see why so many have trusted Paint Surgeon with their painting needs. Whether you&apos;re looking to refresh your home&apos;s interior or enhance your property&apos;s curb appeal, we&apos;re here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;