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

import EDPCell from './componant/TPO/EDPCell/EDPCell';

import CDCCell from './componant/CDC/CDCCell/CDCCell';
import CurriculumPhilosophy from './componant/CDC/CurriculumPhilosophy/CurriculumPhilosophy';
import CurriculumOverview from './componant/CDC/CurriculumOverview/CurriculumOverview';
import TrainingPlacement from './componant/TPO/TPOCell/TrainingPlacement';



// Departments
import Departments from './componant/Departments/Departments';
import AcademicDepartments from './componant/Departments/AcademicDepartments/AcademicDepartments';
import SupportingDept from './componant/Departments/SupportingDept/SupportingDept';

import Civil from './componant/Departments/AcademicDepartments/Civil/Civil';
import Electrical from './componant/Departments/AcademicDepartments/Electrical/Electrical';
import Mechanical from './componant/Departments/AcademicDepartments/Mechanical/Mechanical';
import IT from './componant/Departments/AcademicDepartments/IT/IT';
import Electronics from './componant/Departments/AcademicDepartments/Electronics/Electronics';

import AppliedMechanics from './componant/Departments/SupportingDept/AppliedMechanics/AppliedMechanics';
import ScienceHumanity from './componant/Departments/SupportingDept/ScienceHumanity/ScienceHumanity';

import ExamCell from './componant/Departments/ExamCell/ExamCell';
import Workshop from './componant/Departments/Workshop/Workshop';

// Student Corner
import StudentCorner from './componant/StudentCorner/StudentCorner';
import AcademicCalendar from './componant/StudentCorner/AcademicCalendar/AcademicCalendar';
import Curriculum from './componant/StudentCorner/Curriculum/Curriculum';
import FirstYearCurriculum2023 from './componant/StudentCorner/FirstYearCurriculum2023/FirstYearCurriculum2023';
import QuestionPapers from './componant/StudentCorner/QuestionPapers/QuestionPapers';
import OurScholars from './componant/StudentCorner/OurScholars/OurScholars';

// Facilities Section
import Facilities from './componant/Facilities/Facilities';
import Hostel from './componant/Facilities/Hostel/Hostel';
import LibrarySection from './componant/Facilities/LibrarySection/LibrarySection';
import CommonFacilities from './componant/Facilities/LibrarySection/CommonFacilities/CommonFacilities.jsx';
import NDLIClub from './componant/Facilities/LibrarySection/NDLIClub/NDLIClub.jsx';
import ONOS from './componant/Facilities/LibrarySection/ONOS/ONOS.jsx';
import Gymkhana from './componant/Facilities/GymKhana/GymKhana';
import StudentsCoOpStore from './componant/Facilities/StudentsCoOpStore/StudentsCoOpStore';
import NSS from './componant/Facilities/NSS/NSS';

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


        {/*/TOP */}
        <Route path="/tpo/edp" element={<EDPCell />} />


        {/*/cdc */}
        <Route path="/cdc/cell" element={<CDCCell />} />
        <Route path="/cdc/philosophy" element={<CurriculumPhilosophy />} />
        <Route path="/cdc/overview" element={<CurriculumOverview />} />
        <Route path="/tpo/tpo_cell" element={<TrainingPlacement />} />

        {/* Departments */}
          <Route path="/departments" element={<Departments/>}>
            <Route path="academic" element={<AcademicDepartments/>}>
              <Route path="civil" element={<Civil/>} />
              <Route path="electrical" element={<Electrical />} />
              <Route path="mechanical" element={<Mechanical />} />
              <Route path="it" element={<IT />} />
              <Route path="electronics" element={<Electronics />} />
              <Route index element={<div className="select-department">Select an academic department</div>} />
            </Route>
            <Route path="supporting" element={<SupportingDept />}>
              <Route path="applied-mechanics" element={<AppliedMechanics />} />
              <Route path="science-humanity" element={<ScienceHumanity />} />
              <Route index element={<div className="select-department">Select a supporting department</div>} />
            </Route>
            <Route path="exam-cell" element={<ExamCell/>} />
            <Route path="workshop" element={<Workshop />} />
            <Route index element={<div className="select-department">Select a department category</div>} />
          </Route>

          {/* Student Corner */}
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/student-corner/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/student-corner/curriculum" element={<Curriculum />} />
          <Route path="/student-corner/first-year-curriculum-2023" element={<FirstYearCurriculum2023 />} />
          <Route path="/student-corner/question-papers" element={<QuestionPapers />} />
          <Route path="/student-corner/our-scholars" element={<OurScholars />} />

          {/* Facilities */}
          <Route path="/facilities" element={<Facilities/>} />
          <Route path="/facilities/hostel" element={<Hostel/>} />
          <Route path="/facilities/library" element={<LibrarySection />} />
          <Route path="/facilities/library/common-facilities" element={<CommonFacilities />} />
          <Route path="/facilities/library/ndli-club" element={<NDLIClub />} />
          <Route path="/facilities/library/onos" element={<ONOS />} />
          <Route path="/facilities/gymkhana" element={<Gymkhana />} />
          <Route path="/facilities/student-store" element={<StudentsCoOpStore />} />
          <Route path="/facilities/nss" element={<NSS />} />


      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}
