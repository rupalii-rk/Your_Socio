import { Link } from 'react-router-dom';
import '../../styles/auth.css';

/**
 * AuthLayout — Shared split-panel layout for Sign In and Sign Up pages.
 *
 * Left side: dark branding panel with animated gradient, floating orbs, logo
 * Right side: white form panel (renders children)
 *
 * Props:
 *  - children: form content to render on the right side
 *  - tagline: heading text on the branding side
 *  - subtitle: description text below the tagline
 *  - reversed: if true, branding panel appears on the right (visual variety)
 */
export default function AuthLayout({ children, tagline, subtitle, reversed = false }) {
  const brandPanel = (
    <div className="auth-brand">
      {/* Animated gradient orbs */}
      <div className="auth-orb auth-orb--1" />
      <div className="auth-orb auth-orb--2" />
      <div className="auth-orb auth-orb--3" />

      {/* Geometric shapes */}
      <div className="auth-shape auth-shape--1" />
      <div className="auth-shape auth-shape--2" />
      <div className="auth-shape auth-shape--3" />

      <div className="auth-brand-content">
        <Link to="/" className="auth-brand-logo">
          <span className="logo-your">YOUR</span>
          <span className="logo-socio">SOCIO</span>
        </Link>
        <h2 className="auth-brand-tagline">{tagline}</h2>
        <p className="auth-brand-subtitle">{subtitle}</p>
      </div>
    </div>
  );

  const formPanel = (
    <div className="auth-form-side">
      <div className="auth-form-wrapper">
        {children}
      </div>
    </div>
  );

  return (
    <div className="auth-page">
      {reversed ? (
        <>
          {formPanel}
          {brandPanel}
        </>
      ) : (
        <>
          {brandPanel}
          {formPanel}
        </>
      )}
    </div>
  );
}
