
import { monthNames } from "../SliderUtils"
import { ButtonsNextPrev } from "../ButtonsNextPrev/ButtonsNextPrev"
import { Month, Year, CalendarBox, Backdrop } from './Calendar.styled'
import { useEffect } from "react"

export const Calendar = ({onClose, currentMonth, currentYear, onChangeDate})=>{

const handleYear = (name)=>{
onChangeDate(name)
}
const handleMonth = (event)=>{
const choosedMonth = event.currentTarget.textContent
const name = monthNames.indexOf(choosedMonth)
onChangeDate(name)
}

useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return ()=>{
       window.removeEventListener('keydown', handleKeyDown);
    }
  });

const handleBackdrop = (event) =>{
    if (event.target === event.currentTarget) {
        onClose();
      }
}
const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

return(
    <Backdrop onClick={handleBackdrop}>
    <CalendarBox>
        <ButtonsNextPrev onButtonClick={handleYear}> <Year>{currentYear}</Year></ButtonsNextPrev>
       
        <ul>
       { monthNames.map(el=>{
        return( 
            <Month className={el === currentMonth ?  'active' : ''} onClick={handleMonth} key={el}>{el}</Month>
        )
       })}
        </ul>
    </CalendarBox>
    </Backdrop>
)
}