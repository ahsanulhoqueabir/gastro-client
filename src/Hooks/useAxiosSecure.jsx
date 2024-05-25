import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  baseURL: "https://server-gastronomix.netlify.app/.netlify/functions/api/v1",
});
const useAxiosSecure = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response?.status;

      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return [axiosSecure];
};

export default useAxiosSecure;
