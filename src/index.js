// index.js

document.addEventListener("DOMContentLoaded", function () {
  const dateDisplay = document.getElementById("date-display");
  const addDayButton = document.getElementById("add-day-btn");
  const addMonthButton = document.getElementById("add-month-btn");

  // Initialize the date
  const currentDate = new Date();
  dateDisplay.textContent = currentDate.toDateString();

  addDayButton.addEventListener("click", function () {
    // Add 1 day
    currentDate.setDate(currentDate.getDate() + 1);
    dateDisplay.textContent = currentDate.toDateString();
  });

  addMonthButton.addEventListener("click", function () {
    // Add 1 month
    currentDate.setMonth(currentDate.getMonth() + 1);
    dateDisplay.textContent = currentDate.toDateString();
  });
});
