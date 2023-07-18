// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr, k) {
  return (k % 2 == 1) ? arr.map((el) => (el * k)) : arr.map((el) => (el + k))
}

console.log(solution([1, 2, 3, 100, 99, 98],	3)); // [3, 6, 9, 300, 297, 294]