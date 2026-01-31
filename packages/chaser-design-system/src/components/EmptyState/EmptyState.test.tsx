import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import EmptyState from './EmptyState';
import React from 'react';

describe('EmptyState', () => {
  it('renders with all props', async () => {
    const { container } = await render(
      <EmptyState
        icon={<span>📭</span>}
        title="No items found"
        description="Try adjusting your filters or search criteria"
        action={<button>Create new item</button>}
      />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders minimal state', async () => {
    const { container } = await render(
      <EmptyState title="Nothing to show" />
    );
    expect(container).toMatchScreenshot();
  });
});
