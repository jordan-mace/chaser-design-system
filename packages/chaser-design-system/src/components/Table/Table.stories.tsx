import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Table } from '.';
import React from 'react';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: '600px',
          maxWidth: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
  { name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
  { name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', status: 'Active' },
];

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Role</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {sampleData.map((row, i) => (
          <Table.Tr key={i}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.email}</Table.Td>
            <Table.Td>{row.role}</Table.Td>
            <Table.Td>{row.status}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Role</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {sampleData.map((row, i) => (
          <Table.Tr key={i}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.email}</Table.Td>
            <Table.Td>{row.role}</Table.Td>
            <Table.Td>{row.status}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Laptop</Table.Td>
          <Table.Td>2</Table.Td>
          <Table.Td>$999.00</Table.Td>
          <Table.Td>$1,998.00</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Mouse</Table.Td>
          <Table.Td>5</Table.Td>
          <Table.Td>$25.00</Table.Td>
          <Table.Td>$125.00</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Keyboard</Table.Td>
          <Table.Td>3</Table.Td>
          <Table.Td>$75.00</Table.Td>
          <Table.Td>$225.00</Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Tfoot>
        <Table.Tr>
          <Table.Td colSpan={3}>Grand Total</Table.Td>
          <Table.Td>$2,348.00</Table.Td>
        </Table.Tr>
      </Table.Tfoot>
    </Table>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Role</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td colSpan={3} style={{ textAlign: 'center' }}>
            No data available
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  ),
};
