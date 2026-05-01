/**
 * CreatorCard — Featured creator card (image, name, niche, stats).
 *
 * React concept: **List rendering with .map()**.
 * In vanilla HTML, five near-identical card blocks were copy-pasted with
 * different data values. In React, we define this template once and the
 * parent renders `creators.map(c => <CreatorCard {...c} />)`.
 * Adding a 6th creator is now a one-line data change, not a 20-line HTML edit.
 */
export default function CreatorCard({ name, niche, audience, engRate, image, id }) {
  return (
    <div className="creator-card" id={id}>
      <div className="cc-img-wrap">
        <img src={image} alt={name} />
        <div className="cc-tag">{niche}</div>
      </div>
      <div className="cc-info">
        <div className="cc-name">{name}</div>
        <div className="cc-stats">
          <span>
            <strong>{audience}</strong><br />
            <small>Audience</small>
          </span>
          <span>
            <strong className="orange-text">{engRate}</strong><br />
            <small>Eng. Rate</small>
          </span>
        </div>
      </div>
    </div>
  );
}
