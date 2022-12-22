import { useDispatch } from 'react-redux';
import { addIncome, getIncome } from 'redux/transactions/operations';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { date, descr, category, sum } = event.target.elements;
    dispatch(
      addIncome({
        description: descr.value,
        amount: sum.value,
        date: date.value,
        category: category.value,
      })
    );
  };

  const handleGetIncome = () => {
    dispatch(getIncome());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="date" placeholder="date" name="date" />
        <input type="text" placeholder="descr" name="descr" />
        <input type="text" placeholder="category" name="category" />
        <input type="number" placeholder="sum" name="sum" />
        <button type="submit">Input</button>
      </form>
      <button>Add Income</button>
      <button onClick={handleGetIncome}>Get Income</button>
      <button>Add Expense</button>
      <button>Get Expense</button>
    </>
  );
};
