import React from 'react';
import { Scissors, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <Scissors size={24} className="text-secondary" />
              <div className="ml-2">
                <span className="block text-xl font-bold font-italiana">Fama</span>
                <span className="text-xs tracking-wider text-gray-400">BARBER & BEAUTY</span>
              </div>
            </div>
            <p className="mb-4 text-gray-400">
              Premium barber services with a focus on quality, precision, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-white">Book Appointment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Classic Cuts</li>
              <li className="text-gray-400">Beard Trims</li>
              <li className="text-gray-400">Hot Towel Shaves</li>
              <li className="text-gray-400">Hair Styling</li>
              <li className="text-gray-400">Kids Cuts</li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin size={20} className="mr-2 text-secondary" />
                <span className="text-gray-400">500 N Bell Ave #109, Denton, TX 76209</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-2 text-secondary" />
                <a href="tel:+19406129127" className="text-gray-400 hover:text-white">+1 940-612-9127</a>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-2 text-secondary" />
                <a href="mailto:info@famabarber.com" className="text-gray-400 hover:text-white">info@famabarber.com</a>
              </li>
              <li className="flex">
                <Clock size={20} className="mr-2 text-secondary" />
                <span className="text-gray-400">Mon-Sat: 9am-7pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="py-4 text-center bg-black">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Fama Barber Shop and Beauty Salon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;