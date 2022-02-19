// Printing Pyramid (RECURSION)

Pyra(1);

function Pyra(i) {
  if (i <= 5) {
    mid(1, i);
    return Pyra(i + 1);
  }
}

function mid(start, end) {
  if (start <= end) {
    console.log("*");
    return mid(start + 1, end);
  }
}
