import * as React from 'react';
import styled from 'styled-components';
import {Controller} from './components/Controller';
import {Header} from './components/Header';
import {StepPanel} from './components/StepPanel';

export const App = () => {
  const [count, setCount] = React.useState<number>(2);
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setCount(prevCount => prevCount + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <Header />
      <Main>
        <StepPanel activeStep={activeStep} count={count} />
        <Controller
          activeStep={activeStep}
          handleReset={handleReset}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      </Main>
    </React.Fragment>
  );
};

const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
