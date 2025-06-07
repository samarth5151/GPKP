// AdministrativeSection.jsx
import React, { useState } from 'react';
import './AdministrativeSection.css';

function AdministrativeSection() {
  const [activeTab, setActiveTab] = useState('Office');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-section-container">
      <h1 className="admin-section-heading">Administrative section</h1>
      
      <div className="admin-section-content">
        <div className="admin-sidebar">
          <div 
            className={`admin-sidebar-item ${activeTab === 'Office' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Office')}
          >
            Office
          </div>
          <div 
            className={`admin-sidebar-item ${activeTab === 'Staff' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Staff')}
          >
            Staff
          </div>
          <div 
            className={`admin-sidebar-item ${activeTab === 'Useful Forms' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Useful Forms')}
          >
            Useful Forms
          </div>
          <div 
            className={`admin-sidebar-item ${activeTab === 'Notification/Circulars' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Notification/Circulars')}
          >
            Notification/Circulars
          </div>
          <div 
            className={`admin-sidebar-item ${activeTab === 'Audit Reports' ? 'active' : ''}`} 
            onClick={() => handleTabClick('Audit Reports')}
          >
            Audit Reports
          </div>
        </div>
        
        <div className="admin-main-content">
          {activeTab === 'Office' && (
            <OfficeContent />
          )}
          
          {activeTab === 'Staff' && (
            <StaffContent />
          )}
          
          {activeTab === 'Useful Forms' && (
            <UsefulFormsContent />
          )}
          
          {activeTab === 'Notification/Circulars' && (
            <NotificationsContent />
          )}
          
          {activeTab === 'Audit Reports' && (
            <AuditReportsContent />
          )}
        </div>
      </div>
    </div>
  );
}

function OfficeContent() {
  return (
    <div className="admin-panel">
      <h2 className="admin-panel-heading">Office</h2>
      
      <div className="admin-subpanel">
        <h3 className="admin-subpanel-heading">Head Of Institute</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Email Id</th>
              <th>Phone</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Capt.Dr.N.P.Sonaje</td>
              <td>Principal</td>
              <td>-</td>
              <td>-</td>
              <td><img src="/placeholder.jpg" alt="Principal" className="admin-photo" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="admin-subpanel">
        <h3 className="admin-subpanel-heading">Registrar</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Email Id</th>
              <th>Phone</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Smt.Mahajabin A.Mhaishale</td>
              <td>Registrar</td>
              <td>-</td>
              <td>02312531038</td>
              <td><img src="/placeholder.jpg" alt="Registrar" className="admin-photo" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StaffContent() {
  return (
    <div className="admin-panel">
      <h2 className="admin-panel-heading">Staff</h2>
      
      <div className="admin-subpanel">
        <h3 className="admin-subpanel-heading">Confidential Section</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Email Id</th>
              <th>Phone</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr. Mangesh Prakash Bedagkar</td>
              <td>Stenographer</td>
              <td>mbedagkar@gmail.com</td>
              <td>7798088035</td>
              <td><img src="/placeholder.jpg" alt="Staff" className="admin-photo" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="admin-subpanel">
        <h3 className="admin-subpanel-heading">Establishment Section</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr. Anil Krishna Salgar</td>
              <td>Office Supdt</td>
              <td><img src="/placeholder.jpg" alt="Staff" className="admin-photo" /></td>
            </tr>
            <tr>
              <td>Mr. Prabhakar Mallappa Shedbale</td>
              <td>Head Clerk</td>
              <td><img src="/placeholder.jpg" alt="Staff" className="admin-photo" /></td>
            </tr>
            <tr>
              <td>Mr. Madan Shamrao Kavade</td>
              <td>Senior Clerk</td>
              <td><img src="/placeholder.jpg" alt="Staff" className="admin-photo" /></td>
            </tr>
            <tr>
              <td>Smt. Hemlata Vilas Bhambure</td>
              <td>Senior Clerk</td>
              <td><img src="/placeholder.jpg" alt="Staff" className="admin-photo" /></td>
            </tr>
            <tr>
              <td>Smt. Jagdevi Karbasappa Kerurkar</td>
              <td>Senior Clerk</td>
              <td><img src="/placeholder.jpg" alt="Staff" className="admin-photo" /></td>
            </tr>
            <tr>
              <td>Mr. Nitin Bhagwat Lavurkar</td>
              <td>Junior Clerk</td>
              <td><img src="/placeholder.jpg" alt="Staff" className="admin-photo" /></td>
            </tr>
            <tr>
              <td>Mr. Rahul Dnyandeo Nagargoje</td>
              <td>Junior Clerk</td>
              <td><img src="/placeholder.jpg" alt="Staff" className="admin-photo" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="admin-subpanel">
        <h3 className="admin-subpanel-heading">Student Section</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr. Bajirao Sampatrao Patil</td>
              <td>Senior Clerk</td>
              <td><img src="/placeholder.jpg" alt="Student" className="admin-photo" /></td>
            </tr>
            <tr>
              <td>Mr. Dilip Shankarro Shinde</td>
              <td>Senior Clerk</td>
              <td><img src="/placeholder.jpg" alt="Student" className="admin-photo" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="admin-subpanel">
        <h3 className="admin-subpanel-heading">Inward Outward</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Smt. Arati Diwakar Joshi</td>
              <td>Senior Clerk</td>
              <td><img src="/placeholder.jpg" alt="Inward/Outward" className="admin-photo" /></td>
            </tr>
            <tr>
              <td>Mr. Dipak Gomaji Pradhan</td>
              <td>Junior Clerk</td>
              <td><img src="/placeholder.jpg" alt="Inward/Outward" className="admin-photo" /></td>
            </tr>
            <tr>
              <td>Mr. Deepak Patil</td>
              <td>Hostel Clerk</td>
              <td><img src="/placeholder.jpg" alt="Inward/Outward" className="admin-photo" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UsefulFormsContent() {
  return (
    <div className="admin-panel">
      <h2 className="admin-panel-heading">Useful Forms</h2>
      <ul className="forms-list">
        <li>Matta va Dayittva</li>
        <li>Computer Adv Checklist</li>
        <li>gpf refundable</li>
        <li>gpf_non_refundable</li>
        <li>Festival Adavance forms</li>
        <li>charge_transfer_certificate_gaz_officer_gen_93_m</li>
        <li>Motor_Cycle_Adv_Check_List</li>
        <li>Earned leave application</li>
        <li>CL Application</li>
        <li>GPF Final Required Documents</li>
        <li>Passport NOC Form</li>
        <li>Payee Registration Form-A – Govt. Employee</li>
        <li>Payee Registration Form-A – Vendor-PPSS</li>
        <li>Transfer Application</li>
        <li>VRS Application</li>
      </ul>
    </div>
  );
}

function NotificationsContent() {
  return (
    <div className="admin-panel">
      <h2 className="admin-panel-heading">Notification/Circulars</h2>
      <p className="notification-content">Notification/Circulars content will be displayed here</p>
    </div>
  );
}

function AuditReportsContent() {
  return (
    <div className="admin-panel">
      <h2 className="admin-panel-heading">Audit Reports</h2>
      <p className="audit-content">Audit Reports content will be displayed here</p>
    </div>
  );
}

export default AdministrativeSection;