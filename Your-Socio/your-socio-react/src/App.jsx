import { Routes, Route } from 'react-router-dom';
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
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CreatorsPage from './pages/CreatorsPage';

/**
 * LandingPage — All original sections grouped into a single route component.
 */
function LandingPage() {
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

/**
 * App — Root component with route definitions.
 *
 * Routes:
 *  /                → Landing page (all original sections)
 *  /signin          → Sign In page
 *  /signup          → Sign Up page
 *  /forgot-password → Forgot Password page
 *
 * Auth pages are full-page layouts (no Navbar/Footer) for an immersive
 * experience. The landing page retains the original layout unchanged.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/creators" element={<CreatorsPage />} />
    </Routes>
  );
}
