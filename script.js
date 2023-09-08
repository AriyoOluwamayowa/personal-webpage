document.addEventListener("DOMContentLoaded", function () {
  // Function to get the current UTC time in milliseconds
  function getCurrentUTCTimeInMilliseconds() {
    const currentTime = new Date();
    return currentTime.getTime();
  }

  // Function to update the page elements
  function updatePageElements() {
    const currentUTCTimeInMilliseconds = getCurrentUTCTimeInMilliseconds();
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent =
      "Week Day: " + getCurrentDayOfWeek();
    document.querySelector("[data-testid='currentUTCTime']").textContent =
      " UTC Time: " + currentUTCTimeInMilliseconds;
  }

  // Function to get the current day of the week
  function getCurrentDayOfWeek() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
  }

  updatePageElements();

  e;
  setInterval(updatePageElements, 60000);
});
