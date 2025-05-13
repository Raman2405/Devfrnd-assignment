import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import Booking from './components/Booking';

function App() {
  return (
    <div className="font-poppins text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Location />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;