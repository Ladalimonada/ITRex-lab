/* eslint-disable no-param-reassign */
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token;
  return config;
});
