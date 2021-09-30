import React from 'react';
import {Box, Button, Typography} from '@material-ui/core';
import styled from 'styled-components';
import {getSteps} from './StepPanel';

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  activeStep: number;
}

export const Controller = ({handleNext, handleBack, handleReset, activeStep}: Props) => {
  const steps = getSteps();
  return (
    <StyledController>
      <Box>
        <Title>{steps[activeStep]}</Title>
        {activeStep >= steps.length ? (
          <Back onClick={handleReset}>Reset</Back>
        ) : (
          <Back onClick={handleBack} disabled={!activeStep}>
            Back
          </Back>
        )}
        <Next activeStep={activeStep} variant="contained" color="primary" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Next>
      </Box>
    </StyledController>
  );
};

const StyledController = styled.div`
  width: 100%;
  margin: 3em 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Back = styled(Button)`
  margin-right: 1em;
`;

const Next = styled(Button)<{activeStep: number}>`
  visibility: ${p => (p.activeStep === 5 ? 'hidden' : 'visible')};
`;

const Title = styled(Typography)`
  margin: 1rem 0;
  text-align: center;
`;
