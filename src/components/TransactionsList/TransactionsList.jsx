import deleteIcon from '../../images/deleteIcon.svg';

export const TransactionsList = () => {
  console.log(deleteIcon);
  return (
    <ul>
      <li id={Date.now()}>
        <div>
          <p>Undeground</p>
          <p>05.09.2019</p>
        </div>
        <p>Transport</p>
        <p>- 30.00 UAH.</p>

        <img width="18" height="18" src={deleteIcon} alt="delete" />
      </li>
    </ul>
  );
};
