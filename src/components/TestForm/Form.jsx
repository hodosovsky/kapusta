import { useDispatch } from 'react-redux';
import {
  addIncome,
  getIncome,
  addExpense,
  getExpenses,
  updateBalance,
  getAllTransactions,
  deleteTransaction,
} from 'redux/transactions/operations';
import { getPeriodDataAPI } from 'services/apiTransactions';

export const Form = () => {
  const dispatch = useDispatch();

  const handleAddIncome = event => {
    event.preventDefault();
    const { date, descr, category, sum } = event.target.elements;
    dispatch(
      addIncome({
        description: descr.value,
        amount: Number(sum.value),
        date: date.value,
        category: category.value,
      })
    );
  };

  const handleGetIncome = () => {
    dispatch(getIncome());
  };

  const handleAddExpense = event => {
    event.preventDefault();
    const { date, descr, category, sum } = event.target.elements;

    dispatch(
      addExpense({
        description: descr.value,
        amount: Number(sum.value),
        date: date.value,
        category: category.value,
      })
    );
  };

  const handleGetExpense = () => {
    dispatch(getExpenses());
  };

  const changeBalance = () => {
    dispatch(updateBalance({ newBalance: 5000 }));
  };

  const userInfo = () => {
    dispatch(getAllTransactions());
  };

  const handleDeleteTransaction = () => {
    dispatch(deleteTransaction('63a462c4db7a810814038945'));
  };

  const handlePeriodData = () => {
    getPeriodDataAPI('2022-12');
  };

  return (
    <>
      <form onSubmit={handleAddIncome}>
        <input type="date" placeholder="date" name="date" />
        <input type="text" placeholder="descr" name="descr" />
        <input type="text" placeholder="category" name="category" />
        <input type="number" placeholder="sum" name="sum" />
        <button type="submit">Input</button>
      </form>
      <button onClick={handleGetIncome}>Get Income</button>
      <br />
      <br />
      <form onSubmit={handleAddExpense}>
        <input type="date" placeholder="date" name="date" />
        <input type="text" placeholder="descr" name="descr" />
        <input type="text" placeholder="category" name="category" />
        <input type="number" placeholder="sum" name="sum" />
        <button type="submit">Input</button>
      </form>
      <button onClick={handleGetExpense}>Get Expense</button>
      <br />
      <button onClick={changeBalance}>Change balance</button>
      <button onClick={userInfo}>Full users info</button>
      <button onClick={handleDeleteTransaction}>Delete transaction</button>
      <button onClick={handlePeriodData}>Data by period</button>
    </>
  );
};
