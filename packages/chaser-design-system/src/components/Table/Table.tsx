import clsx from 'clsx';
import React, { createContext, useContext } from 'react';
import {
  table,
  thead,
  tbody,
  tfoot,
  tr,
  th,
  td,
  tableContainer,
} from './styles.css';
import Box from '../Box';
import {
  type TableProps,
  type TheadProps,
  type TbodyProps,
  type TfootProps,
  type TrProps,
  type ThProps,
  type TdProps,
} from './Table.types';

const TableContext = createContext<{ striped?: boolean }>({});

const TableComponent = ({
  children,
  striped = false,
  className,
  ...props
}: TableProps) => {
  return (
    <TableContext.Provider value={{ striped }}>
      <Box className={clsx(tableContainer, className)} width="100%">
        <Box as="table" className={clsx(table)} {...props}>
          {children}
        </Box>
      </Box>
    </TableContext.Provider>
  );
};

const Thead = ({ children, className }: TheadProps) => {
  return (
    <Box as="thead" className={clsx(thead, className)}>
      {children}
    </Box>
  );
};

const Tbody = ({ children, className }: TbodyProps) => {
  return (
    <Box as="tbody" className={clsx(tbody, className)}>
      {children}
    </Box>
  );
};

const Tfoot = ({ children, className }: TfootProps) => {
  return (
    <Box as="tfoot" className={clsx(tfoot, className)}>
      {children}
    </Box>
  );
};

const Tr = ({ children, className }: TrProps) => {
  const { striped } = useContext(TableContext);
  return (
    <Box
      as="tr"
      className={clsx(tr[striped ? 'striped' : 'default'], className)}
    >
      {children}
    </Box>
  );
};

const Th = ({ children, className }: ThProps) => {
  return (
    <Box as="th" className={clsx(th, className)}>
      {children}
    </Box>
  );
};

const Td = ({ children, className, colSpan, rowSpan }: TdProps) => {
  return (
    <Box
      as="td"
      className={clsx(td, className)}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {children}
    </Box>
  );
};

// Attach sub-components
const Table = Object.assign(TableComponent, {
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
});

export default Table;
