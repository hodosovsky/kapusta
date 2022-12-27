import styled from 'styled-components';

export const StyledTable = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    min-width: 213px;
    min-height: 280px;
    height: 100%;
    background-color: #f5f6fb;
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    border-radius: 16px;
    border-bottom-left-radius: 0px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0px;
  }
`;

export const StyledTableHead = styled.li`
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 12px 0px;
  color: #000;
`;

export const StyledRow = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 21px;
  border-top: 2px solid #fff;

  @media screen and (min-width: 1200px) {
    padding: 12px 12px;
  }
`;

export const StyledMonth = styled.p`
  width: 84px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const StyledValue = styled.p`
  width: 84px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-align: right;
`;
