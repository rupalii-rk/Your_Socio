import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-hero">
          <h1 className="section-title center">About Your Socio</h1>
          <p className="about-subtitle">The ultimate platform bridging the gap between innovative Creators and leading Brands.</p>
        </div>
        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>We believe in the power of authentic content. Your Socio was founded to make collaborations seamless, transparent, and highly effective for both parties. Our goal is to streamline the connection process so that creativity can truly flourish.</p>
          </div>
          <div className="about-section">
            <h2>Our Vision</h2>
            <p>To empower the creator economy by providing world-class tools and connections, enabling anyone with a voice to turn their passion into a thriving career while helping brands reach highly engaged and relevant audiences.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
