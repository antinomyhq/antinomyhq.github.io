import React from 'react';
import styles from './Step.module.css';

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  completed?: boolean;
  variant?: 'default' | 'compact';
  last?: boolean;
}

/**
 * Visually connected vertical step component for documentation.
 * Features a numbered circle with connecting vertical line and content card.
 */
export const Step: React.FC<StepProps> = ({ 
  number, 
  title, 
  children, 
  completed = false,
  variant = 'default',
  last = false
}) => {
  if (variant === 'compact') {
    return (
      <div className={styles.compactContainer}>
        <div className={`${styles.compactNumber} ${completed ? styles.compactNumberCompleted : styles.compactNumberDefault}`}>
          {completed ? '✓' : number}
        </div>
        <div className={styles.compactContent}>
          <h4 className={styles.compactTitle}>
            {title}
          </h4>
          <div className={styles.compactBody}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Default vertical stepper design
  return (
    <div className={last ? styles.stepContainerLast : styles.stepContainer}>
      {/* Vertical connecting line (hidden for last step) */}
      {!last && <div className={styles.verticalLine}></div>}
      
      {/* Step number circle */}
      <div className={styles.stepNumber}>
        {completed ? '✓' : number}
      </div>
      
      {/* Content card */}
      <div className={styles.stepContent}>
        <h3 className={styles.stepTitle}>
          {title}
        </h3>
        <div className={styles.stepBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Step;