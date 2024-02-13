function calcElpArea() {
  const a = getElementById("elp-a");
  const b = getElementById("elp-b");
  const area = 3.14 * a * b;
  setInnerTextById("elp-area", area);
}
