const increment_btn = document.getElementById("increment_btn");
const initial_value = document.getElementById("initial_value");
const decrement_btn = document.getElementById("decrement_btn");
const reset_btn = document.getElementById("reset_btn");

let incrementValue = 0;

increment_btn.addEventListener("click", function () {
  if (incrementValue === 15) {
    return alert("your target is full");
  }

  incrementValue += 1;
  initial_value.innerText = incrementValue;
});

decrement_btn.addEventListener("click", function () {
  if (incrementValue === 0) {
    return alert("minimum number is 0");
  }
  incrementValue = incrementValue - 1;
  initial_value.innerText = incrementValue;
});

reset_btn.addEventListener("click", function () {
  if (incrementValue > 0) {
    reset_btn.removeAttribute("disabled");
  } else {
    reset_btn.setAttribute("disabled", true);
  }
  // initial_value.innerText = 0;
  // incrementValue = 0;
});
