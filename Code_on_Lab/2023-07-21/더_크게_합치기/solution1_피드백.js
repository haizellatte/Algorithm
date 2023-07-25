// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function f(...args) {
  return Number(args.map(String).reduce((a, b) => a + b));
}

function solution(a, b) {
  const aByb = f(a, b);
  const bBya = f(b, a);

  return aByb > bBya ? aByb : bBya;
}

console.log(solution(9, 91)); // 991
// console.log(solution(89, 8)); // 898