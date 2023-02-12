import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import StepperComponent from "./Components/Stepper";
import { Context } from "./context";
import DataDisplayPage from "./Components/DataDisplayPage";
import PersonalDetailsPage from "./Components/PersonalDetailsPage";
import AddressDetailsPage from "./Components/AddressDetailsPage";

function App() {
  const initialValues = {
    name: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    birthDay: "",
    age: "",
    bloodGroup: "",
    height: "",
    weight: "",
    gender: "",
    maritalStatus: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  };

  const [page, setPage] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);

  console.log("FormValues: ", formValues);

  return (
    <Context.Provider value={formValues}>
      <div className="App d-flex justify-content-center align-items-center  bg-dark bg-opacity-25 p-lg-5 p-3">
        <div className=" h-100 w-100 px-lg-5 px-2 py-lg-4 py-2 bg-light">
          <StepperComponent step={page} />

          {/* FORM PAGES */}
          {page === 0 && (
            <PersonalDetailsPage
              page={page}
              setPage={setPage}
              setFormValues={setFormValues}
            />
          )}
          {page === 1 && (
            <AddressDetailsPage
              page={page}
              setPage={setPage}
              setFormValues={setFormValues}
            />
          )}
          {page === 2 && (
            <DataDisplayPage
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
