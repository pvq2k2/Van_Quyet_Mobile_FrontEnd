import { ToastContainer } from "react-toastify";
import Router from "./Router";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [toasTheme, setToastTheme] = useState("light");
  const theme = useSelector((state) => state.darkMode.mode);

  const prefersDarkMode = useRef(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)"),
  );

  useEffect(() => {
    const updateDarkMode = (event) => {
      const prefersDark = event.matches;
      setToastTheme(prefersDark ? "dark" : "light");
    };

    prefersDarkMode.current.addEventListener("change", updateDarkMode);

    return () => {
      prefersDarkMode.current.removeEventListener("change", updateDarkMode);
    };
  }, [theme == "system"]);

  useEffect(() => {
    if (theme === "system") {
      if (prefersDarkMode.current.matches) {
        setToastTheme("dark");
      } else {
        setToastTheme("light");
      }
    } else if (theme === "dark") {
      setToastTheme("dark");
    } else {
      setToastTheme("light");
    }
  }, [theme]);
  return (
    <>
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={toasTheme}
      />
    </>
  );
}

export default App;
