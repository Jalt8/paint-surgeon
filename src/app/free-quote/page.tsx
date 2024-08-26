'use client'

import React from 'react';
import ContactForm from '../../components/home/ContactForm';
import { motion } from 'framer-motion';

const FreeQuote = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400">
      <section className="pt-32 pb-24 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">Free Quote</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with us for a free quote or to learn more about our services.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="mt-4 text-blue-100">Email: <a href="mailto:info@paintsurgeon.co.za" className="underline">info@paintsurgeon.co.za</a></p>
            <p className="mt-2 text-blue-100">Phone: <a href="tel:0836796055" className="underline">083 679 6055</a></p>
          </motion.div>
        </motion.div>
      </section>
      <ContactForm />
    </div>
  );
};

export default FreeQuote;