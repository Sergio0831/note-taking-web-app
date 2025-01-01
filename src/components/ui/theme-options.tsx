'use client';

import { useTheme } from 'next-themes';
import { RadioGroup } from '@radix-ui/react-radio-group';
import ThemeOption, { ThemeOptionProps } from './theme-option';
import { useEffect, useState } from 'react';
import { Button } from './button';
import SunIcon from '../../../public/icons/icon-sun.svg';
import MoonIcon from '../../../public/icons/icon-moon.svg';
import SystemTheme from '../../../public/icons/icon-system-theme.svg';

const options: ThemeOptionProps[] = [
  {
    theme: 'light',
    label: 'Light Mode',
    text: 'Pick a clean and classic light theme',
    icon: <SunIcon />,
  },
  {
    theme: 'dark',
    label: 'Dark Mode',
    text: 'Select a sleek and modern dark theme',
    icon: <MoonIcon />,
  },
  {
    theme: 'system',
    label: 'System',
    text: 'Adapts to your device’s theme',
    icon: <SystemTheme />,
  },
];

const ThemeOptions = () => {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(options[2].theme);

  useEffect(() => {
    if (theme) {
      setSelectedTheme(theme);
    }
  }, [theme]);

  return (
    <div>
      <RadioGroup value={selectedTheme} onValueChange={setSelectedTheme}>
        {options.map((option) => (
          <ThemeOption
            key={option.theme}
            theme={option.theme}
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
