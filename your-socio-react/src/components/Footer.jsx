import { useState } from 'react';
import FooterColumn from './FooterColumn';
import { footerColumns, bottomLinks } from '../data/footerLinks';

/**
 * Footer — Full-featured site footer matching the reference design.
 *
 * Layout (top → bottom):
 *  1. Subscribe bar — email field + submit
 *  2. Main footer body — brand info (left), 4 link columns (center), map (right)
 *  3. Thank-you banner
 *  4. Bottom bar — nav links + copyright
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer-v2" id="footer">
      {/* ─── Subscribe Bar ─── */}
      <div className="footer-subscribe">
        <div className="footer-subscribe-inner">
          <h3 className="footer-subscribe-title">Subscribe</h3>
          <p className="footer-subscribe-desc">
            HI TEAM Your Socio will update you about new campaigns and offers.
          </p>
          <div className="footer-subscribe-form-wrap">
            {subscribed ? (
              <p className="footer-subscribe-success">✓ Subscribed successfully!</p>
            ) : (
              <form className="footer-subscribe-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="footer-subscribe-input"
                  placeholder="Write Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="footer-email"
                />
                <button type="submit" className="footer-subscribe-btn" id="footer-subscribe-btn">
                  <i className="fa-solid fa-play"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ─── Main Footer Body ─── */}
      <div className="footer-main">
        <div className="footer-main-inner">
          {/* Brand Column */}
          <div className="footer-brand-v2">
            <h2 className="footer-brand-name">YOUR SOCIO</h2>
            <p className="footer-brand-slogan">Platform for Creators and Brands</p>
            <div className="footer-brand-divider"></div>
            <p className="footer-brand-desc">
              Your Socio is a platform that connects creators and brands to create meaningful collaborations.
            </p>
            <div className="footer-brand-socials">
              <a href="#" className="footer-social" id="fs-fb" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-social" id="fs-tw" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="footer-social" id="fs-li" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="footer-social" id="fs-web" aria-label="Website">
                <i className="fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="footer-columns-grid">
            {footerColumns.map((col) => (
              <FooterColumn key={col.title} {...col} />
            ))}
          </div>

          {/* Map */}
          <div className="footer-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.878255655036!2d77.44488737775518!3d28.633410675664308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef2a98698d8b%3A0x322f802537ebe3a6!2sABESIT%20College%20Of%20Engineering%20library!5e0!3m2!1sen!2sin!4v1777607540594!5m2!1sen!2sin"
              className="footer-map-iframe"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* ─── Thank-You Banner ─── */}
      <div className="footer-thankyou">
        <p className="footer-thankyou-text">
          Thank! You For Your Creative Business Landing Page
        </p>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <nav className="footer-bottom-links">
            {bottomLinks.map((link, i) => (
              <span key={link.id} className="footer-bottom-link-wrap">
                <a href={link.href} id={link.id} className="footer-bottom-link">
                  {link.label}
                </a>
                {i < bottomLinks.length - 1 && (
                  <span className="footer-bottom-sep">|</span>
                )}
              </span>
            ))}
          </nav>
          <p className="footer-copyright">
            © 2025 Example Text. All images are for demo purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
