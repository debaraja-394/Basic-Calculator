document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("screen");
  const buttons = document.querySelectorAll(".button");
  let currentInput = "";
  let operator = "";
  let operand1 = "";
  let operand2 = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.textContent;

      if (value === "C") {
        currentInput = "";
        operator = "";
        operand1 = "";
        operand2 = "";
        display.value = "0";
      } else if (["+", "-", "*", "/"].includes(value)) {
        operand1 = currentInput;
        operator = value;
        currentInput = "";
      } else if (value === "=") {
        operand2 = currentInput;
        currentInput = calculate(operand1, operand2, operator);
        display.value = currentInput;
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });

  function calculate(operand1, operand2, operator) {
    switch (operator) {
      case "+":
        return String(parseFloat(operand1) + parseFloat(operand2));
      case "-":
        return String(parseFloat(operand1) - parseFloat(operand2));
      case "*":
        return String(parseFloat(operand1) * parseFloat(operand2));
      case "/":
        return String(parseFloat(operand1) / parseFloat(operand2));
      default:
        return "0";
    }
  }
});
