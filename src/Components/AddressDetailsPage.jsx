import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import { number, object, string } from "yup";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context";

const schema = object().shape({
  addressLine1: string().required("AddressLine1 is a required field"),
  addressLine2: string().required("AddressLine2 is a required field"),
  city: string().required("City is a required field"),
  state: string().required("State is a required field"),
  country: string().required("Country is a required field"),
  pinCode: number().typeError("This field should be a number").required("Pin Code is a required field"),
});

const AddressDetailsPage = ({ page, setPage, setFormValues }) => {
  let globalValues = useContext(Context);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        setPage((page) => page + 1);
        setFormValues({ ...globalValues, ...values });
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
                label="Address Line 1"
                name="addressLine1"
                value={values.addressLine1}
                error={!!errors.addressLine1}
                helperText={errors.addressLine1}
                onChange={handleChange}></TextField>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="Address Line 2"
                name="addressLine2"
                value={values.addressLine2}
                error={!!errors.addressLine2}
                helperText={errors.addressLine2}
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
                label="City"
                className="w-100"
                value={values.city}
                select
                onChange={handleChange}
                name="city"
                error={!!errors.city}
                helperText={errors.city}>
                <MenuItem value={"Test1"}>Test1</MenuItem>
                <MenuItem value={"Test2"}>Test2</MenuItem>
                <MenuItem value={"Test3"}>Test3</MenuItem>
              </TextField>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                label="State"
                className="w-100"
                select
                value={values.state}
                onChange={handleChange}
                name="state"
                error={!!errors.state}
                helperText={errors.state}>
                <MenuItem value={"Test1"}>Test1</MenuItem>
                <MenuItem value={"Test2"}>Test2</MenuItem>
                <MenuItem value={"Test3"}>Test3</MenuItem>
              </TextField>
            </Form.Group>
          </Row>

          {/* Row 3 */}
          <Row className="mb-3 gap-3 gap-lg-0">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                label="Country"
                className="w-100"
                select
                value={values.country}
                onChange={handleChange}
                name="country"
                error={!!errors.country}
                helperText={errors.country}>
                <MenuItem value={"Test1"}>Test1</MenuItem>
                <MenuItem value={"Test2"}>Test2</MenuItem>
                <MenuItem value={"Test3"}>Test3</MenuItem>
              </TextField>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik03">
              <TextField
                className="w-100"
                label="Pin Code"
                name="pinCode"
                value={values.pinCode}
                error={!!errors.pinCode}
                helperText={errors.pinCode}
                onChange={handleChange}></TextField>
            </Form.Group>
          </Row>

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

export default AddressDetailsPage;
