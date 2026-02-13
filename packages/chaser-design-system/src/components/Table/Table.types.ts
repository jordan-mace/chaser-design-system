import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type TableProps = React.HTMLAttributes<HTMLTableElement> &
  Sprinkles & {
    children: React.ReactNode;
    striped?: boolean;
  };

export type TheadProps = {
  children: React.ReactNode;
  className?: string;
};

export type TbodyProps = {
  children: React.ReactNode;
  className?: string;
};

export type TfootProps = {
  children: React.ReactNode;
  className?: string;
};

export type TrProps = {
  children: React.ReactNode;
  className?: string;
};

export type ThProps = {
  children?: React.ReactNode;
  className?: string;
};

export type TdProps = {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
};
