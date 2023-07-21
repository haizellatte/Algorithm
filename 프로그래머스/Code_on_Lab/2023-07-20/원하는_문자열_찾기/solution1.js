// https://school.programmers.co.kr/learn/courses/30/lessons/181878

function solution(myString, pat) {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

console.log(solution("AbCdEfG", "aBc")); // 1
console.log(solution("aaAA", "aaaaa")); // 0