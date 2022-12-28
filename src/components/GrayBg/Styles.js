import styled from 'styled-components';

export const StyledBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 56px;
  margin: 0 auto;
  width: 320px;
  height: 296px;
  background-color: #f5f6fb;
  border-radius: 0 0 0 112px;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 527px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
