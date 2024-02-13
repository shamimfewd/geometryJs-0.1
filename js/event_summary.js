function handleClick() {
  const textDefault = document.getElementById("defaultText");
  textDefault.innerText = "Handled by function";
}

const listener = document
  .getElementById("event-lisenter")
  .addEventListener("click", function () {
    const handleClick = document.getElementById("defaultText");
    handleClick.innerText = "text updated by add Eventlistener button";
  });

document.getElementById("update_button").addEventListener("click", function () {
  const inputField = document.getElementById("input_fild");
  const input_text = inputField.value;

  const p = document.getElementById("inputValue");
  p.innerText = input_text;
  inputField.value = "";
});

// ==================================


