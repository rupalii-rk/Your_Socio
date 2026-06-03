import { stats } from '../data/stats';

/**
 * StatsBar — Dark horizontal bar with key metrics.
 *
 * React concept: **Array.map() with Fragment-based separators**.
 * The vanilla HTML manually placed `<div class="stat-divider">` between each
 * stat item. In React, we use `.map()` with an index check to conditionally
 * render dividers — no manual separator management.
 */
export default function StatsBar() {
  return (
    <div className="stats-bar" id="stats-bar">
      {stats.map((stat, index) => (
        <div key={stat.label} style={{ display: 'contents' }}>
          {index > 0 && <div className="stat-divider"></div>}
          <div className="stat-item">
            <i className={`${stat.icon} stat-icon`}></i>
            <div>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
