function calcPtgArea() {
  const p = getInputValueById("ptg-p");
  console.log(p);
  const b = getInputValueById("ptg-b");
  console.log(b);

  const area = 0.5 * p * b;

  setInnerTextById("ptg-area", area);
}

function getElementById(getInputValueById) {
  const value = parseFloat(document.getElementById(getInputValueById).value);
  return value;
}

function setInnerTextById(elementId, area) {
  document.getElementById(elementId).innerText = area;
}
