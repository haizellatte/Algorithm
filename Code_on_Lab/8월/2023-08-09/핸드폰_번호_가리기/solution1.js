// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const e = phone_number.length - 4;
  const lastN = phone_number.substring(e, e + 4);
  const ChangeN = [...phone_number.substring(0, e)]
    .map((v) => "*")
    .join("");

  return ChangeN.concat(lastN);
}

console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // 	"*****8888"