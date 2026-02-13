import clsx from 'clsx';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  comboboxContainer,
  comboboxInput,
  comboboxInputVariants,
  comboboxLabel,
  comboboxDropdown,
  comboboxOption,
  comboboxOptionSelected,
  comboboxOptionDisabled,
  comboboxClearButton,
  comboboxArrow,
  comboboxNoResults,
  comboboxHint,
  comboboxErrorMessage,
} from './styles.css';
import Box from '../Box';
import { type ComboboxProps, type ComboboxOption } from './Combobox.types';

const defaultFilterFn = (
  option: ComboboxOption,
  inputValue: string,
): boolean => {
  return option.label.toLowerCase().includes(inputValue.toLowerCase());
};

const Combobox = ({
  label,
  options,
  value,
  onChange,
  onInputChange,
  placeholder = 'Search...',
  hint,
  error = false,
  errorMessage,
  fullWidth = true,
  clearable = true,
  disabled = false,
  filterFn = defaultFilterFn,
  className,
  ...props
}: ComboboxProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    if (selectedOption) {
      setInputValue(selectedOption.label);
    } else if (!isOpen) {
      setInputValue('');
    }
  }, [selectedOption, isOpen]);

  const filteredOptions = options.filter((option) =>
    filterFn(option, inputValue),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        if (selectedOption) {
          setInputValue(selectedOption.label);
        } else {
          setInputValue('');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedOption]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    setHighlightedIndex(-1);
    onInputChange?.(newValue);

    if (!newValue) {
      onChange?.('', null);
    }
  };

  const handleOptionClick = (option: ComboboxOption) => {
    if (option.disabled) return;

    setInputValue(option.label);
    setIsOpen(false);
    onChange?.(option.value, option);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInputValue('');
    setIsOpen(false);
    onChange?.('', null);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev,
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case 'Enter':
        e.preventDefault();
        if (
          isOpen &&
          highlightedIndex >= 0 &&
          filteredOptions[highlightedIndex]
        ) {
          handleOptionClick(filteredOptions[highlightedIndex]);
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        if (selectedOption) {
          setInputValue(selectedOption.label);
        } else {
          setInputValue('');
        }
        break;
    }
  };

  const displayValue =
    selectedOption && !isOpen ? selectedOption.label : inputValue;

  return (
    <Box
      className={comboboxContainer}
      ref={containerRef}
      width={fullWidth ? '100%' : undefined}
    >
      {label && (
        <Box as="label" className={comboboxLabel}>
          {label}
        </Box>
      )}

      <Box position="relative">
        <Box
          as="input"
          ref={inputRef}
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            comboboxInput,
            comboboxInputVariants[error ? 'error' : 'default'],
            className,
          )}
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls={isOpen ? 'combobox-listbox' : undefined}
          aria-activedescendant={
            highlightedIndex >= 0
              ? `option-${filteredOptions[highlightedIndex]?.value}`
              : undefined
          }
          {...props}
        />

        {clearable && inputValue && !disabled && (
          <Box
            as="button"
            className={comboboxClearButton}
            onClick={handleClear}
            type="button"
            aria-label="Clear selection"
          >
            ×
          </Box>
        )}

        <Box className={comboboxArrow} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 8L1 3h10z" />
          </svg>
        </Box>
      </Box>

      {isOpen && (
        <Box
          as="ul"
          id="combobox-listbox"
          className={comboboxDropdown}
          role="listbox"
        >
          {filteredOptions.length === 0 ? (
            <Box as="li" className={comboboxNoResults}>
              No results found
            </Box>
          ) : (
            filteredOptions.map((option, index) => (
              <Box
                key={option.value}
                as="li"
                id={`option-${option.value}`}
                className={clsx(
                  comboboxOption,
                  option.value === value && comboboxOptionSelected,
                  option.disabled && comboboxOptionDisabled,
                )}
                onClick={() => handleOptionClick(option)}
                role="option"
                aria-selected={option.value === value}
                aria-disabled={option.disabled}
                style={{
                  backgroundColor:
                    index === highlightedIndex
                      ? 'var(--highlight-color, #f3f4f6)'
                      : undefined,
                }}
              >
                {option.label}
              </Box>
            ))
          )}
        </Box>
      )}

      {error && errorMessage && (
        <Box as="div" className={comboboxErrorMessage} role="alert">
          {errorMessage}
        </Box>
      )}

      {hint && !error && (
        <Box as="div" className={comboboxHint}>
          {hint}
        </Box>
      )}
    </Box>
  );
};

export default Combobox;
