import { ButtonVariant } from './toastButton.data';

export type ToastButtonProps = {
  labelAction: string;
  description: string;
  title: string;
  variant?: ButtonVariant;
};
