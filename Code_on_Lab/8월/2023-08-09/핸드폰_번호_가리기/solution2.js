// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const e = phone_number.length - 4;
  return [...phone_number].fill("*", 0, e).join("");
}

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // 	"*****8888"