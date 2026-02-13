import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type StepperOrientation = 'horizontal' | 'vertical';
export type StepStatus = 'pending' | 'current' | 'completed';

export interface Step {
  title: string;
  description?: string;
  status?: StepStatus;
}

export type StepperProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    steps: Step[];
    currentStep?: number;
    orientation?: StepperOrientation;
    showConnectors?: boolean;
    onStepClick?: (stepIndex: number) => void;
    clickable?: boolean;
  };
