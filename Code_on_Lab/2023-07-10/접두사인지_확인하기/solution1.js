// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string, is_prefix) {

  for (let i = 1; i < my_string.length; i++) {
    if (my_string(0, i) === is_prefix) {
      return 1;
    }
  }
  return 0;
}

console.log(solution("banana", "ban")); // 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "abcd")); // 0
console.log(solution("banana", "bananan")); // 0