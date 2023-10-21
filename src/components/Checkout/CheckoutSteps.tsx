import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import * as React from "react";
import PrimaryButton from "../common/Button/PrimaryButton";
import { ColorlibConnector, ColorlibStepIcon } from "./StyledComponents";

const steps = ["Information", "Payment", "Confirm"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ my: 3 }}>
        <Box>{activeStep === 0 && <Box>
          
          </Box>}</Box>
        <Box>{activeStep === 1 && <div>Step 2</div>}</Box>
        <Box>{activeStep === 2 && <div>Step 3</div>}</Box>
      </Box>
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        {(activeStep === 1 || activeStep === 2) && (
          <PrimaryButton onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}>Back</PrimaryButton>
        )}
        {(activeStep === 0 || activeStep === 1) && (
          <PrimaryButton onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}>Next</PrimaryButton>
        )}
        {activeStep === 2 && (
          <PrimaryButton type="submit" onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}>
            Confirm Order
          </PrimaryButton>
        )}
      </Stack>
    </Box>
  );
}
