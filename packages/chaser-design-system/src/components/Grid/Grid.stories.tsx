import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { Grid } from '.';
import { Box } from '../Box';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoBox = ({ children }: { children: React.ReactNode }) => (
  <Box 
    padding="medium" 
    background="c2-200" 
    style={{ textAlign: 'center' }}
  >
    {children}
  </Box>
);

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: 'medium',
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        <DemoBox>Item 4</DemoBox>
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    gap: 'medium',
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: 'small',
    children: (
      <>
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
        <DemoBox>4</DemoBox>
      </>
    ),
  },
};

export const AutoFit: Story = {
  args: {
    minChildWidth: '120px',
    gap: 'medium',
    children: (
      <>
        <DemoBox>Auto 1</DemoBox>
        <DemoBox>Auto 2</DemoBox>
        <DemoBox>Auto 3</DemoBox>
        <DemoBox>Auto 4</DemoBox>
        <DemoBox>Auto 5</DemoBox>
      </>
    ),
  },
};

export const DifferentGaps: Story = {
  args: {
    columns: 3,
    children: (
      <>
        <Grid columns={3} gap="small">
          <DemoBox>Small</DemoBox>
          <DemoBox>Gap</DemoBox>
          <DemoBox>Grid</DemoBox>
        </Grid>
        <Grid columns={3} gap="medium" style={{ marginTop: '1rem' }}>
          <DemoBox>Medium</DemoBox>
          <DemoBox>Gap</DemoBox>
          <DemoBox>Grid</DemoBox>
        </Grid>
        <Grid columns={3} gap="large" style={{ marginTop: '1rem' }}>
          <DemoBox>Large</DemoBox>
          <DemoBox>Gap</DemoBox>
          <DemoBox>Grid</DemoBox>
        </Grid>
      </>
    ),
  },
};

export const TwelveColumns: Story = {
  args: {
    columns: 12,
    gap: 'small',
    children: (
      <>
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
        <DemoBox>4</DemoBox>
        <DemoBox>5</DemoBox>
        <DemoBox>6</DemoBox>
        <DemoBox>7</DemoBox>
        <DemoBox>8</DemoBox>
        <DemoBox>9</DemoBox>
        <DemoBox>10</DemoBox>
        <DemoBox>11</DemoBox>
        <DemoBox>12</DemoBox>
      </>
    ),
  },
};
