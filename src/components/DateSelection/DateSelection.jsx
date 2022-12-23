import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { StyledDatePicker } from './Styles';
import { ReactComponent as Calendar } from './calendar.svg';


import 'react-datepicker/dist/react-datepicker.css';

const DateSelection = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
		<StyledDatePicker>
			<Calendar className='icon' />
      <DatePicker
        className="datePicker"
        selected={startDate}
        dateFormat="dd.MM.yyyy"
        onChange={date => setStartDate(date)}
      />
    </StyledDatePicker>
  );
};

export default DateSelection;
