import { useState } from 'react';
import { dataStepFourImages } from './stepFour.data';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import HeaderStep from '../components/HeaderStep';
import ButtonStep from '../components/ButtonStep';
import { UploadButton } from '@/lib/uploadthing';
import { Plus } from 'lucide-react';
import { useStepConfig } from '@/hooks/useStepConfig';

const StepFour = () => {
  const { setInfoUser, infoUser } = useStepConfig();

  const [name, setName] = useState('');

  const [username, setUsername] = useState('');

  const [photoUrl, setPhotoUrl] = useState('');

  const [showUploadPhoto, setShowUploadPhoto] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState('');

  const handleImageSelect = (src: string) => {
    setSelectedPhoto(src);
    setInfoUser((prev) => ({
      ...prev,
      avatarUrl: src,
    }));
  };

  console.log(infoUser);

  return (
    <div>
      <HeaderStep
        title='Add profile details'
        subtitle='Select your profile image or upload it.'
      />

      <div
        className='grid grid-cols-4 gap-4 mt-4 items-center'
        style={{
          maxHeight: 'calc(2 * (6rem + 1rem))', // 2 filas (altura de 32 + gap)
          overflowY: 'auto', // Scroll vertical
        }}
      >
        {dataStepFourImages.map(({ src }) => (
          <div
            key={src}
            className={`flex flex-col items-center gap-2 p-1 rounded-full text-white transition-all duration-300 cursor-pointer ${
              selectedPhoto === src ? 'bg-violet-500' : 'hover:bg-violet-300'
            }`}
            onClick={() => handleImageSelect(src)}
          >
            <Image
              src={src}
              alt='Profile'
              className='size-32 rounded-full'
              width={300}
              height={300}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        ))}

        {photoUrl && (
          <div
            className={`flex flex-col items-center gap-2 p-1 rounded-full text-white transition-all duration-300 cursor-pointer ${
              selectedPhoto === photoUrl
                ? 'bg-violet-500'
                : 'hover:bg-violet-300'
            }`}
            onClick={() => handleImageSelect(photoUrl)}
          >
            <Image
              src={photoUrl}
              alt='Profile'
              className='size-32 rounded-full object-cover aspect-square'
              width={300}
              height={300}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        )}

        {showUploadPhoto ? (
          <UploadButton
            className='rounded-full text-slate-300 bg-gray-700 h-full border-4 border-gray-800 object-cover aspect-square'
            endpoint='profileImage'
            onClientUploadComplete={(res) => {
              setPhotoUrl(res?.[0].ufsUrl);
              handleImageSelect(res?.[0].ufsUrl);
              setShowUploadPhoto(false);
            }}
            onUploadError={(error: Error) => {
              console.log(error);
            }}
          />
        ) : (
          <div
            className='flex flex-col items-center justify-center hover:bg-slate-100 h-full rounded-full cursor-pointer border-3 object-cover aspect-square'
            onClick={() => setShowUploadPhoto((prev) => !prev)}
          >
            <Plus className='size-7' />
          </div>
        )}
      </div>

      <div className='mt-5'>
        <h3 className='text-lg my-3 text-center'>Add your username</h3>
        <div className='grid gap-4'>
          <Input
            placeholder='Name'
            className='w-full'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder='Username'
            className='w-full'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <ButtonStep handleClick={() => {}} />
      </div>
    </div>
  );
};

export default StepFour;
