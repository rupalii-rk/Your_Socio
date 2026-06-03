import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';
import SocialButtons from '../components/auth/SocialButtons';

/**
 * SignIn — Sign-in page with split-panel layout.
 *
 * Left: dark branding panel with animated gradient and floating orbs.
 * Right: sign-in form with email/password, remember-me, forgot-password link,
 *        social login buttons, and a link to sign up.
 *
 * State: form fields are controlled via useState.
 * All validation is visual / frontend-only (no backend).
 */
export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // Simulate async call (frontend-only)
    setTimeout(() => {
      setLoading(false);
      // In a real app, this would redirect or show success
    }, 1500);
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

        <SocialButtons action="sign in" />
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
