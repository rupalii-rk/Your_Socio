/**
 * StepCard — Single "How It Works" step.
 *
 * React concept: **Conditional className via props**.
 * The vanilla HTML hardcodes `hiw-step-active` on step 2. In React, we pass
 * an `active` boolean prop and conditionally apply the class using template
 * literals. This makes the active state data-driven rather than markup-driven.
 */
export default function StepCard({ icon, num, title, desc, active, id }) {
  return (
    <div className={`hiw-step ${active ? 'hiw-step-active' : ''}`} id={id}>
      <div className={`hiw-icon-wrap ${active ? 'active' : ''}`}>
        <i className={icon}></i>
      </div>
      <div className="hiw-num">{num}</div>
      <div className="hiw-step-title">{title}</div>
      <p className="hiw-desc">{desc}</p>
    </div>
  );
}
