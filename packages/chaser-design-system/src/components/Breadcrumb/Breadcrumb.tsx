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

type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  separator?: string;
};

const Breadcrumb = ({
  items,
  className,
  separator = '/',
}: BreadcrumbProps) => {
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
        listStyle="none"
        margin={0}
        padding={0}
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
                display="inline-flex"
                alignItems="center"
                color="textSecondary"
                fontSize="14px"
                textDecoration="none"
              >
                {item.label}
              </Box>
            ) : (
              <Box
                as="span"
                className={breadcrumbCurrent}
                display="inline-flex"
                alignItems="center"
                color="textPrimary"
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
                color="textDisabled"
                fontSize="12px"
                userSelect="none"
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
