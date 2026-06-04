import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Support() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="support-page">
        <div className="support-header">
          <h1 className="section-title center">Support & Feedback</h1>
          <p>We are here to help! Send us your feedback or reach out to our team directly.</p>
        </div>
        <div className="support-container">
          <div className="support-form-card">
            <h2>Send Feedback</h2>
            {submitted ? (
              <p className="success-msg">Thank you for your feedback! We will get back to you shortly.</p>
            ) : (
              <form onSubmit={handleSubmit} className="feedback-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" className="btn-primary">Submit Feedback</button>
              </form>
            )}
          </div>
          <div className="contact-card">
            <h2>Contact Us</h2>
            <p>Have urgent questions? Give us a call!</p>
            <div className="contact-info">
              <h3>Your Socio Team</h3>
              <p className="phone-number"><i className="fa-solid fa-phone"></i> 9389252450</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
