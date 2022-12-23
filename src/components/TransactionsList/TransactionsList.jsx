import { ReactComponent as DeleteIcon } from '../../images/deleteIcon.svg';
import {
  ItemName,
  ItemNameCont,
  ItemDate,
  ItemDateCont,
  ItemStyled,
  ItemCategoty,
  Sum,
  SumCont,
  StyledList,
} from './TransactionsList.styled';

export const TransactionsList = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <StyledList className="container">
      {arr.map(item => (
        <ItemStyled key={item}>
          <ItemNameCont>
            <ItemName>Undeground</ItemName>
            <ItemDateCont>
              <ItemDate>05.09.2019</ItemDate>
              <ItemCategoty>Transport</ItemCategoty>
            </ItemDateCont>
          </ItemNameCont>
          <SumCont>
            <Sum className="sum">- 30.00 UAH.</Sum>
            <DeleteIcon id={Date.now()} />
          </SumCont>
        </ItemStyled>
      ))}
    </StyledList>
  );
};
