import React from 'react';
import './NSS.css';

// Images
import imgFreedom1 from '../../../Assets/nssImage/information-technology.jpg';
import imgFreedom2 from '../../../Assets/nssImage/information-technology.jpg';

import imgUnity1 from '../../../Assets/nssImage/information-technology.jpg';
import imgUnity2 from '../../../Assets/nssImage/information-technology.jpg';

import imgClean1 from '../../../Assets/nssImage/information-technology.jpg';
import imgClean2 from '../../../Assets/nssImage/information-technology.jpg';

export default function NSS() {
  return (
    <div className="nss-container">
      <h1 className="nss-title">National Service Scheme (NSS)</h1>

      <section className="nss-section">
        <p>
          National Service Scheme is a social service program sponsored by the Government and contributions from individuals. It stems from the belief that “the difference between what we do and what we are capable of doing would solve most of our problems.” 
          <br />
          This helps students develop leadership, teamwork spirit, social attitude, and encourages patriotic responsibility. Currently, the NSS Unit of Government Polytechnic Kolhapur consists of 100 volunteers.
        </p>

        <h3>GPKP NSS TEAM</h3>
        <ul>
          <li><strong>Coordinator:</strong> Mr. P. V Minchekar</li>
          <li><strong>Sub Coordinators:</strong></li>
          <ul>
            <li>Mrs. S. S. Rote</li>
            <li>Mr. P. A. Shevale</li>
            <li>Mr. R. B. Adlinge</li>
          </ul>
        </ul>
      </section>

      <section className="nss-section">
        <h2>What GPKP NSS Does?</h2>
        <p>
          NSS at Government Polytechnic Kolhapur provides students with a deeper understanding of social realities in India today. Its motto “Not Me, But You” reflects the selfless work done by volunteers. 
          <br />
          Activities include celebrations on national festivals, Azadi Ka Amrit Mahotsav, Run For Unity, Tree Plantation, Cleanliness Drives, Cloth and Blood donation camps, and orphanage visits.
        </p>
      </section>

      {/* === Events with Gallery === */}

      <section className="nss-section">
        <h2>Programs Conducted By GPKP NSS</h2>

        {/* Event 1 */}
        <div className="nss-event">
          <h3>🎉 Celebrating 75th Nectaral Festival of India’s Freedom</h3>
          <p>
            Students and staff performed patriotic songs. Decoration and event management were handled by the students themselves.
            <br />
            <strong>Date:</strong> 15 August 2022
          </p>
          <div className="nss-gallery">
            <img src={imgFreedom1} alt="Celebration 1" />
            <img src={imgFreedom2} alt="Celebration 2" />
          </div>
        </div>

        {/* Event 2 */}
        <div className="nss-event">
          <h3>🏃‍♂️ Run For Unity</h3>
          <p>
            Conducted on the birth anniversary of Sardar Vallabhbhai Patel to celebrate National Unity Day (Rashtriya Ekta Diwas).
            <br />
            <strong>Date:</strong> 31 October 2022
          </p>
          <div className="nss-gallery">
            <img src={imgUnity1} alt="Run for Unity 1" />
            <img src={imgUnity2} alt="Run for Unity 2" />
          </div>
        </div>

        {/* Event 3 */}
        <div className="nss-event">
          <h3>🧹 Cleanliness Drive</h3>
          <p>
            A campus-wide cleanliness camp was conducted with participation from NSS volunteers, staff, and Principal sir.
            <br />
            <strong>Date:</strong> 19 November 2022
          </p>
          <div className="nss-gallery">
            <img src={imgClean1} alt="Cleanliness Drive 1" />
            <img src={imgClean2} alt="Cleanliness Drive 2" />
          </div>
        </div>
      </section>
    </div>
  );
}
