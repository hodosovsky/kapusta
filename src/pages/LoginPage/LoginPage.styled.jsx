import styled from 'styled-components';
import { HandySvg } from 'handy-svg';

export const StyledLoginPage = styled.div``;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 342px;
  background-image: ${props => `url(${props.imgMobUrl})`};
  background-repeat: no-repeat;
  padding-top: 86px;

  @media screen and (min-width: 768px) {
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
    height: 582px;
    background-image: ${props => `url(${props.imgTabUrl})`};
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
    width: 1280px;
    height: 582px;
    background-image: ${props => `url(${props.imgDeskUrl})`};
    background-repeat: no-repeat;
  }
`;

export const KapustaMobTop = styled(HandySvg)`
  position: absolute;
  top: 160px;
  right: -34px;
  transform: rotate(-180deg);
`;

export const KapustaMobBottom = styled(HandySvg)`
  position: absolute;
  top: 767px;
  left: 35px;
`;

export const KapustaTabBotLeft = styled(HandySvg)`
  position: absolute;
  top: 870px;
  left: 103px;
  z-index: -1;

  @media screen and (min-width: 1280px) {
    top: 700px;
    left: 230px;
  }
`;

export const KapustaTabBotRight = styled(HandySvg)`
  position: absolute;
  top: 841px;
  left: 197px;
  z-index: -1;
  transform: rotate(-90deg);

  @media screen and (min-width: 1280px) {
    top: 680px;
    left: 324px;
  }
`;

export const ShadowTabBotLeft = styled(HandySvg)`
  position: absolute;
  top: 954px;
  left: 108px;

  @media screen and (min-width: 1280px) {
    top: 770px;
    left: 230px;
  }
`;

export const ShadowTabBotRight = styled(HandySvg)`
  position: absolute;
  top: 938px;
  left: 219px;

  @media screen and (min-width: 1280px) {
    top: 750px;
    left: 340px;
  }
`;

export const Image = styled.img`
  width: 183px;
  height: 47px;
  margin-bottom: 5px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: 307px;
    height: 78px;
  }

  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
  }
`;

export const Text = styled.p`
  width: 141px;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.15;
  letter-spacing: 0.15em;
  z-index: 2;

  color: #52555f;

  @media screen and (min-width: 768px) {
    width: 162px;
    margin-bottom: 80px;
    font-size: 16px;
    line-height: 1.18;
    letter-spacing: 0.18em;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const TextWrap = styled.div`
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -110px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 0;
    margin-right: 157px;
  }
`;
