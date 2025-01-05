'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../ui/form';
import { LoginSchema, LoginSchemaType } from '@/schemas';
import { useTransition } from 'react';
import InputWithLabel from '../inputs/InputWithLabel';
import { Button } from '../ui/button';

const LoginForm = () => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    setTransition(() => {
      console.log(data);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-4 pt-6">
        <InputWithLabel<LoginSchemaType>
          fieldTitle="Email Address"
          nameInSchema="email"
          placeholder="email@example.com"
        />
        <InputWithLabel<LoginSchemaType> fieldTitle="Password" nameInSchema="password" />
        <Button className="w-full">Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
