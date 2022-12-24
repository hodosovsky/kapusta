import { SliderBox, SliderText } from './Slider.styled';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { monthNames, getMonth, getYear } from './SliderUtils';
import { Calendar } from './Calendar/Calendar';
import { ButtonsNextPrev } from './ButtonsNextPrev/ButtonsNextPrev';

import { useDispatch } from 'react-redux';
import { getReports } from 'redux/reports/operations';
import { reportsQueryAction } from 'redux/reportsQuery/reportsQuery.slice';

export const Slider = () => {
  const [monthNumber, setMonthNumber] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [modalCalendar, setModalCalendar] = useState(false);
  const [reports] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setMonthNumber(getMonth());
    setMonth(monthNames[getMonth()]);
    setYear(getYear());
  }, []);

  useEffect(() => {
    setMonth(monthNames[monthNumber]);
    let monthString = '';

    if (monthNumber + 1 < 10) {
      monthString = '0' + (monthNumber + 1);
    } else {
      monthString = monthNumber + 1;
    }
    dispatch(reportsQueryAction(`${year}-${monthString}`));
    dispatch(getReports(`${year}-${monthString}`));
    // getPeriodDataAPI(`${year}-${monthString}`).then(data => {
    //   setReports(data);
    // });
  }, [monthNumber, year, dispatch]);
  console.log(reports);
  const handlerClick = name => {
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

  const handleModalCalendar = () => {
    setModalCalendar(modalCalendar => !modalCalendar);
  };

  const handleCalendar = name => {
    switch (name) {
      case 'decrement':
        setYear(year - 1);
        break;
      case 'increment':
        setYear(year + 1);
        break;
      default:
        setMonthNumber(name);
        return;
    }
  };

  return (
    <SliderBox>
      <p>Current period:</p>
      <ButtonsNextPrev onButtonClick={handlerClick}>
        <SliderText onClick={handleModalCalendar}>
          {month} {year}
        </SliderText>
      </ButtonsNextPrev>
      {modalCalendar && (
        <Calendar
          currentYear={year}
          currentMonth={month}
          onChangeDate={handleCalendar}
          onClose={handleModalCalendar}
        />
      )}
    </SliderBox>
  );
};
