'use client';

import { cn } from '@/lib/utils';
import AuthHeader from '../auth/AuthHeader';
import { Card, CardContent, CardHeader } from '../ui/card';
import { useTheme } from 'next-themes';

const CardWithForm = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <Card
      className={cn(
        'col-span-4 col-start-1 sm:col-start-2 sm:col-span-6 md:col-start-3 md:col-span-6 lg:col-start-4 lg:col-span-6',
        theme === 'light' ? 'shadow-lg' : '',
      )}>
      <CardHeader className="mb-4">
        <AuthHeader />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWithForm;
