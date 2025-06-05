import React from 'react';
import ImageSlider from './Imageslider';

import './home.css'
import WelcomeSection from './WelcomeSection/WelcomeSection';
function home() {
  return (
    <div className='home'>
    <div className='img-slider'>
      <ImageSlider/>
      <WelcomeSection/>
    </div>
    </div>
  )
}

export default home
