/**
 * FeatureItem — Single feature block (icon + title + description).
 *
 * React concept: **Pure presentational component**.
 * This component receives all its data via props and renders it.
 * It has no state, no side effects — it's a pure function of its inputs.
 * In vanilla JS, these were hardcoded HTML blocks. In React, we render
 * them from a data array using `.map()`, making it trivial to add/remove features.
 */
export default function FeatureItem({ icon, title, desc, id }) {
  return (
    <div className="feature-item" id={id}>
      <div className="feat-icon-wrap orange">
        <i className={icon}></i>
      </div>
      <div>
        <div className="feat-title">{title}</div>
        <div className="feat-desc">{desc}</div>
      </div>
    </div>
  );
}
