import { ToastContainer } from "react-toastify";
import Router from "./Router";
import SiteHeader from "./components/layout/site/header";

function App() {
  return (
    <div className="h-screen bg-[#f4f4f4] dark:bg-black">
      <SiteHeader />
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
        theme="light"
      />
    </div>
  );
}

export default App;
