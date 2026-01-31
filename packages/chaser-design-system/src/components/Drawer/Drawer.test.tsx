import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Drawer from './Drawer';
import React from 'react';

describe('Drawer', () => {
  it('renders correctly from left position', async () => {
    const { container } = await render(
      <Drawer isOpen={true} onClose={() => {}} position="left" title="Left Drawer">
        Content
      </Drawer>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders correctly from right position', async () => {
    const { container } = await render(
      <Drawer isOpen={true} onClose={() => {}} position="right" title="Right Drawer">
        Content
      </Drawer>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders correctly from top position', async () => {
    const { container } = await render(
      <Drawer isOpen={true} onClose={() => {}} position="top" title="Top Drawer">
        Content
      </Drawer>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders correctly from bottom position', async () => {
    const { container } = await render(
      <Drawer isOpen={true} onClose={() => {}} position="bottom" title="Bottom Drawer">
        Content
      </Drawer>
    );
    expect(container).toMatchScreenshot();
  });

  it('does not render when closed', async () => {
    const { container } = await render(
      <Drawer isOpen={false} onClose={() => {}} title="Closed Drawer">
        Content
      </Drawer>
    );
    expect(container).toMatchScreenshot();
  });
});
