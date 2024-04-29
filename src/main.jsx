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
// import "@sweetalert2/theme-bulma/bulma.scss";
// import "sweetalert2/dist/sweetalert2.min.css";
// import "bulma/css/bulma.min.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataProvider>
          <ToastContainer />
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </DataProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
