import React, { useState } from 'react';
import ImageData from '../image/ImageData';
import "./ImageSlider.css"

const ImageSlider = () => {
  const [images, setImages] = useState(ImageData); // Assuming ImageData is an array of image paths
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (

    <div class="slider-container">
  <div class="slider">
  {images.length > 0 ? (
          <img src={images[currentIndex]}  />
        ) : (
          <p>Loading...</p>
        )}
  </div>

     <button onClick={prevSlide} className='prev-btn'>Prev</button>

    <button onClick={nextSlide} className='next-btn'>Next</button>
  
</div>
  );
};

export default ImageSlider;
