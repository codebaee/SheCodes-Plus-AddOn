//challenge 1 - import moment.js
//I imported the moment.js cdn link into the head of my html file
//
//challenge 2 - display the current date here following this format: "Today is Wednesday, February 7, 2024"
let today = moment().format("dddd, MMMM D, YYYY");
let currentDateElement = document.querySelector("#current-date");
currentDateElement.innerHTML = `Today is ${today}`;
//
//
//challenge 3 - Display the date and time here 10 years from now follow this format "10 years from now, it will be Friday, October 8, 2033 11:43:32"
let future = moment().add(10, "years").format("dddd, MMMM D, YYYY hh:mm:ss");
let yearsFromNow = document.querySelector("#future-date");
yearsFromNow.innerHTML = `10 years from now, it will be ${future}`;
