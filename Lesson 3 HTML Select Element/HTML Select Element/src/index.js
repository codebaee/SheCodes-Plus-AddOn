function showSelectedCountry(event) {
  if (event.target.value.length > 0) {
    // console.log(event.target.value);
    // alert(event.target.value);
    if (event.target.value === "france") {
      alert("Bonjour!");
    }
    if (event.target.value === "Japan") {
      alert("Kon'nichiwa! / こんにちは");
    }
    if (event.target.value === "united-states") {
      alert("Hey!");
    }
    if (event.target.value === "italy") {
      alert("Ciao");
    }
    if (event.target.value === "brazil") {
      alert("olá");
    }
  }
}

let countriesSelect = document.querySelector("#countries");

countriesSelect.addEventListener("change", showSelectedCountry);
