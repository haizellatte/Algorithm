const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

  const number = b
    .toString()
    .split("")
    .reverse()
    .map((x) => a * x);

  number.forEach((x) => console.log(x));
  console.log(number[0] + number[1] * 10 + number[2] * 100);