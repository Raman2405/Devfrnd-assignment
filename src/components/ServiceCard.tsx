import React from 'react';
import { ServiceType } from '../types';

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-primary">
        {service.icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-center">{service.title}</h3>
      <p className="mb-4 text-gray-600">{service.description}</p>
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200">
        <span className="font-semibold text-primary">{service.price}</span>
        <span className="text-sm text-gray-500">{service.duration}</span>
      </div>
    </div>
  );
};

export default ServiceCard;