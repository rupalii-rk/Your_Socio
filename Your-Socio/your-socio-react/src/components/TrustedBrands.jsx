import BrandLogo from './BrandLogo';
import { brandLogos } from '../data/brands';

/**
 * TrustedBrands — Logo wall of partner brands.
 *
 * React concept: **Spreading props with {...item}**.
 * Each BrandLogo receives all its data via spread syntax. This is a clean
 * pattern when the data shape matches the component's prop interface exactly.
 */
export default function TrustedBrands() {
  return (
    <section className="trusted-brands" id="support">
      <h2 className="section-title center">TRUSTED BY LEADING BRANDS</h2>
      <div className="brands-logos" id="brands-logos">
        {brandLogos.map((brand) => (
          <BrandLogo key={brand.id} {...brand} />
        ))}
      </div>
    </section>
  );
}
