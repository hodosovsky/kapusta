import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 280px;

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
    width: 100px;
    padding: 12px 18px;
    color: black;
    text-align: right;
    border: 2px solid white;
    border-radius: 22px 0 0 22px;
    outline: none;
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
  }
`;
