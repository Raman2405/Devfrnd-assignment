import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Scissors size={32} className="text-primary" />
          <div className="ml-2">
            <span className="block text-xl font-bold font-italiana text-primary">Fama</span>
            <span className="text-xs tracking-wider text-gray-600">BARBER & BEAUTY</span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <ul className="items-center hidden space-x-8 text-sm font-medium md:flex">
          <li><a href="#services" className="hover:text-primary">Services</a></li>
          <li><a href="#gallery" className="hover:text-primary">Gallery</a></li>
          <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
          <li><a href="#location" className="hover:text-primary">Location</a></li>
          <li><a href="#booking" className="btn btn-primary">Book Now</a></li>
        </ul>
        
        {/* Mobile Navigation Button */}
        <button 
          className="p-2 md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <ul className="flex flex-col items-center py-8 space-y-4 text-lg">
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
          <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
          <li><a href="#location" onClick={toggleMenu}>Location</a></li>
          <li><a href="#booking" onClick={toggleMenu} className="btn btn-primary">Book Now</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;