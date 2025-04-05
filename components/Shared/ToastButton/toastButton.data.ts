export const BUTTON_VARIANTS = [
  'default',
  'destructive',
  'ghost',
  'link',
  'outline',
  'secondary',
] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
