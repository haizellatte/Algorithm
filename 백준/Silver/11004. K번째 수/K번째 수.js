const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
// 오름차순 정렬
arr.sort((a, b) => a - b);
// 인덱스가 0부터 시작하기 때문에 -1한 값을 출력
console.log(arr[k - 1]);