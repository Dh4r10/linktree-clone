import StepConfigUserContext from '@/contexts/StepConfigUser';
import { useContext } from 'react';

export const useStepConfig = () => useContext(StepConfigUserContext);
