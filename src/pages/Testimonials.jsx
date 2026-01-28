import React from "react";
import "./pages.css";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h1 className="testimonials-title">Testimonials</h1>
      <p className="testimonials-subtitle">What people say about me</p>

      <div className="testimonials-grid">

        {/* Testimonial 1 */}
        <div className="test-card">
          <img src="/t1.jpg" alt="Client" className="test-img" />
          <h3>Hiba P</h3>
          <p className="test-role">HR Manager Techolas Technologies</p>
          <p className="test-text">
            “Ashfaq is a highly skilled MERN developer. His UI design sense and
            problem-solving skills are outstanding. Always delivers on time.”
          </p>
          <div className="stars">★★★★★</div>
        </div>

        {/* Testimonial 2 */}
        <div className="test-card">
          <img src="/t2.jpg" alt="Client" className="test-img" />
          <h3>Nihala </h3>
          <p className="test-role">Project Manager - Calicut</p>
          <p className="test-text">
            “Very professional, quick to understand requirements, and implements
            clean and optimized code. Highly recommended!”
          </p>
          <div className="stars">★★★★★</div>
        </div>

        {/* Testimonial 3 */}
        <div className="test-card">
          <img src="/t3.jpg" alt="Client" className="test-img" />
          <h3>Jayashree Mayya</h3>
          <p className="test-role">Faculty - Manglore</p>
          <p className="test-text">
            “Demonstrated strong proficiency in translating UI concepts into well-structured and reusable React components.”
          </p>
          <div className="stars">★★★★★</div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
