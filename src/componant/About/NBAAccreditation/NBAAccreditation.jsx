// NBAAccreditation.jsx
import './NBAAccreditation.css';

function NBAAccreditation() {
  return (
    <div className="nba-container">
      <h1 className="nba-heading">NBA Accreditation</h1>
      
      <div className="nba-content">
        <h2 className="status-heading">Status of NBA Accreditation</h2>
        
        <div className="nba-status">
          <p className="accreditation-status">
            <strong>NBA Accredited from 2022-23 to 2024-2025.</strong> Three programmes are accredited:
          </p>
          
          <ul className="program-list">
            <li>Electrical Engineering</li>
            <li>Electronics and Telecommunication Engineering</li>
            <li>Information Technology accredited by NBA, New Delhi.</li>
          </ul>
        </div>
        
        <h2 className="past-heading">Past NBA visit</h2>
        
        <div className="past-nba">
          <p className="past-accreditation">
            <strong>2003 :</strong> NBA Accreditation for Four Programmes (CE, ME, EE & IE) in 2003 for 3 years
          </p>
        </div>
      </div>
    </div>
  );
}

export default NBAAccreditation;