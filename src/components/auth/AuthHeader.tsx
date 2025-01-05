'use client';

import Logo from '@/icons/logo.svg';
import { cn } from '@/lib/utils';

const AuthHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex flex-col items-center', className)} {...props}>
      <Logo />
      <h1 className="text-preset-1 mt-4">Welcome to Note</h1>
      <p className="text-preset-5 mt-2 text-muted">Please log in to continue</p>
    </div>
  );
};

export default AuthHeader;
