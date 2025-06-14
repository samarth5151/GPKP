import React, { useState } from 'react';
import './AppliedMechanics.css';

const AppliedMechanics = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'vision':
        return (
          <div className="tab-content">
            <h3>Vision</h3>
            <p>Produce Technicians of high caliber in core engineering discipline</p>
            <h3>Mission</h3>
            <ul>
              <li>To educate and train the technical manpower of high competency in Civil Engineering</li>
              <li>To ensure employability, encourage entrepreneurship, promote lifelong inter-disciplinary liaison</li>
              <li>To generate civil engineering technicians who provide innovative solutions for society</li>
              <li>To implement quality management system for technician education</li>
            </ul>
          </div>
        );
      case 'about':
        return (
          <div className="tab-content">
            <h3>About Department</h3>
            <p>
              Applied Mechanics Department (AMD) is an allied discipline supporting engineering programs like Civil, Mechanical,
              Electrical, and Metallurgy with fundamental and advanced courses. It also provides services through material testing
              and consultancy.
            </p>
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
                  <td>Dr. Mohankumar P. Hampali</td>
                  <td>Selection Grade Lecturer (II)</td>
                  <td>PhD (Struct Engg), ME (Struct Engg), BE (Civil)</td>
                </tr>
                <tr>
                  <td>Smt. Mamata Sanjay Morye</td>
                  <td>Lecturer in Applied Mechanics</td>
                  <td>M.E</td>
                </tr>
              </tbody>
            </table>
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
                <tr><td>Shri Shailesh Rajaram Sutar</td><td>Tech. Lab. Asst. (II Shift)</td></tr>
                <tr><td>Shri Kakaso Bandu Lokhande</td><td>Tantra-Hamal</td></tr>
                <tr><td>Shri Satish Anant Madhale</td><td>Peon</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'labs':
        return (
          <div className="tab-content">
            <h3>Laboratories</h3>
            <ul>
              <li>Soil Mechanics Laboratory</li>
              <li>Concrete Technology Laboratory</li>
              <li>Applied Mechanics Laboratory</li>
              <li>Mechanics of Structures / Strength of Materials Laboratory</li>
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
    <div className="applied-container">
      <h2 className="page-title">Applied Mechanics Department</h2>
      <div className="tabs single-line">
        {['vision', 'about', 'faculty', 'staff', 'labs', 'gallery'].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {renderTabContent()}
    </div>
  );
};

export default AppliedMechanics;
