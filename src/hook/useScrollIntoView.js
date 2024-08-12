/* eslint-disable react/prop-types */
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollIntoView = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return children || null;
};

export default ScrollIntoView;
