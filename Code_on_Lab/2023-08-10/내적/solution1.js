// https://school.programmers.co.kr/learn/courses/30/lessons/70128

// zip 사용 가능

function solution(a, b) {
  return a.map((v, i) => v * b[i]).reduce((a, b) => a + b);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2