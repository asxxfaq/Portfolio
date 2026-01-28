import React, { useRef } from "react";
import "./pages.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// Icons
import {
  FaUser,
  FaBriefcase,
  FaTools,
  FaGraduationCap,
  FaCertificate,
  FaLanguage,
  FaDownload,
} from "react-icons/fa";

function Resume() {
  const resumeRef = useRef();

  const downloadPDF = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Abdul_Ashfaqe_Resume.pdf");
    });
  };

  return (
    <section className="resume-wrapper fade-in">
      <button className="download-btn" onClick={downloadPDF}>
        <FaDownload /> Download PDF
      </button>

      <div className="resume-container" ref={resumeRef}>
        {/* LEFT COLUMN */}
        <div className="resume-left slide-up">
          {/* Profile */}
          <h2 className="resume-sec-title">
            <FaUser /> Profile
          </h2>
          <p className="resume-text">
            Recent BCA graduate and MERN Stack Developer with strong skills in
            HTML, CSS, JavaScript, React, Node.js, and Express. Experienced in
            building responsive web applications, RESTful APIs, and integrating
            frontend with backend services. Passionate about creating
            user-friendly, high-performance applications and growing as a
            full-stack developer.
          </p>

          {/* Technical Skills */}
          <h2 className="resume-sec-title">
            <FaTools /> Technical Skills
          </h2>
          <ul className="resume-list">
            <li>HTML, CSS, JavaScript (ES6+)</li>
            <li>React.js, Bootstrap, SCSS/SASS</li>
            <li>Node.js, Express.js, REST APIs</li>
            <li>MongoDB, CRUD Operations</li>
            <li>Git, GitHub, VS Code</li>
            <li>Responsive Design, DOM Debugging</li>
          </ul>

          {/* Soft Skills */}
          <h2 className="resume-sec-title">
            <FaTools /> Soft Skills
          </h2>
          <ul className="resume-list">
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Team Collaboration & Leadership</li>
          </ul>

          {/* Languages */}
          <h2 className="resume-sec-title">
            <FaLanguage /> Languages
          </h2>
          <ul className="resume-list">
            <li>Malayalam</li>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="resume-right slide-up">
          {/* Header */}
          <div className="resume-header">
            <h1>ABDUL ASHFAQE</h1>
            <p className="resume-role">MERN Stack Developer</p>

            <div className="resume-contact">
              <p>
                <strong>Email:</strong> abdulashfaqehere@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 7306614239
              </p>
              <p>
                <strong>Location:</strong> Kasaragod, Kerala
              </p>
              <p>
                <strong>LinkedIn:</strong> www.linkedin.com/in/asxxfaq
              </p>
            </div>
          </div>

          {/* Experience */}
          <h2 className="resume-sec-title">
            <FaBriefcase /> Professional Experience
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle"></div>
              <div className="timeline-content">
                <h3>MERN Full Stack Intern — Techolas Technologies</h3>
                <span>July 2025 – Present | Calicut</span>
                <ul>
                  <li>
                    Built responsive web interfaces using HTML, CSS, JavaScript,
                    Bootstrap, and React.
                  </li>
                  <li>Developed reusable React components.</li>
                  <li>Created RESTful APIs using Node.js and Express.</li>
                  <li>
                    Integrated frontend with backend and handled JSON data.
                  </li>
                  <li>
                    Collaborated using Git/GitHub to debug and optimize
                    applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <h2 className="resume-sec-title">
            <FaBriefcase /> Projects
          </h2>

          <ul className="resume-list">
            <li>
              <strong>Elaria Jewels (E-Commerce Website)</strong> — HTML, CSS,
              JavaScript  
              <br />
              Designed and developed a fully responsive jewellery e-commerce
              website with clean UI, interactive features, and cross-device
              compatibility.
            </li>
            <li>
              <strong>Vyaparify – Business Web Application</strong> — React.js,
              JavaScript  
              <br />
              Developed a scalable business web application using React with a
              component-based architecture to ensure maintainability and smooth
              user experience.
            </li>
          </ul>

          {/* Education */}
          <h2 className="resume-sec-title">
            <FaGraduationCap /> Education
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle"></div>
              <div className="timeline-content">
                <h3>Bachelor of Computer Application</h3>
                <span>2022 – 2025 | Srinivas University, Mangalore</span>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <h2 className="resume-sec-title">
            <FaCertificate /> Certificates
          </h2>
          <ul className="resume-list">
            <li>AI Intern — GENZ Educate Wing, Bangalore</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
