// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
  const aByb = Number(String(a) + b);
  const bBya = Number(String(b) + a);

  return aByb > bBya ? aByb : bBya;
}

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898