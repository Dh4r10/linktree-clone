import { Button } from '@/components/ui/button';
import { ButtonStepProps as Props } from './buttonStep.types';

const ButtonStep = ({ title = 'Continue', handleClick }: Props) => {
  return (
    <div className='mt-6' onClick={handleClick}>
      <Button className='w-full bg-purple-600'>{title}</Button>
    </div>
  );
};

export default ButtonStep;
