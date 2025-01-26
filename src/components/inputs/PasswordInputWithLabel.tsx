'use client';

import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import React, { useId, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, useFormField } from '../ui/form';
import ShowPassword from '@/icons/icon-show-password.svg';
import HidePassword from '@/icons/icon-hide-password.svg';
import Info from '@/icons/icon-info.svg';
import Link from 'next/link';

const PasswordMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { error, formMessageId } = useFormField();

  return (
    <p
      className={cn(
        'text-xs flex items-center gap-x-2 ',
        error ? 'text-destructive' : 'text-muted',
        className,
      )}
      {...props}
      ref={ref}
      id={formMessageId}>
      <Info />
      At least 8 characters
    </p>
  );
});
PasswordMessage.displayName = 'PasswordMessage';

type Props<T> = {
  fieldTitle: string;
  nameInSchema: keyof T & string;
  newPassword?: boolean;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInputWithLabel = <T,>({
  fieldTitle,
  nameInSchema,
  placeholder,
  newPassword,
  className,
  ...props
}: Props<T>) => {
  const form = useFormContext();
  const id = useId();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between">
            <FormLabel htmlFor={id}>{fieldTitle}</FormLabel>
            {!newPassword && (
              <Link
                href="#"
                className="text-xs underline text-muted hover:text-primary transition-colors">
                Forgot
              </Link>
            )}
          </div>
          <FormControl>
            <div className="relative">
              <Input
                id={id}
                {...field}
                {...props}
                className={cn('pe-9', className)}
                placeholder={placeholder}
                type={isVisible ? 'text' : 'password'}
              />
              <button
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? 'Hide password' : 'Show password'}
                aria-pressed={isVisible}
                aria-controls="password"
                className="absolute inset-y-0 end-0 flex h-full items-center justify-center px-4 rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                {isVisible ? <HidePassword /> : <ShowPassword />}
              </button>
            </div>
          </FormControl>
          {newPassword && <PasswordMessage />}
          {!newPassword && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default PasswordInputWithLabel;
