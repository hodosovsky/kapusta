import axios from 'axios';

export const addIncomeAPI = async info => {
  try {
    const { data } = await axios.post('/transaction/income', info);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeAPI = async () => {
  try {
    const { data } = await axios.get('/transaction/income');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addExpenseAPI = async info => {
  try {
    const { data } = await axios.post('/transaction/expense', info);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getExpenseAPI = async () => {
  try {
    const { data } = await axios.get('/transaction/expense');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransactionAPI = async id => {
  try {
    const { data } = await axios.delete(`/transaction/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeCategoriesAPI = async () => {
  try {
    const { data } = await axios.get('/transaction/income-categories');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getExpenseCategoriesAPI = async () => {
  try {
    const { data } = await axios.get('/transaction/expense-categories');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPeriodDataAPI = async date => {
  console.log('date', date);
  try {
    // const { data } = await axios.get('/transaction/period-data', date);
    const { data } = await axios.get(`/transaction/period-data?date=${date}`);
    console.log('data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateBalanceAPI = async value => {
  try {
    const { data } = await axios.patch('/user/balance', value);
    return data;
  } catch (error) {
    console.log(error);
  }
};
