import React, { useState } from 'react';
import './Mechanical.css';

const Mechanical = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="mechanical-container">
      <h2 className="page-title">Mechanical Engineering Department</h2>

      <div className="tabs single-line">
        {["vision", "po", "hod", "faculty", "curriculum", "staff", "labs", "gallery"].map((tab) => (
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

      <div className="tab-content">
        {activeTab === "vision" && (
          <>
            <h3>Vision</h3>
            <p>Internationally recognized programme for development of mechanical engineering technicians providing platform for entrepreneurship and incubation for industry of the country.</p>
            <h3>Mission</h3>
            <ul>
              <li>To educate and train students for employment or entrepreneurship or higher education in mechanical engineering</li>
              <li>To provide student centric learning system having focus on development of global professional competency</li>
              <li>To inculcate elements of holistic personality, responsible citizenship and social concern</li>
            </ul>
          </>
        )}

        {activeTab === "po" && (
          <>
            <h3>Programme Outcomes (POs)</h3>
            <ul>
              <li>PO1: Apply knowledge of basic mathematics, science and engineering fundamentals...</li>
              <li>PO2: Identify and analyse well-defined engineering problems...</li>
              <li>PO3: Design solutions for well-defined technical problems...</li>
              <li>PO4: Apply modern engineering tools and techniques...</li>
              <li>PO5: Apply appropriate technology for sustainability and ethics...</li>
              <li>PO6: Use engineering management principles...</li>
              <li>PO7: Engage in life-long learning...</li>
            </ul>
            <h3>Programme Specific Outcomes (PSOs)</h3>
            <ul>
              <li>PSO1: Work in manufacturing and service sectors as a production supervisor, quality inspector, design assistant, etc.</li>
              <li>PSO2: Start entrepreneurial activity in the Mechanical Engineering field.</li>
            </ul>
            <h3>Programme Educational Objectives (PEOs)</h3>
            <ul>
              <li>PEO1: Be employed as a practicing engineer in the fields of manufacturing and service sectors.</li>
              <li>PEO2: Assume positions of leadership and responsibility within an organization.</li>
              <li>PEO3: Progress through higher education and certificate programs in Engineering.</li>
              <li>PEO4: Startup own service or manufacturing enterprise.</li>
              <li>PEO5: Apply a set of moral principles to all interactions with stakeholders.</li>
            </ul>
          </>
        )}

        {activeTab === "hod" && (
          <>
            <h3>Shri. Pramod Uttam Wayse</h3>
            <h4>HOD Mechanical Department</h4>
          </>
        )}

        {activeTab === "faculty" && (
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
              <tr><td>Shri. Bharatbhushan Vishnu Kamble</td><td>Incharge HOD</td><td>Ph.D, ME (Power Engg.), BE (MECH)</td><td>No-image</td></tr>
              <tr><td>Mr Amar T. Patil</td><td>Lecturer</td><td>BE Mech, LLB</td><td>pramodwyse_mech</td></tr>
              <tr><td>Mr. D. J. Dhyanchand</td><td>Lecturer</td><td>BE Mechanical, Energy Tech.</td><td>gpk</td></tr>
              <tr><td>Dr. R. L. Doiphode</td><td>Lecturer</td><td>Ph.D (IIT Bombay), ME, BE</td><td>gpk</td></tr>
              <tr><td>Mr. B. P. Patil</td><td>Lecturer</td><td>ME (Pursuing), BE (Production)</td><td>gpk</td></tr>
              <tr><td>Smt. S. P. Itekari</td><td>Lecturer</td><td>ME (Pursuing), B.Tech (MECH)</td><td>gpk</td></tr>
              <tr><td>Mr. A. A. Shaikh</td><td>Lecturer</td><td>M.Tech (Design), BE (MECH)</td><td>gpk</td></tr>
              <tr><td>Mr. P. A. Shevale</td><td>Lecturer</td><td>Ph.D (Pursuing), M.Tech, BE</td><td>gpk</td></tr>
              <tr><td>Mr. R. R. Chougale</td><td>Lecturer</td><td>M.Tech (Design)</td><td>gpk</td></tr>
              <tr><td>Mr. Y. R. Satpute</td><td>Lecturer</td><td>M.Tech (Production)</td><td>gpk</td></tr>
              <tr><td>Mr. J. B. Patil</td><td>Lecturer</td><td>M.Tech (Manufacturing), BE</td><td>gpk</td></tr>
              <tr><td>Smt. A. P. Yadav</td><td>Lecturer</td><td>ME (Production), BE</td><td>gpk</td></tr>
              <tr><td>Mr. M. P. Mahajan</td><td>Lecturer</td><td>--</td><td>gpk</td></tr>
            </tbody>
          </table>
        )}

        {activeTab === "curriculum" && (
          <ul>
            <li>MPECH16 - <a href="#" className="download-btn">Download</a></li>
            <li>MPECH2020 - <a href="#" className="download-btn">Download</a></li>
          </ul>
        )}

        {activeTab === "staff" && (
          <table className="staff-table">
            <thead>
              <tr><th>Name</th><th>Designation</th></tr>
            </thead>
            <tbody>
              <tr><td>Shri. Atul Vasant Sane</td><td>Lab Assistant</td></tr>
              <tr><td>Sutar Dattatrya Bhikaji</td><td>Instructor Tech. Lab Assistant</td></tr>
              <tr><td>Mr. Chavan Narayan Mallu</td><td>Technical Lab Assistant</td></tr>
              <tr><td>Chavan Parshuram Sitaram</td><td>Peon</td></tr>
              <tr><td>Pardeshi Vijay Chandrakant</td><td>Sweeper</td></tr>
              <tr><td>Shri. Raju M. Pandat</td><td>सफाईगार</td></tr>
              <tr><td>Gurav Yashwant Bhau</td><td>तंत्र हमाल</td></tr>
            </tbody>
          </table>
        )}

        {activeTab === "labs" && (
          <table className="labs-table">
            <thead>
              <tr>
                <th>Lab Name</th>
                <th>Major Equipment</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Engineering Metrology</td><td>Slip gauge set, Digital Height Gauge, Bevel Protractor, Screw Thread Micrometer, Gear tooth vernier caliper</td><td>₹880,147</td></tr>
              <tr><td>Computer Lab</td><td>Computers</td><td>₹1,000,000</td></tr>
              <tr><td>Industrial Hydraulics and Pneumatics</td><td>Pneumatic circuit trainer, Hydraulic trainer, Pumps, Rigs</td><td>₹240,886</td></tr>
              <tr><td>Fluid Mechanics and Machinery</td><td>Pelton Wheel Test Rig, Pumps, Measurement Kits</td><td>₹240,000</td></tr>
              <tr><td>Refrigeration and Air Conditioning</td><td>Ice Plant, Cold Storage, AC kit</td><td>₹432,723</td></tr>
              <tr><td>Theory of Machine</td><td>Gyroscope, Governor, Mechanism Models</td><td>₹143,508</td></tr>
            </tbody>
          </table>
        )}

        {activeTab === "gallery" && (
          <>
            <h3>Achievements</h3>
            <ul>
              <li>Auto Riksha meter testing Workshop</li>
            </ul>
            <h3>Timetable</h3>
            <ul>
              <li>FY Mechanical ENGINEERING - <a href="#" className="download-btn">Download</a></li>
              <li>SY Mechanical ENGINEERING - <a href="#" className="download-btn">Download</a></li>
              <li>TY Mechanical ENGINEERING - <a href="#" className="download-btn">Download</a></li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Mechanical;
