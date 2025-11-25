import React from "react";
import "./Pages.css";
import profilePic from './components/profileImg1.jpg';
import portfolio from './components/portfolio.jpg';
import elaria from './components/elaria.png';
import weather from './components/weather.jpg';

function Home() {
  return (
    <section className="home-section">
      {/* HERO SECTION */}
      <div className="hero-wrapper">
        
        <div className="hero-text-area" style={{textAlign:'center'}}>
          <h1 className="hero-title">
            Hi, I'm <br /><span>Abdul Ashfaqe</span>
          </h1>

          <h2 className="typing-text" style={{textAlign:'center'}}>
            <span>MERN Stack Developer</span>
          </h2>

          <p className="hero-description">
            I build responsive, modern and user-friendly web applications.
            Passionate about clean UI, smooth UX and full-stack development.
          </p>

         
          
        </div>

        <div className="hero-image-area">
          <img src={profilePic} alt="Profile" className="hero-image" />
        </div>
      </div>

      {/* SKILLS BAR SECTION */}
      <div className="skills-bar-section">
        <h3>My Skills</h3>

        <div className="skill-bar">
          <p>HTML</p>
          <div className="bar"><span style={{ width: "85%" }}></span></div>
        </div>

        <div className="skill-bar">
          <p>CSS</p>
          <div className="bar"><span style={{ width: "80%" }}></span></div>
        </div>

        <div className="skill-bar">
          <p>JavaScript</p>
          <div className="bar"><span style={{ width: "75%" }}></span></div>
        </div>

        <div className="skill-bar">
          <p>React</p>
          <div className="bar"><span style={{ width: "70%" }}></span></div>
        </div>

        
      </div>

      {/* PROJECT PREVIEW */}
      <div className="project-preview">
        <h3>Recent Projects</h3>

        <div className="project-grid">
          <div className="project-card">
            <img src={portfolio} alt="Project 1" />
            <h4>Portfolio Website</h4>
            <p>Modern personal website built with React.</p>
          </div>

          <div className="project-card">
            <img src={elaria} alt="Project 2" />
            <h4>E-Commerce App</h4>
            <p>Full-stack MERN based shopping platform.</p>
          </div>

          <div className="project-card">
            <img src={weather} alt="Project 3" />
            <h4>Weather App</h4>
            <p>Advanced Weather app to search weather </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Home;
