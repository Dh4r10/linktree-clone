'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ToastButtonProps as Props } from './toastButton.type';

const ToastButton = ({
  labelAction,
  description,
  title,
  variant = 'default',
}: Props) => {
  return (
    <Button
      variant={variant}
      onClick={() =>
        toast(title, {
          description: description,
          action: {
            label: labelAction,
            onClick: () => console.log('Undo'),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
};

export default ToastButton;
