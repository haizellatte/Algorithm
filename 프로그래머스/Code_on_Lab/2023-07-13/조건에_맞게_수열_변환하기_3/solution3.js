// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function add(arr, k) {
  return arr.map((el) => (el + k));
}

function multi(arr, k) {
  return arr.map((el) => (el * k));
}

function solution(arr, k) {
  const f = (k % 2 === 1) ? multi : add;
  return f(arr, k);
}

console.log(solution([1, 2, 3, 100, 99, 98],	3)); // [3, 6, 9, 300, 297, 294]