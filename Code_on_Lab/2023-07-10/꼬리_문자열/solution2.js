// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list, ex) {
  let result = str_list.filter((el) => !el.includes(ex)).join("");

  return result;
}