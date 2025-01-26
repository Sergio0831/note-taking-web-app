'use client';

import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage, useFormField } from '../ui/form';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { useId } from 'react';

type Props<T> = {
  fieldTitle: string;
  nameInSchema: keyof T & string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputWithLabel = <T,>({
  fieldTitle,
  nameInSchema,
  placeholder,
  className,
  ...props
}: Props<T>) => {
  const form = useFormContext();
  const id = useId();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={id}>{fieldTitle}</FormLabel>
          <FormControl>
            <Input
              id={id}
              {...field}
              {...props}
              className={cn('', className)}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputWithLabel;
