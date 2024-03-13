import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { persistor, store } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "@csstools/normalize.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
);
// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <React.StrictMode>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </React.StrictMode>
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root"),
// );
