import { NavLink } from 'react-router-dom';
import { OrangeButton } from 'components/Buttons/OrangeButton';
import styled from 'styled-components';

export const StyledformRegister = styled.div`
  position: absolute;
  top: 255px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto auto;
  width: 280px;
  padding: 40px 20px;
  background-color: #fff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  transform: translate(-50%);

  @media screen and (min-width: 768px) {
    left: 50%;
    width: 426px;
    height: 552px;
    padding: 56px 84px;
    margin-top: 80px;
  }
  @media screen and (min-width: 1280px) {
    top: 174px;
    left: 900px;
    margin: 0;
    margin-right: 91px;
  }
`;

export const StyledpromtText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.04em;
  color: #52555f;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const StyledpromtText1 = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  text-align: left;
  letter-spacing: 0.04em;
  color: #52555f;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Styledlabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const StyledanimationGoogle = styled.div`
  text-align: center;
`;

export const LogInBtn = styled(OrangeButton)`
  width: 116px;
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
  padding: 10px 18px 10px 20px;
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
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  color: #000000;
`;

export const StyledformInput = styled.input`
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: #f6f7fb;
  padding: 17px 18px;
  width: 240px;

  @media screen and (min-width: 768px) {
    padding: 17px 20px 17px 20px;
    width: 259px;
    height: 52px;
  }
`;

export const StyledcontainerButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavlink = styled(NavLink)`
  width: 116px;
  height: 44px;
  background-color: #f5f6fb;
  border-radius: 16px;
  border: none;
  padding: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  box-shadow: #52555f;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;
  align-content: center;
  color: #52555f;
  background-color: #f5f6fb;

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
