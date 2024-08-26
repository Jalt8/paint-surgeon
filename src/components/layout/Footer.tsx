import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-white p-1 rounded-full shadow-md">
                <Image src="/paint-surgeon-logo2.png" alt="Paint Surgeon Logo" width={48} height={48} className="transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <span className="text-2xl font-bold text-white drop-shadow-md">Paint Surgeon</span>
            </Link>
            <p className="text-sm text-red-100">
              Transforming spaces with precision and expertise since 2021.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-red-100 hover:text-white transition duration-150 ease-in-out">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Interior Painting', 'Exterior Painting', 'Commercial Painting', 'Residential Painting', 'Color Consultation'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-red-100 hover:text-white transition duration-150 ease-in-out">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@paintsurgeon.co.za" className="text-red-100 hover:text-white transition duration-150 ease-in-out">
                  info@paintsurgeon.co.za
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:0836796055" className="text-red-100 hover:text-white transition duration-150 ease-in-out">
                  083 679 6055
                </a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-red-100 hover:text-white transition duration-150 ease-in-out">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-red-100 hover:text-white transition duration-150 ease-in-out">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-red-100 hover:text-white transition duration-150 ease-in-out">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-red-500 text-center text-sm text-red-200">
          <p>&copy; {new Date().getFullYear()} Paint Surgeon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;