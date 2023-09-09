// https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, idx) => v * (idx + 1));
}

console.log(solution(2, 5)); // [2, 4, 6, 8, 10]
console.log(solution(4, 3)); // [4, 8, 12] 
console.log(solution(-4, 2)); // [-4, -8]