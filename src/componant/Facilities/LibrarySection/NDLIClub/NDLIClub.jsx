import React from 'react';
import './NDLIClub.css';
import ndli1 from '../../../../Assets/NDLI_images/information-technology.jpg';
import ndli2 from '../../../../Assets/NDLI_images/information-technology.jpg';
import ndli3 from '../../../../Assets/NDLI_images/information-technology.jpg'; // Add your real event images

export default function NDLIClub() {
  return (
    <div className="ndli-club-container">
      <h1 className="page-title">NDLI CLUB</h1>

      <p className="intro">
        GOVERNMENT Polytechnic Kolhapur is now a part of the <strong>NDLI Club</strong>.
      </p>

      <div className="section">
        <h2>Administration</h2>
        <ul>
          <li><strong>Patron:</strong> Dr. D. M. Garge, Principal</li>
          <li><strong>President:</strong> Mr. Y. R. Satpute (LME)</li>
          <li><strong>Secretary:</strong> Mr. Mandrupkar (Asst Librarian)</li>
          <li><strong>Executive Members:</strong></li>
          <ul>
            <li>Mr. P. P. Mahajan (LME)</li>
            <li>Mrs. P. V. Kole (LIT)</li>
            <li>Mr. U. P. Mane (LCE)</li>
            <li>Mr. R. B. Adlinge (LEE)</li>
          </ul>
        </ul>
      </div>

      <div className="section">
        <h2>About NDLI Club</h2>
        <p>
          NDLI Club members can access a vast repository of free and open access learning resources,
          from anywhere and at any time, either through desktop PC or laptop or tablet or mobile,
          from the <a href="https://www.ndl.gov.in" target="_blank" rel="noopener noreferrer">National Digital Library of India</a>.
        </p>
        <p>
          NDLI provides content for all academic levels including lifetime learners, all disciplines
          and in most widely used Indian languages.
        </p>
        <p>
          Clubs conduct events to develop knowledge, skill and traits beyond the curriculum—crucial
          for professional growth.
        </p>
        <p>
          <strong>NDLI and NDLI Club</strong> are for all of India to learn, share, grow and democratize education.
        </p>
        <p>
          <strong>Members Login:</strong>{' '}
          <a href="https://club.ndl.iitkgp.ac.in/club-home" target="_blank" rel="noopener noreferrer">
            NDLI Club Member Portal
          </a>
        </p>
      </div>

      <div className="section gallery-section">
        <h2>Event Gallery</h2>
        <div className="gallery-grid">
          <img src={ndli1} alt="NDLI Event 1" />
          <img src={ndli2} alt="NDLI Event 2" />
          <img src={ndli3} alt="NDLI Event 3" />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
}
