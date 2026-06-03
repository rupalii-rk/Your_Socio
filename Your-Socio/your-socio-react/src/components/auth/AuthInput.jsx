import { useState } from 'react';

/**
 * AuthInput — Reusable input with icon, password toggle, and validation state.
 *
 * Props:
 *  - icon: FontAwesome class string (e.g. "fa-solid fa-envelope")
 *  - type: input type ("text", "email", "password")
 *  - placeholder: placeholder text
 *  - value: controlled value
 *  - onChange: change handler
 *  - error: error message string (shows red border + message)
 *  - id: unique id for the input
 *  - name: input name attribute
 *  - autoComplete: autocomplete hint
 */
export default function AuthInput({
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  id,
  name,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div className="auth-input-group">
      <input
        id={id}
        name={name}
        type={inputType}
        className={`auth-input${error ? ' auth-input--error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      {icon && <i className={`auth-input-icon ${icon}`} />}
      {isPassword && (
        <button
          type="button"
          className="auth-password-toggle"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={-1}
        >
          <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
        </button>
      )}
      {error && <div className="auth-input-error-text">{error}</div>}
    </div>
  );
}
