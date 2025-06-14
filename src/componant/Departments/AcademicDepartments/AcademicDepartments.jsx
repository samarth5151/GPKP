import React from 'react';
import { Outlet } from 'react-router-dom';
import './AcademicDepartments.css';

const AcademicDepartments = () => {
  return (
    <div className="academic-departments">
      <div className="dept-header">
        <h1>Academic Departments</h1>
        <p>Government Polytechnic Kolhapur offers various diploma programs in engineering and technology.</p>
      </div>
      <Outlet />
    </div>
  );
};

export default AcademicDepartments;