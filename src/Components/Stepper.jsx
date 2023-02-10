import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["USER INFORMATION", "ADDRESS DETAILS", "Thank You"];

const StepperComponent = ({ step }) => {
  //   console.log(typeof step, step);
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={step}
        alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
