import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateBalance } from '../../redux/transactions/operations';
import { StyledForm } from './Styles';
import { LightModalWindow } from 'components/LightModalWindow/LightModalWindow';

import ModalWindow from '../ModalWindow/ModalWindow';
import { useRef } from 'react';

const ChangeBalance = () => {
  const stateBalance = useSelector(state => state.transactions.newBalance);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  let balance;
  const form = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    balance = evt.target.balance.value;
  };

  const handleClick = () => {
    dispatch(updateBalance({ newBalance: balance }));

    form.current.reset();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit} ref={form}>
        <h2 className="title">Balance:</h2>
        <input
          className="inputTag"
          type="number"
          name="balance"
          title="Please, enter your balance"
          pattern="[0-9, .UAH]*"
          placeholder={`${stateBalance}.00 UAH`}
          required
        />
        <button type="submit" className="btn" onClick={handleModalOpen}>
          Confirm
        </button>
        {!stateBalance && <ModalWindow />}
      </StyledForm>

      {modalOpen && (
        <LightModalWindow
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={handleClick}
          text="SURE"
          balance={balance}
        >
          Are you sure?
        </LightModalWindow>
      )}
    </>
  );
};

export default ChangeBalance;
