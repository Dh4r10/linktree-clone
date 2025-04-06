'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const LinkProfile = () => {
  const [isCopiedLink, setIsCopiedLink] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    // Este código solo se ejecuta en el cliente
    setUrl(`${window.location.origin}/@dharioTest`);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setIsCopiedLink(true);
  };

  return (
    <div className='bg-indigo-100 rounded-3xl'>
      <div className='flex flex-col justify-center text-center p-4 items-center gap-2 md:flex-row md:justify-between md:text-left'>
        <span className='text-sm'>
          <span>🔥 Your Dhatree is live: </span>
          {url}
        </span>

        <Button
          variant='outline'
          className='rounded-full px-4 bg-white font-semibold text-xs md:text-[16px] cursor-pointer'
          onClick={handleCopyLink}
        >
          {isCopiedLink ? 'Copied!' : 'Copy your Dhatree URL'}
        </Button>
      </div>
    </div>
  );
};

export default LinkProfile;
