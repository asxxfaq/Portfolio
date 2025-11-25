// src/components/Sidebar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
// NOTE: You'll need to add your own CSS/Tailwind classes for styling
import profilePic from './profileImg.jpg';
import './Sidebar.css'; // Create this file

const Sidebar = () => {
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT ME', path: '/about' },
    { name: 'RESUME', path: '/resume' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'TESTIMONIALS', path: '/testimonials' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className="sidebar-container">
      {/* Profile area */}
      <div className="profile-header">
        <img src={profilePic} alt="Abdul Ashfaqe" className="profile-img" />
        <h3 className="profile-name">Abdul Ashfaqe</h3>
      </div>
      
      {/* Navigation menu */}
      <nav className="main-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  isActive ? 'nav-item active' : 'nav-item'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

     
    </div>
  );
};

export default Sidebar;