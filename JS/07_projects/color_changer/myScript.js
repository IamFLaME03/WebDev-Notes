const box = document.querySelectorAll(".box");
const body = document.querySelector("body");

// console.log(box)
// console.log(body)
box.forEach(function (box) {
  // console.log(box.className);
  box.addEventListener("click", function (e) {
    // console.log(e.taget)
    if (e.target.id === "whitesmoke") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "violet") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "aqua") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
