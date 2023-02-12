import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["USER INFORMATION", "ADDRESS DETAILS", "Thank You"];

const StepperComponent = ({ step }) => {
  return (
    <Box className="w-100 pt-3">
      <Stepper
        activeStep={step}
        alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <p className="small">{label}</p>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
