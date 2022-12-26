import styled from 'styled-components';
import { HandySvg } from 'handy-svg';

export const StyledLoginPage = styled.div`
  margin: auto auto;
`;

export const Background = styled.div`
  width: 320px;
  height: 342px;
  background-image: ${props => `url(${props.imgMobUrl})`};
  background-repeat: no-repeat;
  padding-top: 86px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
    height: 582px;
    background-image: ${props => `url(${props.imgTabUrl})`};
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 32px;
    padding-right: 32px;
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

  @media screen and (min-width: 1280px) {
    top: 700px;
    left: 230px;
  }
`;

export const KapustaTabBotRight = styled(HandySvg)`
  position: absolute;
  top: 841px;
  left: 197px;
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
  position: absolute;
  width: 183px;
  height: 47px;

  @media screen and (min-width: 768px) {
    width: 307px;
    height: 78px;
    margin-left: 171px;
  }

  @media screen and (min-width: 1280px) {
    top: 365px;
    width: 377px;
    height: 120px;
  }
`;

export const Text = styled.p`
  position: absolute;
  top: 193px;
  text-transform: uppercase;
  margin-top: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.15;
  letter-spacing: 0.15em;

  color: #52555f;

  @media screen and (min-width: 768px) {
    top: 218px;
    font-size: 16px;
    line-height: 1.18;
    letter-spacing: 0.18em;
    margin-left: 225px;
  }

  @media screen and (min-width: 1280px) {
    top: 485px;
  }
`;
