import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./pages.css";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact-section">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">I'd love to hear from you!</p>

      <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
        {/* Name */}
        <div className="form-group">
       
          <input type="text" name="user_name" placeholder="Your Sweet Name!!" required />
         
        </div>

        {/* Email */}
        <div className="form-group">
        
          <input type="email" name="user_email"  placeholder="Your Mail" required />
          
        </div>

        {/* Message */}
        <div className="form-group textarea-group">
          <textarea name="message" rows="4"  placeholder="I'd love to hear from you!"></textarea>
        </div>
        <br />
        <button type="submit" className="contact-btn">
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Status messages */}
        {status === "success" && (
          <p className="success-msg">Message Sent Successfully </p>
        )}
        {status === "error" && (
          <p className="error-msg">Failed to send message </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
