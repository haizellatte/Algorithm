const fs = require("fs");
const [A, B, C] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (A === B && B === C) console.log(10000 + A * 1000);
else if (A === B || B === C) console.log(1000 + B * 100);
else console.log(C * 100);