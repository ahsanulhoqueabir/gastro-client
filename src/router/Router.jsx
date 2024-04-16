import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import AddClass from "../Pages/Admin/AddClass";
import Classes from "../Pages/Classes/Classes";
import StdDashboard from "../Pages/Dashboard/Student/StdDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "Classes",
        element: <Classes />,
      },
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: <StdDashboard />,
        children: [
          {
            path: "home",
            element: <StdDashboard />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
