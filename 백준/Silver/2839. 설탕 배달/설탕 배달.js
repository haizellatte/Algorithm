/*
[문제 아이디어]
1. 현재 값이 5로 나누어 떨어지는 경우 5로 나눈 몫을 answer에 더한다.
2. 나눠 떨어지지 않은 경우 3을 빼고 +1씩 answer에 더한 다음, 5로 나누어 떨어지면 다시 1번을 수행한다.
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let cnt = 0;
// nkg을 만들 수 있는 판별하는 변수
let flag = false;

// while 문을 통해 더이상 반복할 수 없을 때까지 반복한다.
while (n >= 0) {
    // n이 0이 되었거나, 5로 나누어 떨어지는 값인 경우
    if (n === 0 || n % 5 === 0) {
        cnt += parseInt(n / 5); // 5로 나눈 몫을 더한다.
        console.log(cnt);
        flag = true; // nkg을 만들 수 있기 때문에 true로 바꿔준다.
        break;
    }
    // 5로 나눠지지 않는다면 -3을 해준다.
    n -= 3;
    cnt += 1;
}
// 만약 flag가 false일 경우 -1을 출력한다.
if (!flag) {
    console.log(-1);
}