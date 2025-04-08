import { useStepConfig } from '@/hooks/useStepConfig';
import HeaderStep from '../components/HeaderStep';
import ButtonStep from '../components/ButtonStep';
import FieldStep from '../components/FieldStep';

const StepThree = () => {
  const { infoUser, setInfoUser, nextStep } = useStepConfig();

  const handleContinue = () => {
    const updatedPlatforms = infoUser.platforms.map(({ icon, name }) => {
      const input = document.getElementById(
        `${name}-input`
      ) as HTMLInputElement;

      return {
        name,
        icon,
        link: input?.value || '',
      };
    });

    setInfoUser((prev) => ({
      ...prev,
      platforms: updatedPlatforms,
    }));

    nextStep();
  };

  return (
    <div>
      <HeaderStep
        title='Add your links'
        subtitle='Complete the fields to add yout links'
      />

      {infoUser?.platforms.map(({ icon, link, name }) => (
        <FieldStep key={name} name={name} icon={icon} link={link} />
      ))}

      <ButtonStep handleClick={handleContinue} />
    </div>
  );
};

export default StepThree;
