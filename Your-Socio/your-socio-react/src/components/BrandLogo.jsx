/**
 * BrandLogo — Single brand logo (image or text variant).
 *
 * React concept: **Conditional rendering**.
 * Some brand logos are images (Nike, Puma, Amazon) while others are styled text
 * (boAt, Zomato, etc.). Instead of mixing two different HTML patterns inline,
 * we use a ternary: `type === 'image' ? <img> : <span>`. React lets us express
 * this branching logic directly in JSX rather than duplicating templates.
 */
export default function BrandLogo({ id, type, src, alt, style, className, display }) {
  return (
    <div className="brand-logo" id={id}>
      {type === 'image' ? (
        <img src={src} alt={alt} style={style} />
      ) : (
        <span className={`brand-text-logo ${className || ''}`}>{display}</span>
      )}
    </div>
  );
}
