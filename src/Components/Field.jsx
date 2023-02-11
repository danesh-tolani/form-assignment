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
