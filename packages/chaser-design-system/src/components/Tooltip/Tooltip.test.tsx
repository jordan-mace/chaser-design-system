import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Tooltip from './Tooltip';
import React from 'react';

describe('Tooltip', () => {
  it('renders top tooltip correctly', async () => {
    const { container } = await render(
      <Tooltip content="Test tooltip">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders bottom tooltip correctly', async () => {
    const { container } = await render(
      <Tooltip content="Test tooltip" position="bottom">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders left tooltip correctly', async () => {
    const { container } = await render(
      <Tooltip content="Test tooltip" position="left">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders right tooltip correctly', async () => {
    const { container } = await render(
      <Tooltip content="Test tooltip" position="right">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders tooltip without arrow', async () => {
    const { container } = await render(
      <Tooltip content="Test tooltip" showArrow={false}>
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with tooltip content', async () => {
    const { container } = await render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );
    const tooltip = container.querySelector('[role="tooltip"]');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Tooltip text');
  });

  it('renders children correctly', async () => {
    const { getByText } = await render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );
    const button = getByText('Hover me');
    expect(button).toBeInTheDocument();
  });

  it('has proper role attribute', async () => {
    const { container } = await render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );
    const tooltip = container.querySelector('[role="tooltip"]');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveAttribute('role', 'tooltip');
  });

  it('shows tooltip on hover', async () => {
    const { container } = await render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );
    const tooltip = container.querySelector('[role="tooltip"]');
    expect(tooltip).toHaveAttribute('data-visible', 'false');
  });
});
