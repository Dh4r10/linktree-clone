import { HeaderStepProps as Props } from './headerStep.types';

const HeaderStep = ({ title, subtitle }: Props) => {
  return (
    <section>
      <h2 className='text-center font-semibold text-2xl'>{title}</h2>
      <p className='text-center'>{subtitle}</p>
    </section>
  );
};

export default HeaderStep;
