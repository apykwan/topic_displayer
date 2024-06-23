'use client';

import { type ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

interface FormButonProps {
  children: ReactNode;
}

export default function FormButton({ children }: FormButonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}