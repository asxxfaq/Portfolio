import React from "react";
import "./pages.css";
import profilePic from './components/profileImg.jpg';

function About() {
  return (
    <section className="about-section fade-in">
      {/* Header Section */}
      <div className="about-header slide-up">
        <img
          src={profilePic}
          alt="Profile"
          className="about-profile"
        />
        <div>
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
            MERN Stack Developer • React Enthusiast • UI/UX Focused
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <p className="about-text slide-up">
        Hi, I am <strong>Abdul Ashfaqe</strong>, a passionate MERN stack
        developer with experience in creating modern, fast, and responsive
        web applications. I love building clean UI, writing efficient backend
        logic, and turning ideas into reality.
      </p>

      {/* Skills Section */}
      <h2 className="section-heading slide-up">Skills</h2>
      <div className="skills-grid slide-up">
        <span>React JS</span>
        <span>JavaScript (ES6+)</span>
        <span>HTML / CSS</span>
        <span>Bootstrap</span>
        <span>Git & GitHub</span>
      </div>

      {/* Experience Section */}
      <h2 className="section-heading slide-up">Experience</h2>
      <div className="experience-container slide-up">
        <div className="exp-card">
          <h3>Frontend Developer</h3>
          <p>Built responsive UI using React & Bootstrap.</p>
        </div>

        <div className="exp-card">
          <h3>MERN Developer Intern</h3>
          <p>Worked on full-stack projects using MongoDB, Express & React.</p>
        </div>
      </div>

      {/* Education Section */}
      <h2 className="section-heading slide-up">Education</h2>
      <div className="experience-container slide-up">
        <div className="exp-card">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>
            <strong>Srinivas University, Mangalore</strong> <br />
            Specialization: AI, VR & Robotics <br />
            Year of Completion: <strong>2025</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
