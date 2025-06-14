import React, { useState } from 'react';
import './Civil.css';

const Civil = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="civil-container">
      <h2 className="page-title">Civil Engineering</h2>

      {/* HOD Table */}
      <table className="faculty-table">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Qualification</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Shri. A.N. Devade</td>
            <td>HOD Civil Dept</td>
            <td>B.E Civil</td>
            <td><img src="Ashok_d.jpg" alt="A.N. Devade" className="hod-photo" /></td>
          </tr>
        </tbody>
      </table>

      {/* Navigation Tabs */}
      <div className="tabs">
        {['vision', 'po', 'hod', 'faculty', 'curriculum', 'staff', 'labs', 'gallery'].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab === 'vision' && 'Vision & Mission'}
            {tab === 'po' && 'POs, PSOs, PEOs'}
            {tab === 'hod' && "HOD'S Desk"}
            {tab === 'faculty' && 'Faculty'}
            {tab === 'curriculum' && 'Curriculum'}
            {tab === 'staff' && 'Staff'}
            {tab === 'labs' && 'Labs & Equipments'}
            {tab === 'gallery' && 'Gallery'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content">
        {activeTab === 'vision' && (
          <>
            <h3>Vision</h3>
            <p>
              Civil engineering technicians having global competencies for quality services and entrepreneurship
              for infrastructure development of the nation
            </p>
            <h3>Mission</h3>
            <ul>
              <li>To educate and train the technical manpower of high competency in Civil Engineering</li>
              <li>To ensure employability, encourage entrepreneurship, promote lifelong interdisciplinary liaison to face ever changing needs, risks and constraints</li>
              <li>To generate civil engineering technicians who successfully adapt to local situations and provide innovative solutions for the betterment of the society</li>
              <li>To provide and implement quality management system for civil engineering technician education</li>
            </ul>
          </>
        )}

        {activeTab === 'po' && (
          <>
            <h3>Programme Outcomes (POs)</h3>
            <ul>
              <li>PO1: Apply knowledge of basic mathematics, science, and engineering fundamentals...</li>
              <li>PO2: Identify and analyse well-defined engineering problems...</li>
              <li>PO3: Design solutions for well-defined technical problems...</li>
              <li>PO4: Apply modern engineering tools and techniques...</li>
              <li>PO5: Apply appropriate technology for sustainability and ethics...</li>
              <li>PO6: Use engineering management principles...</li>
              <li>PO7: Engage in life-long learning...</li>
            </ul>
            <h3>Programme Specific Outcomes (PSOs)</h3>
            <ul>
              <li>PSO1: Plan data collection, design and estimation.</li>
              <li>PSO2: Develop management skills for construction and maintenance.</li>
              <li>PSO3: Solve problems on construction sites.</li>
            </ul>
            <h3>Programme Educational Objectives (PEOs)</h3>
            <ul>
              <li>PEO1: Adopt Civil Engineering technologies to solve problems.</li>
              <li>PEO2: Provide eco-friendly and ethical solutions.</li>
              <li>PEO3: Collaborate and communicate effectively.</li>
            </ul>
          </>
        )}

        {activeTab === 'hod' && (
          <>
            <h3>Shri. A.N. Devade</h3>
            <h4>HOD Civil Department</h4>
            <p>
              Welcome to the Department of Civil Engineering at Government Polytechnic, Kolhapur...<br />
              We believe in holistic development and outcome-based education since 2016-17.<br />
              Thank You.
            </p>
          </>
        )}

        {activeTab === 'faculty' && (
          <>
            <table className="faculty-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Qualification</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Shri. A.N. Devade</td><td>HOD Civil Dept</td><td>B.E Civil</td><td>Ashok_d</td></tr>
                <tr><td>Shri. Anand Bapu Rajmane</td><td>Lecturer</td><td>M.E (Construction and Management)</td><td>Anand</td></tr>
                <tr><td>Shri.Sunil Abaji Nikam</td><td>Lecturer</td><td>M.E (Construction and Management)</td><td>nikam</td></tr>
                <tr><td>Shri.Kirankumar A. Kolekar</td><td>Lecturer</td><td>M.E, Ph.D</td><td>Anand</td></tr>
                <tr><td>Shri.Uddhavraj P. Mane</td><td>Lecturer</td><td>MTech Civil - Structural</td><td>Anand</td></tr>
                <tr><td>Sou. Monali S. Kamble</td><td>Lecturer</td><td>M.E (Construction and Management)</td><td>Monali</td></tr>
              </tbody>
            </table>
          </>
        )}

        {activeTab === 'curriculum' && (
          <>
            <ul>
              <li>MPECH16 - <a href="#" className="download-btn">
  Download
</a></li>
              <li>MPECH2020 - <a href="#" className="download-btn">
   Download
</a></li>
            </ul>
          </>
        )}

        {activeTab === 'staff' && (
          <>
            <table className="staff-table">
              <thead>
                <tr><th>Name</th><th>Designation</th></tr>
              </thead>
              <tbody>
                <tr><td>Shri. Sandip A. Vadd</td><td>Tech Hamal</td></tr>
                <tr><td>Shri. Vinod M. Redekar</td><td>Peon</td></tr>
                <tr><td>Shri. Kuldeep D. Kokare</td><td>Lab. Attendant</td></tr>
                <tr><td>Shivaji S. Kamble</td><td>Instructor (Mason)</td></tr>
                <tr><td>Shri. Abhijeet D. Chougule</td><td>Lab. Assistant</td></tr>
              </tbody>
            </table>
          </>
        )}

        {activeTab === 'labs' && (
          <>
            <table className="labs-table">
              <thead>
                <tr><th>Lab Name</th><th>Major Equipment</th><th>Cost</th><th>Photo</th></tr>
              </thead>
              <tbody>
                <tr><td>Environmental</td><td>Digital turbidity meter, Digital pH meter, etc.</td><td>6439</td><td>env lab1</td></tr>
                <tr><td>Hydraulics</td><td>Hydraulic bench, accessories</td><td>193040</td><td>hydraulics lab</td></tr>
                <tr><td>Computer</td><td>Printers, Computers (Acer, Dell, etc.)</td><td>41419</td><td>computer</td></tr>
                <tr><td>Surveying</td><td>Total station, Theodolite, etc.</td><td>417000</td><td>surveylab</td></tr>
                <tr><td>Transportation</td><td>Viscometer, Ductility, Flash & Fire point, etc.</td><td>7628</td><td>tanslab</td></tr>
              </tbody>
            </table>
          </>
        )}

        {activeTab === 'gallery' && (
          <>
            <h3>Achievements</h3>
            <ul>
              <li>Mr. Kolekar achieved Ph.D. in Environmental Project</li>
              <li>Sahil Barve won gold in Wrestling (IEDSSA 2022-23)</li>
              <li>Vedant Rasane won Table Tennis B1 Zone (IEDSSA 2022-23)</li>
            </ul>
            <h3>Timetable</h3>
            <ul>
              <li>FY Civil ENGINEERING - <a href="#" className="download-btn">
   Download
</a></li>
              <li>SY & TY Civil ENGINEERING - <a href="#" className="download-btn">
   Download
</a></li>
              <li>FY 2022-23 Time Table - <a href="#" className="download-btn">
   Download
</a></li>
              <li>Second year 2022-23 - <a href="#" className="download-btn">
   Download
</a></li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Civil;
