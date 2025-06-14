import React from 'react';
import './GymKhana.css';
import cricket from '../../../Assets/gymkhana_images/information-technology.jpg';
import volleyball from '../../../Assets/gymkhana_images/information-technology.jpg';
import wrestling from '../../../Assets/gymkhana_images/information-technology.jpg';
import kabaddi from '../../../Assets/gymkhana_images/information-technology.jpg';
import chess from '../../../Assets/gymkhana_images/information-technology.jpg';
import carom from '../../../Assets/gymkhana_images/information-technology.jpg';
import tableTennis from '../../../Assets/gymkhana_images/information-technology.jpg';
import digital from '../../../Assets/gymkhana_images/information-technology.jpg';
import cleanliness from '../../../Assets/gymkhana_images/information-technology.jpg';
export default function Gymkhana() {
  return (
    <div className="gymkhana-container">
      <h1 className="page-title">Gymkhana</h1>

      <div className="section">
        <h2>Gymkhana Committee</h2>
        <ul>
          <li><strong>President:</strong> Dr. D. M. Garge</li>
          <li><strong>Vice President:</strong> Prof. P. H. Tarange</li>
          <li><strong>Secretary:</strong> Prof. P. D. Malpure</li>
          <li><strong>Gymkhana Clerk:</strong> Mr. S. B. Bolkar</li>
        </ul>
      </div>

      <div className="section">
        <h2>About Gymkhana</h2>
        <p>
          Every year, sports competitions are organized by IEDSSA. GPKP coordinates the B1 zone (34 colleges).
          7 sports grounds and all necessary equipment are available for practice through the Gymkhana department.
        </p>
        <p>
          Apart from sports, cultural activities like Traditional Day, Tree Plantation, and Blood Donation are organized.
          A committee, chaired by the principal, plans and executes the Gymkhana schedule every year.
        </p>
      </div>

      <div className="section">
        <h2>Major Activities</h2>
        <ul>
          <li>144 students participated in IEDSSA sports; 17 qualified for inter-zonal level.</li>
          <li>“स्वतंत्र्याचा अमृत मोहत्सव” celebration with activities like:</li>
          <ul>
            <li>Cleanliness campaign once a week</li>
            <li>Public awareness about COVID</li>
            <li>Digital literacy drive</li>
            <li>Har Ghar Tiranga</li>
            <li>Observing 48 national/state-level anniversaries</li>
          </ul>
        </ul>
      </div>

      <div className="section">
        <h2>Regular Activities</h2>
        <ul>
          <li>Anniversary celebrations of national leaders and social reformers</li>
          <li>Institute cleaning every Saturday by staff</li>
          <li>Tree plantation on staff birthdays</li>
          <li>Blood donation drives</li>
          <li>Indoor and outdoor sports events</li>
        </ul>
      </div>

      <div className="section">
        <h2>Sport Facilities</h2>
        <ul>
          <li>Badminton Court – 1</li>
          <li>Volleyball Court – 1</li>
          <li>Basketball Court – 1</li>
          <li>Football Ground – 1</li>
          <li>Cricket Ground – 1</li>
          <li>Practice Cricket Pitch – 1</li>
          <li>Indoor Chess and Carom</li>
        </ul>
      </div>

      <div className="section gallery-section">
        <h2>Gymkhana Event Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src={cricket} alt="Cricket Team" /><p>Cricket Team</p></div>
          <div className="gallery-item"><img src={volleyball} alt="Volleyball Team" /><p>Volleyball Team</p></div>
          <div className="gallery-item"><img src={wrestling} alt="Wrestling" /><p>Wrestling</p></div>
          <div className="gallery-item"><img src={kabaddi} alt="Kabaddi Team" /><p>Kabaddi Team</p></div>
          <div className="gallery-item"><img src={chess} alt="Chess Team" /><p>Chess Team</p></div>
          <div className="gallery-item"><img src={carom} alt="Carom Team" /><p>Carom Team</p></div>
          <div className="gallery-item"><img src={tableTennis} alt="Table Tennis" /><p>Table Tennis</p></div>
          <div className="gallery-item"><img src={digital} alt="Digital Literacy" /><p>Digital Literacy</p></div>
          <div className="gallery-item"><img src={cleanliness} alt="Cleanliness Drive" /><p>Cleanliness Drive</p></div>
        </div>
      </div>
    </div>
  );
}
