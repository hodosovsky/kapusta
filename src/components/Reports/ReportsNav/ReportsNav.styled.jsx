import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBack = styled(Link)`
  background-color: transparent;
  border: transparent;
  padding: 0%;

  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: calc(100% / 3);
    padding-top: 0;
  }
`;

export const ButtonConfirm = styled.button`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    font-size: 12px;
    line-height: 1.16;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: rgba(82, 85, 95, 0.7);
    padding: 12px 30px;
    border: 2px solid white;
    border-radius: 16px;
  }
`;
export const ButtonBackText = styled.span`
  /* @media screen and (min-width: 768px) { */
  @media screen and (min-width: 320px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-left: 15px;
    display: block;
  }
`;

export const PreBox = styled.div`
  padding-top: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 40px;
    padding-bottom: 32px;
  }
`;
export const Box = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    width: calc((100% / 3) * 2);
    justify-content: space-between;
    align-items: center;
  }
`;

export const Balance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const BalanceText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
  color: rgba(82, 85, 95, 0.7);
  padding-top: 32px;
  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin: 0;
    padding-left: 33px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 15px;
  }
`;

export const BalanceAmounth = styled.p`
  padding: 15px 29px;
  border: 2px solid white;
  border-radius: 20px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  width: 183px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 12px 0;
    width: 123px;
    border-radius: 16px;
  }
`;
