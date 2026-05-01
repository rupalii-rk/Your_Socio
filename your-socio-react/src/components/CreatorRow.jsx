/**
 * CreatorRow — Single creator row inside the dashboard card.
 *
 * React concept: **Component composition with props**.
 * Each row in the vanilla HTML was a copy-pasted div block with different data.
 * In React, we define the structure once and pass unique data as props.
 * The parent (DashboardCard) maps over the data array and renders one
 * CreatorRow per entry — zero duplication.
 */
export default function CreatorRow({ name, followers, rate, color, id }) {
  return (
    <div className="creator-row" id={id}>
      <div className="cr-avatar" style={{ background: color }}></div>
      <span className="cr-name">{name}</span>
      <span className="cr-num">{followers}</span>
      <span className="cr-rate">{rate}</span>
    </div>
  );
}
