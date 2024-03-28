import { NumericFormat } from "react-number-format";
import PropTypes from "prop-types";
const CustomNumberFormat = ({ number, className = "", type }) => {
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

CustomNumberFormat.propTypes = {
  number: PropTypes.number,
  className: PropTypes.string,
  type: PropTypes.string,
};
export default CustomNumberFormat;
