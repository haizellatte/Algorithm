// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  return Array.from(String(n)).map(Number).reverse();
}

console.log(solution(12345)); // [(5, 4, 3, 2, 1)]