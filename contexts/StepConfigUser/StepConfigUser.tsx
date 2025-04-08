import { createContext, useState } from 'react';
import {
  StepConfigUserContextType,
  StepConfigUserProviderProps,
} from './stepConfigUser.types';

const StepConfigUserContext = createContext<StepConfigUserContextType>({
  step: 1,
  setStep: () => {},
  infoUser: {
    typeUser: '',
    name: '',
    avatarUrl: '',
    platforms: [],
    username: '',
  },
  setInfoUser: () => {},
  totalSteps: 5,
  nextStep: () => {},
  prevStep: () => {},
});

export const StepConfigUserProvider = ({
  children,
}: StepConfigUserProviderProps) => {
  const [step, setStep] = useState(1);

  const [infoUser, setInfoUser] = useState<
    StepConfigUserContextType['infoUser']
  >({
    typeUser: '',
    name: '',
    avatarUrl: '',
    platforms: [],
    username: '',
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const totalSteps = 5;

  const data = {
    step,
    setStep,
    infoUser,
    setInfoUser,
    totalSteps,
    nextStep,
    prevStep,
  };

  return (
    <StepConfigUserContext.Provider value={data}>
      {children}
    </StepConfigUserContext.Provider>
  );
};

export default StepConfigUserContext;
