import clsx from 'clsx';
import React from 'react';
import {
  paginationContainer,
  pageButton,
  pageButtonVariants,
  ellipsis,
} from './styles.css';
import Box from '../Box';
import { type PaginationProps } from './Pagination.types';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  ...props
}: PaginationProps) => {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (shouldShowLeftEllipsis) {
        pages.push('left-ellipsis');
      } else if (currentPage > 3) {
        for (let i = 2; i < leftSiblingIndex; i++) {
          pages.push(i);
        }
      }

      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      if (shouldShowRightEllipsis) {
        pages.push('right-ellipsis');
      } else if (currentPage < totalPages - 2) {
        for (let i = rightSiblingIndex + 1; i < totalPages; i++) {
          pages.push(i);
        }
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePageNumbers();
  const { className, ...restProps } = props;

  return (
    <Box className={clsx(paginationContainer, className)} {...restProps}>
      {showFirstLast && (
        <Box
          as="button"
          className={clsx(pageButton, pageButtonVariants.default)}
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          {'<<'}
        </Box>
      )}

      {showPrevNext && (
        <Box
          as="button"
          className={clsx(pageButton, pageButtonVariants.default)}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </Box>
      )}

      {pages.map((page, index) =>
        typeof page === 'number' ? (
          <Box
            key={`page-${page}`}
            as="button"
            className={clsx(
              pageButton,
              page === currentPage
                ? pageButtonVariants.active
                : pageButtonVariants.default,
            )}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Box>
        ) : (
          <Box key={`${page}-${index}`} className={ellipsis}>
            ...
          </Box>
        ),
      )}

      {showPrevNext && (
        <Box
          as="button"
          className={clsx(pageButton, pageButtonVariants.default)}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </Box>
      )}

      {showFirstLast && (
        <Box
          as="button"
          className={clsx(pageButton, pageButtonVariants.default)}
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          {'>>'}
        </Box>
      )}
    </Box>
  );
};

export default Pagination;
