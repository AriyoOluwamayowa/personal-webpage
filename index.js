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
document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = `Current Day: ${getCurrentDayOfWeek()}`;

function getCurrentUTCTimeInMilliseconds() {
  const utcTimeMilliseconds = new Date().getTime();
  return utcTimeMilliseconds;
}
function displayCurrentUTCTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const currentUTCTime = getCurrentUTCTimeInMilliseconds();
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC Time: ${getCurrentUTCTimeInMilliseconds()}`;
}
displayCurrentUTCTime();
setInterval(displayCurrentUTCTime, 1000);
