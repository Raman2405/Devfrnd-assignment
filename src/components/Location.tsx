import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gray-100">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        <p className="section-subtitle">
          Visit our shop for an exceptional grooming experience
        </p>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg overflow-hidden h-[400px] shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.9663890651164!2d-97.1307462!3d33.0864949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4be45bea4e7f%3A0x67d9b4e87c0c16a1!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209!5e0!3m2!1sen!2sus!4v1715472084456!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Fama Barber Shop Map"
            ></iframe>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={24} className="mt-1 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">500 N Bell Ave #109, Denton, TX 76209, United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="mt-1 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+19406129127" className="hover:text-primary">+1 940-612-9127</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="mt-1 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <ul className="text-gray-600">
                      <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
                      <li>Saturday: 9:00 AM - 6:00 PM</li>
                      <li>Sunday: 10:00 AM - 4:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://maps.google.com/?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209,+United+States" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;