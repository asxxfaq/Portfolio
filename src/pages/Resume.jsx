import React, { useRef } from "react";
import "./pages.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// Icons
import { FaUser, FaBriefcase, FaTools, FaGraduationCap, FaCertificate, FaLanguage, FaDownload } from "react-icons/fa";

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
      {/* Download Button */}
      <button className="download-btn" onClick={downloadPDF}>
        <FaDownload /> Download PDF
      </button>

      <div className="resume-container" ref={resumeRef}>

        {/* LEFT COLUMN */}
        <div className="resume-left slide-up">

          {/* Profile */}
          <h2 className="resume-sec-title"><FaUser /> Profile</h2>
          <p className="resume-text">
            Recent BCA graduate specializing in building responsive, user-friendly
            web interfaces with modern frontend technologies. Passionate about
            problem-solving and creating seamless user experiences.
          </p>

          {/* Skills */}
          <h2 className="resume-sec-title"><FaTools /> Technical Skills</h2>
          <ul className="resume-list">
            <li>JavaScript, HTML, CSS</li>
            <li>Bootstrap, SCSS, SASS</li>
            <li>Git, GitHub, VS Code</li>
            <li>Responsive Web Design, DOM Manipulation</li>
          </ul>

          <h2 className="resume-sec-title"><FaTools /> Soft Skills</h2>
          <ul className="resume-list">
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
          </ul>

          {/* Languages */}
          <h2 className="resume-sec-title"><FaLanguage /> Languages</h2>
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
            <p className="resume-role">MERN STACK Developer</p>

            <div className="resume-contact">
              <p><strong>Email:</strong> abdulashfaqehere@gmail.com</p>
              <p><strong>Phone:</strong> 7306614239</p>
              <p><strong>Location:</strong> Kasaragod, Kerala</p>
              <p><strong>LinkedIn:</strong> www.linkedin.com/in/asxxfaq</p>
            </div>
          </div>

          {/* Experience Timeline */}
          <h2 className="resume-sec-title"><FaBriefcase /> Professional Experience</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle"></div>
              <div className="timeline-content">
                <h3>MERN Full Stack Intern — Techolas Technologies</h3>
                <span>July 2025 – Present | Calicut</span>
                <ul>
                  <li>Developed responsive websites using HTML, CSS, JS, Bootstrap.</li>
                  <li>Implemented interactive UI components.</li>
                  <li>Built mobile-first layouts.</li>
                  <li>Debugged & optimized frontend code.</li>
                  <li>Used Git/GitHub for version control.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <h2 className="resume-sec-title"><FaGraduationCap /> Education</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle"></div>
              <div className="timeline-content">
                <h3>BCA — Srinivas University</h3>
                <span>2022 – 2025 | Mangalore</span>
                <p>Specialization: AI, VR & Robotics</p>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <h2 className="resume-sec-title"><FaCertificate /> Certificates</h2>
          <ul className="resume-list">
            <li>AI Intern — GENZ Educate Wing Bangalore</li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Resume;
