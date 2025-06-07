import React from 'react'
import './Leaders.css'
// Import leader images
import fadanvisSir from '../../Assets/photos/fadanvissir.png';
import chandrakantSir from '../../Assets/photos/chandrakantsir.jpeg';
import venugopalReddy from '../../Assets/photos/venugopal_reddy-1.png';
import mohiteSir from '../../Assets/photos/mohite_sir_gpk-removebg-preview.png';
import jadhavSir from '../../Assets/photos/image__4_-removebg-preview.png';
import sonjeSir from '../../Assets/photos/sonjesir.jpeg';
import indranilsir from '../../Assets/photos/Indranil-Naik.png'

function Leaders() {

    
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
        name: 'Shri. Indranil Naik',
        position: 'Hon’ble Minister of StateHigher and Technical Education',
        image: indranilsir,
      },
      {
        name: 'Shri B. Venugopal Reddy',
        position: 'Hon. Addl. Chief Secretary, Higher & Technical Education',
        image: venugopalReddy,
      },
      {
        name: 'Dr. Vinod Mohitkar',
        position: 'Honble Director Technical Education',
        image: mohiteSir,
      },
      {
        name: 'Dr. D.V. Jadhav',
        position: 'Joint Director, Regional Office Pune',
        image: jadhavSir,
      },
      {
        name: 'Capt. (Dr.) N.P. Sonaje',
        position: 'Principal',
        image: sonjeSir,
      },
    ];

  return (
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

  )
}

export default Leaders
