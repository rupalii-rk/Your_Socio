import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesBar from './components/FeaturesBar';
import DualSection from './components/DualSection';
import HowItWorks from './components/HowItWorks';
import FeaturedCreators from './components/FeaturedCreators';
import TrustedBrands from './components/TrustedBrands';
import RealImpact from './components/RealImpact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

/**
 * App — Root component that assembles all page sections.
 *
 * React concept: **Top-level composition**.
 * This is the "table of contents" for the entire page. Each section is an
 * isolated component that manages its own rendering, data, and state.
 * App itself has NO state — it's a pure orchestrator.
 *
 * Compare this to the vanilla HTML: 497 lines of deeply nested markup in a
 * single file. Here, each section is ~30-60 lines in its own file, testable
 * and modifiable in isolation.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesBar />
      <DualSection />
      <HowItWorks />
      <FeaturedCreators />
      <TrustedBrands />
      <RealImpact />
      <Newsletter />
      <Footer />
    </>
  );
}
