'use client'

import React from 'react';
import Services from '../../components/home/Services';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400">
      <section className="pt-32 pb-24 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We offer a wide range of professional painting services to transform your space and bring your vision to life.
          </p>
        </motion.div>
      </section>
      <Services />
    </div>
  );
};

export default ServicesPage;