import {
  SliderBox,
  SliderText,
} from './Slider.styled';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { monthNames, getMonth, getYear } from './SliderUtils';
import { Calendar } from './Calendar/Calendar';
import { ButtonsNextPrev } from './ButtonsNextPrev/ButtonsNextPrev';


export const Slider = () => {
  const [monthNumber, setMonthNumber] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [modalCalendar, setModalCalendar]=useState(false)

  useEffect(() => {
    setMonthNumber(getMonth());
    setMonth(monthNames[getMonth()]);
    setYear(getYear());
  }, []);
  useEffect(() => {
    setMonth(monthNames[monthNumber]);
  }, [monthNumber]);

  const handlerClick = (name) => {
    switch (name) {
      case 'decrement':
        setMonthNumber(monthNumber - 1);
        if (monthNumber === 0) {
          setMonthNumber(11);
          setYear(year - 1);
        }
        break;
      case 'increment':
        setMonthNumber(monthNumber + 1);
        if (monthNumber === 11) {
          setMonthNumber(0);
          setYear(year + 1);
        }
        break;
      default:
        return;
    }
  };
  
const handleModalCalendar = () =>{
  setModalCalendar(modalCalendar=>!modalCalendar)
}

const handleCalendar = (name) => {
  switch (name) {
    case 'decrement':
        setYear(year - 1);
      break;
    case 'increment':
        setYear(year + 1);
      break;
    default:
      setMonthNumber(name)
      return;
  }
}

  return (
    <SliderBox>
      <p>Current period:</p>
      <ButtonsNextPrev onButtonClick={handlerClick}>
      <SliderText onClick={handleModalCalendar}>{month} {year}</SliderText>
      </ButtonsNextPrev>
      {modalCalendar && <Calendar currentYear={year} currentMonth={month} onChangeDate={handleCalendar} onClose={handleModalCalendar}/>}
    </SliderBox>
  );
};
