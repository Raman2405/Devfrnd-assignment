import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative flex items-center min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' 
      }}
    >
      <div className="container z-10 py-16 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          Premium Barber Experience
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-xl leading-relaxed text-gray-200">
          Where traditional craftsmanship meets modern style. Experience the art of precision haircuts and grooming.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a href="#booking" className="btn btn-primary">
            Book Appointment
          </a>
          <a href="#services" className="btn btn-secondary">
            Our Services
          </a>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;