import React from 'react';
import { FaTools, FaLaptopCode, FaBolt, FaCogs, FaBroadcastTower, FaThLarge } from 'react-icons/fa';
import './DocumentaryFilms.css';

const DocumentaryFilms = () => {
  const links = [
    {
      label: "Civil Engineering Group",
      icon: <FaTools />,
      url: "https://msbte.org.in/portal/flims-civil-engineering-group/",
    },
    {
      label: "Computer Engineering Group",
      icon: <FaLaptopCode />,
      url: "https://msbte.org.in/portal/flims-computer-engineering-group/",
    },
    {
      label: "Electrical Engineering Group",
      icon: <FaBolt />,
      url: "https://msbte.org.in/portal/flims-electrical-engineering-group/",
    },
    {
      label: "Electronic Engineering Group",
      icon: <FaBroadcastTower />,
      url: "https://msbte.org.in/portal/flims-electronic-engineering-group/",
    },
    {
      label: "Mechanical Engineering Group",
      icon: <FaCogs />,
      url: "https://msbte.org.in/portal/flims-mechanical-engineering-group/",
    },
    {
      label: "Other Engineering Group",
      icon: <FaThLarge />,
      url: "https://msbte.org.in/portal/flims-other-engineering-group/",
    },
  ];

  return (
    <div className="documentary-section">
      <h2>DOCUMENTARY FILMS OF DIPLOMA</h2>
      <div className="info-banner">
        महाराष्ट्र राज्यातील १० वी / १२ वी उत्तीर्ण झालेल्या विद्यार्थ्यांना पदविका तंत्रशिक्षणाबद्दल थोडक्यात माहिती देणाऱ्या Documentary Films
      </div>
      <div className="link-grid">
        {links.map((link, index) => (
          <a
            key={index}
            className="link-item"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DocumentaryFilms;
