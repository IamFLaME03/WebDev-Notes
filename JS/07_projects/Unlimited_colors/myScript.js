const start = document.querySelector("#start")
const stop = document.querySelector("#stop")


let intervalId;
start.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 500);
  }

  function changeBgColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
  }
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
