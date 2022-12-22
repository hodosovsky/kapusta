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
  return (
    <StyledList>
      <ItemStyled key={Date.now() + 3}>
        <ItemNameCont>
          <ItemName>Description</ItemName>
          {/* <ItemDateCont> */}
          <ItemDate>Date</ItemDate>
          <ItemCategoty>category</ItemCategoty>
          {/* </ItemDateCont> */}
        </ItemNameCont>
        <SumCont>
          <Sum className="sum">Sum</Sum>

          <DeleteIcon id={Date.now()} />
        </SumCont>
      </ItemStyled>
      <ItemStyled key={Date.now()}>
        <ItemNameCont>
          <ItemName>Undeground</ItemName>
          {/* <ItemDateCont> */}
          <ItemDate>05.09.2019</ItemDate>
          <ItemCategoty>Transport</ItemCategoty>
          {/* </ItemDateCont> */}
        </ItemNameCont>
        <SumCont>
          <Sum className="sum">- 30.00 UAH.</Sum>

          <DeleteIcon id={Date.now()} />
        </SumCont>
      </ItemStyled>
      <ItemStyled key={Date.now() + 1}>
        <ItemNameCont>
          <ItemName>Bananas</ItemName>
          {/* <ItemDateCont> */}
          <ItemDate>05.09.2019</ItemDate>
          <ItemCategoty>Products</ItemCategoty>
          {/* </ItemDateCont> */}
        </ItemNameCont>
        <SumCont>
          <Sum className="sum">- 50.00 UAH.</Sum>

          <DeleteIcon id={Date.now()} />
        </SumCont>
      </ItemStyled>
      <ItemStyled key={Date.now() + 2}>
        <ItemNameCont>
          <ItemName>My salary</ItemName>
          {/* <ItemDateCont> */}
          <ItemDate>05.09.2019</ItemDate>
          <ItemCategoty>ЗП</ItemCategoty>
          {/* </ItemDateCont> */}
        </ItemNameCont>
        <SumCont>
          <Sum className="sum">20 000.00 UAH.</Sum>

          <DeleteIcon id={Date.now()} />
        </SumCont>
      </ItemStyled>
    </StyledList>
  );
};
