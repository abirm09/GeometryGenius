//get first input value
function getFirstInput(event) {
  const inputValueString =
    event.target.parentNode.parentNode.children[0].children[2].children[0]
      .value;
  const inputValue = parseFloat(inputValueString);
  event.target.parentNode.parentNode.children[0].children[2].children[0].value =
    "";
  return inputValue;
}
//get first Second value
function getSecondInput(event) {
  const inputValueString =
    event.target.parentNode.parentNode.children[0].children[2].children[2]
      .value;
  const inputValue = parseFloat(inputValueString);
  event.target.parentNode.parentNode.children[0].children[2].children[2].value =
    "";
  return inputValue;
}
// get the formula value and precision with 2
function makeFormulaValuePrecision(formula) {
  const resultString = formula.toFixed(2);
  const result = parseFloat(resultString);
  return result;
}

//create Result List and append
function createResultList(event, result, serial) {
  const formulaName =
    event.target.parentNode.parentNode.children[0].children[0].innerText;
  const newList = document.createElement("li");
  newList.innerHTML = `
  <li class="flex justify-between"><span>${serial}. <span> ${formulaName}</span></span> <span>${result}cm<sup>2</sup></span> <span
                    class="py-1 px-3 rounded-md bg-sky-500 select-none cursor-pointer text-sm text-white">Covert to
                    m<sup>2</sup></span>
            </li>
  `;
  document.getElementById("result-list").appendChild(newList);
}
