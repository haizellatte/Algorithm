// https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string, is_suffix) {
  return my_string.slice(my_string.length - is_suffix.length) === is_suffix
    ? 1 : 0;
}

console.log(solution("banana", "ana")); // 1
console.log(solution("banana", "nan")); // 0