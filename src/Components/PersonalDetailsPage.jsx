import { Button } from "@mui/material";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Field, Formik } from "formik";
import { number, object, string } from "yup";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext, useState } from "react";
import { FormControl, FormControlLabel, FormHelperText, FormLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Context } from "../context";

const schema = object().shape({
  firstName: string().required("FirstName is a required field"),
  middleName: string().required("MiddleName is a required field"),
  lastName: string().required("LastName is a required field"),
  mobileNo: string().required("MobileNo is a required field"),
  email: string().required("Email is a required field"),
  // birthday: string().required("Birthday is a required field"),
  age: string().required("Age is a required field"),
  bloodGroup: string().required("Blood group is a required field"),
  height: string().required("Height is a required field"),
  weight: string().required("Weight is a required field"),
  gender: string().required("Please select your Gender"),
  maritalStatus: string().required("Please select your Marital Status"),
});

const PersonalDetailsPage = ({ page, setPage, setFormValues, formValues }) => {
  let globalValues = useContext(Context);

  // const [datevalue, setDateValue] = useState(null);

  // const [maritalStatus, setMaritalStatus] = useState("");
  // console.log(value);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, actions) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   actions.setSubmitting(false);
        // }, 10);
        // console.log("values:", values);

        setFormValues(values);

        setPage((page) => page + 1);
      }}
      initialValues={globalValues}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}>
          {/* Row 1 */}
          <Row className="mb-3 gap-3 gap-lg-0">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="First name"
                name="firstName"
                value={values.firstName}
                error={!!errors.firstName}
                helperText={errors.firstName}
                onChange={handleChange}></TextField>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="Middle name"
                name="middleName"
                value={values.middleName}
                error={!!errors.middleName}
                helperText={errors.middleName}
                onChange={handleChange}></TextField>
            </Form.Group>
          </Row>

          {/* Row 2 */}
          <Row className="mb-3 gap-3 gap-lg-0">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="Last name"
                name="lastName"
                value={values.lastName}
                error={!!errors.lastName}
                helperText={errors.lastName}
                onChange={handleChange}></TextField>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="Mobile No"
                name="mobileNo"
                value={values.mobileNo}
                error={!!errors.mobileNo}
                helperText={errors.mobileNo}
                onChange={handleChange}></TextField>
            </Form.Group>
          </Row>

          {/* Row 3 */}
          <Row className="mb-3 gap-3 gap-lg-0">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="Email"
                name="email"
                value={values.email}
                error={!!errors.email}
                helperText={errors.email}
                onChange={handleChange}></TextField>
            </Form.Group>
            {/* <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Birthday"
                  name="birthday"
                  value={datevalue}
                  onChange={(newValue) => {
                    setDateValue(newValue);
                  }}
                  // error={!!errors.birthday}
                  // error={true}
                  // helperText={errors.email}
                  // isInvalid={!!errors.birthday}
                  className="w-100"
                  renderInput={(params) => {
                    console.log("lol", params.error);
                    return (
                      <TextField
                        {...params}
                        error={!!errors.birthday}
                        helperText={errors.birthday}
                      />
                    );
                  }}
                />
              </LocalizationProvider>
              <Form.Control.Feedback type="invalid">{errors.birthday}</Form.Control.Feedback>
            </Form.Group> */}
          </Row>

          {/* Row 4 */}
          <Row className="mb-3 gap-3 gap-lg-0">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="Age"
                name="age"
                value={values.age}
                error={!!errors.age}
                helperText={errors.age}
                onChange={handleChange}></TextField>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                label="Blood Group"
                className="w-100"
                select
                onChange={handleChange}
                name="bloodGroup"
                error={!!errors.bloodGroup}
                value={values.bloodGroup}
                helperText={errors.bloodGroup}>
                <MenuItem value={"A+"}>A+</MenuItem>
                <MenuItem value={"B+"}>B+</MenuItem>
                <MenuItem value={"C+"}>C+</MenuItem>
              </TextField>
            </Form.Group>
          </Row>

          {/* Row 5 */}
          <Row className="mb-3 gap-3 gap-lg-0">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="Height"
                name="height"
                value={values.height}
                error={!!errors.height}
                helperText={errors.height}
                onChange={handleChange}></TextField>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="Weight"
                name="weight"
                value={values.weight}
                error={!!errors.weight}
                helperText={errors.weight}
                onChange={handleChange}></TextField>
            </Form.Group>
          </Row>

          {/* Row 6 */}
          <Row className="mb-3 gap-3 gap-lg-0">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <FormControl>
                <FormLabel
                  id="radio"
                  className={errors.gender && touched.gender && `text-danger`}>
                  Gender
                </FormLabel>
                <Field name="gender">
                  {({ field }) => (
                    <RadioGroup
                      value={values.gender}
                      row
                      {...field}
                      onChange={handleChange}>
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  )}
                </Field>
                {errors.gender && touched.gender && <FormHelperText error>{errors.gender}</FormHelperText>}
              </FormControl>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <FormControl>
                <FormLabel
                  id="radio"
                  className={errors.maritalStatus && touched.maritalStatus && `text-danger`}>
                  Marital Status
                </FormLabel>
                <Field name="maritalStatus">
                  {({ field }) => (
                    <RadioGroup
                      value={values.maritalStatus}
                      row
                      {...field}
                      onChange={handleChange}>
                      <FormControlLabel
                        value="Single"
                        control={<Radio />}
                        label="Single"
                      />
                      <FormControlLabel
                        value="Married"
                        control={<Radio />}
                        label="Married"
                      />
                      <FormControlLabel
                        value="Divorced"
                        control={<Radio />}
                        label="Divorced"
                      />
                      <FormControlLabel
                        value="Widowed"
                        control={<Radio />}
                        label="Widowed"
                      />
                    </RadioGroup>
                  )}
                </Field>
                {errors.maritalStatus && touched.maritalStatus && <FormHelperText error>{errors.maritalStatus}</FormHelperText>}
              </FormControl>
            </Form.Group>
          </Row>

          {/* Buttons */}
          <div className="d-flex justify-content-between justify-content-lg-start gap-2">
            <Button
              variant="contained"
              disabled={page === 0 ? true : false}
              onClick={() => setPage((page) => page - 1)}>
              BACK
            </Button>
            <Button
              variant="contained"
              className=""
              type="submit"
              disabled={page === 2 ? true : false}>
              NEXT
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetailsPage;
