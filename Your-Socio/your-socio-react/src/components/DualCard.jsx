/**
 * DualCard — Reusable card for "For Creators" and "For Brands" sections.
 *
 * React concept: **Props-driven polymorphism**.
 * The vanilla HTML had two nearly identical card blocks (~40 lines each) with
 * different text and slightly different badge markup. In React, we extract
 * the common structure into one component and pass the differences as props.
 * The `children` prop (React's slot mechanism) handles the unique image/badge
 * area at the bottom of each card.
 *
 * This is a textbook example of the DRY principle applied via React's
 * composition model.
 */
export default function DualCard({ id, tag, heading, sub, listItems, btnText, btnId, children }) {
  return (
    <div className={`dual-card ${id === 'creators' ? 'creators-card' : 'brands-card'}`} id={id}>
      <div className="dual-tag orange-tag">{tag}</div>
      <h2 className="dual-heading">{heading}</h2>
      <p className="dual-sub">{sub}</p>
      <ul className="dual-list">
        {listItems.map((item, i) => (
          <li key={i}>
            <i className="fa-solid fa-circle-check orange-text"></i> {item}
          </li>
        ))}
      </ul>
      <a href="#" className="btn-dark" id={btnId}>
        {btnText} <i className="fa-solid fa-arrow-right"></i>
      </a>
      {children}
    </div>
  );
}
