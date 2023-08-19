// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const middle = s.length / 2;
  if (s.length % 2 === 1) {
    return s[middle - 0.5];
  } else {
    return s[middle - 1] + s[middle];
  }
}

console.log(solution("abcde")); // "c"
console.log(solution("qwer")); // "we"

// console.log(3 / 2); // 1.5
// console.log(5 / 2); // 2.5
// console.log(1385 / 2); // 2.5