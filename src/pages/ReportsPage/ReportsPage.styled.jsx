import styled from 'styled-components';
import backgroundMobile from '../../images/reportsFiles/backgroundMobile.png';
import backgroundTablet from '../../images/reportsFiles/backgroundTablet.png';
import backgroundDesktop from '../../images/reportsFiles/backgroundDesktop.png';
import backGroundDiagram from '../../images/reportsFiles/backGroundDiagram.png';
import backgroundTableTabl from '../../images/reportsFiles/backgroundTableTabl.png';
export const BoxBg = styled.div`
  background-image: url(${backgroundMobile});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    /* margin: 0 32px; */
    padding: 0 32px;
    background-image: url(${backgroundTablet}), url(${backgroundTableTabl});
    background-size: 100%, 30%;
    background-position: top, bottom 0px right 88px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 123px;
    background-image: url(${backgroundDesktop}), url(${backGroundDiagram});
    background-size: 100%;
    background-position: top, bottom;
  }
`;
