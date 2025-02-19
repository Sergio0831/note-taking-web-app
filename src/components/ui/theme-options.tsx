'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './button';
import SunIcon from '../../../public/icons/icon-sun.svg';
import MoonIcon from '../../../public/icons/icon-moon.svg';
import SystemTheme from '../../../public/icons/icon-system-theme.svg';
import { RadioGroup, RadioGroupItem } from './radio-group';

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

const ThemeOptions = () => {
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
    <div>
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

export default ThemeOptions;
