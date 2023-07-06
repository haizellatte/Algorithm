/*
[문제 해결 아이디어]
! A -> B가 아닌, B -> A로 이동한다고 생각하자.
! B값은 정해져 있으르모 취할 수 있는 행동은 항상 정해져있다.
1) 값이 2로 나누어 떨어지는 경우 -> 2로 나누는 연산만 사용 가능
2) 그렇지 않고, 일의 자릿수가 1인 경우 -> 10으로 나누는 연산만 사용 가능
3) 두 경우에 모두 해당하지 않은 경우 -> 더 이상 이동이 불가능하므로, 종료한다.
-> 3가지 경우 외엔 다른 경우의 수가 존재하지 않는다.
=> 즉 매 상황에서 이동 경로가 단 하나만 존재하므로, 그리디 알고리즘에 해당한다.
*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(" ").map(Number);
// A -> B로 이동 가능 여부
let flag = false;
let result = 1;

while ( a <= b) {
    // b -> a로 도달할 경우 while 문은 종료된다.
    if (a === b) {
        flag = true;
        break;
    } 
    if (b % 2 === 0) b = parseInt(b / 2); // 1) 2로 나누어 떨어지는 경우 
    else if (b % 10 === 1) b = parseInt(b / 10); // 2) 그렇지 않고, 일의 자리수가 1인 경우
    else break; // 두 경우가 모두 해당하지 않은 경우 종료한다.
    result++;
}
flag ? console.log(result) : console.log(-1);




