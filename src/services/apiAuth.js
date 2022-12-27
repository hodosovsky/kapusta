import axios from 'axios';
import { Report } from 'notiflix/build/notiflix-report-aio';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';
axios.defaults.validateStatus();

export const registerAPI = async user => {
  try {
    const { data } = await axios.post('/auth/register', user);
    return data;
  } catch (error) {
    if (error.response.status === 409) {
      Report.failure(`User ${user.email} is existing`);
    }
  }
};

export const loginAPI = async user => {
  const { data } = await axios.post('auth/login', user);
  return data;
};

export const logoutAPI = async () => {
  const { data } = await axios.post('auth/logout');
  return data;
};

export const googleLoginAPI = async () => {
  const response = await axios.get('/auth/google', {
    headers: {
      accept: '*/*',
    },
  });
  console.log('response', response);
  return response;
};

export const fullUserInfoAPI = async () => {
  const { data } = await axios.get('user');
  return data;
};

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
