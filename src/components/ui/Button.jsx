import { forwardRef } from 'react';
import clsx from 'clsx';

const Button = forwardRef(({ className, variant = 'primary', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'btn',
        {
          'btn-secondary': variant === 'secondary',
        },
        className
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export default Button;