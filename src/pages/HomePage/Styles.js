import styled from 'styled-components';

export const StyledHomePage = styled.div`
  padding: 46px 0px 40px 0px;
  margin: 0 auto;
  background-color: #f5f6fb;
  border-radius: 0 0 0 112px;
  .flexWrapper {
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
  }
`;
