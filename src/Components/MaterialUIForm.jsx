import { Card, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { object, string, number, date, InferType } from "yup";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const MaterialUIForm = () => {
  // Validation Schema
  const schema = object().shape({
    firstName: string().required("FirstName is a required field"),
    middleName: string().required("MiddleName is a required field"),
    lastName: string().required("LastName is a required field"),
    mobileNo: string().required("MobileNo is a required field"),
    email: string().required("Email is a required field"),
    birthday: string().required("Birthday is a required field"),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        birthday: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
        console.log(values);
      }}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              {/* <Form.Label>City</Form.Label> */}
              <TextField
                className=""
                label="First Name"
                name="firstName"
                error={!!errors.firstName}
                helperText={errors.firstName}
                onChange={handleChange}></TextField>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              {/* <Form.Label>City</Form.Label> */}
              <TextField
                className=" w-50 "
                label="Middle Name"
                name="middleName"
                error={!!errors.middleName}
                helperText={errors.middleName}
                onChange={handleChange}></TextField>
            </Form.Group>
          </Row>
          {/* <Row className="gap">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className=""
                label="First Name"
                name="firstName"
                error={!!errors.firstName}
                helperText={errors.firstName}
                onChange={handleChange}></TextField>
            </Form.Group>
            <TextField
              className=" w-50 "
              label="Middle Name"
              name="middleName"
              error={!!errors.middleName}
              helperText={errors.middleName}
              onChange={handleChange}></TextField>
          </Row> */}
          <Button
            variant="contained"
            type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MaterialUIForm;
