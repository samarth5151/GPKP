import React from 'react';
import './WelcomeSection.css';

import aicte from '../../Assets/footer-logos/aicte-logo.png'
import dte from '../../Assets/footer-logos/dte-logo.png'
import mahadbt from '../../Assets/footer-logos/mahdbt-logo.jpg'
import msbte from '../../Assets/footer-logos/msbte-logo.png'
import ropune from '../../Assets/footer-logos/ropune.jpg'
import scholarship from '../../Assets/footer-logos/scholarship-logo.png'
import state from '../../Assets/footer-logos/state-logo.png'


const circulars = [
  'शैक्षणिक वर्ष 2025-26 करिता संस्थांच्या संलग्नीकरणाबाबत',
  'K-Scheme नवीन सुधारित अभ्यासक्रमामातील पाचव्या सत्रातील विषयाचा संकेतात्क बदल बाबत.',
  '5 व्या सत्रात 12 आठवड्याचे औद्योगिक प्रशिक्षण असलेल्या अभ्यासक्रमांच्या Class Test बाबत',
];


const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="content">
        <h2>Welcome to Government Polytechnic, Kolhapur</h2>
        <p>
          Government Polytechnic, Kolhapur was established in 1961 with Civil Engineering and Mechanical Engineering Diploma Programmer. Started in a small rented building, the Institute was soon Shifted to its independent campus of about 12 hectors covering academic building and hostels.
        </p>
        <p>
          Institute has the privilege of being the First Academically Autonomous Government Polytechnic in the state.
        </p>
        <p>
          At present, the Institute offers Diploma programmer in Civil Engineering, Mechanical Engineering, Electrical Engineering, Industrial Electronics, Electronics and Telecommunication, Information Technology, Metallurgy, Sugar Manufacturing.
        </p>
        <p>
          The Being rich with faculty of high qualifications, modernized laboratories and infrastructure, the Institute has progressed serving the industry and society. The alumni either proceed for higher education or get employed in renowned industries through regular campus interviews organized by the Training and Placement Cell of the Institute.
        </p>
        <p>
          As a National level appreciation of education of the Institute, four programmer were awarded 3 years accreditation by National Board of Accreditation (NBA), New Delhi in December 2003. Committed to the noble mission of developing technicians of high standards of excellence, the Institute is crossing broader and newer horizons of progress keeping pace with the changing global world.
        </p>
        <h2>Vision</h2>
        <p>Institute of high recognition to develop competent technicians for quality professional services and entrepreneurship to cater the needs of industry and society.</p>
        <h2>Mission</h2>
        <ul>
          <li>To educate and train in multi disciplinary multi-level programs to develop competent technicians and skilled manpower for industrial needs</li>
          <li>To ensure employability, encourage entrepreneurship, promote lifelong learning</li>
          <li>To inculcate in students the qualities of a good citizen at individual, social and professional level</li>
          <li>To provide quality management system with focus on effective student-centric education and high recognition.</li>
        </ul>
      </div>
      
    <aside className="notice-board">
    <div className="circulars-board">
      <div className="header">
        <h2>Circulars / Tenders</h2>
        <a href="/all-circulars">View All</a>
      </div>
      <div className="circulars-content">
        <ul className="marquee">
          {circulars.map((item, index) => (
            <li key={index} title={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </aside>

      <div class="logo-slider">
        <div class="logo-track">
          <a href="https://www.aicte-india.org/" target="_blank"><img src={aicte} alt="AICTE Logo" /></a>
          <a href="https://msbte.org.in/" target="_blank"><img src={msbte} alt="MSBTE Logo" /></a>
          <a href="https://www.dtemaharashtra.gov.in/" target="_blank"><img src={dte} alt="DTE Maharashtra Logo" /></a>
          <a href="https://www.dtemaharashtra.gov.inhttps://www.maharashtra.gov.in/1125/Home/" target="_blank"><img src={state} alt=" Maharashtra Gov Logo" /></a>
          <a href="https://mahadbt.maharashtra.gov.in/" target="_blank"><img src={mahadbt} alt="MahaDBT Logo" /></a>
          <a href="https://mahaeschol.maharashtra.gov.in/MahaEschol/Scholarships/Account/Login.aspx#1#1#1#1#1" target="_blank"><img style={{height:"60px"}} src={scholarship} alt="eScholarship Logo" /></a>
          <a href="https://www.ropune.org.in/ropune/indexnew.html" target="_blank" className='roa'><p className='ro'>Ro Pune</p></a>
        </div>
      </div>

    </div>
  );
};

export default WelcomeSection;