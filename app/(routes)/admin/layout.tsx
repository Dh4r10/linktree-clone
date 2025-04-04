import type { Metadata } from 'next';

interface Props {
  children: Readonly<React.ReactNode>;
}

export const metadata: Metadata = {
  title: 'Linktree clone - admin',
  description: "Linktree's clone by dh4rio admin",
};

const layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default layout;
