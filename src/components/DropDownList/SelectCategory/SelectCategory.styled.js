import styled from '@emotion/styled';

export const Category = styled.div`
  position: relative;

  /* margin-left: 20px;
  margin-right: 20px; */

  @media screen and (min-width: 768px) {
    height: 44px;
  }
`;

export const Wrap = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 280px;
  height: 44px;

  padding: 2px 20px;
  /* margin-bottom: 32px; */

  border: 2px solid #ffffff;
  border-bottom-right-radius: 20px;

  background-color: #f5f6fb;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 186px;

    border-radius: 0;
    border-color: #f5f6fb;

    background-color: #ffffff;
  }

  @media screen and (min-width: 1280px) {
    width: 169px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.16;
    letter-spacing: 0.02em;

    color: #c7ccdc;
  }

  img {
    position: absolute;
    top: 17px;
    right: 20px;
  }
`;

export const SelectBody = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  /* margin-bottom: 32px; */

  width: 280px;

  border: 2px solid #f5f6fb;
  border-bottom-right-radius: 20px;

  background-color: #fff;
  box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);

  @media screen and (min-width: 768px) {
    width: 186px;
    border-radius: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 169px;
  }
`;

export const Element = styled.div`
  display: flex;
  align-items: center;

  padding: 8px 20px;
  height: 32px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;

  cursor: pointer;
  color: #c7ccdc;

  &:hover {
    color: #52555f;
    background-color: #f5f6fb;
  }
`;
