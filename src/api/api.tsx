import axios from 'axios';
import {base_url} from '../constants';

const api = axios.create({
  baseURL: base_url,
});

api.interceptors.request.use(config => {
  console.log(`Request [${config.method?.toUpperCase()}] ${config.url}`);
  if (config.method === 'post') {
    console.log('body:', config.data);
  }
  return config;
});

api.interceptors.response.use(
  response => {
    console.log(
      `Response [${response.config.method?.toUpperCase()}] ${
        response.config.url
      } ${response.status}`,
    );
    console.log('body:', response.data);
    return response;
  },
  error => {
    console.log(
      `[ERROR] Request [${error.config.method.toUpperCase()}] ${
        error.config.url
      } ${error.response.status}`,
    );
    console.log('body:', error.response.data);
    return Promise.reject(error);
  },
);

export default api;
