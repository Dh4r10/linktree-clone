import { FieldStepProps as Props } from './fieldStep.types';
import Image from 'next/image';

const FieldStep = ({ name, icon, link }: Props) => {
  return (
    <div className='flex items-center gap-2 mt-4'>
      <div className='flex flex-col gap-2 items-center'>
        <Image
          src={icon}
          alt='Icon'
          width={40}
          height={40}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      <input
        id={`${name}-input`}
        type='text'
        placeholder={`${name} @username`}
        className='w-full rounded-md border p-2 text-sm'
        defaultValue={link}
      />
    </div>
  );
};

export default FieldStep;
