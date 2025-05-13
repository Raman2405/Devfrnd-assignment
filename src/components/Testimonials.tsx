import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialType } from '../types';
import TestimonialCard from './TestimonialCard';

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Michael Johnson',
    image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 5,
    text: 'Best barber shop I\'ve ever been to. My haircut was perfect and the hot towel treatment was so relaxing. Highly recommend!'
  },
  {
    id: 2,
    name: 'David Williams',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 5,
    text: 'These guys know what they\'re doing. Great atmosphere, professional service, and my beard has never looked better.'
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4,
    text: 'Took my son for his first proper haircut and they made him feel so comfortable. Great with kids and excellent service.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={24} 
                className={i < 4 ? "text-secondary fill-secondary" : "text-secondary"} 
              />
            ))}
            <span className="ml-2 text-xl font-semibold">4.6</span>
          </div>
          <p className="text-gray-600">Based on 116+ reviews</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;