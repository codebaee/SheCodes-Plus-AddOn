//challenge 1 - import moment.js and moment time zone
//I imported both moment.js and moment timezone in script tags into the head of my html file.

//challenge 2 - Display the current date and time
//in Honolulu, Hawaii as
//"It is Saturday, October 8, 2023 12:42 AM in Honolulu, Hawaii"
let hawaiiToday = moment().tz("US/Hawaii").format("dddd, MMMM, YYYY hh:mm A ");
let hawaiiHonolulu = "Honolulu, Hawaii";
let hawaiiDateElement = document.querySelector("#current-date");
hawaiiDateElement.innerHTML = `It is ${hawaiiToday} in ${hawaiiHonolulu}`;

//challenge 3 - Display the date and time here 10 years
//from now in Paris, France following this format "10 years from now,
//it will be Friday, October 8, 2033 11:43 AM in Paris France"
let parisToday = moment()
  .add(10, "years")
  .tz("Europe/Paris")
  .format("dddd, MMMM, YYYY hh:mm A ");
let parisFrance = "Paris France";
let parisFutureElement = document.querySelector("#future-date");
parisFutureElement.innerHTML = `10 years from now, it will be ${parisToday} in ${parisFrance}.`;

//challenge 4 - Display the local timezone
let localTime = moment.tz.guess();
let localTimeElement = document.querySelector("#local-time-zone");
localTimeElement.innerHTML = localTime;
