import React, { useContext } from "react";
import { Context } from "../context";

const DisplayPage = () => {
  let globalValues = useContext(Context);
  console.log(Object.keys(globalValues));

  //   for (const key in globalValues) {
  //     console.log(key);
  //   }

  return (
    <div>
      <h1 className="text-success py-4">Data added Successfully</h1>
      <div>
        {Object.keys(globalValues).map((field) => {
          return (
            <>
              <div className="row border-bottom border-dark align-items-center mx-2">
                <p className="col my-auto py-2 ">{field}</p>
                <p className="col my-auto py-2">{globalValues[`${field}`]}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayPage;
