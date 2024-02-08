//moment().tz('America/Los_Angeles').format('dddd :m')
// prints 'Wednesday :12'
//to find all the timezones from the console:
//moment.tz.names()
//to have moment.js guess local timezone from the console:
//moment.tz.guess()

let tokyoElement = document.querySelector("#tokyo");
let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY hh:mm a");
tokyoElement.innerHTML = tokyoTime;

let localElement = document.querySelector("#local");
let localTime = moment.tz.guess();
localElement.innerHTML = `Your local timezone is: ${localTime} and the current time is ${moment().format(
  "hh:mm A"
)}!`;
