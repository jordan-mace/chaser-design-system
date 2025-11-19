import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import List from './List';
import React from 'react';
import ListItem from './ListItem';

describe('List', () => {
  it('renders correctly', async () => {
    const { container } = await render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>,
    );
    expect(container).toMatchScreenshot();
  });
});
