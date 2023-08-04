// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q, r, code) {
  let result = "";
  for (let i = 0; i < code.length; i++) {
    if ( i % q === r) {
      result += code[i]
    }
  }
  return result;
}

console.log(solution(3, 1, "qjnwezgrpirldywt")); // "jerry"
console.log(solution(1, 0, "programmers")); // "programmers"