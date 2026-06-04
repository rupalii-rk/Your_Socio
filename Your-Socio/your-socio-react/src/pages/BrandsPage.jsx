import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrandLogo from '../components/BrandLogo';
import { brandLogos } from '../data/brands';

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      <div className="brands-page">
        <div className="brands-header">
          <h1 className="section-title center">Our Partner Brands</h1>
          <p>We have proudly collaborated with some of the most innovative and leading brands in the industry.</p>
        </div>
        <div className="brands-grid-wrap">
          <div className="brands-logos grid-layout">
            {brandLogos.map((brand) => (
              <BrandLogo key={brand.id} {...brand} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
