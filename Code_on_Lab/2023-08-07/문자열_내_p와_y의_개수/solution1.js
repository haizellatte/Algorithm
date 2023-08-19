// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  const isP = [...s].filter((x) => x === "p" || x === "P");
  const isY = [...s].filter((x) => x === "y" || x === "Y");

  return isP.length === isY.length ? true : false;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false