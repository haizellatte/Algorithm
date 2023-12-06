const fs = require("fs");
const filePath ="/dev/stdin";
const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(a+b+c);
