// https://school.programmers.co.kr/learn/courses/30/lessons/181873

function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

console.log(solution("programmers", "p")); // "Programmers"
console.log(solution("lowercase",	"x")); // "lowercase"