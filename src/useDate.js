import { useState } from 'react';

// Custom hook for managing dates
function useDate(initialDate) {
  const [date, setDate] = useState(initialDate);

  // Function to add days to the date
  function addDays(daysToAdd) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + daysToAdd);
    setDate(newDate);
  }

  // Function to add months to the date
  function addMonths(monthsToAdd) {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + monthsToAdd);
    setDate(newDate);
  }

  return {
    date,
    setDate,
    addDays,
    addMonths,
  };
}

export default useDate;
