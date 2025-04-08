import { useState } from 'react';
import { useStepConfig } from '@/hooks/useStepConfig';
import { stepTwoData } from './stepTow.data';
import HeaderStep from '../components/HeaderStep';
import ButtonStep from '../components/ButtonStep';
import IconStep from '../components/IconStep';

const StepTwo = () => {
  const { setInfoUser, infoUser, nextStep } = useStepConfig();

  const [selectedPlaforms, setSelectedPlaforms] = useState<string[]>(
    infoUser?.platforms?.map((platform) => platform.name) || []
  );

  const handleSelectPlatform = (platform: string) => {
    setSelectedPlaforms((prev) => {
      if (prev.includes(platform)) {
        return prev.filter((item) => item !== platform);
      } else {
        return [...prev, platform];
      }
    });
  };

  const handleContinue = () => {
    setInfoUser((prev) => ({
      ...prev,
      platforms: stepTwoData.filter(({ name }) =>
        selectedPlaforms.includes(name)
      ),
    }));

    nextStep();
  };

  return (
    <div>
      <HeaderStep
        title='Which platforms are you on?'
        subtitle='Pickup the ones you are on.'
      />

      <div className='grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mt-4'>
        {stepTwoData.map(({ icon, name }) => (
          <IconStep
            key={name}
            name={name}
            icon={icon}
            data={selectedPlaforms}
            handleClick={handleSelectPlatform}
          />
        ))}
      </div>

      <ButtonStep handleClick={handleContinue} />
    </div>
  );
};

export default StepTwo;
