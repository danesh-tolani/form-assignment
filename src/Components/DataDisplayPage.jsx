import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../context";

const DataDisplayPage = ({ page, setPage }) => {
  let globalValues = useContext(Context);

  return (
    <div>
      <h1 className="text-success py-4">Data added Successfully</h1>
      <div>
        {Object.keys(globalValues).map((field, index) => {
          return (
            <div
              className="row border-bottom border-dark align-items-center mx-2 "
              key={index}>
              <p className="col my-auto py-2 ">{field.charAt(0).toUpperCase() + field.slice(1)}</p>
              <p className="col my-auto py-2">{globalValues[`${field}`]}</p>
            </div>
          );
        })}
      </div>
      <Button
        variant="contained"
        className="mt-4"
        disabled={page === 0 ? true : false}
        onClick={() => setPage((page) => page - 1)}>
        BACK
      </Button>
    </div>
  );
};

export default DataDisplayPage;
