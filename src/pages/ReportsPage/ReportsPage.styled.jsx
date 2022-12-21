import styled from "styled-components";
import backgroundMobile from '../../images/reportsFiles/backgroundMobile.png'
import backgroundTablet from '../../images/reportsFiles/backgroundTablet.png'
import backgroundDesktop from '../../images/reportsFiles/backgroundDesktop.png'
export const BoxBg = styled.div`
    background-image: url(${backgroundMobile});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
padding: 0 20px;
  @media screen and (min-width: 768px) {
    /* margin: 0 32px; */
    padding: 0 32px;
    background-image: url(${backgroundTablet});
  }
  @media screen and (min-width: 1280px) {
    padding: 0 123px;
    background-image: url(${backgroundDesktop});
  }
  
`