import React, { useState, useEffect } from 'react';
import './Image-slider.css';

// Import images
import slide1 from '../Assets/slider1.jpeg'; 
import slide2 from '../Assets/slider2.jpeg'; 
import slide3 from '../Assets/slider3.jpeg'; 
import slide4 from '../Assets/slider4.jpg'; 
import slide5 from '../Assets/slider5.jpg'; 
import slide6 from '../Assets/slider6.jpg'; 
import slide7 from '../Assets/slider7.jpg'; 
import slide8 from '../Assets/slider8.jpeg'; 
import slide9 from '../Assets/slider9.png'; 


const Imageslider = () => {
  // Array of slider images
  const sliderImages = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
  ];

  const circulars = [
  'शैक्षणिक वर्ष 2025-26 करिता संस्थांच्या संलग्नीकरणाबाबत',
  'K-Scheme नवीन सुधारित अभ्यासक्रमामातील पाचव्या सत्रातील विषयाचा संकेतात्क बदल बाबत.',
  '5 व्या सत्रात 12 आठवड्याचे औद्योगिक प्रशिक्षण असलेल्या अभ्यासक्रमांच्या Class Test बाबत',
];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the image every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-section">
      <div className="slider-container">
        <div className="slider">
          <img
            src={sliderImages[currentIndex]}
            alt={`Slider Image ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>
      </div>

         <div className="circulars-board">
            <div className="header">
              <h2>Student Corner</h2>
              <a href="/all-circulars">All Notices</a>
            </div>
            <div className="circulars-content">
              <ul className="marquee">
                {circulars.map((item, index) => (
                  <li key={index} title={item}>{item}</li> 
                ))}
              </ul>
            </div>
          </div>
      
      
    </div>
  );
}

export default Imageslider;