const fs = require("fs");
const [time, cook] = fs.readFileSync("/dev/stdin").toString().split("\n");
let [hour, minute] = time.split(' ').map(Number);

minute += Number(cook);

if(minute >= 60) {
  hour += Math.floor(minute / 60);
  minute %= 60;
  if (hour >= 24) {
    hour -= 24;
  }
}

console.log(hour + ' ' + minute);
