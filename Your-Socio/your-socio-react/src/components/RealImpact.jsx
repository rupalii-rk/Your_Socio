import { impactAvatars } from '../data/creators';

/**
 * RealImpact — Testimonial section with quote and creator avatar stack.
 *
 * React concept: **Static presentational section**.
 * This section has no interactivity or state. It's a pure render of static
 * content. The avatar images are data-driven via `.map()` for maintainability,
 * but the quote content is inline since it's unique.
 */
export default function RealImpact() {
  return (
    <section className="real-impact" id="real-impact">
      <div className="ri-left">
        <h2 className="ri-heading">
          REAL PEOPLE.<br />
          <span className="orange-text">REAL IMPACT.</span>
        </h2>
      </div>
      <div className="ri-right">
        <div className="ri-quote">
          <span className="quote-mark">&ldquo;</span>
          <p>Your Socio helped us connect with the right creators and the results were beyond our expectations!</p>
          <div className="ri-author">
            <div>
              <strong>Ananya Verma</strong>
              <span>Marketing Head, ZestCo</span>
            </div>
            <div className="ri-stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ri-creators-preview">
        <div className="ri-avatars">
          {impactAvatars.map((avatar, i) => (
            <img key={i} src={avatar.src} alt={avatar.alt} />
          ))}
        </div>
        <div className="ri-count-badge">
          <strong>10K+</strong>
          <span>Active<br />Creators</span>
        </div>
      </div>
    </section>
  );
}
