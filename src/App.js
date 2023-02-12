import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Context } from "./context";
import StepperComponent from "./Components/Stepper";
import DataDisplayPage from "./Components/DataDisplayPage";
import PersonalDetailsPage from "./Components/PersonalDetailsPage";
import AddressDetailsPage from "./Components/AddressDetailsPage";

function App() {
  const initialValues = {
    name: "Value",
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    birthday: "",
    age: "",
    bloodGroup: "",
    height: "",
    weight: "",
    gender: "",
    maritalStatus: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  };

  const [page, setPage] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);

  return (
    <Context.Provider value={formValues}>
      <div className="App d-flex justify-content-center align-items-center  bg-dark bg-opacity-25 p-lg-5 p-3 swiper">
        <div className=" h-100 w-100 px-lg-5 px-2 py-lg-4 py-2 bg-light swiper-wrapper">
          <StepperComponent step={page} />
          {/* FORM PAGES */}
          {page === 0 && (
            <PersonalDetailsPage
              className="swiper-slide slide_1"
              page={page}
              setPage={setPage}
              setFormValues={setFormValues}
            />
          )}
          {page === 1 && (
            <AddressDetailsPage
              className="swiper-slide slide_2"
              page={page}
              setPage={setPage}
              setFormValues={setFormValues}
            />
          )}
          {page === 2 && (
            <DataDisplayPage
              className="swiper-slide slide_3"
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
