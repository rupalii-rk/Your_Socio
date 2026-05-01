import StepCard from './StepCard';
import { steps } from '../data/steps';

/**
 * HowItWorks — 3-step process section with arrows between steps.
 *
 * React concept: **Fragment-based rendering with interspersed elements**.
 * The arrows between steps are not part of each StepCard — they're layout
 * connectors. We handle this by mapping over steps and conditionally rendering
 * arrow divs between them (similar pattern to separators in StatsBar).
 */
export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="section-title">HOW IT WORKS</h2>
      <div className="hiw-steps">
        {steps.map((step, index) => (
          <div key={step.id} style={{ display: 'contents' }}>
            {index > 0 && (
              <div className="hiw-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            )}
            <StepCard {...step} />
          </div>
        ))}
      </div>
    </section>
  );
}
