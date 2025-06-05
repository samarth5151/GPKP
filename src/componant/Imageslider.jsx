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

// Import leader images
import fadanvisSir from '../Assets/photos/fadanvissir.png';
import chandrakantSir from '../Assets/photos/chandrakantsir.jpeg';
import venugopalReddy from '../Assets/photos/venugopal_reddy-1.png';
import mohitkarSir from '../Assets/photos/mohite_sir_gpk-removebg-preview.png';
import jadhavSir from '../Assets/photos/image__4_-removebg-preview.png';
import sonajeSir from '../Assets/photos/sonjesir.jpeg';

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

 const leaders = [
  {
    name: 'Shri. Devendra Fadanvis',
    position: 'Hon. Chief Minister',
    image: fadanvisSir,
  },
  {
    name: 'Shri. Chandrakant Patil',
    position: 'Hon. Higher & Technical Education Minister',
    image: chandrakantSir,
  },
  {
    name: 'Shri B. Venugopal Reddy',
    position: 'Hon. Addl. Chief Secretary, Higher & Technical Education',
    image: venugopalReddy,
  },
  {
    name: 'Dr. Vinod Mohitkar',
    position: 'Honble Director Technical Education',
    image: mohitkarSir,
  },
  {
    name: 'Dr. D.V. Jadhav',
    position: 'Joint Director, Regional Office Pune',
    image: jadhavSir,
  },
  {
    name: 'Capt. (Dr.) N.P. Sonaje',
    position: 'Principal',
    image: sonajeSir,
  },
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
      <div className="leaders-container">
        {leaders.map((leader, index) => (
          <div key={index} className="leader">
            <img src={leader.image} alt={leader.name} className="leader-image" />
            <div className="leader-info">
              <h4>{leader.name}</h4>
              <p>{leader.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imageslider;