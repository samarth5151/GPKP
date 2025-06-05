import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css"
import logo from "../Assets/cropped-gpk_logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (submenuName) => {
    if (activeSubmenu === submenuName) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(submenuName);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  return (
    <>
      
      
      <header className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
        {/* Top Header */}
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

        {/* Main Header */}
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
          
          {/* Mobile Menu Button */}
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

        {/* Main Navigation */}
        <nav ref={navRef} className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-menu">
            <li>
              <NavLink to="/" onClick={handleLinkClick}>
                <i className="fas fa-home"></i> Home
              </NavLink>
            </li>
            
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/about">
                  <i className="fas fa-info-circle"></i> About
                </NavLink>
                <button 
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick('about')}
                  aria-label="Toggle about menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'about' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'about' ? 'active' : ''}`}>
                <li><NavLink to="/about/us" onClick={handleLinkClick}>About Us</NavLink></li>
                <li><NavLink to="/about/vision" onClick={handleLinkClick}>Vision & Mission</NavLink></li>
                <li><NavLink to="/about/principal" onClick={handleLinkClick}>Principal's Message</NavLink></li>
                <li><NavLink to="/about/structure" onClick={handleLinkClick}>Organizational Structure</NavLink></li>
                <li><NavLink to="/about/admin" onClick={handleLinkClick}>Administrative Bodies</NavLink></li>
                <li><NavLink to="/about/nba" onClick={handleLinkClick}>NBA Accreditation</NavLink></li>
                <li><NavLink to="/about/infrastructure" onClick={handleLinkClick}>Infrastructure</NavLink></li>
                <li><NavLink to="/about/continuing" onClick={handleLinkClick}>Continuing Education Programme</NavLink></li>
                <li><NavLink to="/about/admin-section" onClick={handleLinkClick}>Administrative Section</NavLink></li>
                <li><NavLink to="/about/committee" onClick={handleLinkClick}>Committee</NavLink></li>
                <li><NavLink to="/about/citizen" onClick={handleLinkClick}>Citizen's Charter</NavLink></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/departments">
                  <i className="fas fa-building"></i> Departments
                </NavLink>
                <button 
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick('departments')}
                  aria-label="Toggle departments menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'departments' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'departments' ? 'active' : ''}`}>
                <li><NavLink to="/departments/academic" onClick={handleLinkClick}>Academic Departments</NavLink></li>
                <li className="submenu">
                  <div className="submenu-wrapper">
                    <NavLink to="/departments/supporting">Supporting Dept And Cell</NavLink>
                    <button 
                      className="submenu-toggle"
                      onClick={() => handleSubmenuClick('supporting')}
                      aria-label="Toggle supporting departments"
                    >
                      <i className={`fas fa-chevron-right ${activeSubmenu === 'supporting' ? 'rotated' : ''}`}></i>
                    </button>
                  </div>
                  <ul className={`submenu-content ${activeSubmenu === 'supporting' ? 'active' : ''}`}>
                    <li><NavLink to="/departments/civil" onClick={handleLinkClick}>Civil Engineering</NavLink></li>
                    <li><NavLink to="/departments/electrical" onClick={handleLinkClick}>Electrical Engineering</NavLink></li>
                    <li><NavLink to="/departments/mechanical" onClick={handleLinkClick}>Mechanical Engineering</NavLink></li>
                    <li><NavLink to="/departments/it" onClick={handleLinkClick}>Information Technology</NavLink></li>
                    <li><NavLink to="/departments/electronics" onClick={handleLinkClick}>Electronics and Telecommunication Engineering</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/departments/exam" onClick={handleLinkClick}>Exam Cell</NavLink></li>
                <li><NavLink to="/departments/workshop" onClick={handleLinkClick}>Workshop</NavLink></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/student-corner">
                  <i className="fas fa-user-graduate"></i> Student Corner
                </NavLink>
                <button 
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick('student-corner')}
                  aria-label="Toggle student corner menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'student-corner' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'student-corner' ? 'active' : ''}`}>
                <li><NavLink to="/student-corner/calendar" onClick={handleLinkClick}>Academic Calendar</NavLink></li>
                <li><NavLink to="/student-corner/curriculum" onClick={handleLinkClick}>Curriculum</NavLink></li>
                <li><NavLink to="/student-corner/first-year" onClick={handleLinkClick}>First Year Curriculum 2023</NavLink></li>
                <li><NavLink to="/student-corner/question" onClick={handleLinkClick}>Question Papers</NavLink></li>
                <li><NavLink to="/student-corner/maha" onClick={handleLinkClick}>MAHA DBT</NavLink></li>
                <li><NavLink to="/student-corner/vidyalakshmi" onClick={handleLinkClick}>Vidyalakshmi Portal</NavLink></li>
                <li><NavLink to="/student-corner/exam-rules" onClick={handleLinkClick}>Examination Rules</NavLink></li>
                <li><NavLink to="/student-corner/malpractice" onClick={handleLinkClick}>Examination Malpractice and Punishments</NavLink></li>
                <li><NavLink to="/student-corner/scholars" onClick={handleLinkClick}>Our Scholars</NavLink></li>
                <li><NavLink to="/student-corner/e-content" onClick={handleLinkClick}>E-Content</NavLink></li>
                <li><NavLink to="/student-corner/video" onClick={handleLinkClick}>Video Lectures</NavLink></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/facilities">
                  <i className="fas fa-cogs"></i> Facilities
                </NavLink>
                <button 
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick('facilities')}
                  aria-label="Toggle facilities menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'facilities' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'facilities' ? 'active' : ''}`}>
                <li><NavLink to="/facilities/hostel" onClick={handleLinkClick}>Hostel</NavLink></li>
                <li className="submenu">
                  <div className="submenu-wrapper">
                    <NavLink to="/facilities/library">Library Section</NavLink>
                    <button 
                      className="submenu-toggle"
                      onClick={() => handleSubmenuClick('library')}
                      aria-label="Toggle library menu"
                    >
                      <i className={`fas fa-chevron-right ${activeSubmenu === 'library' ? 'rotated' : ''}`}></i>
                    </button>
                  </div>
                  <ul className={`submenu-content ${activeSubmenu === 'library' ? 'active' : ''}`}>
                    <li><NavLink to="/facilities/common" onClick={handleLinkClick}>Common Facilities</NavLink></li>
                    <li><NavLink to="/facilities/gymkhana" onClick={handleLinkClick}>Gymkhana</NavLink></li>
                    <li><NavLink to="/facilities/store" onClick={handleLinkClick}>Students Co-Operative Store</NavLink></li>
                    <li><NavLink to="/facilities/onos" onClick={handleLinkClick}>ONOS</NavLink></li>
                    <li><NavLink to="/facilities/nss" onClick={handleLinkClick}>NSS</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/facilities/ndli" onClick={handleLinkClick}>NDLI CLUB</NavLink></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/tpo">
                  <i className="fas fa-briefcase"></i> TPO
                </NavLink>
                <button 
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick('tpo')}
                  aria-label="Toggle TPO menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'tpo' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'tpo' ? 'active' : ''}`}>
                <li><NavLink to="/tpo/edp" onClick={handleLinkClick}>EDP Cell</NavLink></li>
                <li><NavLink to="/tpo/iste" onClick={handleLinkClick}>ISTE CHAPTER</NavLink></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/cdc">
                  <i className="fas fa-graduation-cap"></i> CDC
                </NavLink>
                <button 
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick('cdc')}
                  aria-label="Toggle CDC menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'cdc' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'cdc' ? 'active' : ''}`}>
                <li><NavLink to="/cdc/cell" onClick={handleLinkClick}>CDC Cell</NavLink></li>
                <li><NavLink to="/cdc/philosophy" onClick={handleLinkClick}>Curriculum Philosophy</NavLink></li>
                <li><NavLink to="/cdc/overview" onClick={handleLinkClick}>Curriculum Overview</NavLink></li>
                <li><NavLink to="/cdc/proformas" onClick={handleLinkClick}>OBLTA PROFORMAS</NavLink></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/gallery">
                  <i className="fas fa-images"></i> Gallery
                </NavLink>
                <button 
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick('gallery')}
                  aria-label="Toggle gallery menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'gallery' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'gallery' ? 'active' : ''}`}>
                <li><NavLink to="/gallery/photos" onClick={handleLinkClick}>Photos</NavLink></li>
                <li><NavLink to="/gallery/videos" onClick={handleLinkClick}>Videos</NavLink></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/gpk-mis">
                  <i className="fas fa-database"></i> GPK MIS
                </NavLink>
                <button 
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick('gpk-mis')}
                  aria-label="Toggle GPK MIS menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'gpk-mis' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'gpk-mis' ? 'active' : ''}`}>
                <li><NavLink to="/gpk-mis/new" onClick={handleLinkClick}>NEW 2023 MIS LOGIN(H scheme)</NavLink></li>
                <li><NavLink to="/gpk-mis/login" onClick={handleLinkClick}>MIS LOGIN-G Scheme</NavLink></li>
                <li><NavLink to="/gpk-mis/billing" onClick={handleLinkClick}>GPKP Billing System</NavLink></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <div className="nav-link-wrapper">
                <NavLink to="/alumni">
                  <i className="fas fa-users"></i> Alumni
                </NavLink>
                <button 
                  className="dropdown-toggle"
                  onClick={() => handleDropdownClick('alumni')}
                  aria-label="Toggle alumni menu"
                >
                  <i className={`fas fa-chevron-down ${activeDropdown === 'alumni' ? 'rotated' : ''}`}></i>
                </button>
              </div>
              <ul className={`dropdown-menu ${activeDropdown === 'alumni' ? 'active' : ''}`}>
                <li><NavLink to="/alumni/alumni" onClick={handleLinkClick}>Alumni</NavLink></li>
                <li><NavLink to="/alumni/meet" onClick={handleLinkClick}>Alumni Meet</NavLink></li>
                <li><NavLink to="/alumni/report" onClick={handleLinkClick}>Alumni Report</NavLink></li>
              </ul>
            </li>
            
            <li>
              <NavLink to="/online-grievance" onClick={handleLinkClick}>
                <i className="fas fa-exclamation-triangle"></i> Online Grievance
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleLinkClick}>
                <i className="fas fa-envelope"></i> Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}

        <div class="marquee-container">
            <marquee>DTE WEBSITE | Quotation for Library magazines and journals | Academic Calender 2024-2025DTE WEBSITE | Quotation for Library magazines and journals | Academic Calender 2024-2025</marquee>

        </div>
      </header>
    </>
  );
};

export default Navbar;