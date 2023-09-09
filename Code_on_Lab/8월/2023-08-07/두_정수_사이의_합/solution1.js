// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  let result = 0;

  let s = a;
  let e = b;

  if (a > b) {
    s = e;
    e = a;
  }

  for (let i = s; i <= e; i++) {
    result += i;
  }

  return result;
}

console.log(solution(3, 5, 12)) // 12
console.log(solution(3, 3, 3)) // 3
console.log(solution(5, 3, 12)) // 12