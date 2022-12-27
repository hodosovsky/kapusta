import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto 50px;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    align-items: baseline;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }

  .title {
    color: rgba(82, 85, 95, 0.7);
    margin-bottom: 8px;
    font-size: 12px;
    line-height: calc(14 / 12);
    font-weight: 500;
    text-align: center;
  }
  .inputTag {
    font-weight: 700;
    width: 140px;
    padding: 12px 18px;
    color: #52555f;
    text-align: right;
    border: 2px solid white;
    border-radius: 22px 0 0 22px;
    outline: none;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    :focus {
      background-color: #fff;
    }

    &::placeholder {
      color: #000;
      letter-spacing: 0.02em;
      font-weight: 700;
      font-size: 12px;
      line-height: 1.17;
    }

    @media screen and (min-width: 768px) {
      width: 125px;
      padding: 12px 20px;
      border-radius: 16px;
    }
  }
  .btn {
    width: 140px;
    padding: 12px 18px;
    color: rgba(82, 85, 95, 0.7);
    text-align: left;
    text-transform: uppercase;
    border: 2px solid white;
    border-left: none;
    border-radius: 0 22px 22px 0;
    outline: none;
    :hover,
    :focus {
      color: white;
      background-color: #ff751d;
      border-color: #ff751d;
    }
    @media screen and (min-width: 768px) {
      width: 125px;
      padding: 12px 6px;
      border-radius: 16px;
      text-align: center;
      border-left: 2px solid white;
    }
  }
`;
