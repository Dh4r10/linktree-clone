import { useState } from 'react';
import { HandlerStepsProps as Props } from './handlerSteps.types';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { useStepConfig } from '@/hooks/useStepConfig';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';

const HandlerSteps = ({ onReload }: Props) => {
  const { totalSteps, step, prevStep, infoUser } = useStepConfig();

  const [openDialog, setOpenDialog] = useState(true);

  const progressValue = (step / totalSteps) * 100;

  const onCloseDialog = () => {
    onReload(true);
    setOpenDialog(false);
  };

  console.log(infoUser);

  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='mb-3'>
            {step > 1 && step < totalSteps && (
              <Button variant='outline' className='mr-2' onClick={prevStep}>
                Back <ArrowLeft />
              </Button>
            )}
            <div className='mb-2 text-center'>
              Step {step} of {totalSteps}
            </div>
            <Progress value={progressValue} />
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              {step === 1 && <StepOne />}
              {step === 2 && <StepTwo />}
              {step === 3 && <StepThree />}
              {step === 4 && <StepFour />}
              {step === 5 && <p>Step five</p>}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default HandlerSteps;
