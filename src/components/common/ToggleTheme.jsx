import React, { useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../app/slice/darkModeSlice";

const ToggleTheme = () => {
  const theme = useSelector((state) => state.darkMode.mode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  const root = window.document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <div onClick={toggleTheme} className="toggle select-none">
        {theme === "light" ? (
          <IoSunnyOutline className="bx bx-sun cursor-pointer text-3xl transition-all duration-300 ease-linear hover:text-main dark:text-white dark:hover:text-main" />
        ) : (
          <IoMoonOutline className="bx bx-moon cursor-pointer text-3xl transition-all duration-300 ease-linear hover:text-main dark:text-white dark:hover:text-main" />
        )}
      </div>
    </div>
  );
};

export default ToggleTheme;
