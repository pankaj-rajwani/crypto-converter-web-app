import axios from 'axios';
import { serviceUrls } from './urls.config';

const instance = (serviceName) => {
  const baseUrl = import.meta.env.VITE_BACKEND_API_BASE_URL ?? 'http://localhost:4200/api';
  const apiVersion = import.meta.env.VITE_BACKEND_API_VERSION ?? 'v1';

  return axios.create({
    baseURL: `${baseUrl}/${apiVersion}/${serviceUrls[serviceName]}`,
  });
};

export default instance;
