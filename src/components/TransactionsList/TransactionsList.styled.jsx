import styled from 'styled-components';
export const StyledList = styled.ul`
  & li:nth-of-type(1) {
    font-weight: 700;
    letter-spacing: 0.02em;
  }
`;

export const ItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f5f6fb;

  @media screen and (min-width: 768px) {
    justify-content: left;
  }
`;

export const ItemName = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    font-weight: 400;
    width: 168px;
    order: 1;
  }
`;

export const ItemNameCont = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const ItemDateCont = styled.div`
  display: flex;
  gap: 20px;
`;

export const ItemDate = styled.p`
  font-size: 8px;
  line-height: 1.12;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    width: 84px;
    order: 0;
  }
`;

export const ItemCategoty = styled.p`
  font-size: 8px;
  line-height: 1.12;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    width: 124px;
  }
`;
export const SumCont = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;
export const Sum = styled.p`
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  vertical-align: auto;

  @media screen and (min-width: 768px) {
    width: 104px;
    justify-content: flex-end;
    text-transform: uppercase;
  }
`;
