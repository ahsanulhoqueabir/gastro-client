import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";

const axiosPublic = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosPublic = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleResponseError = async (error) => {
    const status = error.response?.status;

    if (status === 401 || status === 403) {
      await logout();
      navigate("/login");
    }
    return Promise.reject(error);
  };

  axiosPublic.interceptors.response.use(
    (response) => response,
    handleResponseError
  );

  return axiosPublic;
};

export default useAxiosPublic;
