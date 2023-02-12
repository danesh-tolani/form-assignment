import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";

const RadioButtonValidationSchema = Yup.object().shape({
  gender: Yup.string().required("Please select a Gender"),
});

export default function RadioButtonForm() {
  return (
    <Formik
      initialValues={{
        gender: "",
      }}
      validationSchema={RadioButtonValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({ isSubmitting, setFieldValue, values, errors, touched }) => (
        <Form>
          <FormControl>
            <FormLabel id="radio">Gender</FormLabel>
            <Field name="gender">
              {({ field }) => (
                <RadioGroup
                  row
                  {...field}
                  onChange={(event) => setFieldValue(field.name, event.target.value)}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              )}
            </Field>
            {errors.gender && touched.gender && <FormHelperText error>{errors.gender}</FormHelperText>}
          </FormControl>
          <button
            type="submit"
            disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
