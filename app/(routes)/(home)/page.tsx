'use client';

import { TreePalm } from 'lucide-react';
import LinkProfile from './components/LinkProfile';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { Link, User } from '@prisma/client';
import LoaderProfile from '@/components/Shared/LoaderProfile';

const HomePage = () => {
  const { user } = useUser();

  const [isFirstVisit, setIsFirstVisit] = useState(false);

  const [reload, setReload] = useState(false);

  const [infoUser, setInfoUser] = useState<(User & { links: Link }) | null>(
    null
  );

  useEffect(() => {
    const checkFirstLogin = async () => {
      const response = await fetch('/api/info-user');

      if (response.ok) {
        const data = await response.json();
        setInfoUser(data);
        console.log(data);
        setIsFirstVisit(data.first_login);
      }
    };

    if (user) {
      checkFirstLogin();
    }

    if (reload) {
      checkFirstLogin();
      setReload(false);
    }
  }, [user?.id, reload, user]);

  if (!user || !infoUser) {
    return <LoaderProfile />;
  }

  if (isFirstVisit) {
    return (
      <div>
        <p>Es la primera visita</p>
      </div>
    );
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4'>
        <div>
          <LinkProfile />

          <div>
            <p>Profile info</p>
          </div>

          <div className='mt-2 flex flex-col items-center'>
            <div className='py-10 text-center justify-center flex flex-col items-center text-gray-400 font-semibold'>
              <TreePalm className='size-20' strokeWidth={1} />
              <p>Show the world who you are.</p>
              <p>Add a link to get started.</p>
            </div>
          </div>
        </div>

        <div>
          <p>Profile preview</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
