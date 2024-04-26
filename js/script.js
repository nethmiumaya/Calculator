document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".buttons button");

  let currentInput = "";
  let previousInput = "";
  let operator = "";

  function updateDisplay() {
    display.value = currentInput;
  }

  function clear() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
  }

  function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  }

  function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      case "%":
        result = prev % current;
        break;
      default:
        return;
    }
    currentInput = result.toString();
    previousInput = "";
    operator = "";
    updateDisplay();
  }

  function handleButtonClick(event) {
    const clickedButtonValue = event.target.dataset.value;

    if (!isNaN(clickedButtonValue) || clickedButtonValue === ".") {
      currentInput += clickedButtonValue;
    } else if (clickedButtonValue === "AC") {
      clear();
    } else if (clickedButtonValue === "DEL") {
      deleteLast();
    } else if (clickedButtonValue === "=") {
      if (previousInput && operator && currentInput) {
        calculate();
      }
    } else {
      if (previousInput && operator && currentInput) {
        calculate();
      }
      previousInput = currentInput;
      operator = clickedButtonValue;
      currentInput = "";
    }

    updateDisplay();
  }

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
});
