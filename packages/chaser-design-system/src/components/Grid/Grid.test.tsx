import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Grid from './Grid';
import React from 'react';

describe('Grid', () => {
  it('renders with 2 columns', async () => {
    const { container } = await render(
      <Grid columns={2} gap="medium">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Grid>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with 3 columns', async () => {
    const { container } = await render(
      <Grid columns={3} gap="small">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Grid>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with auto-fit min width', async () => {
    const { container } = await render(
      <Grid minChildWidth="150px" gap="large">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Grid>
    );
    expect(container).toMatchScreenshot();
  });
});
