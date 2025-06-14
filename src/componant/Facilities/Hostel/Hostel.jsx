import React from 'react';
import './Hostel.css';

export default function Hostel() {
  return (
    <div className="hostel-container">
      <h1 className="page-title">Hostel Facility</h1>

      {/* Rector Information */}
      <section className="section">
        <h2>Rector</h2>
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Rector Name</th>
              <th>Designation</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SHRI. V.S. Waydande</td>
              <td>Lecturer</td>
              <td>SHRI. V.S. Waydande</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Warden Information */}
      <section className="section">
        <h2>Warden</h2>
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Warden Name (Boys Hostel)</th>
              <th>Photo</th>
              <th>Warden Name (Girls Hostel)</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mr. Raju D. Barkade</td>
              <td>Mr. Raju D. Barkade</td>
              <td>Smt. Rohini Bhikaji Varne</td>
              <td>Smt. Rohini Bhikaji Varne</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Girls Hostel Info */}
      <section className="section">
        <h2>Girls Hostel</h2>
        <p><strong>Total Capacity:</strong> 135</p>
        <p><strong>Facilities Provided:</strong></p>
        <ul>
          <li>Solar Water Heater</li>
          <li>CCTV Camera</li>
          <li>Aqua Guard Water Filter</li>
        </ul>
        <p><strong>Rector:</strong> SHRI. V. S. Waydande</p>
        <p><strong>Warden (Girls Hostel):</strong> Smt. Rohini Bhikaji Varne</p>
      </section>

      {/* Boys Hostel Info */}
      <section className="section">
        <h2>Boys Hostel</h2>
        <p><strong>Total Capacity:</strong> 180</p>
        <p><strong>Facilities Provided:</strong></p>
        <ul>
          <li>Solar Water Heater</li>
          <li>CCTV Camera</li>
          <li>Aqua Guard Water Filter</li>
        </ul>
        <p><strong>Rector:</strong> SHRI. V. S. Waydande</p>
        <p><strong>Warden (Boys Hostel):</strong> Mr. Raju D. Barkade</p>
      </section>

      {/* Infrastructure Gallery */}
      <section className="section">
        <h2>Hostel Infrastructure Gallery</h2>
        <div className="gallery">
          <img src="/images/hostel/gpk_bag_4.jpg" alt="Hostel Image 1" />
          <img src="/images/hostel/gpk_bag_2.jpg" alt="Hostel Image 2" />
          <img src="/images/hostel/gpk_bag_3.jpg" alt="Hostel Image 3" />
          <img src="/images/hostel/boyshostel-v1.jpg" alt="Hostel Image 4" />
        </div>
      </section>
    </div>
  );
}
