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
import { Sprinkles } from '../../styles/sprinkles.css';

// Context to pass striping info to rows
const TableContext = createContext<{ striped?: boolean }>({});

type TableProps = React.HTMLAttributes<HTMLTableElement> &
  Sprinkles & {
    children: React.ReactNode;
    striped?: boolean;
  };

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

type TheadProps = {
  children: React.ReactNode;
  className?: string;
};

const Thead = ({ children, className }: TheadProps) => {
  return (
    <Box as="thead" className={clsx(thead, className)}>
      {children}
    </Box>
  );
};

type TbodyProps = {
  children: React.ReactNode;
  className?: string;
};

const Tbody = ({ children, className }: TbodyProps) => {
  return (
    <Box as="tbody" className={clsx(tbody, className)}>
      {children}
    </Box>
  );
};

type TfootProps = {
  children: React.ReactNode;
  className?: string;
};

const Tfoot = ({ children, className }: TfootProps) => {
  return (
    <Box as="tfoot" className={clsx(tfoot, className)}>
      {children}
    </Box>
  );
};

type TrProps = {
  children: React.ReactNode;
  className?: string;
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

type ThProps = {
  children?: React.ReactNode;
  className?: string;
};

const Th = ({ children, className }: ThProps) => {
  return (
    <Box as="th" className={clsx(th, className)}>
      {children}
    </Box>
  );
};

type TdProps = {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
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
