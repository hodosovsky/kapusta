import {
    ButtonBox,
    Button,
    // SliderSvg,
  } from './ButtonsNextPrev.styled';
  import reports from '../../../../../images/reportsFiles/reports.svg';

export const ButtonsNextPrev = ({onButtonClick, children}) =>{

    const handlerClick = event => {
        const name = event.currentTarget.name;
             onButtonClick(name)
      };

    return(
        <ButtonBox>
        <Button name="decrement" onClick={handlerClick}>
          <svg width="6" height="12">
            <use href={`${reports}#icon-prev`}></use>
          </svg>
        </Button>
            {children}
        <Button name="increment" onClick={handlerClick}>
          <svg width="6" height="12">
            <use href={`${reports}#icon-next`}></use>
          </svg>
        </Button>
      </ButtonBox>
    )
}