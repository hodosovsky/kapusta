import styled from 'styled-components';
export const StyledList = styled.ul`
  width: 320px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ItemStyled = styled.li`
  display: flex;
  justify-content: space-between;

  padding: 8px 0px;
  border-bottom: 1px solid #f5f6fb;
`;

export const ItemName = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;

export const ItemNameCont = styled.div``;

export const ItemDateCont = styled.div`
  display: flex;
  gap: 20px;
`;

export const ItemDate = styled.p`
  font-size: 8px;
  line-height: 1.12;
  letter-spacing: 0.04em;
`;

export const ItemCategoty = styled.p`
  font-size: 8px;
  line-height: 1.12;
  letter-spacing: 0.04em;
`;
export const SumCont = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;
export const Sum = styled.p`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  vertical-align: auto;

  /* @media screen and (min-width: 768px) {
    width: 104px;
    justify-content: flex-end;
  } */
`;
