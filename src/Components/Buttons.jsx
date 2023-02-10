import { Button } from "@mui/material";
import React from "react";

const Buttons = ({ page, setPage, type }) => {
  return (
    <Button
      variant="contained"
      disabled={page === 1 ? true : false}>
      {type}
    </Button>
  );
};

export default Buttons;
