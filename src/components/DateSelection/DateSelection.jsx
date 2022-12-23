import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { StyledDatePicker } from './Styles';
import { ReactComponent as Calendar } from './calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelection = () => {
	const [startDate, setStartDate] = useState(new Date());
	 const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
     <button
       className="example-custom-input datePicker"
       onClick={onClick}
       ref={ref}
     >
       <Calendar className="calendarIcon" />
       {value}
     </button>
   ));
  return (
    <StyledDatePicker>

      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </StyledDatePicker>
  );
};

export default DateSelection;
