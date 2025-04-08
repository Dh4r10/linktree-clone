import { PillUserStepProps as Props } from './pillUserStep.types';

const PillUserStep = ({ title, value, handleClick }: Props) => {
  return (
    <div
      className='flex flex-col items-center rounded-full border py-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer'
      onClick={() => handleClick(value)}
    >
      <p>{title}</p>
    </div>
  );
};

export default PillUserStep;
