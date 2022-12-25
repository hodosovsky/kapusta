import styled from 'styled-components';

export const StyledFrame = styled.div`
  /* background-color: transparent; */

  @media screen and (min-width: 768px) {
    margin: 0px auto;
    padding: 24px 40px 42px;
    background-color: #fff;
    border-radius: 0px 30px 30px 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }

  @media screen and (min-width: 1280px) {
    padding: 32px 32px 61px;
    max-width: 1098px;
  }
`;

export const StyledTableAndSummaryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;
