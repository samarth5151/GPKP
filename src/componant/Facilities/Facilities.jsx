import React from 'react';
import './Facilities.css';
import { Link } from 'react-router-dom';

export default function Facilities() {
  return (
    <div className="facilities-container">
      <h1 className="facilities-title">Facilities</h1>
      <div className="facilities-grid">
        <Link to="/facilities/hostel" className="facilities-card">
          <div className="card-content">
            <h3>Hostel</h3>
          </div>
        </Link>

        <Link to="/facilities/library-section" className="facilities-card">
          <div className="card-content">
            <h3>Library Section</h3>
          </div>
        </Link>

        <Link to="/facilities/gymkhana" className="facilities-card">
          <div className="card-content">
            <h3>Gymkhana</h3>
          </div>
        </Link>

        <Link to="/facilities/students-coop-store" className="facilities-card">
          <div className="card-content">
            <h3>Students Co-operative Store</h3>
          </div>
        </Link>

        <Link to="/facilities/nss" className="facilities-card">
          <div className="card-content">
            <h3>NSS</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
