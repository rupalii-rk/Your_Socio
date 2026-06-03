import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';
import SocialButtons from '../components/auth/SocialButtons';

/**
 * getPasswordStrength — Evaluates password strength for the strength bar.
 * Returns { level: 'weak'|'fair'|'good'|'strong', label: string }
 */
function getPasswordStrength(password) {
  if (!password) return null;

  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { level: 'weak', label: 'Weak' };
  if (score === 2) return { level: 'fair', label: 'Fair' };
  if (score === 3) return { level: 'good', label: 'Good' };
  return { level: 'strong', label: 'Strong' };
}

/**
 * SignUp — Registration page with reversed split-panel layout.
 *
 * Left: form panel with full name, email, password + strength indicator,
 *       confirm password, terms checkbox, social signup, link to sign in.
 * Right: dark branding panel (reversed for visual variety).
 */
export default function SignUp() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const strength = useMemo(() => getPasswordStrength(form.password), [form.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
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
    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms';
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
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <AuthLayout
      tagline="Join The Movement."
      subtitle="Create your account and start connecting with authentic creators and brands that share your values."
      reversed
    >
      <div className="auth-form-header">
        <h1 className="auth-form-title" id="signup-title">Create Account</h1>
        <p className="auth-form-desc">
          Start your journey with Your Socio today.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <AuthInput
          id="signup-fullname"
          name="fullName"
          type="text"
          icon="fa-solid fa-user"
          placeholder="Full name"
          value={form.fullName}
          onChange={handleChange}
          error={errors.fullName}
          autoComplete="name"
        />

        <AuthInput
          id="signup-email"
          name="email"
          type="email"
          icon="fa-solid fa-envelope"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />

        <div>
          <AuthInput
            id="signup-password"
            name="password"
            type="password"
            icon="fa-solid fa-lock"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="new-password"
          />
          {strength && (
            <div className="auth-strength">
              <div className="auth-strength-bar">
                <div className={`auth-strength-fill auth-strength-fill--${strength.level}`} />
              </div>
              <span className={`auth-strength-text auth-strength-text--${strength.level}`}>
                {strength.label}
              </span>
            </div>
          )}
        </div>

        <AuthInput
          id="signup-confirm-password"
          name="confirmPassword"
          type="password"
          icon="fa-solid fa-shield-halved"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
        />

        <label className="auth-terms-label" htmlFor="signup-terms">
          <input
            type="checkbox"
            className="auth-checkbox"
            id="signup-terms"
            checked={agreedToTerms}
            onChange={(e) => {
              setAgreedToTerms(e.target.checked);
              if (errors.terms) setErrors((prev) => ({ ...prev, terms: '' }));
            }}
          />
          <span>
            I agree to the{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            {' '}and{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          </span>
        </label>
        {errors.terms && <div className="auth-input-error-text">{errors.terms}</div>}

        <button
          type="submit"
          className={`auth-submit-btn${loading ? ' auth-submit-btn--loading' : ''}`}
          id="signup-submit"
          disabled={loading}
        >
          {loading ? <span className="auth-btn-spinner" /> : 'CREATE ACCOUNT'}
        </button>

        <div className="auth-divider">
          <span className="auth-divider-line" />
          <span className="auth-divider-text">or sign up with</span>
          <span className="auth-divider-line" />
        </div>

        <SocialButtons action="sign up" />
      </form>

      <p className="auth-switch">
        Already have an account?{' '}
        <Link to="/signin" className="auth-switch-link" id="signup-signin-link">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
}
