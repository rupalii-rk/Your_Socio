import DualCard from './DualCard';

/**
 * DualSection — Container for "For Creators" and "For Brands" cards.
 *
 * React concept: **Children prop for slot-based composition**.
 * Each DualCard receives its unique bottom image/badge area via `children`.
 * This is React's equivalent of "slots" in other frameworks — the parent
 * decides what unique content goes inside the shared card shell.
 */
export default function DualSection() {
  return (
    <section className="dual-section" id="about">
      <div className="dual-container">
        <DualCard
          id="creators"
          tag="FOR CREATORS"
          heading="Grow. Connect. Earn."
          sub="Join a community that values your voice and rewards your impact."
          listItems={[
            'Get discovered by top brands',
            'Access exclusive campaigns',
            'Earn what you deserve',
          ]}
          btnText="JOIN AS CREATOR"
          btnId="btn-join-creator"
        >
          <div className="dual-creator-img">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
              alt="Creator with camera"
              id="creator-img"
            />
            <div className="built-badge" id="built-badge">
              <span>BUILT FOR</span>
              <strong>REAL<br />IMPACT</strong>
            </div>
            <div className="engagement-badge" id="eng-badge">
              <i className="fa-solid fa-heart" style={{ color: '#ff5722' }}></i> 9.4K
            </div>
          </div>
        </DualCard>

        <DualCard
          id="brands"
          tag="FOR BRANDS"
          heading="Find. Collaborate. Scale."
          sub="Partner with real creators and build campaigns that create real impact."
          listItems={[
            'Find the right creators',
            'Run data-driven campaigns',
            'Track real engagement',
          ]}
          btnText="JOIN AS BRAND"
          btnId="btn-join-brand"
        >
          <div className="dual-brand-img">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80"
              alt="Professional with laptop"
              id="brand-img"
            />
            <div className="brand-icon-badge" id="brand-badge">
              <i className="fa-solid fa-chart-line" style={{ color: '#ff5722', fontSize: '1.5rem' }}></i>
            </div>
          </div>
        </DualCard>
      </div>
    </section>
  );
}
