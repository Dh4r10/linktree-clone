import { LoaderCircle } from 'lucide-react';

const LoaderProfile = () => {
  return (
    <div className='h-screen flex  flex-col items-center justify-center gap-2'>
      <LoaderCircle className='animate-spin size-10' />
      <p className='text-sm'>Loading Dhatree...</p>
    </div>
  );
};

export default LoaderProfile;
