<Form.Group
  className="col-lg"
  as={Col}
  md="4"
  controlId="validationFormik02">
  <Form.Control
    type="text"
    name="MiddleName"
    value={globalValues.MiddleName}
    onChange={handleChange}
    isValid={touched.middleName && !errors.middleName}
    placeholder="Middle Name"
  />
  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
</Form.Group>;

// import Button from "react-bootstrap/Button";
import { Button } from "@mui/material";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import { object, string, number, date, InferType, bool, ref } from "yup";
import { useContext } from "react";
import { Context } from "../context";

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

const schema = object().shape({
  FirstName: string().required(),
  middleName: string().required(),
  lastName: string().required(),
  mobileNo: string().required(),
  email: string().required(),
  birthday: date()
    .min(ref("originalEndDate"), ({ min }) => `Date needs to be before ${formatDate(min)}!!`)
    .required(),
  age: string().required(),
  bloodGroup: string().required(),
  height: string().required(),
  weight: string().required(),
  gender: string().required(),
  maritalStatus: string().required(),
});

const FormExample = ({ page, setPage, setFormValues }) => {
  let globalValues = useContext(Context);
  // console.log(globalValues);

  const onSubmit = (values) => {
    // console.log("form data", values);
    setPage(1);
    // navigate.push("/NextPage")
  };

  return (
    <Formik
      validationSchema={schema}
      // onSubmit={console.log("lol")}
      initialValues={{ ...globalValues }}>
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form
          noValidate
          onSubmit={(e) => {
            // console.log("isValid", isValid);
            e.preventDefault();
            // onSubmit(values);
          }}>
          {/* Row 1 */}
          <Row className="mb-3 row">
            <Form.Group
              className="col-lg"
              as={Col}
              md="4"
              controlId="validationFormik01">
              {/* <Form.Label>First name</Form.Label> */}
              <Form.Control
                type="text"
                name="FirstName"
                value={values.FirstName}
                onChange={handleChange}
                isValid={!!errors.FirstName}
                placeholder="First Name"
              />
              <Form.Control.Feedback type="invalid">{errors.FirstName}</Form.Control.Feedback>
            </Form.Group>
          </Row>

          {/* Buttons */}
          <div className="d-flex justify-content-between justify-content-lg-start gap-2">
            <Button
              variant="contained"
              type="submit"
              disabled={page === 0 ? true : false}
              onClick={() => {
                // globalValues = { ...values };
                setFormValues({ ...values });
                setPage((page) => page - 1);
                // console.log("global values: ", globalValues);
              }}>
              BACK
            </Button>
            <Button
              variant="contained"
              type="submit"
              className=""
              disabled={page === 2 ? true : false}
              onClick={() => {
                setFormValues({ ...values });
                // setPage((page) => page + 1);
                // console.log("global values: ", globalValues);
              }}>
              NEXT
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormExample;
