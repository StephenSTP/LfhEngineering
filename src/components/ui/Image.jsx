import { forwardRef } from 'react';
import clsx from 'clsx';

const Image = forwardRef(({ className, alt, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={clsx('max-w-full h-auto', className)}
      alt={alt}
      {...props}
    />
  );
});

Image.displayName = 'Image';

export default Image;