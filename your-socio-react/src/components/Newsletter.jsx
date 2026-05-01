import { useState } from 'react';

/**
 * Newsletter — Email subscription form.
 *
 * React concepts used:
 *
 * 1. **Controlled component** — The `<input>` value is bound to `email` state
 *    via `value={email}`. Every keystroke fires `onChange`, which updates state,
 *    which re-renders the input with the new value. React is the single source
 *    of truth for the input value — we never need to query the DOM.
 *
 *    Vanilla JS: `document.getElementById('nl-email').value` (read from DOM)
 *    React:      `email` (read from state)
 *
 * 2. **Form event handling** — `onSubmit` replaces the inline `onsubmit="return false;"`
 *    and the separate `addEventListener('submit', ...)`. The handler, the state,
 *    and the UI are all co-located in one component.
 *
 * 3. **Conditional rendering for success state** — Instead of `alert()`, we
 *    set `isSubmitted = true` and render a success message. This is a UX upgrade
 *    that's natural in React but awkward in vanilla JS (you'd need to manually
 *    create/append/show/hide DOM elements).
 *
 * State owner rationale: Newsletter owns both `email` and `isSubmitted` because
 * the form is entirely self-contained — no other component needs this data.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="nl-container">
        <div className="nl-left">
          <div className="nl-icon">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
          <div>
            <div className="nl-title">Stay ahead. Get the latest</div>
            <div className="nl-sub">creator insights &amp; trends.</div>
          </div>
        </div>
        <div className="nl-right">
          {isSubmitted ? (
            <p style={{ color: '#4caf50', fontWeight: 600, textAlign: 'center' }}>
              ✓ Thank you for subscribing!
            </p>
          ) : (
            <form className="nl-form" id="nl-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="nl-input"
                id="nl-email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="nl-btn" id="nl-submit">
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
