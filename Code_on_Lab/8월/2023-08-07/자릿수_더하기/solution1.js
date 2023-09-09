// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return Array.from(String(n))
    .map(Number)
    .reduce((a, b) => a + b);
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24 