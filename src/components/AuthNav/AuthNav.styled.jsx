import styled from 'styled-components';

export const StyledAuthNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledLoginLabel = styled.div`
  padding: 9px 12px;
  font-size: 12px;
  line-height: 1.17;
  font-weight: 700;
  color: #52555f;
  background-color: #f5f6fa;
  border-radius: 50%;
`;

export const StyledLoginName = styled.p`
  display: none;
  margin: 0;
  padding: 0;
  font-size: 12px;
  line-height: 1.17;
  color: #52555f;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const StyledLogoutImg = styled.img`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledVerticalLine = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 1px;
    height: 36px;
    background-color: #e0e5eb;
  }
`;

export const StyledExitButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    cursor: pointer;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    font-size: 12px;
    line-height: 1.17;
    color: #52555f;
  }
`;
