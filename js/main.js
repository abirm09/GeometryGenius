//calculation functions
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
// parallelogram calculation
document
  .getElementById("parallelogram")
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

//rhombus calculation
document.getElementById("rhombus").addEventListener("click", function (event) {
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

//pentagon calculation
document.getElementById("pentagon").addEventListener("click", function (event) {
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
//ellipse calculation

document.getElementById("ellipse").addEventListener("click", function (event) {
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
  const formula = 3.14 * firstInput * secondInput;
  //get fixed formula ans
  const result = makeFormulaValuePrecision(formula);
  //create Result List and append
  createResultList(event, result, serial);
});

// ended calculation functions
const cardElements = document.getElementsByClassName("card");
for (let card of cardElements) {
  card.addEventListener("mouseover", function (event) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = randomColor;
  });
}
