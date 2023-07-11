// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string, is_prefix) {
  let prefix = "";

  for (let i = 0; i < my_string.length; i++) {
    prefix += my_string[i];
    if (prefix === is_prefix) {
      return 1;
    }
  }
  return 0;
}