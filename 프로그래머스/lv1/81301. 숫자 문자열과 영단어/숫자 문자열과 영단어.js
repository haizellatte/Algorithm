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
