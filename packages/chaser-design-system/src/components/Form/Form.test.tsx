import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Form from './Form';
import React from 'react';
import { P } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';

describe('Form', () => {
  it('renders form correctly', async () => {
    const { container } = await render(
      <Form>
        <P>Test Form</P>
        <Input label="Name" id="name" />
        <Input label="Email" id="email" />
        <Input label="Message" id="message" />
      </Form>,
    );
    expect(container).toMatchScreenshot();
  });

  it('can submit', async () => {
    let submitted = false;
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      submitted = true;
    };
    const { getByText } = await render(
      <Form onSubmit={handleSubmit}>
        <P>Test Form</P>
        <Input label="Name" id="name" />
        <Input label="Email" id="email" />
        <Input label="Message" id="message" />
        <Button type="submit" label="Submit" variant="primary" />
      </Form>,
    );
    const button = getByText('Submit');
    await button.click();
    expect(submitted).toBe(true);
  });
});
