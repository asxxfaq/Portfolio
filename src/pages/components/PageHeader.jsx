// src/components/PageHeader.js

import React from 'react';
// import './PageHeader.css'; // Optional: if you prefer separate header CSS

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="page-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {/* Add the small profile image next to the title as seen in the design 
          NOTE: Styling for this image must be handled in App.css or a dedicated file. */}
      {/* <div className="header-profile-icon">...</div> */}
    </div>
  );
};

export default PageHeader;