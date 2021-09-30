import React from 'react';
import {Box, Paper, Step, StepLabel, Stepper} from '@material-ui/core';

export const getSteps = () => ['Design', 'Buld', 'Launch', 'Deploy', 'Production'];

interface Props {
  activeStep: number;
  count: number;
}

export const StepPanel = ({activeStep, count}: Props) => {
  const steps = getSteps();
  return (
    <Box mt={10} width={3 / 4}>
      <Paper square={false} elevation={17}>
        <Box p={3}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.slice(0, count).map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Paper>
    </Box>
  );
};
