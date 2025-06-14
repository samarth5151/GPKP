import React, { useState } from 'react';
import './Workshop.css';

const Workshop = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <h3>Workshop</h3>
            <table className="faculty-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Qualification</th>
                  <th>Faculty Photo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mr. Dhote Jayendra Dhyanchand</td>
                  <td>Workshop Supdt.</td>
                  <td>Lecturer in Mechanical Engg.</td>
                  <td>No-image</td>
                </tr>
              </tbody>
            </table>
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
                  <th>Faculty Photo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mr. Dhote Jayendra Dhyanchand</td>
                  <td>Workshop Supdt.</td>
                  <td>Lecturer in Mechanical Engg.</td>
                  <td>No-image</td>
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
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Shri. Jayant Nivrutti Kaingade</td><td>Welder</td></tr>
                <tr><td>Shri. Keshav Thalu Kamat</td><td>Instructor, Pattern Maker</td></tr>
                <tr><td>Shri. Sanjay Shankar Patil</td><td>General Mechanic</td></tr>
                <tr><td>Shri. Purushottam Yashavantrao Londhe</td><td>Moulder</td></tr>
                <tr><td>Shri. Pravin Shrikantrao Shinde</td><td>Storekeeper</td></tr>
                <tr><td>Shri. Tatya Gopu Jagatap</td><td>Chargeman</td></tr>
                <tr><td>Shri. Gajanan Dattatray Tepugade</td><td>Instructor, General Mech.</td></tr>
                <tr><td>Shri. Anant Bajarang Mane</td><td>Instructor, Machinist</td></tr>
                <tr><td>Shri. Pandurang Jivaji Rajmane</td><td>Instructor, Carpenter</td></tr>
                <tr><td>Shri. Gautam Vijay Pagare</td><td>Instructor, Turner</td></tr>
                <tr><td>Shri. Prakash Mashappa Chavan</td><td>Technical Hamal</td></tr>
                <tr><td>Shri. Krishna Bhima Bhalbar</td><td>Laboratory Attendant</td></tr>
                <tr><td>Shri. Ashish Gunvantrao Patrakar</td><td>Instructor, Fitter</td></tr>
              </tbody>
            </table>
          </div>
        );

      case 'trades':
        return (
          <div className="tab-content">
            <h3>Workshop Trades / Sections</h3>
            <ol>
              <li>Turning Section</li>
              <li>Machine Shop Section</li>
              <li>Carpentry Section</li>
              <li>Welding Section</li>
              <li>Moulding Section</li>
              <li>Smithy Section</li>
              <li>Fitting Section</li>
              <li>Pattern Making</li>
              <li>Sheet Metal and Plumbing Section</li>
            </ol>
          </div>
        );

      case 'achievements':
        return (
          <div className="tab-content">
            <h3>Achievements & Highlights</h3>
            <ul>
              <li>Auto Riksha Meter Testing Workshop</li>
            </ul>
          </div>
        );

      case 'revenue':
        return (
          <div className="tab-content">
            <h3>Revenue Generation by Workshop</h3>
            <ul>
              <li>Year 2021-22 – ₹17,21,187</li>
              <li>Year 2020-21 – ₹12,24,958</li>
              <li>Year 2019-20 – ₹9,47,584</li>
            </ul>
          </div>
        );

      case 'gallery':
        return (
          <div className="tab-content">
            <h3>Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item">Upload Image 1</div>
              <div className="gallery-item">Upload Image 2</div>
              <div className="gallery-item">Upload Image 3</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="workshop-container">
      <h2 className="page-title">Workshop Department</h2>
      <div className="tabs single-line">
        {[
          { key: 'overview', label: 'Overview' },
          { key: 'faculty', label: 'Faculty' },
          { key: 'staff', label: 'Support Staff' },
          { key: 'trades', label: 'Workshop Trades' },
          { key: 'achievements', label: 'Achievements' },
          { key: 'revenue', label: 'Revenue Generation' },
          { key: 'gallery', label: 'Gallery' },
        ].map(tab => (
          <button
            key={tab.key}
            className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Workshop;
