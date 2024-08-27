const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const msg = document.querySelector(".msg");
  msg.innerHTML = "";

  if (height <= 0 || isNaN(height) || height === "") {
    msg.appendChild(document.createTextNode("Invalid Height Submitted!!"));
  } else if (weight <= 0 || isNaN(weight) || weight === "") {
    msg.appendChild(document.createTextNode("Invalid Weight Submitted!!"));
  } else {
    const res = (weight / ((height * height) / 10000)).toFixed(2);
    msg.appendChild(document.createTextNode(`Your BMI = ${res}  `));
    //new div for display Guide result
    const dv = document.createElement("div")
    if (res < 18.6) {
      dv.appendChild(document.createTextNode(`You are Under weight`));
    } else if (res >= 18.6 && res <= 24.9) {
      dv.appendChild(document.createTextNode(`Your BMI is normal`));
    } else {
      dv.appendChild(document.createTextNode(`You are Over weight`));
    }
    msg.appendChild(dv)
  }
});
