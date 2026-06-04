import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

/**
 * Navbar — Top navigation with mobile hamburger toggle.
 *
 * Scopes user auth state using useAuth hook to conditionally render
 * username and logout buttons.
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <Logo />
        <ul
          className={`nav-links ${isMobileMenuOpen ? 'nav-links--open' : ''}`}
          id="nav-links"
        >
          <li><Link to="/about" id="nav-about">ABOUT</Link></li>
          <li><Link to="/creators" id="nav-creators">CREATORS</Link></li>
          <li><Link to="/brands" id="nav-brands">BRANDS</Link></li>
          <li><Link to="/support" id="nav-support">SUPPORT</Link></li>
        </ul>
        {user && (
          <span className="nav-user-name" style={{
            fontWeight: 800,
            color: 'var(--text-dark)',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-heading)',
            marginRight: '0.75rem',
            letterSpacing: '0.5px'
          }}>
            HI, {(user.displayName || user.email.split('@')[0]).toUpperCase()}
          </span>
        )}
        {user ? (
          <button
            onClick={logout}
            className="btn-login"
            id="btn-logout"
            style={{ backgroundColor: 'var(--text-dark)' }}
          >
            LOGOUT
          </button>
        ) : (
          <Link to="/signin" className="btn-login" id="btn-login">LOGIN</Link>
        )}
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
