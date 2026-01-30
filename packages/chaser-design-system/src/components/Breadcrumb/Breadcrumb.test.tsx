import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Breadcrumb from './Breadcrumb';
import React from 'react';

describe('Breadcrumb', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/products/category' },
    { label: 'Item', current: true },
  ];

  it('renders breadcrumb correctly', async () => {
    const { container } = await render(<Breadcrumb items={items} />);
    expect(container).toMatchScreenshot();
  });

  it('renders breadcrumb with custom separator correctly', async () => {
    const { container } = await render(
      <Breadcrumb items={items} separator=">" />,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders single breadcrumb correctly', async () => {
    const singleItem = [{ label: 'Home', current: true }];
    const { container } = await render(<Breadcrumb items={singleItem} />);
    expect(container).toMatchScreenshot();
  });

  it('renders long breadcrumb correctly', async () => {
    const longItems = [
      { label: 'Home', href: '/' },
      { label: 'Category 1', href: '/cat1' },
      { label: 'Category 2', href: '/cat2' },
      { label: 'Category 3', href: '/cat3' },
      { label: 'Category 4', href: '/cat4' },
      { label: 'Current Page', current: true },
    ];
    const { container } = await render(<Breadcrumb items={longItems} />);
    expect(container).toMatchScreenshot();
  });
});
