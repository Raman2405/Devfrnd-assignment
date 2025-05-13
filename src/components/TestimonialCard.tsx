import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialType } from '../types';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="object-cover w-12 h-12 mr-4 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < testimonial.rating ? "text-secondary fill-secondary" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">"{testimonial.text}"</p>
    </div>
  );
};

export default TestimonialCard;