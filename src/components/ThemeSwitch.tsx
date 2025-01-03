'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import SunIcon from '../icons/icon-sun.svg';
import MoonIcon from '../icons/icon-moon.svg';
import SystemTheme from '../icons/icon-system-theme.svg';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Button } from './ui/button';

const options = [
  {
    value: 'light',
    label: 'Light Mode',
    text: 'Pick a clean and classic light theme',
    icon: <SunIcon />,
  },
  {
    value: 'dark',
    label: 'Dark Mode',
    text: 'Select a sleek and modern dark theme',
    icon: <MoonIcon />,
  },
  {
    value: 'system',
    label: 'System',
    text: 'Adapts to your device’s theme',
    icon: <SystemTheme />,
  },
];

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme || 'system');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="">
      <RadioGroup value={selectedTheme} onValueChange={setSelectedTheme}>
        {options.map((option) => (
          <RadioGroupItem
            key={option.value}
            value={option.value}
            label={option.label}
            text={option.text}
            icon={option.icon}
          />
        ))}
      </RadioGroup>
      <Button onClick={() => setTheme(selectedTheme)}>Apply Changes</Button>
      <p>{selectedTheme}</p>
    </div>
  );
};

export default ThemeSwitch;
