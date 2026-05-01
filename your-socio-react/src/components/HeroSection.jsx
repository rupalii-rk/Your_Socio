import DashboardCard from './DashboardCard';
import StatsBar from './StatsBar';

/**
 * HeroSection — Full hero area: headline, CTA buttons, dashboard card, stats.
 *
 * React concept: **Component composition at the section level**.
 * The vanilla HTML hero section was ~120 lines of deeply nested markup.
 * In React, we break it into DashboardCard and StatsBar sub-components,
 * making HeroSection a clean orchestrator. The hero-left content stays inline
 * because it's unique to this section and wouldn't benefit from extraction.
 */
export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title" id="hero-title">
            AUTHENTICITY<br />IS NOT A<br />
            <span className="orange-text">TREND.</span>
          </h1>
          <p className="hero-subtitle" id="hero-subtitle">
            Connecting brands with real creators.<br />
            No fake metrics. Just pure, unfiltered engagement.
          </p>
          <div className="hero-buttons" id="hero-buttons">
            <a href="#" className="btn-primary" id="btn-services">
              OUR SERVICES <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#about" className="btn-outline" id="btn-about">
              ABOUT US <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="hero-right" id="hero-right">
          <DashboardCard />
        </div>
      </div>
      <StatsBar />
    </section>
  );
}
