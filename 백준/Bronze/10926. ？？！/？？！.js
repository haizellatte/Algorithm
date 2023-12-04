const fs = require("fs");
//! trim()을 이용해 문자열 양 끝의 공백 제거
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(input + "??!");