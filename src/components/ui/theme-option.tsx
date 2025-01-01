'use client';

import { RadioGroupItem } from '@radix-ui/react-radio-group';

export type ThemeOptionProps = {
  theme: string;
  label: string;
  text: string;
  icon: React.ReactElement;
};

const ThemeOption = ({ theme, label, text, icon }: ThemeOptionProps) => {
  return (
    <RadioGroupItem
      value={theme}
      className="p-4 flex gap-x-4 items-center rounded-xl border-[1px] data-[state=checked]:bg-[var(--clr-neutral-100)] dark:data-[state=checked]:bg-[var(--clr-neutral-800)] border-[var(--clr-neutral-200)] dark:border-[var(--clr-neutral-700)] dark:data-[state=checked]:border-[var(--clr-neutral-700)] group">
      <div className="p-2 rounded-xl border-[1px] border-[var(--clr-neutral-200)] dark:border-[var(--clr-neutral-700)]">
        {icon}
      </div>
      <div className="text-left">
        <h4>{label}</h4>
        <p>{text}</p>
      </div>
      <span className="w-4 h-4 group-data-[state=checked]:border-blue-500 group-data-[state=checked]:border-4 rounded-full border-2 border-[var(--clr-neutral-200)] dark:border-[var(--clr-neutral-600)]"></span>
    </RadioGroupItem>
  );
};

export default ThemeOption;
