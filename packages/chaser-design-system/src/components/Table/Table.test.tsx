import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Table from './Table';
import React from 'react';

describe('Table', () => {
  it('renders basic table correctly', async () => {
    const { container } = await render(
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Age</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>John</Table.Td>
            <Table.Td>30</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders striped table correctly', async () => {
    const { container } = await render(
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>John</Table.Td>
            <Table.Td>john@example.com</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Jane</Table.Td>
            <Table.Td>jane@example.com</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Bob</Table.Td>
            <Table.Td>bob@example.com</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders table with footer correctly', async () => {
    const { container } = await render(
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Product</Table.Th>
            <Table.Th>Price</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Apple</Table.Td>
            <Table.Td>$1.00</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Banana</Table.Td>
            <Table.Td>$0.50</Table.Td>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr>
            <Table.Td>Total</Table.Td>
            <Table.Td>$1.50</Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>,
    );
    expect(container).toMatchScreenshot();
  });

  it('renders table with colspan', async () => {
    const { container } = await render(
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Details</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>John</Table.Td>
            <Table.Td colSpan={2}>Full details here</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>,
    );
    expect(container).toMatchScreenshot();
  });
});
