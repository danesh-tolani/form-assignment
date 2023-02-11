import FormExample from "./Components/ExampleForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import StepperComponent from "./Components/Stepper";
import { Button } from "@mui/material";
import { Context } from "./context";
import Lol from "./Components/Form";
import DisplayPage from "./Components/DisplayPage";

function App() {
  const initialValues = {
    Name: "Value",
    FirstName: "test",
    MiddleName: "test",
    LastName: "test",
    MobileNo: "84848484",
    Email: "danesh@gmail.com",
    BirthDay: "15-05-2000",
    Age: "22",
    Email: "asdf",
    BloodGroup: "AB",
    Height: "153",
    Weight: "75",
    Gender: "Male",
    MaritalStatus: "Single",
    AddressLine1: "Test",
    AddressLine2: "Test",
    City: "Test",
    State: "Test",
    Country: "Test",
    PinCode: "454545",
  };

  const [page, setPage] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);

  // console.log(formValues);

  return (
    <Context.Provider value={formValues}>
      <div className="App d-flex justify-content-center align-items-center  bg-dark bg-opacity-25 p-lg-5 p-3">
        <div className="border border-danger h-100 w-100 px-lg-5 px-2 py-lg-4 py-2 bg-light">
          <StepperComponent step={page} />

          {/* FORM PAGES */}
          {/* {page === 0 && (
            // <Lol
            //   page={page}
            //   setPage={setPage}
            //   setFormValues={setFormValues}
            // />

            <FormExample
            page={page}
            setPage={setPage}
            setValues={setValues}
            />
          )} */}
          {/* {page === 1 && (
            <FormExample
              page={page}
              setPage={setPage}
              setFormValues={setFormValues}
            /> */}
          {/* )} */}
          {/* {page === 2 && (
            <FormExample
              page={page}
              setPage={setPage}
              setValues={setValues}
            />
          )} */}

          <DisplayPage />

          {/* NAVIGATION BUTTONS */}
          {/* <div className="d-flex justify-content-between justify-content-lg-start gap-2">
          <Button
          variant="contained"
          disabled={page === 0 ? true : false}
          onClick={() => setPage((page) => page - 1)}>
          BACK
          </Button>
          <Button
          variant="contained"
          className=""
          disabled={page === 2 ? true : false}
          onClick={() => setPage((page) => page + 1)}>
          NEXT
          </Button>
        </div> */}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
