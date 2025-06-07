// VisionMission.jsx
import './VisionMission.css';

function VisionMission() {
  return (
    <div className="vision-container">
      <h1 className="vision-heading">Vision & Mission</h1>
      
      <div className="vision-content">
        <h2 className="section-heading">Institute Vision</h2>
        <p className="vision-text">
          Institute of high recognition to develop competent technicians for quality professional services and entrepreneurship to cater the needs of industry and society.
        </p>
        
        <h2 className="section-heading">Institute Mission</h2>
        <ul className="mission-list">
          <li className="mission-item">
            To educate and train in multi disciplinary multi-level programs to develop competent technicians and skilled manpower for industrial needs
          </li>
          <li className="mission-item">
            To ensure employability, encourage entrepreneurship, promote lifelong learning
          </li>
          <li className="mission-item">
            To inculcate in students the qualities of a good citizen at individual, social and professional level
          </li>
          <li className="mission-item">
            To provide quality management system with focus on effective student-centric education and high recognition
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VisionMission;