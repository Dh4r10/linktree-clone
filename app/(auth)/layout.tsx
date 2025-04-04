import type { Metadata } from 'next';

interface Props {
  children: Readonly<React.ReactNode>;
}

export const metadata: Metadata = {
  title: 'Linktree clone - auth',
  description: "Linktree's clone by dh4rio auth",
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-2 h-screen'>
      <div>{children}</div>
      <div className='bg-cyan-200 w-full' />
    </div>
  );
};

export default AuthLayout;
