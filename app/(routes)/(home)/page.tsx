import { TreePalm } from 'lucide-react';
import LinkProfile from './components/LinkProfile';

const HomePage = () => {
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
