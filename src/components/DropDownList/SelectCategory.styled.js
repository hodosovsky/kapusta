import styled from '@emotion/styled';

export const Category = styled.div`
  position: relative;
  margin-top: -1px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: -1px;
    height: 44px;
  }
`;

export const Wrap = styled.div`
  padding: 2px 20px;
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  height: 44px;
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
    line-height: 14px;
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
  right: 0;
  width: 280px;
  background-color: #fff;
  border: 2px solid #f5f6fb;
  border-bottom-right-radius: 20px;
  box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);

  div {
    padding: 8px 20px;
    height: 32px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    cursor: pointer;
    color: #c7ccdc;
  }
  div:hover {
    color: #52555f;
    background-color: #f5f6fb;
  }

  @media screen and (min-width: 768px) {
    width: 186px;
    border-radius: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 169px;
  }
`;
