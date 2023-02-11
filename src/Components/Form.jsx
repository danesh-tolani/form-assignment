import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
// import "./style.css";
import { Button, Container, Row, Form } from "react-bootstrap";
import { Context } from "../context";

export default function Lol({ page, setPage, setFormValues }) {
  const [formState, setFormState] = useState(true);

  let globalValues = useContext(Context);

  const formik = useFormik({
    initialValues: { ...globalValues },
    validationSchema: Yup.object({
      FirstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      LastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
      Email: Yup.string().email("Invalid Email address").required("Required"),
    }),
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      setFormState(values);
      console.log(formState);
      setPage(1);
    },
  });
  return (
    <div>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="FirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="FirstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.FirstName}
            />
            <Form.Text className="text-danger">{formik.touched.FirstName && formik.errors.FirstName ? <div className="text-danger">{formik.errors.FirstName}</div> : null}</Form.Text>
          </Form.Group>

          <Form.Group controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="LastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.LastName}
            />
            <Form.Text className="text-danger">{formik.touched.LastName && formik.errors.LastName ? <div className="text-danger">{formik.errors.LastName}</div> : null}</Form.Text>
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="Email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Email}
            />
            <Form.Text className="text-danger">{formik.touched.Email && formik.errors.Email ? <div className="text-danger">{formik.errors.Email}</div> : null}</Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(values) => {
              setFormState(values);
              setFormValues({ ...formik.values });
            }}
            // disabled={formState}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
