import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Pagination from './Pagination';
import React from 'react';

describe('Pagination', () => {
  it('renders correctly with few pages', async () => {
    const { container } = await render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders correctly with many pages', async () => {
    const { container } = await render(
      <Pagination currentPage={5} totalPages={20} onPageChange={() => {}} />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders correctly at last page', async () => {
    const { container } = await render(
      <Pagination currentPage={10} totalPages={10} onPageChange={() => {}} />
    );
    expect(container).toMatchScreenshot();
  });
});
