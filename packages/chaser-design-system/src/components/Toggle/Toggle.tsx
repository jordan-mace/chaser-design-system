import clsx from 'clsx';
import {
  toggle,
  toggleLabel,
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
import React, { useState, useId } from 'react';
import Box from '../Box';
import { type ToggleProps } from './Toggle.types';

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
  const generatedId = useId();
  const toggleId = id || `toggle-${generatedId}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange((e.target as HTMLInputElement).checked);
    }
  };

  return (
    <Box as="div" className={toggle}>
      <Box as="label" htmlFor={toggleId} className={toggleLabel}>
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
      {label && (
        <Box as="span" marginLeft="small">
          {label}
        </Box>
      )}
    </Box>
  );
};

export default Toggle;
