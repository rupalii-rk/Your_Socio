import FeatureItem from './FeatureItem';
import { features } from '../data/features';

/**
 * FeaturesBar — Dark bar with 3 feature highlights.
 *
 * React concept: **Rendering lists with separators**.
 * Similar to StatsBar, we map over a data array and conditionally render
 * separator divs. The FeatureItem component handles individual rendering.
 */
export default function FeaturesBar() {
  return (
    <section className="features-bar" id="features-bar">
      <div className="features-container">
        {features.map((feat, index) => (
          <div key={feat.id} style={{ display: 'contents' }}>
            {index > 0 && <div className="feat-sep"></div>}
            <FeatureItem {...feat} />
          </div>
        ))}
      </div>
    </section>
  );
}
