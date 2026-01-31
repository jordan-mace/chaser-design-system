import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import AspectRatio from './AspectRatio';
import React from 'react';

describe('AspectRatio', () => {
  it('renders with 1:1 ratio', async () => {
    const { container } = await render(
      <AspectRatio ratio="1/1" style={{ width: '200px' }}>
        <div style={{ backgroundColor: '#ccc', width: '100%', height: '100%' }}>
          Square
        </div>
      </AspectRatio>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with 16:9 ratio', async () => {
    const { container } = await render(
      <AspectRatio ratio="16/9" style={{ width: '320px' }}>
        <div style={{ backgroundColor: '#ddd', width: '100%', height: '100%' }}>
          Widescreen
        </div>
      </AspectRatio>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with 4:3 ratio', async () => {
    const { container } = await render(
      <AspectRatio ratio="4/3" style={{ width: '240px' }}>
        <div style={{ backgroundColor: '#eee', width: '100%', height: '100%' }}>
          Standard
        </div>
      </AspectRatio>
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with numeric ratio', async () => {
    const { container } = await render(
      <AspectRatio ratio={1.5} style={{ width: '300px' }}>
        <div style={{ backgroundColor: '#f0f0f0', width: '100%', height: '100%' }}>
          Custom Ratio
        </div>
      </AspectRatio>
    );
    expect(container).toMatchScreenshot();
  });
});
