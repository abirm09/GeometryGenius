// triangle calculation
let serial = 0;
document.getElementById("triangle").addEventListener("click", function (event) {
  const firstInput = getFirstInput(event);
  const secondInput = getSecondInput(event);
  //some validation
  if (isNaN(firstInput) || isNaN(secondInput)) {
    alert("Please check your input again.Provide a number.Thanks...");
    return;
  } else if (firstInput < 1 || secondInput < 1) {
    alert("Please provide a positive number.");
    return;
  }
  serial++;
  //main formula
  const formula = 0.5 * firstInput * secondInput;
  //get fixed formula ans
  const result = makeFormulaValuePrecision(formula);
  //create Result List and append
  createResultList(event, result, serial);
});
//rectangle calculation
document
  .getElementById("rectangle")
  .addEventListener("click", function (event) {
    const firstInput = getFirstInput(event);
    const secondInput = getSecondInput(event);
    //some validation
    if (isNaN(firstInput) || isNaN(secondInput)) {
      alert("Please check your input again.Provide a number.Thanks...");
      return;
    } else if (firstInput < 1 || secondInput < 1) {
      alert("Please provide a positive number.");
      return;
    }
    serial++;
    //main formula
    const formula = firstInput * secondInput;
    //get fixed formula ans
    const result = makeFormulaValuePrecision(formula);
    //create Result List and append
    createResultList(event, result, serial);
  });
