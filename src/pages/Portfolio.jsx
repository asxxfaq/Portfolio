import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobileAlt } from "react-icons/fa";

function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "A fully responsive MERN stack e-commerce site with product filters, cart, login system, and admin panel.",
      tech: ["React", "Node", "MongoDB", "CSS"],
      github: "https://github.com/asxxfaq/Elaria",
      live: "https://elaria-ten.vercel.app",
      icon: <FaCode />,
    },
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio with smooth animations, dark mode and clean UI/UX.",
      tech: ["React", "CSS", "Framer Motion"],
      github: "https://github.com/asxxfaq",
      live: "#",
      icon: <FaMobileAlt />,
    },
    {
      title: "Weather App",
      desc: "Responsive Weather App.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/asxxfaq/weatherApp",
      live: "https://weather-app-ecru-six-50.vercel.app/",
      icon: <FaCode />,
    },
  ];

  return (
    <section className="portfolio-section">
      <h1 className="portfolio-title">My Projects</h1>
      <p className="portfolio-subtitle">A showcase of my best work so far.</p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.icon}</div>

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
