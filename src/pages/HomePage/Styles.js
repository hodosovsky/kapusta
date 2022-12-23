import styled from 'styled-components';

export const StyledHomePage = styled.div`
  width: 320px;
  padding: 46px 0 40px 0;
  margin: 0 auto;
  background-color: #f5f6fb;
  border-radius: 0 0 0 112px;

  .reportsBtn {
    display: block;
    margin-bottom: 45px;

    text-align: center;
    text-decoration: none;
    color: rgba(82, 85, 95, 0.7);
    :hover,
    :focus {
      color: #ff751d;
    }
    :hover .reportsIcon,
    :focus .reportsIcon {
      fill: #ff751d;
    }
  }

  .reportsIcon {
    margin-left: 20px;
    width: 14px;
    height: 14px;
    fill: #52555f;
  }
  .transactionsBtnWrap {
    position: absolute;
    bottom: 0;
    display: flex;
    gap: 4px;
  }
  .transactionsBtn {
    display: block;
    width: 158px;
    padding: 20px 0;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: #000000;
    font-weight: 700;
    background-color: #f5f6fb;
    :hover,
    :focus {
      color: #ffffff;
      background-color: #ff751d;
    }
  }
`;
