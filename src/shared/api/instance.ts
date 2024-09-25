import axios, { CreateAxiosDefaults } from 'axios';

import { URL } from '@/utils/constants';

import { AuthService } from './entities';

const config: CreateAxiosDefaults = {
  baseURL: URL.SERVER,
  withCredentials: true,
};

export const api = axios.create(config);
export const noInterceptorApi = axios.create(config);

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await AuthService.refreshTokens();
        localStorage.setItem('accessToken', response.data.accessToken);
        return api.request(originalRequest);
      } catch (err) {
        console.log('User does not auth');
      }
    }
    return Promise.reject(error);
  }
);
