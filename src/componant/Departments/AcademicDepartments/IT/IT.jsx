import React, { useState } from 'react';
import './IT.css';

const IT = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'vision':
        return (
          <div className="tab-content">
            <h3>Vision</h3>
            <p>Programme with high recognition catering needs of Information Technology industry in tune with the nation's mission for Digital India</p>
            <h3>Mission</h3>
            <ul>
              <li>To pursue excellence in areas of Information Technology keeping pace with the latest developments</li>
              <li>To educate and train students to design, develop and test software systems</li>
              <li>To develop the spirit of team work, innovation and professionalism</li>
              <li>To cultivate attitude of lifelong learning</li>
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
              <li>PSO 1: Design and Development of computing solutions using suitable platforms</li>
              <li>PSO 2: Administer and configure database/network servers</li>
            </ul>
            <h3>Programme Educational Objectives (PEOs)</h3>
            <ul>
              <li>PEO1: Engage in continuous learning and solve real-life problems</li>
              <li>PEO2: Select and apply appropriate techniques and IT tools</li>
              <li>PEO3: Use engineering and communication skills to solve complex problems</li>
            </ul>
          </div>
        );
      case 'hod':
        return (
          <div className="tab-content">
            <h3>HOD's Desk</h3>
            <p>Smt. Rohini Bhikaji Varne<br />HOD Information Technology</p>
            <p>The Department was established in 2001 with intake of 60. IT plays a vital role in modern lifestyle. The department has experienced staff, good infrastructure and labs to support student learning, experimentation, and projects.</p>
          </div>
        );
      case 'faculty':
        return (
          <div className="tab-content">
            <h3>Faculty</h3>
            <table className="faculty-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Qualification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Smt. Rohini Bhikaji Varne</td>
                  <td>I/C HOD in Info. Tech.</td>
                  <td>M.Tech</td>
                </tr>
                <tr>
                  <td>Shri. Maruti Bhagoji Patil</td>
                  <td>Lecturer</td>
                  <td>BE (CSE), MTech, PhD (Pursuing)</td>
                </tr>
                <tr>
                  <td>Smt. Kavita Shrikant Kulkarni</td>
                  <td>Lecturer</td>
                  <td>M.Tech</td>
                </tr>
                <tr>
                  <td>Shri. Sachin Jagannath Pukale</td>
                  <td>Lecturer</td>
                  <td>M.Tech</td>
                </tr>
                <tr>
                  <td>Shri. Kapil Arvind Chavan</td>
                  <td>Lecturer</td>
                  <td>BE (CSE), MTech, PhD (Pursuing)</td>
                </tr>
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
              <li><a className="download-btn" href="#">MPECS2020 Download</a></li>
            </ul>
          </div>
        );
      case 'staff':
        return (
          <div className="tab-content">
            <h3>Support Staff</h3>
            <table className="staff-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Shri. G. D. Khochare</td><td>Instructor</td></tr>
                <tr><td>Shri. S. P. Bule</td><td>Instructor</td></tr>
                <tr><td>Shri. V. B. Patil</td><td>Peon</td></tr>
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
                <tr>
                  <th>Lab Name</th>
                  <th>Major Equipment</th>
                  <th>Technical Staff</th>
                  <th>Lab In-Charge</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Programming Lab 1</td><td>17 PCs, HP & Lenovo, I5</td><td>Shri. S.P. Bule</td><td>Smt. P.V. Kole</td></tr>
                <tr><td>Programming Lab 2</td><td>17 PCs, HP & Lenovo, I5</td><td>Shri. S.P. Bule</td><td>Smt. M.S. Arade</td></tr>
                <tr><td>Network Lab</td><td>13 PCs, Lenovo, I5</td><td>Shri. G.D. Khochare</td><td>Mr. M.B. Patil</td></tr>
                <tr><td>Linux Lab</td><td>13 PCs, Lenovo, I5</td><td>Shri. G.D. Khochare</td><td>Shri. K.A. Chavan</td></tr>
                <tr><td>Hardware Lab</td><td>ACER, WIPRO, Motherboard, Peripherals</td><td>Shri. G.D. Khochare</td><td>Mr. M.B. Patil</td></tr>
                <tr><td>IOT Lab</td><td>17 PCs, HP & Lenovo, I5</td><td>Shri. S.P. Bule</td><td>Smt. M.S. Arade</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'achievements':
        return (
          <div className="tab-content">
            <h3>Highlights & Achievements</h3>
            <ul>
              <li>Women's Day Celebration – 2022</li>
              <li>Engineer’s Day Celebration – 2022</li>
              <li>Parents Meeting</li>
              <li>Induction Program</li>
              <li>Cyber Crime & Digital Literacy Guest Lecture</li>
              <li>Android App Guest Lecture</li>
              <li>UNIX Program</li>
              <li>Alumni Meet - 2022, 2017, 2025</li>
              <li>Distinguished Alumni: Anamika Dakare - ₹60 LPA Adobe</li>
              <li>Student Achievement: Table Tennis Winner 2022-23 B1 Zone</li>
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
    <div className="it-container">
      <h2 className="page-title">Information Technology Department</h2>
      <div className="tabs">
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

export default IT;