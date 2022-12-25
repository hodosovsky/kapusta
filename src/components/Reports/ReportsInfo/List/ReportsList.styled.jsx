import styled from 'styled-components';
import bgcForSvg from '../../../../images/reportsFiles/bgcForSvg.png';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0%;
  padding: 0;
  &.incomeList{
    gap: 20px;
    align-items: center;
    justify-content: center ;
  }
`;

export const Item = styled.li`
  flex-grow: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 20px) / 3);
  margin: 0%;
  padding: 20px 0;
  gap: 5px;
  border-bottom: 1px solid black;

  &.active {
    fill: #ff751d;
  }

  @media screen and (min-width: 768px) {
    border: none;
    width: calc((100% - 64px) / 6);
  }
  &.income{
    max-width: 90px;
    flex-grow: 0;
  }
`;
export const ItemIncome  = styled.li`
flex-grow: 1;
display: flex;
text-align: center;
flex-direction: column;
justify-content: center;
align-items: center;
width: calc((100% - 20px) / 3);
margin: 0%;
padding: 20px 0;
gap: 5px;
border-bottom: 1px solid black;

&.active {
  fill: #ff751d;
}

@media screen and (min-width: 768px) {
  border: none;
  width: calc((100% - 64px) / 6);
}

  max-width: 90px;
  flex-grow: 0;

`;

export const ItemSvg = styled.svg`
  background-image: url(${bgcForSvg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 56px 46px;
`;
