import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Row, Form } from "react-bootstrap";

export default function Lol() {
  const [formState, setFormState] = useState(true);

  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "Must be 15 characters or less").required("FirstName is a required field"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // setFormState(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group controlId="firstName">
          <Form.Control
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            placeholder="First Name"
          />
          <Form.Text className="text-danger">{formik.touched.firstName && formik.errors.firstName && <div className="text-danger">{formik.errors.firstName}</div>}</Form.Text>
        </Form.Group>
      </Row>
      <Button
        variant="primary"
        type="submit"
        onClick={(values) => setFormState(values)}
        // disabled={formState}
      >
        Submit
      </Button>
    </Form>
  );
}
