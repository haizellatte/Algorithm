// https://school.programmers.co.kr/learn/courses/30/lessons/181935

/*
* [조건]
1. n이 홀수라면 -> n 이하 홀수의 합
2.    짝수라면 -> n 이하 각 짝수의 제곱의 합 */

function add(a, b) {
  return a + b;
}

function filter(n, start) {
  const result = [];

  for (let i = start; i < n; i += 2) {
    result.push(i);
  }

  return result;
}

function solution(n) {
  let result = 0;

  if (n % 2 === 0) {
    result = filter(n + 1, 0).map(x => x * x).reduce(add);
  } else {
    result = filter(n + 1, 1).reduce(add);
  }

  return result;
}

console.log(solution(7)); // 16
console.log(solution(10)); // 220