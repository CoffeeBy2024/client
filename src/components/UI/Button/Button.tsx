import clsx from 'clsx';
import React from 'react';

type ButtonVariant = 'contained';
type ButtonSize = 'small' | 'medium';

interface IButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, variant, size, className, ...props }, ref) => (
    <button className={clsx(variant, size, className)} {...props} ref={ref}>
      {children}
    </button>
  )
);

export { Button };
