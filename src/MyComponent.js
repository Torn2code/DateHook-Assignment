import React from 'react';
import useDate from './useDate'; // Make sure the path is correct

function MyComponent() {
  const { date, setDate, addDays, addMonths } = useDate(new Date());

  const handleAddDayClick = () => {
    addDays(1); // Will add one day to the date
  };

  const handleAddMonthClick = () => {
    addMonths(1); // Will add one month to the date
  };

  return (
    <div>
      <p>Date: {date.toDateString()}</p>
      <button onClick={handleAddDayClick}>Add Day</button>
      <button onClick={handleAddMonthClick}>Add Month</button>
    </div>
  );
}

export default MyComponent;
