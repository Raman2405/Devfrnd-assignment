import React from 'react';
import { Scissors, Bean as Beard, ShowerHead } from 'lucide-react';
import { ServiceType } from '../types';
import ServiceCard from './ServiceCard';

const services: ServiceType[] = [
  {
    id: 1,
    icon: <Scissors size={32} />,
    title: 'Classic Cuts',
    description: 'Precision haircuts tailored to enhance your natural features and style preferences. Includes hot towel finish and styling.',
    price: 'From $25',
    duration: '30-45 min'
  },
  {
    id: 2,
    icon: <Beard size={32} />,
    title: 'Beard Trims',
    description: 'Expert shaping and styling for your beard. Includes hot towel treatment, precision trimming, and beard oil application.',
    price: 'From $15',
    duration: '15-20 min'
  },
  {
    id: 3,
    icon: <ShowerHead size={32} />,
    title: 'Hot Towel Shaves',
    description: 'Traditional hot towel shave experience using premium products and straight razor for the smoothest finish.',
    price: 'From $35',
    duration: '45-60 min'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-accent-light">
      <div className="container">
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">
          Exceptional grooming services delivered by skilled barbers with years of experience
        </p>
        
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#booking" className="btn btn-primary">
            Book Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;