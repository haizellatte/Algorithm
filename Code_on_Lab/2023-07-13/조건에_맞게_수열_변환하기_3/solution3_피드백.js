// https://school.programmers.co.kr/learn/courses/30/lessons/181835

// add, multi
function add(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

function arrAdd(arr, k) {
  return arr.map(el => add(el, k));
}

function arrMulti(arr, k) {
  return arr.map((el) => multi(el,  k));
}

function solution(arr, k) {
  const f = (k % 2 === 1) ? arrMulti : arrAdd;
  return f(arr, k);
}

console.log(solution([1, 2, 3, 100, 99, 98],	3)); // [3, 6, 9, 300, 297, 294]