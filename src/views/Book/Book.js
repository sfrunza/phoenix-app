import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Box,
  AppBar,
  CssBaseline,
  Toolbar,
} from '@mui/material';
import { Formik, Form } from 'formik';

import Main from 'layouts/Main';
import Container from 'components/Container';

import FirstStep from './Forms/FirstStep';
import SecondStep from './Forms/SecondStep';
import ContactInfo from './Forms/ContactInfo';
import ReviewDetails from './ReviewDetails';
import BookSuccess from './BookSuccess';

import validationSchema from './FormModel/validationSchema';
import sumbitFormModel from './FormModel/submitFormModel';
import formInitialValues from './FormModel/formInitialValues';

const steps = ['Moving date', 'Moving size', 'Contact info', 'Review & sumbit'];
const { formId, formField } = sumbitFormModel;

function _renderStepContent(step, values) {
  const showDeliveryDate = values.service === 'withStorage';

  switch (step) {
    case 0:
      return (
        <FirstStep formField={formField} showDeliveryDate={showDeliveryDate} />
      );
    case 1:
      return (
        <SecondStep formField={formField} showDeliveryDate={showDeliveryDate} />
      );
    case 2:
      return <ContactInfo formField={formField} />;
    case 3:
      return <ReviewDetails values={values} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function Book() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  // console.log(formInitialValues);

  return (
    <Main>
      <Box bgcolor={'alternate.main'} minHeight={'calc(100vh - 132px)'}>
        <Container maxWidth={450}>
          {/* <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
          <React.Fragment>
            {activeStep === steps.length ? (
              <BookSuccess />
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting, values }) => {
                  return (
                    <Form
                      id={formId}
                      autoComplete="off"
                      style={{ marginBottom: '100px' }}
                    >
                      {_renderStepContent(activeStep, values)}
                      <CssBaseline />
                      <AppBar
                        position="fixed"
                        color="inherit"
                        sx={{ top: 'auto', bottom: 0 }}
                      >
                        <Container paddingY={0} height={'100%'} maxWidth={600}>
                          <Toolbar
                            sx={{ padding: 0, minHeight: 80, marginBottom: 2 }}
                          >
                            {activeStep !== 0 && (
                              <Button
                                onClick={_handleBack}
                                color="primary"
                                variant="outlined"
                                size="large"
                                startIcon={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    width="24"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                }
                              >
                                Back
                              </Button>
                            )}

                            <Box
                              sx={{ flexGrow: activeStep !== 0 ? 1 : 0.5 }}
                            />
                            <Button
                              disabled={isSubmitting}
                              type="submit"
                              variant="contained"
                              color="primary"
                              size="large"
                            >
                              {isLastStep ? 'Submit request' : 'Continue'}
                            </Button>
                            {isSubmitting && <CircularProgress size={24} />}
                          </Toolbar>
                        </Container>
                      </AppBar>
                    </Form>
                  );
                }}
              </Formik>
            )}
          </React.Fragment>
        </Container>
      </Box>
    </Main>
  );
}
