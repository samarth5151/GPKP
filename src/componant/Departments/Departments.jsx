import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Departments.css';

const Departments = () => {
  return (
    <div className="departments-container">
      <div className="departments-sidebar">
        <h2 className="sidebar-title">Departments</h2>
        <ul className="department-links">
          <li>
            <NavLink 
              to="academic" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <i className="fas fa-graduation-cap"></i> Academic Departments
            </NavLink>
            <ul className="sub-links">
              <li>
                <NavLink to="academic/civil">Civil Engineering</NavLink>
              </li>
              <li>
                <NavLink to="academic/electrical">Electrical Engineering</NavLink>
              </li>
              <li>
                <NavLink to="academic/mechanical">Mechanical Engineering</NavLink>
              </li>
              <li>
                <NavLink to="academic/it">Information Technology</NavLink>
              </li>
              <li>
                <NavLink to="academic/electronics">Electronics & Telecommunication</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink 
              to="supporting" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <i className="fas fa-cogs"></i> Supporting Departments
            </NavLink>
            <ul className="sub-links">
              <li>
                <NavLink to="supporting/applied-mechanics">Applied Mechanics</NavLink>
              </li>
              <li>
                <NavLink to="supporting/science-humanity">Science & Humanities</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink 
              to="exam-cell" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <i className="fas fa-file-alt"></i> Exam Cell
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="workshop" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <i className="fas fa-tools"></i> Workshop
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="departments-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Departments;