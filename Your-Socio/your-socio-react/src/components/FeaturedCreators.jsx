import { useRef } from 'react';
import CreatorCard from './CreatorCard';
import { featuredCreators } from '../data/creators';

/**
 * FeaturedCreators — Horizontal slider of creator cards with a "next" button.
 *
 * React concepts used:
 *
 * 1. **useRef** — We need to call `scrollBy()` on the slider DOM element.
 *    This is an imperative DOM operation that doesn't affect rendering, so
 *    we use `useRef` instead of `useState`. A ref gives us direct DOM access
 *    without causing re-renders.
 *
 *    Vanilla JS: `document.getElementById('fc-slider').scrollBy(...)`
 *    React:      `sliderRef.current.scrollBy(...)`
 *
 *    The key difference: the ref is scoped to THIS component instance. In
 *    vanilla JS, `getElementById` searches the entire document globally.
 *
 * 2. **Extracting imperative logic into handlers** — The scroll-and-loop logic
 *    from vanilla JS is preserved in `handleNext()`, but it's now co-located
 *    with the component that owns the slider element.
 */
export default function FeaturedCreators() {
  const sliderRef = useRef(null);

  const handleNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({ left: 300, behavior: 'smooth' });

    // Loop back to start when reaching the end
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
      setTimeout(() => {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <section className="featured-creators" id="featured-creators">
      <div className="fc-header">
        <h2 className="section-title left">FEATURED CREATORS</h2>
        <a href="#" className="view-all" id="view-all-creators">
          VIEW ALL CREATORS <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="fc-slider-wrap">
        <div className="fc-slider" id="fc-slider" ref={sliderRef}>
          {featuredCreators.map((creator) => (
            <CreatorCard key={creator.id} {...creator} />
          ))}
        </div>
        <button
          className="slider-btn slider-next"
          id="slider-next"
          aria-label="Next"
          onClick={handleNext}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
