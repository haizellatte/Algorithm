// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr) {
  let a = arr.indexOf(2);
  let b = arr.lastIndexOf(2) + 1;
  
  return a !== -1 ? arr.slice(a, b) : [-1];
}

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]