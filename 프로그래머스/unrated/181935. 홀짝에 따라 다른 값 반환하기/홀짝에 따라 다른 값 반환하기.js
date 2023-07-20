/*
* [조건]
1. n이 홀수라면 -> n 이하 홀수의 합
2.    짝수라면 -> n 이하 각 짝수의 제곱의 합 */


function even(n, answer) {
    let temp = 0;
    for (let i = n; i > 0; i-=2) {
        temp = i * i;
        answer += temp;
    }
    return answer;
}

function odd(n, answer) {
    for (let i = n; i > 0; i-=2) {
        answer += i;
    }
    return answer;
}
 
function solution(n) {
    let answer = 0;
    const f = n % 2 === 0 ? even : odd;
    return f(n, answer);
}