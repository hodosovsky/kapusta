import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledformRegister = styled.div`
  /* position: absolute;
  left: 763px;
  top: 173px;
  transform: translate(-50%, 0);
  z-index: 1; */
  display: flex;
  flex-direction: column;
  padding: 56px 84px 56px 84px;
  width: 426px;
  min-height: 552px;
  background-color: #fff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
`;

export const StyledpromtText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.04em;
  color: #52555f;
  margin-bottom: 20px;
`;

export const Styledlabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const StyledLinkbtnGoogle = styled.a`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: #f6f7fb;
  border-radius: 26px;
  border: 0;
  width: 119px;
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
`;

export const StyledlabelText = styled.span`
  margin-bottom: 12px;
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: black;
`;

export const StyledformInput = styled.input`
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #f6f7fb;
  padding: 20px 17px;
`;

export const StyledcontainerButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavlink = styled(NavLink)`
  width: 122px;
  height: 44px;
  background-color: #f5f6fb;
  border-radius: 16px;
  border: none;
  padding: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  box-shadow: #52555f;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #52555f;
  background-color: #f5f6fb;

  text-decoration: none;
  &.active {
    color: #ffffff;
    background-color: #ff751d;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #52555f;
    background-color: #f5f6fb;
  }
`;
