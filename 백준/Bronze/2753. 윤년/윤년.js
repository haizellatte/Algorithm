const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");

const case1 = (n) => n % 4 === 0;
const case2 = (n) => n % 100 !== 0 || n % 400 === 0;

if (case1(input) && case2(input)) console.log(1);
else console.log(0);