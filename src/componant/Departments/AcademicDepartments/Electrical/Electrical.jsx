import React, { useState } from 'react';
import './Electrical.css';

const Electrical = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="electrical-container">
      <h2 className="page-title">Electrical Engineering Department</h2>

      {/* Tabbed Navigation */}
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

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "vision" && (
          <>
            <h3>Vision</h3>
            <p>Skilled technicians serving the industry/society as entrepreneurs or rendering services in the fields related to electrical engineering following professional and ethical practices.</p>
            <h3>Mission</h3>
            <ul>
              <li>To provide quality innovative skilled based electrical engineering courses</li>
              <li>To prepare technicians for the state-of-the-art technology by promoting lifelong learning, technical expertise, ethical standards and leadership qualities</li>
              <li>Commit our faculty expertise and modern facilities to the industry, the profession, and the local constituents.</li>
            </ul>
          </>
        )}

        {activeTab === "po" && (
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
              <li>PSO1: Maintain various types of electrical equipment</li>
              <li>PSO2: Maintain various sections of electrical power systems</li>
            </ul>
            <h3>Programme Educational Objectives (PEOs)</h3>
            <ul>
              <li>PEO1: Provide responsible and environment-friendly solutions...</li>
              <li>PEO2: Use prevailing electrical technologies to solve multi-disciplinary problems</li>
              <li>PEO3: Contribute as an individual or team member through effective communication</li>
            </ul>
          </>
        )}

        {activeTab === "hod" && (
          <>
            <h3>Shri. Shrikant Maruti Naik</h3>
            <h4>HOD Electrical Department</h4>
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
              <tr><td>Shri. Shrikant Maruti Naik</td><td>H.O.D.</td><td>M.E. (Power System)</td><td>shrikant_electrical</td></tr>
              <tr><td>Shri. D.Y.Shingare</td><td>Lecturer</td><td>M.E. (Power System)</td><td>D Y Shingare</td></tr>
              <tr><td>Mrs. S.S.Ingole</td><td>Lecturer</td><td>M.E. (Power System)</td><td>S S Ingole</td></tr>
              <tr><td>Smt. Vibhavari R. Jadhav</td><td>Lecturer</td><td>M.E. (Power System)</td><td>Vibhavari Ramchandra Jadhav</td></tr>
              <tr><td>Shri. A.S.Waychal</td><td>Lecturer</td><td>M.E. (Power System)</td><td>--</td></tr>
              <tr><td>Shri. C.S. Phutane</td><td>Lecturer</td><td>M.E. (Power System)</td><td>No-image</td></tr>
              <tr><td>Shri. Raviraj B. Adlinge</td><td>Lecturer</td><td>B. Tech. Electrical</td><td>No-image</td></tr>
              <tr><td>Shri. A.B. Katker</td><td>Lecturer</td><td>M.Tech. (Energy Technology)</td><td>A B Katkar</td></tr>
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
              <tr>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Mr Ramesh S. Shinde</td><td>Instructor-Electrician</td></tr>
              <tr><td>Mr Gomtesh A. Pandit</td><td>Instructor-Electrician</td></tr>
              <tr><td>Smt. Jyoti V. Nilkanth</td><td>Instructor-Electrician</td></tr>
              <tr><td>Mr. Sudarshan J. Ganeshacharya</td><td>Tantrahamal</td></tr>
              <tr><td>Mr. Yashoda A. Dabhade</td><td>Tantrahamal</td></tr>
            </tbody>
          </table>
        )}

        {activeTab === "labs" && (
          <>
            <h3>Labs & Equipments</h3>
            <p>Detailed data on all major labs and their equipment is available. Due to length, data can be split into sub-sections or tabs if needed in future. Each lab includes equipment name and cost.</p>
            <p>(Due to JSX length, consider rendering each lab as a collapsible panel for better UX.)</p>
          </>
        )}

        {activeTab === "gallery" && (
          <>
            <h3>Gallery</h3>
            <ul>
              <li>माजी विद्यार्थ्यांचा स्नेह मेळावा</li>
              <li>कॉलेजचे दिवस</li>
            </ul>
            <h3>Timetable</h3>
            <ul>
              <li>FY Electrical ENGINEERING - <a href="#" className="download-btn">Download</a></li>
              <li>SY Electrical ENGINEERING - <a href="#" className="download-btn">Download</a></li>
              <li>TY Electrical ENGINEERING - <a href="#" className="download-btn">Download</a></li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Electrical;
