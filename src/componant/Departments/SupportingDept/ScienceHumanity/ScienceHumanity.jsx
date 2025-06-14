import React, { useState } from 'react';
import './ScienceHumanity.css';

const ScienceHumanity = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'vision':
        return (
          <div className="tab-content">
            <h3>Department Overview</h3>
            <p>The Department of Science & Humanities plays a foundational role in engineering education by teaching Physics, Chemistry, Mathematics, English and other allied subjects necessary for building technical knowledge.</p>
            <h3>Mission</h3>
            <ul>
              <li>To strengthen the basic knowledge of students in sciences and communication skills.</li>
              <li>To bridge the gap between school-level science and engineering applications.</li>
              <li>To provide a conducive environment for value-based education and personality development.</li>
            </ul>
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
                <tr><td>Shital Baburao Khot</td><td>Lecturer in Physics</td><td>BSc PHYSICS , MSc PHYSICS</td></tr>
                <tr><td>Shailaja Shankar Sankpal</td><td>Lecturer in Physics</td><td>BSc PHYSICS , MSc PHYSICS</td></tr>
                <tr><td>Abhay Shahurao Chavan</td><td>Lecturer in English</td><td>---</td></tr>
                <tr><td>Sudarshan Krishnarao Patil</td><td>Lecturer in English</td><td>M.A. English, M.Phill, B.Ed.</td></tr>
                <tr><td>Mrs. Supriya Sanjay Rote</td><td>Lecturer in Chemistry</td><td>BSc Chemistry , MSc Chemistry</td></tr>
                <tr><td>Jayashri Madhukar Kumbhar</td><td>Lecturer in Mathematics</td><td>MSc Mathematics</td></tr>
                <tr><td>Shri. Piyush Dinesh Malpure</td><td>Lecturer in English</td><td>BArch English , English</td></tr>
                <tr><td>Prashant Sadashiv Gawari</td><td>Lecturer in Chemistry (Shift-II)</td><td>MSc Organic Chemistry</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'staff':
        return (
          <div className="tab-content">
            <h3>Supporting Staff</h3>
            <table className="staff-table">
              <thead>
                <tr><th>Name</th><th>Designation</th></tr>
              </thead>
              <tbody>
                <tr><td>Shri. Gajanan Kisan Dongare</td><td>Instrument Mechanic</td></tr>
                <tr><td>Shri. Suresh Dattatraya Charapale</td><td>Lab Assistant</td></tr>
                <tr><td>Shri. Srikant Vasantrao Sadolikar</td><td>Peon (RO)</td></tr>
                <tr><td>Smt. Sahebjan Raju Shaikh</td><td>Hamal</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'labs':
        return (
          <div className="tab-content">
            <h3>Laboratories</h3>
            <table className="labs-table">
              <thead>
                <tr>
                  <th>Lab Name</th>
                  <th>Major Equipment</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Language Laboratory</td><td>Desktop Computers (20 Nos)</td></tr>
                <tr><td>Chemistry Laboratory I & II</td><td>Burettes, Pipettes, Conical Flasks, Measuring Cylinders, Weighing Balance</td></tr>
                <tr><td>Physics Laboratory I & II</td><td>LCD Projector, Fortins Barometer, Resonance Apparatus, Wheatstone's Bridge, Travelling Microscopes</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'achievements':
        return (
          <div className="tab-content">
            <h3>Highlights & Achievements</h3>
            <ul>
              <li>सेतू अध्ययन उपक्रम (Bridge Learning Initiative)</li>
              <li>Seminar on "Sexual Harassment at workplace, Act 2013"</li>
            </ul>
          </div>
        );
      case 'gallery':
        return (
          <div className="tab-content">
            <h3>Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item">Image 1</div>
              <div className="gallery-item">Image 2</div>
              <div className="gallery-item">Image 3</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="applied-container">
      <h2 className="page-title">Science & Humanities Department</h2>
      <div className="tabs single-line">
        {["vision", "faculty", "staff", "labs", "achievements", "gallery"].map(tab => (
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

export default ScienceHumanity;