// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start, end) {
  let result = [];
  for (let i = end; i <= start; i++) {
    result.unshift(i);
  }
  return result;
}

console.log(solution(10, 3)); // [10, 9, 8, 7, 6, 5, 4, 3]
