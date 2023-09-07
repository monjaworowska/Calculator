let screen = document.querySelector("#display");

function updateScreen(x) {
  if (x === "AC") {
    screen.value = "";
  } else if (x === "C") {
    screen.value = screen.value.slice(0, length - 1);
  } else screen.value += x;
}

function showResult() {
  screen.value = eval(screen.value);
}
