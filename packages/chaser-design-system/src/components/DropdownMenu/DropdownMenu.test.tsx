import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import DropdownMenu from './DropdownMenu';
import React from 'react';
import { Button } from '../Button';

describe('DropdownMenu', () => {
  const items = [
    { label: 'Option 1', onClick: () => {} },
    { label: 'Option 2', onClick: () => {} },
    { label: 'Option 3', variant: 'destructive' as const, onClick: () => {} },
  ];

  it('renders with button trigger', async () => {
    const { container } = await render(
      <DropdownMenu trigger={<Button variant="primary" label="Open Menu" />} items={items} />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with groups', async () => {
    const groups = [
      {
        label: 'Group 1',
        items: [
          { label: 'Item 1', onClick: () => {} },
          { label: 'Item 2', onClick: () => {} },
        ],
      },
      {
        label: 'Group 2',
        items: [
          { label: 'Item 3', onClick: () => {} },
        ],
      },
    ];
    
    const { container } = await render(
      <DropdownMenu trigger={<Button variant="primary" label="Menu with Groups" />} groups={groups} />
    );
    expect(container).toMatchScreenshot();
  });
});
