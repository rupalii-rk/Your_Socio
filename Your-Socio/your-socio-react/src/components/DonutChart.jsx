/**
 * DonutChart — SVG donut chart with center text.
 *
 * React concept: **Encapsulating SVG as a component**.
 * SVG markup in vanilla HTML is verbose and hard to maintain inline.
 * As a React component, it becomes a self-contained, reusable visual element
 * that could accept props for percentage, colors, and labels if needed later.
 */
export default function DonutChart() {
  return (
    <div className="dash-donut-wrap">
      <div className="dash-donut-label">Audience<br />Authenticity</div>
      <div className="donut-chart">
        <svg viewBox="0 0 80 80" width="80" height="80">
          <circle cx="40" cy="40" r="30" fill="none" stroke="#333" strokeWidth="10" />
          <circle
            cx="40" cy="40" r="30"
            fill="none" stroke="#ff5722" strokeWidth="10"
            strokeDasharray="169 188" strokeDashoffset="47" strokeLinecap="round"
          />
          <text x="40" y="38" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">98%</text>
          <text x="40" y="52" textAnchor="middle" fill="#aaa" fontSize="7">Real People</text>
        </svg>
      </div>
    </div>
  );
}
