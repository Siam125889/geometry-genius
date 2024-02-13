function CalcTrArea() {
  const trText = document.getElementById("tr-base").value;
  const base = parseFloat(trText);
  console.log(base);

  const trHeight = document.getElementById("tr-height").value;
  const height = parseFloat(trHeight);
  console.log(height);

  const area = 0.5 * base * height;
  console.log(area);

  //   display tr area
  document.getElementById("tr-area").innerText = area;
}
