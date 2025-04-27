import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * Base API URL from environment variables.
 */
const API_URL = process.env.REACT_APP_API_URL;

/**
 * Axios configuration object containing baseURL and default headers.
 */
const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
};

/**
 * Axios instance pre-configured with baseURL and headers.
 */
const client: AxiosInstance = axios.create(config);

/**
 * Request interceptor to attach Authorization token from localStorage if available.
 */
client.interceptors.request.use(axiosConfig => {
  const newConfig = { ...axiosConfig };

  const token = localStorage.getItem('token');

  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }

  return newConfig;
});

/**
 * Response interceptor to handle errors.
 *
 * If a 401 Unauthorized error occurs and a token exists,
 * - Clears the token and user data from localStorage.
 * - Reloads the page to redirect the user to login page.
 */
client.interceptors.response.use(
  response => response,
  error => responseErrorHandler(error),
);
/**
 * Handles errors from axios interceptors.
 *
 * If the error is a 401 Unauthorized error and a token exists,
 * - Clears the token and user data from localStorage.
 * - Reloads the page to redirect the user to login page.
 *
 * Otherwise, rejects the promise with the error.
 */
const responseErrorHandler = (error: AxiosError) => {
  const token = localStorage.getItem('token');
  if (error.response?.status === 401 && token) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  }

  return Promise.reject(error);
};

export default client;
