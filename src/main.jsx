import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./reducers/store";
import App from "./App.jsx";
import "./output.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
