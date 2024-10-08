import { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonColor = 'primary' | 'secondary' | 'danger';

type ButtonProps<C extends ButtonColor> = {
  color?: C;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: C extends 'primary' ? boolean : never;
};

export const Button = <C extends ButtonColor>({
  color = 'primary' as C,
  children,
  disabled,
  ...remainingProps
}: ButtonProps<C>) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.danger]: color === 'danger',
      })}
      disabled={disabled}
      {...remainingProps}
    >
      <span>{children}</span>
    </button>
  );
};
