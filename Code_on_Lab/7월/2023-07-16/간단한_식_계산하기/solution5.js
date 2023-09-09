// https://school.programmers.co.kr/learn/courses/30/lessons/181865

// 객체 이용하기

const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
}

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");

  return ops[op](Number(a), Number(b));
}

console.log(solution("43 + 12")); // 55
console.log(solution("0 - 7777")); // -7777
console.log(solution("40000 * 40000")); // 	1600000000