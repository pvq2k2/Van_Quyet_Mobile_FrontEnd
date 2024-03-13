import React from "react";
import { NumericFormat } from "react-number-format";
const CustomNumberFormat = ({ number, className = "", type = "₫" }) => {
  return (
    <>
      <NumericFormat
        value={number}
        className={className}
        displayType={"text"}
        thousandSeparator={true}
        prefix={""}
      />{" "}
      {type}
    </>
  );
};

export default CustomNumberFormat;
