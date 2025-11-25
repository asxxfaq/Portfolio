import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

// Sidebar
import Sidebar from "./pages/components/Sidebar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
