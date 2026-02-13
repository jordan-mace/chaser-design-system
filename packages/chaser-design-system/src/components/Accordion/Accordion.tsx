import clsx from 'clsx';
import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  accordionItem,
  accordionHeader,
  accordionContent,
  accordionIcon,
  accordionIconExpanded,
  accordionGroup,
} from './styles.css';
import Box from '../Box';
import {
  type AccordionContextType,
  type AccordionProps,
  type AccordionItemProps,
} from './Accordion.types';

export const AccordionContext = createContext<AccordionContextType>({
  allowMultiple: false,
  expandedItems: new Set(),
  toggleItem: () => { },
});

const Accordion = ({
  children,
  allowMultiple = false,
  ...props
}: AccordionProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (value: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        if (allowMultiple) {
          newSet.add(value);
        } else {
          return new Set([value]);
        }
      }
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider
      value={{ allowMultiple, expandedItems, toggleItem }}
    >
      <Box
        className={clsx(accordionGroup, props.className)}
        width="100%"
        {...props}
      >
        {children}
      </Box>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({
  value,
  title,
  children,
  ...props
}: AccordionItemProps) => {
  const { expandedItems, toggleItem } = useContext(AccordionContext);
  const isExpanded = expandedItems.has(value);

  const toggleExpanded = useCallback(() => {
    toggleItem(value);
  }, [value, toggleItem]);

  return (
    <Box
      as="div"
      className={clsx(accordionItem, props.className)}
      width="100%"
      marginBottom="small"
      border="small"
      borderRadius="large"
      overflow="hidden"
      {...props}
    >
      <Box
        as="button"
        onClick={toggleExpanded}
        className={accordionHeader}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="small"
        cursor="pointer"
        style={{ userSelect: 'none' }}
        fontSize="14px"
        fontWeight="500"
        color="c5-700"
        aria-expanded={isExpanded}
        aria-controls={`accordion-content-${value}`}
      >
        <Box as="span">{title}</Box>
        <Box
          as="span"
          className={clsx(accordionIcon, isExpanded && accordionIconExpanded)}
          fontSize="12px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          aria-hidden="true"
        >
          ▼
        </Box>
      </Box>
      <Box
        as="div"
        id={`accordion-content-${value}`}
        className={clsx(
          accordionContent[isExpanded ? 'expanded' : 'collapsed'],
        )}
        padding="small"
        fontSize="14px"
        color="c5-700"
        role="region"
      >
        {children}
      </Box>
    </Box>
  );
};

const AccordionComponent = Object.assign(Accordion, {
  Item: AccordionItem,
});

export default AccordionComponent;
