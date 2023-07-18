// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr, k) {
  let answer = [];
  if (k % 2 === 1) {
    answer = arr.map((el) => (el * k));
  } else {
    answer = arr.map((el) => (el + k));
  }
  return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98],	3)); // [3, 6, 9, 300, 297, 294]