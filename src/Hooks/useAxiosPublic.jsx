import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";

const axiosPublic = axios.create({
  baseURL: "https://server-gastronomix.netlify.app/.netlify/functions/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});

const useAxiosPublic = () => {
  const navigate = useNavigate();

  const handleResponseError = async (error) => {
    const status = error.response?.status;

    if (status === 401 || status === 403 || status === 500) {
      navigate("/error");
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
