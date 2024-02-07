function alertFruitNow(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "red") {
      alert("❣");
    }
    if (event.target.value === "blue") {
      alert("💙");
    }
    if (event.target.value === "yellow") {
      alert("💛");
    }
  }
}

let fruitSelection = document.querySelector("#fruitSelection");
fruitSelection.addEventListener("change", alertFruitNow);
