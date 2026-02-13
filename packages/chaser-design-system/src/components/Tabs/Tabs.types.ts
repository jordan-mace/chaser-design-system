import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type TabsOrientation = 'horizontal' | 'vertical';

export type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  orientation?: TabsOrientation;
};

export type TabsProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    children: React.ReactNode;
    defaultValue?: string;
    orientation?: TabsOrientation;
    onChange?: (value: string) => void;
  };

export type TabListProps = {
  children: React.ReactNode;
  className?: string;
};

export type TabProps = {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export type TabPanelProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};
