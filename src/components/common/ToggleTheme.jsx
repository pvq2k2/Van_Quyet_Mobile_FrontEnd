import React, { useEffect, useRef } from "react";
import { IoSunnyOutline, IoMoonOutline, IoTvOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../redux/slice/darkModeSlice";

const ToggleTheme = () => {
  const theme = useSelector((state) => state.darkMode.mode);
  const dispatch = useDispatch();
  const root = window.document.documentElement;

  const prefersDarkMode = useRef(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)"),
  );

  useEffect(() => {
    const updateDarkMode = (event) => {
      const prefersDark = event.matches;
      dispatch(toggleMode(prefersDark ? "dark" : "light"));
      dispatch(toggleMode("system"));
    };

    prefersDarkMode.current.addEventListener("change", updateDarkMode);

    return () => {
      prefersDarkMode.current.removeEventListener("change", updateDarkMode);
    };
  }, [dispatch]);

  useEffect(() => {
    if (theme === "system") {
      if (prefersDarkMode.current.matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    } else if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = (value) => {
    dispatch(toggleMode(value));
  };

  return (
    <div className="group relative select-none">
      <div className="toggle select-none">
        {theme === "light" ? (
          <IoSunnyOutline className="cursor-pointer text-3xl transition-all duration-300 ease-linear group-hover:text-main dark:text-white dark:group-hover:text-main" />
        ) : theme === "dark" ? (
          <IoMoonOutline className="cursor-pointer text-3xl transition-all duration-300 ease-linear group-hover:text-main dark:text-white dark:group-hover:text-main" />
        ) : (
          <IoTvOutline className="cursor-pointer text-3xl transition-all duration-300 ease-linear group-hover:text-main dark:text-white dark:group-hover:text-main" />
        )}
      </div>
      <div
        id="boxList"
        className="invisible absolute left-[-120px] top-16 z-20 w-40 rounded-lg bg-[hsla(0,0%,100%,0.8)] bg-white p-3 shadow-xl backdrop-blur-[30px] backdrop-saturate-[200%] duration-200 ease-linear before:absolute before:-top-2  before:left-[125px]
                                    before:z-10 before:h-5 before:w-5 before:rotate-45
                                    before:rounded before:bg-white group-hover:visible dark:bg-gray-900 dark:before:bg-gray-900 md:left-[-80px] md:before:left-[85px] xl:left-[-100px] xl:top-14 xl:before:left-[105px]"
      >
        <div className="user_box">
          <ul>
            <div>
              <li
                onClick={() => toggleTheme("light")}
                className={`mt-1 inline-block w-full cursor-pointer rounded-lg p-3 font-semibold hover:text-main hover:shadow-xl hover:ease-in dark:hover:text-main 
                  ${
                    theme === "light"
                      ? "text-main shadow-xl dark:text-main"
                      : "text-black shadow-none dark:text-white"
                  }
                `}
              >
                <div className="flex cursor-pointer items-center gap-x-2">
                  <IoSunnyOutline className="text-3xl" />
                  <span>Sáng</span>
                </div>
              </li>
              <li
                onClick={() => toggleTheme("dark")}
                className={`mt-1 inline-block w-full cursor-pointer rounded-lg p-3 font-semibold hover:text-main hover:shadow-xl hover:ease-in dark:hover:text-main 
                ${
                  theme === "dark"
                    ? "text-main shadow-xl dark:text-main"
                    : "text-black shadow-none dark:text-white"
                }
              `}
              >
                <div className="flex cursor-pointer items-center gap-x-2">
                  <IoMoonOutline className="text-3xl" />
                  <span>Tối</span>
                </div>
              </li>
              <li
                onClick={() => toggleTheme("system")}
                className={`mt-1 inline-block w-full cursor-pointer rounded-lg p-3 font-semibold hover:text-main hover:shadow-xl hover:ease-in dark:hover:text-main 
                ${
                  theme === "system"
                    ? "text-main shadow-xl dark:text-main"
                    : "text-black shadow-none dark:text-white"
                }
              `}
              >
                <div className="flex cursor-pointer items-center gap-x-2">
                  <IoTvOutline className="text-3xl" />
                  <span>Hệ thống</span>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToggleTheme;
