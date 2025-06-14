// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.css'

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <li key={name}>
                <span>{name.replace(/-/g, ' ')}</span>
              </li>
            ) : (
              <li key={name}>
                <Link to={routeTo}>{name.replace(/-/g, ' ')}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;