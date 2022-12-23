import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBalanceAPI } from '../../services/apiTransactions';
import { StyledForm } from './Styles';

const ChangeBalance = () => {
  const [balance, setBalance] = useState('00');
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('balance:', balance);
    dispatch(updateBalanceAPI({ newBalance: balance}));
    setBalance('');
  };
  const handleChange = evt => {
    evt.preventDefault();
    setBalance(Number(evt.target.value.slice(0, -7)));
  };
  const handleValue = balance + '.00 UAH';
  

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2 className="title">Balance:</h2>
      <input
        className="inputTag"
        type="text"
        name="balance"
        title="Please, enter your balance"
        placeholder="00.00 UAH"
        onChange={handleChange}
        value={handleValue}
        required
      />
      <button type="submit" className="btn">
        Confirm
      </button>
    </StyledForm>
  );
};

export default ChangeBalance;
