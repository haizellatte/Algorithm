/*
[문제 해결 아이디어]
S가 200인 경우 -> 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+29
즉 S에 따라 더할 수 있는 자연수의 갯수가 달라진다.
[방법]
1. 반복문을 통해 1부터 출발해 S값을 넘지 않을 때까지 누적해 값을 더해준다.
2. 누적 합이 S를 넘어가는 순간 반복문을 탈출한다.
3. 반복문을 탈출할 때 +1된 상태로 탈출했기 때문에, 현재 누적값에 -1을 하면 최종 횟수가 된다.
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let s = Number(input[0]);
let sum = 0;  // 누적합
let time = 0; // 증가하는 자연수의 값

while (sum <= s) {
    time++; // time: 1 -> 2 -> 3
    sum += time; //sum: 1+2+3
};

console.log(time - 1);
