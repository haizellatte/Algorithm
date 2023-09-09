// https://school.programmers.co.kr/learn/courses/30/lessons/181935

/*
* [조건]
1. n이 홀수라면 -> n 이하 홀수의 합
2.    짝수라면 -> n 이하 각 짝수의 제곱의 합 */


function calculator(n, answer, option) {
  for (let i = n; i > 0; i -= 2) {
    if (option === 'even') {
      answer += (i * i);
    } else {
      answer += i;
    }
  }
  return answer;
}

function solution(n) {
  let answer = 0;
  return n % 2 === 0 ? calculator(n, answer, 'even') : calculator(n, answer, 'odd');
}


console.log(solution(7)); // 16
console.log(solution(10)); // 220