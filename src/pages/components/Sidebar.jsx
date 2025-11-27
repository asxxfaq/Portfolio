// src/components/Sidebar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from './profileImg.jpg';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT ME', path: '/about' },
    { name: 'RESUME', path: '/resume' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'TESTIMONIALS', path: '/testimonials' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="sidebar-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        
        {/* Profile Section */}
        <div className="profile-header">
          <img src={profilePic} alt="Abdul Ashfaqe" className="profile-img" />
          <h3 className="profile-name">Abdul Ashfaqe</h3>
        </div>

        {/* Navigation */}
        <nav className="main-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Background Overlay for Mobile */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
