import clsx from 'clsx';
import React from 'react';

interface InputProps extends React.ComponentProps<'input'> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }: InputProps, ref) => {
    return (
      <input
        className={clsx('text-input h-full w-full', className)}
        {...props}
        ref={ref}
      />
    );
  }
);

export { Input };
