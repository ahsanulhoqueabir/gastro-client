import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import Classes from "../Pages/Classes/Classes";
import StdDashboard from "../Pages/Dashboard/Student/StdDashboard";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/Student/EnrolledClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import LoadingSpinner from "../Shared/LoadingSpinner";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser/ManageUser";
import InstructorRoute from "./InstructorRoute";
import AdminAccess from "./AdminAccess";

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
        path: "/spinnertest",
        element: <LoadingSpinner />,
      },
      {
        path: "dashboard",
        element: <StdDashboard />,
        children: [
          // student route ----------------
          {
            path: "selectedClass",
            element: <SelectedClass />,
          },
          {
            path: "Enrolled",
            element: <EnrolledClass />,
          },
          {
            path: "Payment/:id",
            element: <Payment />,
          },
          // instructor route ---------------
          {
            path: "addNewClass",
            element: (
              <InstructorRoute>
                <AddClass />
              </InstructorRoute>
            ),
          },
          {
            path: "myclass",
            element: (
              <InstructorRoute>
                <MyClass />
              </InstructorRoute>
            ),
          },

          // admin routes -------------------
          {
            path: "manageclasses",
            element: (
              <AdminAccess>
                <ManageClasses />
              </AdminAccess>
            ),
          },
          {
            path: "manageuser",
            element: (
              <AdminAccess>
                <ManageUser />
              </AdminAccess>
            ),
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
