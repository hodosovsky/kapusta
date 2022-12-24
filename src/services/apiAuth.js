import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';
axios.defaults.validateStatus();

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
    const response = await axios.get('/auth/google', {
      headers: {
        accept: '*/*',
      },
    });
    console.log('response', response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fullUserInfoAPI = async () => {
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
