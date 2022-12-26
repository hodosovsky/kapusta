import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;

  @media screen and (min-width: 768px) {
    padding: 13px 32px;
  }
`;
