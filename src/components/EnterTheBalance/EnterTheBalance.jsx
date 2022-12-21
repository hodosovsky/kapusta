import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { updateBalanceAPI } from '../../services/apiTransactions';
import { StyledForm } from './Styles';

const EnterTheBalance = () => {
  const [balance, setBalance] = useState('');
  // const dispatch = useDispatch();

	const handleSubmit = evt => {
    evt.preventDefault();
    // dispatch(updateBalanceAPI(balance))
    // прослідкувати щоб відправлялось число
    setBalance('');
	}
	const handleChange = evt => {
    evt.preventDefault();
    setBalance(evt.target.value);
	}

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2 className="title">Balance:</h2>
      <input
        className="inputTag"
        type="text"
        name="balance"
        title="Please, enter your balance"
        // вказати регулярний вираз - маску грошового формату
        placeholder="00.00 UAH"
        onChange={handleChange}
        value={balance}
        required
      />
      <button type="submit" className='btn'>Confirm</button>
    </StyledForm>
  );
};

export default EnterTheBalance;
