'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    label: string;
    text: string;
    icon: React.ReactElement;
  }
>(({ label, text, icon, className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'p-4 flex gap-x-4 items-center rounded-xl border-[1px] data-[state=checked]:bg-[var(--clr-neutral-100)] dark:data-[state=checked]:bg-[var(--clr-neutral-800)] border-[var(--clr-neutral-200)] dark:border-[var(--clr-neutral-700)] dark:data-[state=checked]:border-[var(--clr-neutral-700)] group',
        className,
      )}
      {...props}>
      <div className="p-2 rounded-xl border-[1px] border-[var(--clr-neutral-200)] dark:border-[var(--clr-neutral-700)]">
        {icon}
      </div>
      <div className="text-left">
        <h4>{label}</h4>
        <p>{text}</p>
      </div>
      <span className="w-4 h-4 group-data-[state=checked]:border-blue-500 group-data-[state=checked]:border-4 rounded-full border-2 border-[var(--clr-neutral-200)] dark:border-[var(--clr-neutral-600)]" />
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
