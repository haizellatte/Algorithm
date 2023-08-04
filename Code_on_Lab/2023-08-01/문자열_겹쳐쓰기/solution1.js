// https://school.programmers.co.kr/learn/courses/30/lessons/181943

// 문제 : my_string을 인데스 s부터 overwrite_string.length까지를 문자열 overwrite_string로 바꾸어 리턴하세요.

function solution(my_string, overwrite_string, s) {
  const str = [...my_string];
  const e = overwrite_string.length;
  str.splice(s, e, overwrite_string);

  return str.join("");
}

console.log(solution("He11oWor1d", "lloWorl", 2)); // "HelloWorld"
console.log(solution("Program29b8UYP", "merS123", 7)); // "ProgrammerS123"
