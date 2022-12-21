import { useState } from 'react';
import { StyledForm } from './Styles';
const EnterTheBalance = () => {

  const [balance, setBalance] = useState('');

	const handleSubmit = evt => {
    evt.preventDefault();
	}
	const handleChange = evt => {
    evt.preventDefault();
    console.dir(evt.target.value);
    setBalance(evt.target.value)
	}

  return (
    <StyledForm>
      <h2 className="title">Balance:</h2>
      <input
        className="inputTag"
        type="number"
        min="0.00"
        max="10000.00"
        step="0.01"
        name="balance"
        title="Please, enter the your balance"
        placeholder="00.00 UAH"
        onChange={handleChange}
        value={balance}
        required
      />
      <button type="submit">Confirm</button>
    </StyledForm>
  );
};

export default EnterTheBalance;
