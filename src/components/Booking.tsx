import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for booking! We will contact you soon to confirm your appointment.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="booking" className="py-20 bg-primary text-white">
      <div className="container">
        <h2 className="section-title text-white">Book an Appointment</h2>
        <p className="section-subtitle text-gray-300">
          Schedule your next visit with us
        </p>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="grid gap-6 p-8 bg-white rounded-lg shadow-lg text-gray-800 md:grid-cols-2">
            <div className="relative">
              <User size={20} className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full py-3 pl-10 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="relative">
              <Mail size={20} className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full py-3 pl-10 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="relative">
              <Phone size={20} className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full py-3 pl-10 border border-gray-300 rounded-md"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="relative">
              <Calendar size={20} className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="date"
                name="date"
                className="w-full py-3 pl-10 border border-gray-300 rounded-md"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="relative">
              <Clock size={20} className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="time"
                name="time"
                className="w-full py-3 pl-10 border border-gray-300 rounded-md"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <select
                name="service"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="haircut">Classic Cut</option>
                <option value="beard">Beard Trim</option>
                <option value="shave">Hot Towel Shave</option>
                <option value="combo">Haircut & Beard Combo</option>
              </select>
            </div>
            
            <div className="relative md:col-span-2">
              <MessageSquare size={20} className="absolute text-gray-500 left-3 top-3" />
              <textarea
                name="message"
                placeholder="Special Requests or Notes"
                rows={4}
                className="w-full py-3 pl-10 border border-gray-300 rounded-md"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 text-white transition-all bg-primary hover:bg-primary-dark rounded-md"
              >
                Book Appointment
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300">Prefer to book by phone?</p>
            <a 
              href="tel:+19406129127" 
              className="block mt-2 text-2xl font-semibold hover:text-secondary"
            >
              +1 940-612-9127
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;