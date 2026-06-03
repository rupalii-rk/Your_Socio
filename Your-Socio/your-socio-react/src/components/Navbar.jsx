import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

/**
 * Navbar — Top navigation with mobile hamburger toggle.
 *
 * React concepts used:
 *
 * 1. **useState** — `isMobileMenuOpen` replaces the vanilla JS approach of
 *    directly mutating `navLinks.style.display` and 5 other inline styles.
 *    React's model: state changes → re-render → UI updates automatically.
 *
 * 2. **Declarative class toggling** — Instead of imperatively setting styles
 *    in a click handler, we compute the className from state:
 *    `nav-links ${isMobileMenuOpen ? 'nav-links--open' : ''}`.
 *    The CSS class `.nav-links--open` handles all the visual changes.
 *
 * 3. **Event handling** — `onClick={() => set...}` replaces
 *    `document.getElementById('hamburger').addEventListener('click', ...)`.
 *    The handler is co-located with the element it controls.
 *
 * State owner rationale: Navbar owns `isMobileMenuOpen` because no other
 * component in the tree needs to know whether the mobile menu is open.
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <Logo />
        <ul
          className={`nav-links ${isMobileMenuOpen ? 'nav-links--open' : ''}`}
          id="nav-links"
        >
          <li><a href="#about" id="nav-about">ABOUT</a></li>
          <li><a href="#creators" id="nav-creators">CREATORS</a></li>
          <li><a href="#brands" id="nav-brands">BRANDS</a></li>
          <li><a href="#support" id="nav-support">SUPPORT</a></li>
        </ul>
        <Link to="/signin" className="btn-login" id="btn-login">LOGIN</Link>
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
