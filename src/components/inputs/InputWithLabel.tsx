'use client';

import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

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

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={nameInSchema}>{fieldTitle}</FormLabel>
          <FormControl>
            <Input
              id={nameInSchema}
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
