import FormExample from "./Components/ExampleForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import StepperComponent from "./Components/Stepper";
import { Button } from "@mui/material";

function App() {
  const [page, setPage] = useState(0);
  console.log(page);

  return (
    <div className="App d-flex justify-content-center align-items-center vh-100 bg-dark bg-opacity-25 p-lg-5 p-3">
      <div className="border border-danger h-100 w-100 px-lg-5 px-2 py-lg-4 py-2 bg-light">
        <StepperComponent step={page} />

        {/* FORM PAGES */}
        {page === 0 && <FormExample />}
        {page === 1 && <FormExample />}
        {page === 2 && <FormExample />}

        {/* NAVIGATION BUTTONS */}
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
            disabled={page === 2 ? true : false}
            onClick={() => setPage((page) => page + 1)}>
            NEXT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
