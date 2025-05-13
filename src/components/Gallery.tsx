import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Barber cutting client hair',
  },
  {
    src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Barber shop interior',
  },
  {
    src: 'https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Client getting a beard trim',
  },
  {
    src: 'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Barber shop tools',
  },
  {
    src: 'https://images.pexels.com/photos/3356172/pexels-photo-3356172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Scissors and comb',
  },
  {
    src: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Man with styled haircut',
  },
];

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const navigateRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-accent">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <p className="section-subtitle">
          Take a look at our shop and some of our finest work
        </p>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="overflow-hidden cursor-pointer rounded-lg h-64 relative group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 bg-opacity-40 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white font-medium">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeLightbox}
        >
          <button 
            className="absolute text-white top-4 right-4"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute text-white transform -translate-y-1/2 left-4 top-1/2"
            onClick={navigateLeft}
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>
          
          <img
            src={galleryImages[currentImage].src}
            alt={galleryImages[currentImage].alt}
            className="max-w-full max-h-[80vh] object-contain"
          />
          
          <button 
            className="absolute text-white transform -translate-y-1/2 right-4 top-1/2"
            onClick={navigateRight}
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;