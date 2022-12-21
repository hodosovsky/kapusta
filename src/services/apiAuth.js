import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const registerAPI = async user => {
  try {
    const { data } = await axios.post('/auth/register', user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginAPI = async user => {
  try {
    const { data } = await axios.post('auth/login', user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutAPI = async () => {
  try {
    const { data } = await axios.post('auth/logout');
    return data;
  } catch (error) {}
};

export const googleLoginAPI = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const refreshUserAPI = async () => {
  try {
    const { data } = await axios.get('user');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
