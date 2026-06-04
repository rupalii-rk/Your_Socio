import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';
import SocialButtons from '../components/auth/SocialButtons';
import { useAuth } from '../context/AuthContext';

/**
 * SignIn — Sign-in page with split-panel layout.
 *
 * Left: dark branding panel with animated gradient and floating orbs.
 * Right: sign-in form with email/password, remember-me, forgot-password link,
 *        social login buttons, and a link to sign up.
 *
 * State: form fields are controlled via useState.
 * Authentication uses Firebase with a developer mock fallback.
 */
export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [authError, setAuthError] = useState('');

  const { login, loginWithGoogle, isConfigured } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/');
    } catch (err) {
      console.error(err);
      let message = 'Failed to sign in. Please try again.';
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        message = 'Invalid email or password.';
      } else if (err.code === 'auth/too-many-requests') {
        message = 'Too many attempts. Please try again later.';
      } else if (err.message) {
        message = err.message;
      }
      setAuthError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setAuthError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      console.error(err);
      let message = 'Failed to sign in with Google.';
      if (err.message) {
        message = err.message;
      }
      setAuthError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      tagline="Authenticity Is Not A Trend."
      subtitle="Connect with real creators and brands. Sign in to your dashboard and start building genuine engagement."
    >
      <div className="auth-form-header">
        <h1 className="auth-form-title" id="signin-title">Welcome Back</h1>
        <p className="auth-form-desc">
          Sign in to your account to continue where you left off.
        </p>
      </div>

      {!isConfigured && (
        <div style={{
          color: '#e67e22',
          backgroundColor: 'rgba(230, 126, 34, 0.1)',
          border: '1px solid rgba(230, 126, 34, 0.2)',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          fontSize: '0.85rem',
          fontWeight: '500',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          ⚠️ Firebase is not configured. Running in Mock Auth Mode.
        </div>
      )}

      {authError && (
        <div style={{
          color: '#e74c3c',
          backgroundColor: 'rgba(231, 76, 60, 0.1)',
          border: '1px solid rgba(231, 76, 60, 0.2)',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          fontSize: '0.85rem',
          fontWeight: '500',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          {authError}
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <AuthInput
          id="signin-email"
          name="email"
          type="email"
          icon="fa-solid fa-envelope"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />

        <AuthInput
          id="signin-password"
          name="password"
          type="password"
          icon="fa-solid fa-lock"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="current-password"
        />

        <div className="auth-options">
          <label className="auth-checkbox-label" htmlFor="signin-remember">
            <input
              type="checkbox"
              className="auth-checkbox"
              id="signin-remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="auth-forgot-link" id="signin-forgot-link">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className={`auth-submit-btn${loading ? ' auth-submit-btn--loading' : ''}`}
          id="signin-submit"
          disabled={loading}
        >
          {loading ? <span className="auth-btn-spinner" /> : 'SIGN IN'}
        </button>

        <div className="auth-divider">
          <span className="auth-divider-line" />
          <span className="auth-divider-text">or continue with</span>
          <span className="auth-divider-line" />
        </div>

        <SocialButtons action="sign in" onGoogleClick={handleGoogleLogin} />
      </form>

      <p className="auth-switch">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="auth-switch-link" id="signin-signup-link">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
}
