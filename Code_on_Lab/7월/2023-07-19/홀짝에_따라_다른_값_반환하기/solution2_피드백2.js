// https://school.programmers.co.kr/learn/courses/30/lessons/181935

/*
* [조건]
1. n이 홀수라면 -> n 이하 홀수의 합
2.    짝수라면 -> n 이하 각 짝수의 제곱의 합 */


// 조건에 맞는 애들만 모아주는 일!


function filter(n) {
  const result = [];

  for (let i = n; i > 0; i -= 2) {
    result.push(i);
  }

  return result;
}

function add(a, b) {
  return a + b;
}

function calculator(n, f) {
  return filter(n).map(f).reduce(add);
}

function solution(n) {
  return n % 2 === 0
      ? calculator(n, x => x * x)
      : calculator(n, x => x);
}


console.log(solution(7)); // 16
console.log(solution(10)); // 220