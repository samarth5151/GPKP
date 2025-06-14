// CurriculumOverview.jsx
import './CurriculumOverview.css';

function CurriculumOverview() {
  return (
    <div className="overview-container">
    
      
      <h1 className="overview-heading">Curriculum Overview</h1>
      
      <div className="overview-content">
        <h2 className="overview-subheading">Salient features Academic Autonomy</h2>
        
        <ul className="overview-list">
          <li>Curriculum design and revision by the Institute itself: 1992,MPECS-2000,MPECS-2006, MPECS-2010,MPECS-2013, MPESC-2016,MPECS-2020</li>
          <li>Conduct of examination and assessment by the institute itself: Paper-setting and assessment is done partly internally and partly externally</li>
          <li>Award of Diploma by the Institute itself: Annual Convocation Ceremony</li>
        </ul>
        
        <h3 className="mpecs-heading">OVERVIEW OF MPECS 2020 curriculum</h3>
        <p className="mpecs-subtitle">Curriculum Philosophy: Outcome-based Education (OBE) (Since MPECS-2016, MPECS-2020)</p>
        
        <div className="mpecs-box">
          <p className="mpecs-box-heading">Salient Features of MPECS 2020 Curriculum:</p>
          
          <ul className="mpecs-features">
            <li>Total number of Credits : <strong>120</strong></li>
            <li>Total maximum marks of all levels : <strong>5100</strong></li>
            <li>Total number of course levels : <strong>5</strong></li>
            <li>Diploma award levels : <strong>All course of semester 5 and 6</strong></li>
            <li>Total maximum marks for award of Diploma : <strong>1700</strong></li>
            <li>Total number of elective courses : <strong>minimum 3</strong></li>
            <li>MPECS 2023 curriculum is as per NEP 2020</li>
            <li>Industrial Internship of 12 weeks (8 credits)</li>
            <li>Continuous 12 weeks after 4th semester</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CurriculumOverview;