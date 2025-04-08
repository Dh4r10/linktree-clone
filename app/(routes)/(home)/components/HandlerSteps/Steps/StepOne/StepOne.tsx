import { stepOneData } from './stepOne.data';
import { useStepConfig } from '@/hooks/useStepConfig';
import HeaderStep from '../components/HeaderStep';
import ButtonStep from '../components/ButtonStep';
import PillUserStep from '../components/PillUserStep';

const StepOne = () => {
  const { setInfoUser, nextStep } = useStepConfig();

  const handleClick = (value: string) => {
    setInfoUser((prev) => ({
      ...prev,
      typeUser: value,
    }));
  };

  return (
    <div>
      <HeaderStep
        title='Tell us about yourself'
        subtitle='This will help us personalize your experience.'
      />

      <div className='grid grid-cols-1 gap-2 mt-4'>
        {stepOneData.map((data) => (
          <PillUserStep
            key={data.title}
            title={data.title}
            value={data.value}
            handleClick={handleClick}
          />
        ))}
      </div>

      <ButtonStep handleClick={nextStep} />
    </div>
  );
};

export default StepOne;
