// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const arr = s.split(" ").map(Number);
  const [a, b] = [Math.min(...arr), Math.max(...arr)];
  return `${a} ${b}`;
}

console.log(solution("1 2 3 4")); // "1 4"
console.log(solution("-1 -2 -3 -4")); // "-4 -1"