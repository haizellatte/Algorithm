// https://school.programmers.co.kr/learn/courses/30/lessons/181865

const add = (a, b) => Number(a) + Number(b);
const minus = (a, b) => Number(a) - Number(b);
const multi = (a, b) => Number(a) * Number(b);

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  let sign = ["+", '-', '*'];
  const f = (op === sign[0]) ? add : (op === sign[1]) ? minus : multi;

  return f(a, b);
}

console.log(solution("43 + 12")); // 55
console.log(solution("0 - 7777")); // -7777
console.log(solution("40000 * 40000")); // 	1600000000