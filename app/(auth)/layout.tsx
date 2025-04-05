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
    <div className='h-screen grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col items-center justify-center'>
        {children}
      </div>
      <div className="bg-[url('/img/background-login.png')] hidden bg-no-repeat bg-cover h-full w-full lg:block" />
    </div>
  );
};

export default AuthLayout;
