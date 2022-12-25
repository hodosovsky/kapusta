import styled from 'styled-components';

export const StyledContainerDiv = styled.div`
  width: 320px;
  margin: 0px auto;
  /* padding: 0px 20px; */

  @media screen and (min-width: 768px) {
    width: 768px;
    /* padding: 0px 32px; */
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    /* padding: 0px 16px; */
  }
`;
