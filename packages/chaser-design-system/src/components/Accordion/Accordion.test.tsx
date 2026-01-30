import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Accordion from './Accordion';
import React from 'react';

describe('Accordion', () => {
  it('renders accordion correctly', async () => {
    const { container } = await render(
      <Accordion>
        <Accordion.Item value="item1" title="Item 1">
          <div>Content 1</div>
        </Accordion.Item>
        <Accordion.Item value="item2" title="Item 2">
          <div>Content 2</div>
        </Accordion.Item>
        <Accordion.Item value="item3" title="Item 3">
          <div>Content 3</div>
        </Accordion.Item>
      </Accordion>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders accordion with default expanded item correctly', async () => {
    const { container } = await render(
      <Accordion>
        <Accordion.Item value="item1" title="Item 1" defaultExpanded>
          <div>Content 1</div>
        </Accordion.Item>
        <Accordion.Item value="item2" title="Item 2">
          <div>Content 2</div>
        </Accordion.Item>
      </Accordion>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders multiple accordion items correctly', async () => {
    const { container } = await render(
      <Accordion allowMultiple>
        <Accordion.Item value="item1" title="Section 1">
          <div>Content 1</div>
        </Accordion.Item>
        <Accordion.Item value="item2" title="Section 2">
          <div>Content 2</div>
        </Accordion.Item>
        <Accordion.Item value="item3" title="Section 3">
          <div>Content 3</div>
        </Accordion.Item>
      </Accordion>,
    );
    expect(container).toMatchScreenshot();
  });
});
