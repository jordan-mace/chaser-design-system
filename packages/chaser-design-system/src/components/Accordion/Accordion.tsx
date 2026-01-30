import clsx from 'clsx';
import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  accordion,
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
};

const AccordionContext = createContext<AccordionContextType>({});

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
  return (
    <AccordionContext.Provider value={{ allowMultiple }}>
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
  defaultExpanded?: boolean;
  className?: string;
};

const AccordionItem = ({
  value,
  title,
  children,
  defaultExpanded = false,
  className,
}: AccordionItemProps) => {
  const { allowMultiple } = useContext(AccordionContext);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <Box
      as="div"
      className={clsx(accordionItem, className)}
      width="100%"
      marginBottom="small"
      border="border"
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
        backgroundColor="backgroundMuted"
        cursor="pointer"
        userSelect="none"
        fontSize="14px"
        fontWeight="500"
        color="textPrimary"
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
        color="textPrimary"
        backgroundColor="backgroundDefault"
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
