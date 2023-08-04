// https://school.programmers.co.kr/learn/courses/30/lessons/181917

// 문제 : 다음 연산 (x1 ∨ x2) ∧ (x3 ∨ x4)에 따른 결과를 리턴하세요. 

function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4)
}

console.log(solution(false, true, true, true)); // true
console.log(solution(true, false, false, false)); // false