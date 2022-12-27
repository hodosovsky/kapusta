import styled from '@emotion/styled';

export const NumberMobil = styled.div`
  display: flex;
  margin: 32px auto 0 auto;

  /* @media screen and (min-width: 768px) {
    display: none;
    margin: 0;
  } */
`;

export const InputMobile = styled.input`
  width: 125px;
  height: 44px;

  border: 2px solid #ffffff;
  border-bottom-left-radius: 22px;
  border-top-left-radius: 22px;

  text-align: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;

  outline: none;
  background-color: #f5f6fb;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 44px;

  border: 2px solid #ffffff;
  border-bottom-right-radius: 22px;
  border-top-right-radius: 22px;

  background-color: #f5f6fb;
`;

export const Number = styled.div`
  position: relative;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const InputNumber = styled.input`
  width: 108px;
  height: 44px;

  padding-left: 15px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  border: 2px solid #f5f6fb;
  border-bottom-right-radius: 22px;
  border-top-right-radius: 22px;

  outline: none;
  background-color: #ffffff;
  color: #000000;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    border-left: none;
  }

  @media screen and (min-width: 1280px) {
    width: 119px;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 12px;
  left: 75px;
`;
