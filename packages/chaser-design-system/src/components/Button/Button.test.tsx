import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Button from './Button';
import React from 'react';

describe('Button', () => {
  it('renders correctly', async () => {
    const { container } = await render(
      <Button variant={'primary'} label={'Hello'} />,
    );
    expect(container).toMatchScreenshot();
  });

  it('handles onClick', async () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    const { getByText } = await render(
      <Button variant={'primary'} label={'Click me'} onClick={handleClick} />,
    );
    const button = getByText('Click me');
    await button.click();
    expect(clicked).toBe(true);
  });
});
