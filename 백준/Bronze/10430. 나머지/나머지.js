const fs = require("fs");
const [A, B, C] = fs.readFileSync("/dev/stdin").toString().split(' ').map(Number);

const result1 = (A+B)%C;
const result2 = ((A%C) + (B%C))%C;
const result3 = (A*B)%C;
const result4 = ((A%C) * (B%C))%C;

console.log(`${result1}\n${result2}\n${result3}\n${result4}`);