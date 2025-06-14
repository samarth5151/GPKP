import React, { useState } from 'react';
import './Electronics.css';

const Electronics = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'vision':
        return (
          <div className="tab-content">
            <h3>Vision</h3>
            <p>Programme of high recognition and flexibility for the development of competent technical manpower in the profession of Electronics and Telecommunication</p>
            <h3>Mission</h3>
            <ul>
              <li>To provide technical education of high recognition to the aspiring learners.</li>
              <li>To empower student’s competency to fulfill nation’s project of Digital India</li>
              <li>To adapt student centric approach in teaching-learning process for skill oriented professional, social and ethical practices</li>
              <li>To utilize flexibility in curriculum development to incorporate advancements in the field of Electronics & Telecommunication</li>
            </ul>
          </div>
        );
      case 'pos':
        return (
          <div className="tab-content">
            <h3>Programme Outcomes (POs)</h3>
            <ul>
              <li>PO1: Apply knowledge of basic mathematics, science and engineering fundamentals...</li>
              <li>PO2: Identify and analyse well-defined Engineering problems...</li>
              <li>PO3: Design solutions for technical problems and assist in system components or processes...</li>
              <li>PO4: Apply modern tools for testing and experimentation...</li>
              <li>PO5: Apply technology in context of society, sustainability, and ethical practices...</li>
              <li>PO6: Use engineering management principles to manage projects...</li>
              <li>PO7: Engage in life-long learning in context of tech changes...</li>
            </ul>
            <h3>Programme Specific Outcomes (PSOs)</h3>
            <ul>
              <li>PSO 1: Operate and maintain engineering application systems</li>
              <li>PSO 2: Supervise work and provide solutions to practical electronics problems</li>
            </ul>
            <h3>Programme Educational Objectives (PEOs)</h3>
            <ul>
              <li>PEO1: Apply knowledge of Basic Sciences and Electronics in problem solving</li>
              <li>PEO2: Operate and debug systems in Electronics and Telecommunication</li>
              <li>PEO3: Attain technical knowledge and skills to advance in technology</li>
              <li>PEO4: Work as a responsible team member or entrepreneur</li>
            </ul>
          </div>
        );
      case 'hod':
        return (
          <div className="tab-content">
            <h3>HOD's Desk</h3>
            <p>Shri. Dattatraya Manoharrao Garge<br />HOD Electronics and Telecommunication</p>
            <p>Our department provides a conducive environment for developing analytical and practical skills. Regular activities, trainings, and industry visits are held to prepare students for real-world challenges and NBA accreditation.</p>
          </div>
        );
      case 'faculty':
        return (
          <div className="tab-content">
            <h3>Faculty</h3>
            <table className="faculty-table">
              <thead>
                <tr><th>Name</th><th>Designation</th><th>Qualification</th></tr>
              </thead>
              <tbody>
                <tr><td>Shri. Dattatraya M. Garge</td><td>H.O.D.</td><td>PhD, ME</td></tr>
                <tr><td>Dr. Rajesh A. Patil</td><td>Selection Grade Lecturer</td><td>PhD, ME</td></tr>
                <tr><td>Shri. Vijay N. Gangapure</td><td>Selection Grade Lecturer</td><td>PhD, ME</td></tr>
                <tr><td>Dr. Madhuri Y. Sonule</td><td>Lecturer</td><td>PhD</td></tr>
                <tr><td>Smt. Ashwini P. Rathod</td><td>Lecturer</td><td>ME</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'curriculum':
        return (
          <div className="tab-content">
            <h3>Curriculum</h3>
            <ul>
              <li><a className="download-btn" href="#">MPECS16 Download</a></li>
              <li><a className="download-btn" href="#">MPECS20 Download</a></li>
            </ul>
          </div>
        );
      case 'staff':
        return (
          <div className="tab-content">
            <h3>Support Staff</h3>
            <table className="staff-table">
              <thead>
                <tr><th>Name</th><th>Designation</th></tr>
              </thead>
              <tbody>
                <tr><td>Mr. S.H Bolkar</td><td>Instructor – TLA</td></tr>
                <tr><td>Mr. A.V Patil</td><td>Instructor – TLA</td></tr>
                <tr><td>Mr. S.B Parekar</td><td>Instructor – LA</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'labs':
        return (
          <div className="tab-content">
            <h3>Labs & Equipments</h3>
            <table className="labs-table">
              <thead>
                <tr><th>Lab Name</th><th>Major Equipment</th><th>Technical Staff</th><th>Lab In-Charge</th></tr>
              </thead>
              <tbody>
                <tr><td>Analog Electronics Lab</td><td>CRO, DC Power Supply</td><td>Mr. S.B Parekar</td><td>Mr. K.D Kamble</td></tr>
                <tr><td>Communication Lab</td><td>AM/FM Trainer, DSO</td><td>Mr. S.B Parekar</td><td>Mrs. S.S Sovani</td></tr>
                <tr><td>Embedded System Lab</td><td>PIC board, Compiler</td><td>Mr. A.V Patil</td><td>Dr. V.N Gangapure</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'achievements':
        return (
          <div className="tab-content">
            <h3>Achievements & Highlights</h3>
            <ul>
              <li>International lecture on AWS – Mr. Sandeep Chavan</li>
              <li>Expert Lecture on Indian Constitution – Mr. Ramesh Jadhav</li>
              <li>Emerging Trades in Electronics – Mr. Nimit Malhotra</li>
              <li>Techno-Enhance 2025 – Project Showcase</li>
              <li>Alumni Meet 2025</li>
            </ul>
          </div>
        );
      case 'gallery':
        return (
          <div className="tab-content">
            <h3>Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item">Upload image 1</div>
              <div className="gallery-item">Upload image 2</div>
              <div className="gallery-item">Upload image 3</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="electronics-container">
      <h2 className="page-title">Electronics & Telecommunication Department</h2>
      <div className="tabs single-line">
        {['vision', 'pos', 'hod', 'faculty', 'curriculum', 'staff', 'labs', 'achievements', 'gallery'].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Electronics;