import clsx from 'clsx';
import {
  toggle,
  toggleInput,
  toggleTrack,
  toggleTrackChecked,
  toggleTrackUnchecked,
  toggleThumb,
  toggleThumbSizes,
  toggleThumbChecked,
  toggleThumbUnchecked,
  toggleFocusRing,
  toggleSizes,
} from './styles.css';
import React, { useState } from 'react';

export type ToggleSize = 'small' | 'medium' | 'large';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: ToggleSize;
  label?: string;
}

const Toggle = ({
  checked = false,
  onChange,
  size = 'medium',
  label,
  disabled = false,
  id,
  ...props
}: ToggleProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label htmlFor={toggleId} className={toggle} {...props}>
      <input
        type="checkbox"
        id={toggleId}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={toggleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-checked={checked}
        role="switch"
      />
      <span
        className={clsx(
          toggleTrack,
          toggleSizes[size],
          checked ? toggleTrackChecked : toggleTrackUnchecked,
        )}
        data-size={size}
      >
        <span
          className={clsx(
            toggleThumb,
            toggleThumbSizes[size],
            checked ? toggleThumbChecked : toggleThumbUnchecked,
          )}
        />
        {label && <span style={{ marginLeft: '0.75rem' }}>{label}</span>}
      </span>
      <span
        className={toggleFocusRing}
        data-focused={isFocused}
        aria-hidden="true"
      />
    </label>
  );
};

export default Toggle;
