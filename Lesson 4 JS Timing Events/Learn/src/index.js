function sayHello() {
  let helloBox = document.querySelector("#hello");
  helloBox.innerHTML = "Hola! 🙋🏽‍♀️";
}

function displayDate() {
  let date = document.querySelector("#date");
  date.innerHTML = new Date();
}
//setTimeout will create a delay. Below 3000 = 3 seconds
setTimeout(sayHello, 3000);
//setInterval will repeat. Below 1000 = 1 second
setInterval(displayDate, 1000);
