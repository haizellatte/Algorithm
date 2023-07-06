// https://school.programmers.co.kr/learn/courses/30/lessons/181910

function solution(my_string, n) {
  return my_string.slice(my_string.length - n);
}

console.log(solution("ProgrammerS123", 11)) //	"grammerS123"