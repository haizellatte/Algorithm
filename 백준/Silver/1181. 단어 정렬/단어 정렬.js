const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = input.shift();

// 중복되는 값을 제거하는 Set 객체(new Set)를 사용해 집합으로 변환한 후, 
//--> 배열 형태로 전환(rest 또는 Array.from)
let arr = [...new Set(input)];

// 2순위) 사전 순서로 정렬
arr.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));

//1순위) 길이 순서로 정렬
arr.sort((a,b) => a.length - b.length);

console.log(arr.join("\n"));
