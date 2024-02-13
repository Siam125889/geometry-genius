function calcPrlArea() {
  const base = getInputValueById("prl-b");
  console.log(base);
  const height = getInputValueById("prl-h");
  console.log(height);
  const area = base * height;
  console.log(area);

  setInnerTextById("prl-area", area);
}
function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  //   console.log(inputValue);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
