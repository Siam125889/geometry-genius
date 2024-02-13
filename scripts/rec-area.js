function calcRecArea() {
  const recLText = document.getElementById("rec-l").value;
  const l = parseFloat(recLText);
  console.log(l);

  const w = parseFloat(document.getElementById("rec-w").value);
  console.log(w);

  const area = l * w;
  console.log(area);

  //   display rec are  a

  const recArea = document.getElementById("rec-area");
  recArea.innerText = area;
}
