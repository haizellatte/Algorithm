// https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  // return s.split("").sort().reverse().join("");

  // return Array.from(s).sort().reverse().join("");
  return [...s].sort().reverse().join("");
}

console.log(solution("Zbcdefg")); // "gfedcbZ"