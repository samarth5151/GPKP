import React from 'react';
import { Outlet } from 'react-router-dom';
import './SupportingDept.css';

const SupportingDept = () => {
  return (
    <div className="supporting-departments">
      <div className="support-header">
        <h1>Supporting Departments</h1>
        <p>
          Supporting departments such as Applied Mechanics and Science & Humanities contribute significantly to the foundation of engineering education by imparting core knowledge in mathematics, physics, chemistry, and mechanics.
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default SupportingDept;
