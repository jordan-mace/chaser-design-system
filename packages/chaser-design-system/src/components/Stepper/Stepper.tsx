import clsx from 'clsx';
import React from 'react';
import {
  stepperContainer,
  stepperHorizontal,
  stepperVertical,
  step,
  stepVertical,
  stepIndicator,
  stepIndicatorVariants,
  stepContent,
  stepContentVertical,
  stepTitle,
  stepDescription,
  stepConnector,
  stepConnectorCompleted,
  stepConnectorVertical,
} from './styles.css';
import Box from '../Box';

export type StepperOrientation = 'horizontal' | 'vertical';
export type StepStatus = 'pending' | 'current' | 'completed';

export interface Step {
  title: string;
  description?: string;
  status?: StepStatus;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep?: number;
  orientation?: StepperOrientation;
  showConnectors?: boolean;
  onStepClick?: (stepIndex: number) => void;
  clickable?: boolean;
}

const Stepper = ({
  steps,
  currentStep = 0,
  orientation = 'horizontal',
  showConnectors = true,
  onStepClick,
  clickable = false,
  className,
  ...props
}: StepperProps) => {
  const getStepStatus = (index: number): StepStatus => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'current';
    return 'pending';
  };

  const handleStepClick = (index: number) => {
    if (clickable && onStepClick) {
      onStepClick(index);
    }
  };

  return (
    <Box
      className={clsx(
        stepperContainer,
        orientation === 'horizontal' ? stepperHorizontal : stepperVertical,
        className,
      )}
      role="list"
      aria-label="Step progress"
      {...props}
    >
      {steps.map((stepItem, index) => {
        const status = stepItem.status || getStepStatus(index);
        const isLast = index === steps.length - 1;
        const isCompleted = status === 'completed';
        
        return (
          <Box
            key={index}
            className={clsx(step, orientation === 'vertical' && stepVertical)}
            role="listitem"
            aria-current={status === 'current' ? 'step' : undefined}
          >
            {showConnectors && !isLast && orientation === 'horizontal' && (
              <Box
                className={clsx(stepConnector, isCompleted && stepConnectorCompleted)}
                aria-hidden="true"
              />
            )}
            
            {showConnectors && !isLast && orientation === 'vertical' && (
              <Box
                className={stepConnectorVertical}
                style={{ backgroundColor: isCompleted ? undefined : undefined }}
                aria-hidden="true"
              />
            )}
            
            <Box
              className={clsx(
                stepIndicator,
                stepIndicatorVariants[status],
              )}
              onClick={() => handleStepClick(index)}
              style={{ cursor: clickable ? 'pointer' : 'default' }}
              aria-label={`Step ${index + 1}: ${stepItem.title}`}
            >
              {status === 'completed' ? '✓' : index + 1}
            </Box>
            
            <Box
              className={clsx(
                stepContent,
                orientation === 'vertical' && stepContentVertical,
              )}
            >
              <Box as="h4" className={stepTitle}>
                {stepItem.title}
              </Box>
              {stepItem.description && (
                <Box as="p" className={stepDescription}>
                  {stepItem.description}
                </Box>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Stepper;
