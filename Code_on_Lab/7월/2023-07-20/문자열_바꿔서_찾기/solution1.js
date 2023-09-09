// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString, pat) {
  const newStr = [...myString].map((el) => el === "A" ? "B" : "A").join("");
  return (newStr.includes(pat)) ? 1 : 0;
}

console.log(solution("ABBAA", "AABB")); // 1
console.log(solution("ABAB", "ABAB")); // 0