import { forwardRef } from 'react';
import clsx from 'clsx';

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx('input', className)}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;