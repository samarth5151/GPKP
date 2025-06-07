import React from 'react';
import ImageSlider from './Imageslider';
import './home.css'
import WelcomeSection from './WelcomeSection/WelcomeSection';

import Leaders from './Leaders/Leaders';
function home() {
  return (
    <div className='home'>
    <div className='img-slider'>
      <ImageSlider/>
      <Leaders/>
      <WelcomeSection/>
     
    </div>
    </div>
  )
}

export default home
