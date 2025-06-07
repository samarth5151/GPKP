import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componant/Navbar';
import Home from './componant/Home';
import ContactUs from './componant/ContactUs ';
import Footer from './componant/Footer/footer';

import AboutUs from './componant/About/AboutUs/AboutUs';
import VisionMission from './componant/About/VisionMission/VisionMission';
import PrincipalMessage from './componant/About/PrincipalMessage/PrincipalMessage';
import OrganizationalChart from './componant/About/OrganizationalChart/OrganizationalChart';
import AdministrativeBodies from './componant/About/administrative-bodies/AdministrativeBodies';
import NBAAccreditation from './componant/About/NBAAccreditation/NBAAccreditation';
import Infrastructure from './componant/About/Infrastructure/Infrastructure';
import AdministrativeSection from './componant/About/AdministrativeSection/AdministrativeSection';
import Committees from './componant/About/Committees/Committees';


import EssentialDocuments from './componant/Admissions/EssentialDocuments/EssentialDocuments';
import FeeStructure from './componant/Admissions/FeeStructure/FeeStructure';
import OnlineGrievance from './componant/OnlineGrievance/OnlineGrievance';
import Breadcrumbs from './componant/Breadcrumbs/Breadcrumbs';
import ContinuingEducation from './componant/About/continuing-education/ContinuingEducation';
import DocumentaryFilms from './componant/Admissions/DocumentaryFilms/DocumentaryFilms';



export default function App() {
  return (
    <Router>
      <Navbar />
      <Breadcrumbs/>
<div style={{background:"#fafafa" }}>
      <Routes>
        {/* Add your Routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />

        {/*About */}
        <Route path="/about" element={<AboutUs />}  />
        <Route path="/about_us" element={<AboutUs />}  />
        <Route path="/Vision&Mission" element={<VisionMission />}  />
        <Route path="/Principal's_Message" element={<PrincipalMessage />}  />
        <Route path="/Organizational_Structure" element={<OrganizationalChart />}  />
        <Route path="/Administrative_Bodies" element={<AdministrativeBodies />} />
        <Route path="/NBA_Accreditation" element={<NBAAccreditation />} />
        <Route path="/Infrastructure" element={<Infrastructure />}  />
        <Route path="/Continuing_Education_Programme" element={<ContinuingEducation/>}  />
        <Route path="/admin-section" element={<AdministrativeSection />} />
        <Route path="/committees" element={<Committees />} />

        {/*Admissions */}
        <Route path="/Essential_Documents" element={<EssentialDocuments />} />
        <Route path="/fee_structure" element={<FeeStructure />} />
        <Route path="/Documentary_films" element={<DocumentaryFilms />} />
        <Route path="/online-grievance" element={<OnlineGrievance />} />

      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}
