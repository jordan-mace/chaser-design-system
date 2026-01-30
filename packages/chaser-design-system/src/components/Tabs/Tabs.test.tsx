import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Tabs from './Tabs';
import React from 'react';

describe('Tabs', () => {
  it('renders tabs correctly', async () => {
    const { container } = await render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
        <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        <Tabs.Panel value="tab3">Content 3</Tabs.Panel>
      </Tabs>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders vertical tabs correctly', async () => {
    const { container } = await render(
      <Tabs defaultValue="tab1" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
        <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
      </Tabs>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders disabled tab correctly', async () => {
    const { container } = await render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2" disabled>
            Tab 2 (disabled)
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
        <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
      </Tabs>,
    );
    expect(container).toMatchScreenshot();
  });
});
