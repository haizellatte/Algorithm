const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

  const number = b.toString().split("").map(Number).reverse();

  const temp = number.map((x) => a * x);
  temp.forEach((x) => console.log(x));
  console.log(temp[0] + temp[1] * 10 + temp[2] * 100);