/**
 * Logo — Reusable brand mark component.
 *
 * React concept: **Props-driven rendering**.
 * Instead of duplicating the logo HTML in the navbar AND footer (as the vanilla
 * version does), we extract it into a single component that accepts a `variant`
 * prop. This eliminates copy-paste and ensures brand consistency.
 */
export default function Logo({ variant = 'default' }) {
  return (
    <a href="#" className={`logo ${variant === 'footer' ? 'footer-logo' : ''}`}>
      <span className="logo-your">YOUR</span>
      <span className="logo-socio">SOCIO</span>
    </a>
  );
}
