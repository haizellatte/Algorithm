const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = input.shift();

// 중복되는 값을 제거하는 Set 객체(new Set)
// Set 객체를 배열 형태로 전환(Array.from)
let arr = Array.from(new Set(input));

// 사전 순서로 정렬
arr.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));

// 길이 순서로 정렬
arr.sort((a,b) => a.length - b.length);

console.log(arr.join("\n"));