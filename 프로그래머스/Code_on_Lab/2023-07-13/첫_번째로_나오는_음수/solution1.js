// https://school.programmers.co.kr/learn/courses/30/lessons/181896

function solution(num_list) {
  return num_list.findIndex(e => e < 0);
}

console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5 