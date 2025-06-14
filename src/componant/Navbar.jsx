import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import "./navbar.css";
import logo from "../Assets/cropped-gpk_logo.jpg";

const Navbar = () => {
  const location = useLocation();


  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    } else {
      setActiveDropdown(dropdownName);
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (submenuName) => {
  if (activeSubmenu === submenuName) {
    setActiveSubmenu(null);
  } else {
    setActiveSubmenu(submenuName);
  }
};

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }
  };

  const handleLinkClick = () => {
    closeAllMenus();
  };

  return (
    <>
      <header className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
        {/* Top Header - same as before */}
        <div className="top-header">
          <div className="top-header-left">
            <span><i className="fas fa-university"></i> AICTE ID: 1-475576863</span>
            <span><i className="fas fa-phone"></i> 0231-2521038</span>
            <span><i className="fas fa-envelope"></i> gpkolhapur@yahoo.com</span>
          </div>
          <div className="top-header-right">
            <span><i className="fas fa-info-circle"></i> NBA Accredited</span>
            <span><i className="fas fa-phone-alt"></i> CM Helpline Number</span>
            <div className="social-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>

        {/* Main Header - same as before */}
        <div className="main-header">
          <div className="logo-container">
            <img className='logo' alt='logo' src={logo} />
          </div>
          <div className="college-name">
            <h1>Government Polytechnic Kolhapur</h1>
            <p>(First Autonomous Institute of Government of Maharashtra)</p>
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Enhanced Main Navigation */}
        <nav ref={navRef} className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-menu">
            <li>
              <NavLink exact to="/" activeClassName="active" onClick={handleLinkClick}>
                <i className="fas fa-home"></i> Home
              </NavLink>
            </li>

            <li className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('about')}>
                <NavLink to="/about_us" activeClassName="active">
                  <i className="fas fa-info-circle"></i> About
                </NavLink>
                <button className="dropdown-toggle" aria-label="Toggle about menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'about' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'about' ? 'active' : ''}`}>
                <li><NavLink to="/about_us" onClick={handleLinkClick}>About Us</NavLink></li>
                <li><NavLink to="/Vision&Mission" onClick={handleLinkClick}>Vision & Mission</NavLink></li>
                <li><NavLink to="/Principal's_Message" onClick={handleLinkClick}>Principal's Message</NavLink></li>
                <li><NavLink to="/Organizational_Structure" onClick={handleLinkClick}>Organizational Structure</NavLink></li>
                <li><NavLink to="/Administrative_Bodies" onClick={handleLinkClick}>Administrative Bodies</NavLink></li>
                <li><NavLink to="/NBA_Accreditation" onClick={handleLinkClick}>NBA Accreditation</NavLink></li>
                <li><NavLink to="/Infrastructure" onClick={handleLinkClick}>Infrastructure</NavLink></li>
                <li><NavLink to="/Continuing_Education_Programme" onClick={handleLinkClick}>Continuing Education Programme</NavLink></li>
                <li><NavLink to="/admin-section" onClick={handleLinkClick}>Administrative Section</NavLink></li>
                <li><NavLink to="/committees" onClick={handleLinkClick}>Committees</NavLink></li>
                <li><a href="/PDFs/cc.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Citizen's Charter</a>
                </li>
              </ul>
            </li>

            {/* Admission Section */}
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/admission">
                  <i className="fas fa-user-graduate"></i> Admission
                </NavLink>
                <button
                  className="dropdown-toggle"
                  onClick={() => toggleDropdown('admission')}
                  aria-label="Toggle admission menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'admission' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'admission' ? 'active' : ''}`}>
                <li><a href="/PDFs/प्रथम-वर्ष-प्रवेशाचे-Post-SSC-Diploma-वेळापत्रक.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}> प्रवेश वर्ष Post SSC डिप्लोमा प्रवेशाचे वेळापत्रक</a></li>
                <li><NavLink to="https://poly25.dtemaharashtra.gov.in/diploma25/" target='_blank' onClick={handleLinkClick}>Admission Link</NavLink></li>
                <li><a href="/PDFs/Document-Required-for-Admission-DTE-Circular-08.05.2025.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Documents required for Diploma/Degree admissions</a></li>
                <li><NavLink to="/Essential_Documents" onClick={handleLinkClick}>Essential Documents</NavLink></li>
                <li><NavLink to="/fee_structure" onClick={handleLinkClick}>Fee Structure</NavLink></li>
                <li><a href="/PDFs/divyang-admission-notice.pdf" target='_blank' rel="noopener noreferrer" onClick={handleLinkClick} >दिव्यांग (अपंग) व्यक्तीसाठी प्रथम वर्ष 2024-25 अभियांत्रिकी पदविका (Diploma Engineering) प्रवेश</a></li>
                <li><NavLink to="/Documentary_films" onClick={handleLinkClick}>DOCUMENTARY FILMS OF DIPLOMA</NavLink></li>
                <li><NavLink to="https://dte.maharashtra.gov.in/" target='_blank' onClick={handleLinkClick}>DTE Website</NavLink></li>
              </ul>
            </li>

            {/* department */}

            <li className={`dropdown ${activeDropdown === 'departments' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('departments')}>
                <NavLink to="/departments" activeClassName="active">
                  <i className="fas fa-building"></i> Departments<button className="dropdown-toggle" aria-label="Toggle departments menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'departments' ? 'rotated' : ''}`}></i>
                </button>
                </NavLink>
                
              </div>
              <ul className="dropdown-menu">
                <li><NavLink to="/departments/academic" activeClassName="active" onClick={handleLinkClick}>Academic Departments</NavLink></li>
                <li className={`submenu ${activeSubmenu === 'supporting' ? 'active' : ''}`}>
                  <div className="submenu-wrapper" onClick={() => toggleSubmenu('supporting')}>
                    <NavLink to="/departments/supporting" activeClassName="active">Supporting Dept And Cell</NavLink>
                    <button className="submenu-toggle" aria-label="Toggle supporting departments">
                      <i className={`fas fa-chevron-right ${activeSubmenu === 'supporting' ? 'rotated' : ''}`}></i>
                    </button>
                  </div>
                  <ul className="submenu-content">
                    <li><NavLink to="/departments/civil" activeClassName="active" onClick={handleLinkClick}>Civil Engineering</NavLink></li>
                    <li><NavLink to="/departments/electrical" activeClassName="active" onClick={handleLinkClick}>Electrical Engineering</NavLink></li>
                    <li><NavLink to="/departments/mechanical" activeClassName="active" onClick={handleLinkClick}>Mechanical Engineering</NavLink></li>
                    <li><NavLink to="/departments/it" activeClassName="active" onClick={handleLinkClick}>Information Technology</NavLink></li>
                    <li><NavLink to="/departments/electronics" activeClassName="active" onClick={handleLinkClick}>Electronics and Telecommunication Engineering</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/departments/exam-cell" activeClassName="active" onClick={handleLinkClick}>Exam Cell</NavLink></li>
                <li><NavLink to="/departments/workshop" activeClassName="active" onClick={handleLinkClick}>Workshop</NavLink></li>
              </ul>
            </li>

            {/* Other menu items follow the same pattern */}
            <li className={`dropdown ${activeDropdown === 'student-corner' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('student-corner')}>
                <NavLink to="/student-corner" activeClassName="active">
                  <i className="fas fa-user-graduate"></i> Student Corner
                </NavLink>
                <button className="dropdown-toggle" aria-label="Toggle student corner menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'student-corner' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className="dropdown-menu">
                <li><NavLink to="/student-corner/academic-calendar" activeClassName="active" onClick={handleLinkClick}>Academic Calendar</NavLink></li>
                <li><NavLink to="/student-corner/curriculum" activeClassName="active" onClick={handleLinkClick}>Curriculum</NavLink></li>
                <li><NavLink to="/student-corner/first-year-curriculum-2023" activeClassName="active" onClick={handleLinkClick}>First Year Curriculum 2023</NavLink></li>
                <li><NavLink to="/student-corner/question-papers" activeClassName="active" onClick={handleLinkClick}>Question Papers</NavLink></li>
                <li><NavLink to="https://mahadbt.maharashtra.gov.in/" target='_blank' activeClassName="active" onClick={handleLinkClick}>MAHA DBT</NavLink></li>
                <li><NavLink to="https://www.vidyalakshmi.co.in/Students/" target='_blank' activeClassName="active" onClick={handleLinkClick}>Vidyalakshmi Portal</NavLink></li>
                <li><a href="/PDFs/EXAMINATION-RULES.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Examination Rules</a></li>
                <li><a href="/PDFs/malpractice-Rules-updated-13-april-2023.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Examination Malpractice and Punishments</a></li>
                <li><NavLink to="/student-corner/our-scholars" activeClassName="active" onClick={handleLinkClick}>Our Scholars</NavLink></li>
                <li><NavLink to="https://econtent.msbte.edu.in/econtent/econtent_home.php" target="_blank" activeClassName="active" onClick={handleLinkClick}>E-Content</NavLink></li>
                <li><NavLink to="https://msbte.ac.in/msbteVideoLectures" target="_blank" activeClassName="active" onClick={handleLinkClick}>Video Lectures</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'facilities' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('facilities')}>
                <NavLink to="/facilities" activeClassName="active">
                  <i className="fas fa-cogs"></i> Facilities
                </NavLink>
                <button className="dropdown-toggle" aria-label="Toggle facilities menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'facilities' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className="dropdown-menu">
                <li><NavLink to="/facilities/hostel" activeClassName="active" onClick={handleLinkClick}>Hostel</NavLink></li>
                <li className={`submenu ${activeSubmenu === 'library' ? 'active' : ''}`}>
                  <div className="submenu-wrapper" onClick={() => toggleSubmenu('library')}>
                    <NavLink to="/facilities/library" activeClassName="active">Library Section</NavLink>
                    <button className="submenu-toggle" aria-label="Toggle library menu">
                      <i className={`fas fa-chevron-right ${activeSubmenu === 'library' ? 'rotated' : ''}`}></i>
                    </button>
                  </div>
                  <ul className="submenu-content">
                    <li><NavLink to="/facilities/common" activeClassName="active" onClick={handleLinkClick}>Common Facilities</NavLink></li>
                    <li><NavLink to="/facilities/gymkhana" activeClassName="active" onClick={handleLinkClick}>Gymkhana</NavLink></li>
                    <li><NavLink to="/facilities/store" activeClassName="active" onClick={handleLinkClick}>Students Co-Operative Store</NavLink></li>
                    <li><NavLink to="/facilities/onos" activeClassName="active" onClick={handleLinkClick}>ONOS</NavLink></li>
                    <li><NavLink to="/facilities/nss" activeClassName="active" onClick={handleLinkClick}>NSS</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/facilities/ndli" activeClassName="active" onClick={handleLinkClick}>NDLI CLUB</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'tpo' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('tpo')}>
                <NavLink to="/tpo/edp" activeClassName="active">
                  <i className="fas fa-briefcase"></i> TPO
                </NavLink>
                <button className="dropdown-toggle" aria-label="Toggle TPO menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'tpo' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className="dropdown-menu">
                <li><NavLink to="/tpo/edp" activeClassName="active" onClick={handleLinkClick}>EDP Cell</NavLink></li>
                <li><NavLink to="/tpo/tpo_cell" activeClassName="active" onClick={handleLinkClick}>TPO Cell</NavLink></li>
                <li><NavLink to="/tpo/iste" activeClassName="active" onClick={handleLinkClick}>ISTE CHAPTER</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'cdc' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('cdc')}>
                <NavLink to="/cdc/cell" activeClassName="active">
                  <i className="fas fa-graduation-cap"></i> CDC
                </NavLink>
                <button className="dropdown-toggle" aria-label="Toggle CDC menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'cdc' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className="dropdown-menu">
                <li><NavLink to="/cdc/cell" activeClassName="active" onClick={handleLinkClick}>CDC Cell</NavLink></li>
                <li><NavLink to="/cdc/philosophy" activeClassName="active" onClick={handleLinkClick}>Curriculum Philosophy</NavLink></li>
                <li><NavLink to="/cdc/overview" activeClassName="active" onClick={handleLinkClick}>Curriculum Overview</NavLink></li>
                <li><NavLink to="/cdc/proformas" activeClassName="active" onClick={handleLinkClick}>OBLTA PROFORMAS</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'enewsletter' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('enewsletter')}>
                <NavLink to="/enewsletter" activeClassName="active">
                  <i className="fas fa-newspaper"></i> eNewsletter
                </NavLink>
                <button className="dropdown-toggle" aria-label="Toggle eNewsletter menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'enewsletter' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'enewsletter' ? 'active' : ''}`}>
                {/* Civil Engineering */}
                <li className={`submenu ${activeSubmenu === 'civil' ? 'active' : ''}`}>
                  <div className="submenu-wrapper" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubmenu('civil');
                  }}>
                    <span>Civil Engineering</span>
                    <button className="submenu-toggle" aria-label="Toggle Civil Engineering menu">
                      <i className={`fas fa-chevron-right ${activeSubmenu === 'civil' ? 'rotated' : ''}`}></i>
                    </button>
                  </div>
                  <ul className={`submenu-content ${activeSubmenu === 'civil' ? 'active' : ''}`}>
                    <li>
                      <a href="/PDFs/enewsletter/civil/2023-2024.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                        2023-2024
                      </a>
                    </li>
                    <li>
                      <a href="/PDFs/enewsletter/civil/2022-2023.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                        2022-2023
                      </a>
                    </li>
                    <li>
                      <a href="/PDFs/enewsletter/civil/2021-2022.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                        2021-2022
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Electrical Engineering */}
                <li className={`submenu ${activeSubmenu === 'electrical' ? 'active' : ''}`}>
                  <div className="submenu-wrapper" onClick={(e) => {
                    e.stopPropagation();
                    toggleSubmenu('electrical');
                  }}>
                    <span>Electrical Engineering</span>
                    <button className="submenu-toggle" aria-label="Toggle Electrical Engineering menu">
                      <i className={`fas fa-chevron-right ${activeSubmenu === 'electrical' ? 'rotated' : ''}`}></i>
                    </button>
                  </div>
                  <ul className={`submenu-content ${activeSubmenu === 'electrical' ? 'active' : ''}`}>
                    <li>
                      <a href="/PDFs/enewsletter/electrical/2023-2024.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                        2023-2024
                      </a>
                    </li>
                    <li>
                      <a href="/PDFs/enewsletter/electrical/2022-2023.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                        2022-2023
                      </a>
                    </li>
                    <li>
                      <a href="/PDFs/enewsletter/electrical/2021-2022.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                        2021-2022
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Add other branches similarly */}
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'gallery' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('gallery')}>
                <NavLink to="/gallery" activeClassName="active">
                  <i className="fas fa-images"></i> Gallery
                </NavLink>
                <button className="dropdown-toggle" aria-label="Toggle gallery menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'gallery' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className="dropdown-menu">
                <li><NavLink to="/gallery/photos" activeClassName="active" onClick={handleLinkClick}>Photos</NavLink></li>
                <li><NavLink to="/gallery/videos" activeClassName="active" onClick={handleLinkClick}>Videos</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'gpk-mis' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('gpk-mis')}>
                <NavLink to="/gpk-mis" activeClassName="active">
                  <i className="fas fa-database"></i> GPK MIS
                </NavLink>
                <button className="dropdown-toggle" aria-label="Toggle GPK MIS menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'gpk-mis' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className="dropdown-menu">
                <li><NavLink to="/gpk-mis/new" activeClassName="active" onClick={handleLinkClick}>NEW 2023 MIS LOGIN(H scheme)</NavLink></li>
                <li><NavLink to="/gpk-mis/login" activeClassName="active" onClick={handleLinkClick}>MIS LOGIN-G Scheme</NavLink></li>
                <li><NavLink to="/gpk-mis/billing" activeClassName="active" onClick={handleLinkClick}>GPKP Billing System</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown ${activeDropdown === 'alumni' ? 'active' : ''}`}>
              <div className="nav-link-wrapper" onClick={() => toggleDropdown('alumni')}>
                <NavLink to="/alumni" activeClassName="active">
                  <i className="fas fa-users"></i> Alumni
                </NavLink>
                <button className="dropdown-toggle" aria-label="Toggle alumni menu">
                  <i className={`fas fa-chevron-down ${activeDropdown === 'alumni' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className="dropdown-menu">
                <li><NavLink to="/alumni/alumni" activeClassName="active" onClick={handleLinkClick}>Alumni</NavLink></li>
                <li><NavLink to="/alumni/meet" activeClassName="active" onClick={handleLinkClick}>Alumni Meet</NavLink></li>
                <li><NavLink to="/alumni/report" activeClassName="active" onClick={handleLinkClick}>Alumni Report</NavLink></li>
              </ul>
            </li>

            <li>
              <NavLink to="/online-grievance" activeClassName="active" onClick={handleLinkClick}>
                <i className="fas fa-exclamation-triangle"></i> Online Grievance
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" onClick={handleLinkClick}>
                <i className="fas fa-envelope"></i> Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {mobileMenuOpen && <div className="mobile-overlay" onClick={closeAllMenus}></div>}

        <div className="marquee-container">
          <marquee>DTE WEBSITE | Quotation for Library magazines and journals | Academic Calender 2024-2025DTE WEBSITE | Quotation for Library magazines and journals | Academic Calender 2024-2025</marquee>
        </div>
      </header>
    </>
  );
};

export default Navbar;