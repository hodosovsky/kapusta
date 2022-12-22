import styled from "styled-components";

export const SliderBox = styled.div`
  padding-top: 16px;
  text-align: center;

  @media screen and (min-width: 768px){
  padding-top: 0;
  }
`
export const Sliderr = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`
export const SliderButton = styled.button`
  background-color: transparent;
  border: transparent;
  padding: 0%;
  padding-top: 4px;
`
export const SliderText = styled.p`
   font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 0 5px;
  
  color: #000000;

`
export const SliderSvg = styled.svg`
  padding-top: 2px;
`