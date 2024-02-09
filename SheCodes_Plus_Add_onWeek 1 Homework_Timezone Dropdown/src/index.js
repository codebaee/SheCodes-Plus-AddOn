function showCityDate(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM Do, YYYY hh:mm A");

    let parisTime = alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", showCityDate);
