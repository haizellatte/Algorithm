// https://school.programmers.co.kr/learn/courses/30/lessons/12947#

function solution(x) {
  const sumN = Array.from(String(x))
    .map(Number)
    .reduce((a, b) => a + b);
  
  return x % sumN === 0 ? true : false;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false