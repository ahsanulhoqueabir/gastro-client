import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./ContextProvider/AuthProvider.jsx";
import { router } from "./Router/Router.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataProvider from "./ContextProvider/DataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <ToastContainer />
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </DataProvider>
  </React.StrictMode>
);
