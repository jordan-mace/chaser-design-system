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

type AccordionContextType = {
  allowMultiple?: boolean;
  expandedItems: Set<string>;
  toggleItem: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextType>({
  allowMultiple: false,
  expandedItems: new Set(),
  toggleItem: () => {},
});

type AccordionProps = {
  children: React.ReactNode;
  allowMultiple?: boolean;
  className?: string;
};

const Accordion = ({
  children,
  allowMultiple = false,
  className,
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
    <AccordionContext.Provider value={{ allowMultiple, expandedItems, toggleItem }}>
      <Box
        className={clsx(accordionGroup, className)}
        width="100%"
      >
        {children}
      </Box>
    </AccordionContext.Provider>
  );
};

type AccordionItemProps = {
  value: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

const AccordionItem = ({
  value,
  title,
  children,
  className,
}: AccordionItemProps) => {
  const { expandedItems, toggleItem } = useContext(AccordionContext);
  const isExpanded = expandedItems.has(value);

  const toggleExpanded = useCallback(() => {
    toggleItem(value);
  }, [value, toggleItem]);

  return (
    <Box
      as="div"
      className={clsx(accordionItem, className)}
      width="100%"
      marginBottom="small"
      border="small"
      borderRadius="large"
      overflow="hidden"
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
