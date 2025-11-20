import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Navbar from './Navbar';
import React from 'react';
import NavbarItem from './NavbarItem';

describe('Navbar', () => {
  it('renders navbar correctly', async () => {
    const { container } = await render(
      <Navbar>
        <NavbarItem>Item 1</NavbarItem>
        <NavbarItem>Item 2</NavbarItem>
        <NavbarItem>Item 3</NavbarItem>
      </Navbar>,
    );
    expect(container).toMatchScreenshot();
  });
});
