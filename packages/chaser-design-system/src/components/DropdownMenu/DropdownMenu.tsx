import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';
import {
  dropdownMenuContainer,
  dropdownMenuTrigger,
  dropdownMenuContent,
  dropdownMenuPositionVariants,
  dropdownMenuItem,
  dropdownMenuItemVariants,
  dropdownMenuSeparator,
  dropdownMenuGroup,
  dropdownMenuLabel,
} from './styles.css';
import Box from '../Box';
import {
  type DropdownMenuProps,
  type DropdownMenuItemProps,
  type DropdownMenuGroupProps,
} from './DropdownMenu.types';

const DropdownMenu = ({
  trigger,
  items = [],
  groups = [],
  position = 'bottomLeft',
  closeOnItemClick = true,
  className,
  ...props
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleItemClick = (item: DropdownMenuItemProps) => {
    if (item.disabled || item.variant === 'disabled') return;

    item.onClick?.();
    if (closeOnItemClick) {
      setIsOpen(false);
    }
  };

  const renderItem = (item: DropdownMenuItemProps, index: number) => (
    <Box
      key={index}
      as="button"
      className={clsx(
        dropdownMenuItem,
        dropdownMenuItemVariants[
          item.disabled || item.variant === 'disabled'
            ? 'disabled'
            : item.variant || 'default'
        ],
      )}
      onClick={() => handleItemClick(item)}
      disabled={item.disabled || item.variant === 'disabled'}
      role="menuitem"
      type="button"
    >
      {item.icon && <span>{item.icon}</span>}
      {item.label}
    </Box>
  );

  const renderGroup = (group: DropdownMenuGroupProps, index: number) => (
    <Box key={index} className={dropdownMenuGroup} role="group">
      {group.label && (
        <Box as="div" className={dropdownMenuLabel} role="presentation">
          {group.label}
        </Box>
      )}
      {group.items.map((item, itemIndex) => renderItem(item, itemIndex))}
    </Box>
  );

  return (
    <Box
      ref={containerRef}
      className={clsx(dropdownMenuContainer, className)}
      {...props}
    >
      <Box
        className={dropdownMenuTrigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
      </Box>

      {isOpen && (
        <Box
          className={clsx(
            dropdownMenuContent,
            dropdownMenuPositionVariants[position],
          )}
          role="menu"
          aria-orientation="vertical"
        >
          {items.length > 0 && (
            <Box className={dropdownMenuGroup}>
              {items.map((item, index) => renderItem(item, index))}
            </Box>
          )}

          {groups.map((group, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Box
                  as="div"
                  className={dropdownMenuSeparator}
                  role="separator"
                />
              )}
              {renderGroup(group, index)}
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DropdownMenu;
