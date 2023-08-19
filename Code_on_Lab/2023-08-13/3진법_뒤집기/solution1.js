// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  const a = [...n.toString(3)].reverse().join("");
  return parseInt(a, 3);
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229

console.log((45).toString(3));