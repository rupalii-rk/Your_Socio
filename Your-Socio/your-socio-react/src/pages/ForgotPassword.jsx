import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import AuthInput from '../components/auth/AuthInput';
import { useAuth } from '../context/AuthContext';

/**
 * ForgotPassword — Centered card on a dark animated gradient background.
 *
 * Two states:
 *  1. Form state: email input + "Send Reset Link" button
 *  2. Success state: animated checkmark + confirmation message
 *
 * The floating orbs from auth.css (reused via class names) give a
 * consistent visual identity with the other auth pages.
 */
export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { resetPassword, isConfigured } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      let message = 'Failed to send reset email. Please try again.';
      if (err.code === 'auth/user-not-found') {
        message = 'No account found with this email.';
      } else if (err.code === 'auth/invalid-email') {
        message = 'Invalid email address.';
      } else if (err.message) {
        message = err.message;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-forgot-page">
      {/* Background orbs (reuse auth styles) */}
      <div className="auth-orb auth-orb--1" />
      <div className="auth-orb auth-orb--2" />
      <div className="auth-orb auth-orb--3" />
      <div className="auth-shape auth-shape--1" />
      <div className="auth-shape auth-shape--2" />

      <div className="auth-forgot-card">
        {!success ? (
          <>
            <div className="auth-forgot-icon">
              <i className="fa-solid fa-key" />
            </div>
            <h1 className="auth-forgot-title" id="forgot-title">Forgot Password?</h1>
            <p className="auth-forgot-desc">
              No worries! Enter the email address associated with your account and
              we&apos;ll send you a link to reset your password.
            </p>

            {!isConfigured && (
              <div style={{
                color: '#e67e22',
                backgroundColor: 'rgba(230, 126, 34, 0.1)',
                border: '1px solid rgba(230, 126, 34, 0.2)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: '500',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                ⚠️ Firebase is not configured. Running in Mock Auth Mode.
              </div>
            )}

            <form className="auth-forgot-form" onSubmit={handleSubmit} noValidate>
              <AuthInput
                id="forgot-email"
                name="email"
                type="email"
                icon="fa-solid fa-envelope"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                error={error}
                autoComplete="email"
              />

              <button
                type="submit"
                className={`auth-submit-btn${loading ? ' auth-submit-btn--loading' : ''}`}
                id="forgot-submit"
                disabled={loading}
              >
                {loading ? <span className="auth-btn-spinner" /> : 'SEND RESET LINK'}
              </button>
            </form>

            <Link to="/signin" className="auth-forgot-back" id="forgot-back-link">
              <i className="fa-solid fa-arrow-left" />
              Back to Sign In
            </Link>
          </>
        ) : (
          <div className="auth-success">
            <div className="auth-success-icon">
              <svg viewBox="0 0 24 24">
                <polyline points="4 12 10 18 20 6" />
              </svg>
            </div>
            <h2 className="auth-success-title">Check Your Email</h2>
            <p className="auth-success-desc">
              We&apos;ve sent a password reset link to
            </p>
            <p className="auth-success-email">{email}</p>
            <Link to="/signin" className="auth-forgot-back" id="forgot-success-back" style={{ marginTop: '2rem' }}>
              <i className="fa-solid fa-arrow-left" />
              Back to Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
