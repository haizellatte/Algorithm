// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const alphabet = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let result = "";
  let temp = "";
  
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) { // 문자인 경우
      temp += s[i];
      if (alphabet.includes(temp)) {
        result += alphabet.indexOf(temp);
        temp = "";
      }
    } else { // 숫자인 경우
      result += s[i];
    }
  }

  return Number(result);
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 123