const ball = document.getElementById("float-circle");
const resetButton = document.getElementById("button");

const up = () => {
  ball.style.bottom = "330px";
};

const down = () => {
  ball.style.bottom = "50px";
};

const resetPage = () => {
  location.reload();
};

document.addEventListener("keydown", up);
document.addEventListener("keyup", down);
document.addEventListener("click", resetPage);
