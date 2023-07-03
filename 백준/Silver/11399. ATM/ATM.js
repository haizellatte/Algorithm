// 그리디 알고리즘
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input.shift();
const arr = input[0].split(' ').map(Number).sort((a,b) => a-b);
//const arr = [...input].map(Number).sort((a, b) => a - b); // 오름차순 정렬 수행
//arr.sort((a, b) => a - b);

let time = 0; // 총 소요시간
let per = 0; // i번째 사람이 기다린 총 시간
for (let i = 0; i < n; i++) {
    per += arr[i];
    time += per; // 총 소요시간을 누적해서 더한다.
}
console.log(time);