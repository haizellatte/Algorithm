const fs = require("fs");
let [h, m] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

m -= 45;

if (m < 0) {
  m += 60;
  h--;

  if(h < 0) {
    h = 23;
  }
};

console.log(h + " " + m);