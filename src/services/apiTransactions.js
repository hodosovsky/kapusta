import axios from 'axios';

export const addIncomeAPI = async info => {
  const { data } = await axios.post('/transaction/income', info);
  return data;
};

export const getIncomeAPI = async () => {
  const { data } = await axios.get('/transaction/income');
  return data;
};

export const addExpenseAPI = async info => {
  const { data } = await axios.post('/transaction/expense', info);

  return data;
};

export const getExpenseAPI = async () => {
  const { data } = await axios.get('/transaction/expense');
  return data;
};

export const deleteTransactionAPI = async id => {
  const { data } = await axios.delete(`/transaction/${id}`);
  return data;
};

export const getIncomeCategoriesAPI = async () => {
  const { data } = await axios.get('/transaction/income-categories');
  return data;
};

export const getExpenseCategoriesAPI = async () => {
  const { data } = await axios.get('/transaction/expense-categories');
  return data;
};

export const getPeriodDataAPI = async date => {
  const { data } = await axios.get(`/transaction/period-data?date=${date}`);
  return data;
};

export const updateBalanceAPI = async value => {
  const { data } = await axios.patch('/user/balance', value);
  return data;
};
