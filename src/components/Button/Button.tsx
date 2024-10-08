import styles from './Button.module.scss';
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  size = 'small',
  variant = 'primary',
  children,
  onClick,
}) => {
  return (
    <button
      className={clsx(styles.button, styles[size], styles[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
