// triangle calculation
let serial = 0;
document.getElementById("triangle").addEventListener("click", function (event) {
  const firstInput = getFirstInput(event);
  const secondInput = getSecondInput(event);
  if (isNaN(firstInput) || isNaN(secondInput)) {
    alert("Please check your input again.Provide a number.Thanks...");
    return;
  } else if (firstInput <= 1 || secondInput <= 1) {
    alert("Please provide a positive number.");
    return;
  }
  serial++;
  //display input value one
  displayValueOne(event, firstInput);
  //display input value Two
  displayValueTwo(event, secondInput);
  //main formula
  const formula = 0.5 * firstInput * secondInput;
  const resultString = formula.toFixed(2);
  const result = parseFloat(resultString);
  //create Result List and append
  createResultList(event, result, serial);
});
