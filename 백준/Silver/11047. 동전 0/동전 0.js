// 그리디 알고리즘
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 동전의 가지수(n)과 만들어야할 금액(k)
let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

let total = 0;
// 가치가 큰 동전부터 확인하기 위해 뒤에서부터(n-1) 확인한다.
for (let i = n -1 ; i >= 0; i--) {
    // 해당 i번째 동전을 몇개 사용해야하는지 -> 즉 몫을 구해 total에 더해준다.
    total += parseInt(k / arr[i]);
    // 해당 동전으로 모두 거슬러 준 뒤 남은 금액
    k %= arr[i];
}
console.log(total);