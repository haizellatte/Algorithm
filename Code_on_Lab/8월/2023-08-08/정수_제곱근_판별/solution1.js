// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  const num = Math.sqrt(n);
  return Number.isInteger(num) ? Math.pow(num + 1, 2) : -1;
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1