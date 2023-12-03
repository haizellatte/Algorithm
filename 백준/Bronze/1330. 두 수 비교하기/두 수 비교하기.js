const fs = require('fs')
const [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

if (a < b) console.log('<');
else if (a > b) console.log('>');
else console.log('==')