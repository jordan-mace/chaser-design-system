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
import Box from '../Box';

export type ToggleSize = 'small' | 'medium' | 'large';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked' | 'onChange'> {
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
      onChange((e.target as HTMLInputElement).checked);
    }
  };

  return (
    <Box as="div" className={toggle}>
      <Box as="label" htmlFor={toggleId}>
        <Box
          as="input"
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
          {...props}
        />
        <Box
          as="span"
          className={clsx(
            toggleTrack,
            toggleSizes[size],
            checked ? toggleTrackChecked : toggleTrackUnchecked,
          )}
          data-size={size}
        >
          <Box
            as="span"
            className={clsx(
              toggleThumb,
              toggleThumbSizes[size],
              checked ? toggleThumbChecked : toggleThumbUnchecked,
            )}
          />
        </Box>
        <Box
          as="span"
          className={toggleFocusRing}
          data-focused={isFocused}
          aria-hidden="true"
        />
      </Box>
      {label && <Box as="span" marginLeft="small">{label}</Box>}
    </Box>
  );
};

export default Toggle;
