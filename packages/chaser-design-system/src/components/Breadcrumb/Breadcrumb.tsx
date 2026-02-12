import clsx from 'clsx';
import React from 'react';
import {
  breadcrumb,
  breadcrumbList,
  breadcrumbItem,
  breadcrumbLink,
  breadcrumbSeparator,
  breadcrumbCurrent,
} from './styles.css';
import Box from '../Box';
import { Sprinkles } from '../../styles/sprinkles.css';

type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
};

type BreadcrumbProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    items: BreadcrumbItem[];
    separator?: string;
  };

const Breadcrumb = ({ items, className, separator = '/' }: BreadcrumbProps) => {
  return (
    <Box
      as="nav"
      aria-label="Breadcrumb"
      className={clsx(breadcrumb, className)}
      display="flex"
      alignItems="center"
      gap="small"
      fontSize="14px"
    >
      <Box
        as="ol"
        className={breadcrumbList}
        display="flex"
        alignItems="center"
        style={{ listStyle: 'none' }}
        margin="none"
        padding="none"
        gap="small"
      >
        {items.map((item, index) => (
          <Box
            as="li"
            key={index}
            className={breadcrumbItem}
            display="flex"
            alignItems="center"
          >
            {item.href && !item.current ? (
              <Box
                as="a"
                href={item.href}
                className={breadcrumbLink}
                display="inline"
                alignItems="center"
                color="c5-600"
                fontSize="14px"
                textDecoration="none"
              >
                {item.label}
              </Box>
            ) : (
              <Box
                as="span"
                className={breadcrumbCurrent}
                display="inline"
                alignItems="center"
                color="c5-700"
                fontSize="14px"
                fontWeight="500"
              >
                {item.label}
              </Box>
            )}
            {index < items.length - 1 && (
              <Box
                as="span"
                className={breadcrumbSeparator}
                color="c5-500"
                fontSize="12px"
                style={{ userSelect: 'none' }}
              >
                {separator}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Breadcrumb;
