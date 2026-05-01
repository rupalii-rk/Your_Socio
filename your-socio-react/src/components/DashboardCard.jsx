import CreatorRow from './CreatorRow';
import DonutChart from './DonutChart';
import { dashboardCreators } from '../data/creators';

/**
 * DashboardCard — Campaign performance dashboard shown in the hero.
 *
 * React concept: **Component composition**.
 * This component composes smaller pieces (CreatorRow, DonutChart) together.
 * In vanilla HTML, this was one massive nested div block (~60 lines).
 * In React, each sub-element is its own testable unit, and DashboardCard
 * orchestrates them. The SVG chart is kept inline here since it's unique
 * to this card, but CreatorRows are data-driven via `.map()`.
 */
export default function DashboardCard() {
  return (
    <div className="dashboard-card" id="dashboard-card">
      <div className="dashboard-header">
        <span className="dash-title">Campaign Performance</span>
        <span className="dash-period">
          This Month <i className="fa-solid fa-chevron-down"></i>
        </span>
        <div className="dash-avatar">
          <i className="fa-solid fa-user"></i>
        </div>
      </div>

      <div className="dash-metric">
        <span className="metric-label">Engagement Rate</span>
        <span className="metric-value">4.8%</span>
        <span className="metric-change positive">
          <i className="fa-solid fa-arrow-trend-up"></i> +0.7%
        </span>
      </div>

      <div className="dash-chart">
        <svg viewBox="0 0 260 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff5722" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff5722" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 65 C30 60, 50 45, 80 40 C110 35, 130 50, 160 30 C190 10, 220 20, 260 10"
            stroke="#ff5722" strokeWidth="2.5" fill="none"
          />
          <path
            d="M0 65 C30 60, 50 45, 80 40 C110 35, 130 50, 160 30 C190 10, 220 20, 260 10 V80 H0Z"
            fill="url(#chartGrad)"
          />
        </svg>
      </div>

      <div className="dash-label-row">
        <span className="dash-label">Top Performing Creators</span>
        <span className="dash-label">Engagement</span>
      </div>

      {dashboardCreators.map((creator) => (
        <CreatorRow key={creator.id} {...creator} />
      ))}

      <DonutChart />
    </div>
  );
}
