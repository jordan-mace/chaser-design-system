import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Alert from './Alert';
import React from 'react';

describe('Alert', () => {
  it('renders success alert correctly', async () => {
    const { container } = await render(
      <Alert severity="success">Success message</Alert>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders warning alert correctly', async () => {
    const { container } = await render(
      <Alert severity="warning">Warning message</Alert>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders error alert correctly', async () => {
    const { container } = await render(
      <Alert severity="error">Error message</Alert>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders info alert correctly', async () => {
    const { container } = await render(
      <Alert severity="info">Info message</Alert>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders dismissible alert correctly', async () => {
    const { container } = await render(
      <Alert severity="info" dismissible onDismiss={() => {}}>
        Dismissible message
      </Alert>,
    );
    expect(container).toMatchScreenshot();
  });

  it('handles dismiss correctly', async () => {
    let dismissed = false;
    const handleDismiss = () => {
      dismissed = true;
    };
    const { getByLabelText } = await render(
      <Alert severity="info" dismissible onDismiss={handleDismiss}>
        Dismissible message
      </Alert>,
    );
    const dismissButton = getByLabelText('Dismiss alert');
    await dismissButton.click();
    expect(dismissed).toBe(true);
  });
});
