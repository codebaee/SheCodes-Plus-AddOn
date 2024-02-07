//Challenge 1

function dateUpdate() {
  let dateDiv = document.querySelector("#date");
  dateDiv.innerHTML = new Date();
}
setTimeout(dateUpdate, 5000);
//Challenge 2

function dateMilli() {
  let millaSeconds = document.querySelector("#milliseconds");
  let currentDate = new Date();
  millaSeconds.innerHTML = currentDate.getMilliseconds();
}
setInterval(dateMilli, 1);
