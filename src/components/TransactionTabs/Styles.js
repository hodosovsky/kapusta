import styled from 'styled-components';

export const StyledTabsMobile = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 4px;
  background-color: #ffffff;

  .TabMobile {
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

export const StyledTabsDesktop = styled.div`
  display: flex;

  .TabDesktop {
    display: block;
    width: 138px;
    padding: 20px 0;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: #000000;
    font-weight: 700;
    background-color: #fafbfd;
    border-radius: 18px 18px 0 0;
    :hover,
    :focus {
      color: #ff751d;
      background-color: #fefefe;
    }
    &.active {
    color: #ff751d;
    background-color: #fefefe;
    }
  }
`;