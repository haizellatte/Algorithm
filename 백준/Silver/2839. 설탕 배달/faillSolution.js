/*
[문제 아이디어]
1. 현재 값이 5로 나누어 떨어지는 경우 5로 나눈 몫을 answer에 더한다.
2. 나눠 떨어지지 않은 경우 3을 빼고 +1씩 answer에 더한 다음, 5로 나누어 떨어지면 다시 1번을 수행한다.

*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let answer = 0;

while(input >= 0) {
    if(input%5 === 0) {
        input -= 5;
        answer += 1;
    } else {
        input -= 3;
        anser += 1;
    }
}

answer > 0 ? answer ? -1;

console.log(answer);
