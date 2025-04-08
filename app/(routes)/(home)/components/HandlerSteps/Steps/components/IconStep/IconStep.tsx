import Image from 'next/image';
import { IconStepProps as Props } from './iconStep.types';

const IconStep = ({ name, icon, data, handleClick }: Props) => {
  return (
    <div
      className={`flex flex-col gap-1 items-center rounded-lg py-3 hover:via-violet-300 transition-all duration-300 cursor-pointer ${
        data.includes(name)
          ? 'bg-violet-700 text-white'
          : 'bg-slate-100 text-slate-500'
      }`}
      onClick={() => handleClick(name)}
    >
      <Image
        src={icon}
        alt='Icon'
        width={40}
        height={40}
        style={{ width: 'auto', height: 'auto' }}
      />
      <p className='text-sm'>{name}</p>
    </div>
  );
};

export default IconStep;
